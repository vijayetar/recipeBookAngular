import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() recipeItemDetailFired = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  showRecipeDetail(recipeSelected: Recipe){
    console.log(recipeSelected);
    this.recipeItemDetailFired.emit(recipeSelected);
  }

}
