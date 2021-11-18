import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  collapsed:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }


  OnSelect(feature:string){
    this.featureSelected.emit(feature);
  }

}
