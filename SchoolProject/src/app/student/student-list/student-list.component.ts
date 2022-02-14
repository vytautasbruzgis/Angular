import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Student from 'src/app/models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() studentsInput: Student[] = [];
  @Output() studentRemoveEvent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public studentRemove(studentId: number){
    this.studentRemoveEvent.emit(studentId);
  }

}
