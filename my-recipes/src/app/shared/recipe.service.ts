import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RecipeModel } from './../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel;

  constructor(private dataStorageService: DataStorageService, private router:Router) { }

  getRecipes() {
    this.dataStorageService.sendGetRequest('recipes').subscribe(
      data => {
        // console.log(data);
        this.recipes = data as RecipeModel[];
        // this.selectedRecipe = this.recipes[0];
      },
      error => {
        console.error(error);
      }
    )
  }

  getRecipe(index: any) {
    this.dataStorageService.sendGetRequest('recipes/' + index).subscribe(
      data => {
        this.selectedRecipe = data as RecipeModel;
      },
      error => {
        console.error(error);
      }
    )
  }
  postRecipe(recipe:RecipeModel){
    this.dataStorageService.sendPostRequest('recipes',recipe).subscribe(
      data => {
        this.getRecipes();  
      },
      error => {
        console.log(error);
      }
    );
  }
  patchRecipe(recipeId: any, recipe:RecipeModel){
    this.dataStorageService.sendPatchRequest('recipes/' + recipeId, recipe).subscribe(
      data => {
        this.router.navigate(['/recipes',recipeId]);
      },
      error => {
        console.error(error);
      }
    )
  }

  deleteRecipe(recipeId: any){
    this.dataStorageService.sendDeleteRequest('recipes/' + recipeId).subscribe(
      data =>{
        alert("Recipe deleted")
        this.getRecipes();
        this.router.navigate(['/recipes']);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
