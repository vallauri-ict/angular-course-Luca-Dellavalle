import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  constructor(
    public recipeService: RecipeService,
    private shoppingList: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ngxBootstrapConfirmService: NgxBootstrapConfirmService,
  ) { }

 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        // console.log(params);
        let recipeId = params['id'];
        this.recipeService.getRecipe(recipeId);
      }
    )
    // Sintassi alternativa
    // let recipeId = this.activatedRoute.snapshot.paramMap.get("id");
    // this.recipeService.getRecipe(recipeId);
  }

  sendToShoppingList = (): void => {
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  onDeleteRecipe() {
    /* 
      if(confirm("Are you sure to delete the recipe :"+ this.recipeService.selectedRecipe.name)) {
        this.recipeService.deleteRecipe(this.recipeService.selectedRecipe.id);
      }
    */
    

    console.log("cancellazione effettuata");
    this.recipeService.deleteRecipe(this.recipeService.selectedRecipe.id);

  }

  action() {
    let options ={
      title: 'Sure you want to delete this comment?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    }
    this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
      if (res) {
        console.log('Okay');
        this.onDeleteRecipe();
      } else {
        console.log('Cancel');
      }
    });
  }

}