import { RecipeService } from './../../recipe.services';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe:Recipe;
@Input() index: number;


  ngOnInit(): void {
  }
  

}
