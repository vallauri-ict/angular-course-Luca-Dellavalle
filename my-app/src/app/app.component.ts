import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  @ViewChild("#txtName") txtName!: ElementRef;

  title = 'Luca Dellavalle 5B INFO 2021/22';

  
  studentRepository = [
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
  
  hobbies=['Karate','Paddle','Volley','Tennis','Soccer','Basket'];
  studentList: any[] = [];
  studentName:string = "";
  studentGender:string ="F";
  studentHobbie:string ="";

  constructor(){
    for (let index = 0; index < 4; index++) {
      let num = Math.floor(Math.random() *  this.studentRepository.length);
      let tempStudent:any = this.studentRepository[num];
      this.studentList.push(tempStudent);
      this.studentRepository.splice(num,1);
    }
  }

  onAddStudent(){
    let newStudent={
      name:this.studentName,
      hobby:this.studentHobbie,
      gender:this.studentGender,
      isPro: false
    };
    this.studentList.push(newStudent);
    this.studentName = "";
    this.txtName.nativeElement.focus();
  };

  onDeleteStudent(index:number){
    this.studentList.splice(index,1);
  }

  onStudentDeleteEvent(student: any){
    //alert("da cancellare " + student.name);
    let index: number = this.studentList.indexOf(student);
    this.studentList.splice(index,1);
  }
}
