import { Component, OnInit } from '@angular/core';
import { on } from 'events';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:RecipeModel[] = [
    new RecipeModel(
      "Spaghetti alla chitarra",
      "Un particolare tipo di pasta che...",
      "https://images.lacucinaitaliana.it/wp-content/uploads/2020/06/03204258/Pasta-alla-chitarra-con-ragu-di-polo.jpg"
    ),
    new RecipeModel(
      "Lasagne alla bolognese",
      "Pasta italiana molto calorica sempre presente nei pranzi domenicali...",
      "https://www.ricettedellanonna.net/wp-content/uploads/2014/09/lasagne-al-ragu%CC%80.jpg"
    ),
    new RecipeModel(
      "Gnocchi al formaggio",
      "Gnocchi della Valle Varaita Bellino",
      "https://www.valverbe.it/wp-content/uploads/2020/04/Ricetta-facile-ravioles-della-Valle-Varaita-Bellino.jpg"
    ),
    new RecipeModel(
      "Tiramisù",
      "Tipico dolce italiano con mascarpone e caffé",
      "https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2014/07/Fotolia_39015733_Subscription_XL.jpg?w=580"
    )
  ]

  selectedRecipe: RecipeModel;

  constructor() { 
    this.selectedRecipe = this.recipes[0];
  }

  ngOnInit(): void {

  }

}
