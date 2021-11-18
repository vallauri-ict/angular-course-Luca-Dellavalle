import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY-RECIPES';
  loadedFeatuer:string = 'recipes';
  onNavigate(feature:string){
    this.loadedFeatuer = feature;
  }
}
