import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {  Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();

    private recipes:Recipe[]=[
        new Recipe('A Test 1 Recipe','This is simply to test',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg'
        ,[
            new Ingredient('Meat',2),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('A Test 2 Recipe',
        'This is simply to test',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg'
        ,[
            new Ingredient('Buns',2),
            new Ingredient('Meat',4)
        ])
    
      ];
      constructor(private slService:ShoppingListService){

      }
     getRecipes(){
         return this.recipes.slice();
     }
      getRecipe(index:number){
          return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
}