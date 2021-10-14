import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Luca Dellavalle 5B INFO 2021/22';
  
  studentList = [
    {name:'Ettore Esposito', hobby:'Karate', gender:'M', isPro: false},
    {name:'Luca Pellissero',hobby:'paddle',gender:'M', isPro: false},
    {name:'Luca Dellavalle',hobby:'volley',gender:'M', isPro: false},
    {name:'Bianca Teleman', hobby:'Karate', gender:'F', isPro: false},
    {name:'Giada Valinotto',hobby:'paddle',gender:'F', isPro: false},
    {name:'Samuele De Toffol',hobby:'volley',gender:'M', isPro: false},
    {name:'Gabriele Leone', hobby:'Karate', gender:'M', isPro: false},
    {name:'Martina Velardi',hobby:'paddle',gender:'F', isPro: false},
    {name:'Alberto Savoldelli',hobby:'volley',gender:'M', isPro: false},
    {name:'Sara Pignata',hobby:'paddle',gender:'F', isPro: false},
  ]
}
