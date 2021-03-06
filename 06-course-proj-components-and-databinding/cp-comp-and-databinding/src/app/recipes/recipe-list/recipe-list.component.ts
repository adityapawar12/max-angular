import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter;
  recipes: Recipe[] = [
      new Recipe(
          "A test Recipe", 
          "This is simply a test recipe.", 
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
      ),
      new Recipe(
          "Another test Recipe", 
          "This is simply a test recipe.", 
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
      )
  ];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.recipes);
  }

  onRecipeSelected(recipe: Recipe) {
    // console.log(recipe)
    this.recipeWasSelected.emit(recipe);
  }

}
