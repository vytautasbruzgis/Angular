import { Component, OnInit } from '@angular/core';
import School from 'src/app/models/school.model';
import Student from 'src/app/models/student.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.scss']
})
export class AlldataComponent implements OnInit {

  public schools: School[] = [];
  public students: Student[] = [];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.getAll().subscribe(
      (schoolData) => {
        this.schools = schoolData;
        console.log(this.schools);
      }
    )
  }

}
