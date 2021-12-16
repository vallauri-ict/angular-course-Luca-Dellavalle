import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { on } from 'events';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

//import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipesSelectedInList = new EventEmitter<RecipeModel>()
  
  constructor(public recipeService:RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe:RecipeModel){
      this.recipesSelectedInList.emit(recipe);
  }
}
