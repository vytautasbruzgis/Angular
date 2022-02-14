import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';
import StudentCreate from 'src/app/models/student-create.model';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {

  @Output() studentCreateEvent = new EventEmitter<StudentCreate>();
  @Input() public schoolsInput : School [] = [];

  public studentCreate: StudentCreate = {
    firstName: 'Enter first name',
    lastName: 'Enter last name',
    schoolId: 0
  };
  constructor() { }

  ngOnInit(): void {
  }
  public createStudent(){
    this.studentCreateEvent.emit(this.studentCreate);
    this.studentCreate = {
      firstName: '',
      lastName: '',
      schoolId: 0
    }
  }
}
