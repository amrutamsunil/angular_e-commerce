import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit,OnDestroy,EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
subscription:Subscription;
editMode=false;
editItemIndex:number;
editedItem:Ingredient;

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription=this.slService.startedEditing
    .subscribe(
      (index:number)=>{
        this.editItemIndex=index;
          this.editMode=true;
          this.editedItem=this.slService.getIngredient(index);
          this.slForm.setValue({
            name:this.editedItem.name,
            amount:this.editedItem.amount
          });
      }
    );
  }
  onSubmit(form:NgForm){
    const value=form.value;
    const newIngrdient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slService.updateIngredients(this.editItemIndex,newIngrdient);
    }else{
    this.slService.addIngredient(newIngrdient);
    }
    this.editMode=false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.slService.deleteIngredients(this.editItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
