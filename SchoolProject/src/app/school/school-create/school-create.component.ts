import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import SchoolCreate from '../../models/school-create.model';

@Component({
  selector: 'app-school-create',
  templateUrl: './school-create.component.html',
  styleUrls: ['./school-create.component.scss']
})
export class SchoolCreateComponent implements OnInit {
  
  @Output() schoolCreateEvent = new EventEmitter<SchoolCreate>();
  
  public schoolCreate: SchoolCreate = {
    name: 'Enter school name'
  };

  constructor() { }

  ngOnInit(): void {
  }

  public createSchool(){
    this.schoolCreateEvent.emit(this.schoolCreate);
  }

}
