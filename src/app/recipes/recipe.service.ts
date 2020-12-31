import { Recipe } from './recipes-list/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
  // manage recipes first
  // get the recipe emitter here
  recipeSelected = new EventEmitter <Recipe> ();
  private recipes:Recipe[] = [new Recipe('First Recipe', 'a simple test', 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'), new Recipe('Second Recipe', 'a simple test', 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')];

  getRecipes(){
    // the slice means that a copy of the array is returned rather than the actual array
    return this.recipes.slice();
  }
}
