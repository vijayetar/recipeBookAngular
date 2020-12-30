import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeChosen: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  showSelectedRecipeDetail(recipeChosen: Recipe){
    console.log("recipe detail chosen in the parent component "+ recipeChosen);
    this.recipeChosen = recipeChosen;
  }

}
