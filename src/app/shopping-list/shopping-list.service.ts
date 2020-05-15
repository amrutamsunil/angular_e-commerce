import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditing=new Subject<number>();
    private ingredients:Ingredient[]=[
        new Ingredient('Apples',10),
        new Ingredient('Bannana',8)
      ];
      getIngredients(){
          return this.ingredients.slice(); //Slice is used to send a copy of the ingredients instead of element reference
      }
      getIngredient(index:number){
          return this.ingredients[index];
      }
      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredients:Ingredient[]){
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      updateIngredients(index:number,newIngredient:Ingredient){
          this.ingredients[index]=newIngredient;
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      deleteIngredients(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}