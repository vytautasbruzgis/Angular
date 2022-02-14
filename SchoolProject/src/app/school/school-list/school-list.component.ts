import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import School from 'src/app/models/school.model';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  constructor() { }
  @Input() schoolsInput: School[] = [];
  @Output() schoolRemoveEvent = new EventEmitter<number>();

  ngOnInit(): void {
  }
  public schoolRemove(schoolId: number){
    this.schoolRemoveEvent.emit(schoolId)
  }

}
