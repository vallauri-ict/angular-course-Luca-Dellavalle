import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student:any ;
  @Output() studenteDeleteEvent = new EventEmitter<any>();
  constructor() { 
  }

  private randomStudent(){
    let num = Math.floor(Math.random() * 2);
    if(num == 1){
      this.student.isPro = true;
    }
  }
  //formload
  ngOnInit(): void {
    this.randomStudent();
  }

  onStudentClick(){
    this.student.isPro = !this.student.isPro;
  }

  onDeleteStudent(index:number){
    this.studenteDeleteEvent.emit(this.student);
  }

}
