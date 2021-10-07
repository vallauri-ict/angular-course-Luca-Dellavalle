import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList = [
    {name:'Ettore Esposito', hobby:'Karate', gender:'M'},
    {name:'Luca Pellissero',hobby:'paddle',gender:'M'},
    {name:'Luca Dellavalle',hobby:'volley',gender:'M'},
    {name:'Bianca Teleman', hobby:'Karate', gender:'F'},
    {name:'Giada Valinotto',hobby:'paddle',gender:'F'},
    {name:'Samuele De Toffol',hobby:'volley',gender:'M'},
    {name:'Gabriele Leone', hobby:'Karate', gender:'M'},
    {name:'Martina Velardi',hobby:'paddle',gender:'F'},
    {name:'Alberto Savoldelli',hobby:'volley',gender:'M'},
    {name:'Sara Pignata',hobby:'paddle',gender:'F'},
  ]
  student: any;
  
  constructor() { 
    this.randomStudent();
  }

  private randomStudent(){
    let num = Math.floor(Math.random()*this.studentList.length);
    this.student = this.studentList[num];
  }

  ngOnInit(): void {
  }
  onStudentClick(){
    this.randomStudent();
  }

}
