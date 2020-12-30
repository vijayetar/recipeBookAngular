import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes:Recipe[] = [new Recipe('A Test Recipe', 'a simple test', 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'), new Recipe('A Test Recipe', 'a simple test', 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')];
  constructor() { }

  ngOnInit(): void {
    this.recipes;
  }
  showRecipeDetail(recipeDetailToShow:Recipe){
    console.log('recipe Detail Shown: '+ recipeDetailToShow);
    this.recipeWasSelected.emit(recipeDetailToShow);
  }

}
