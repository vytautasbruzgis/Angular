import { Component, OnInit } from '@angular/core';
import School from 'src/app/models/school.model';
import SchoolCreate from 'src/app/models/school-create.model';
import Student from 'src/app/models/student.model';
import { SchoolService } from 'src/app/services/school.service';
import { StudentService } from 'src/app/services/student.service';
import StudentCreate from 'src/app/models/student-create.model';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.scss']
})
export class AlldataComponent implements OnInit {

  public schools: School[] = [];
  public students: Student[] = [];

  constructor(private schoolService: SchoolService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.schoolService.getAll().subscribe(
      (schoolData) => {
        this.schools = schoolData;
        console.log(this.schools);
      }
    );
    this.studentService.getAll().subscribe(
      (result) => {this.students = result},
      (error) => {console.log(error)}
    );
  }

  public createSchool(schoolCreate: SchoolCreate): void {
    this.schoolService.create(schoolCreate).subscribe((result) => {
      this.schools.push(result);
    }, (error) => {
      console.log(error);
    });
  }

  public schoolRemove(schoolId: number): void {
    this.schoolService.schoolRemove(schoolId).subscribe(
      (result) => {
          this.schools = this.schools.filter(x => Number(x.id) !== schoolId);
          this.students = this.students.filter(x => Number(x.schoolId) != schoolId);
          let studArr = [];
          for (let i = 0; i < this.students.length; i++) {
            if((Number(this.students[i].schoolId))!== schoolId)
              studArr.push(this.students[i]);//cia palikau netyciom du variantus
          }
          this.students = studArr;
      }, 
      (error) => {
        console.log(error);
      }
    );
  }
  
  public studentRemove(studentId:number): void {
    this.studentService.studentRemove(studentId).subscribe(
      (result) => {
        this.students = this.students.filter(x => x.id != studentId)
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

  public createStudent(studentCreate: StudentCreate): void {
    this.studentService.studentcreate(studentCreate).subscribe(
        (result) => {
          this.studentService.getAll().subscribe((result) => {this.students = result});
        },
        (error) => {console.log(error);}
      );
  }

}
