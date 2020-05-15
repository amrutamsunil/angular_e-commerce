import { Ingredient } from 'src/app/shared/ingredient.model';
export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingredient[];
    constructor(name:string,desc:string,img:string,ingredients:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=img;
        this.ingredients=ingredients;
    }
}