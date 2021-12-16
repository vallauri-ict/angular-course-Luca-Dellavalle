import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { on } from 'events';
import { RecipeModel } from 'src/app/models/recipe.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
//import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipesSelectedInList = new EventEmitter<RecipeModel>()
  
  recipes:RecipeModel[] = [];
  selectedRecipe: RecipeModel;

  constructor(private dataStorageService:DataStorageService) {}

  ngOnInit(): void {
    this.dataStorageService.sendGetRequest('recipes')
    .subscribe(data =>{
      //console.log(data);
      this.recipes = data as RecipeModel[];
      this.selectedRecipe = this.recipes[0];
    })
  }

  onRecipeSelected(recipe:RecipeModel){
      this.recipesSelectedInList.emit(recipe);
  }
}
