import { Injectable } from '@angular/core';
import Student from '../models/student.model';
import StudentCreate from '../models/student-create.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  
  public getAll(): Observable<Student[]>{
    return this.httpClient.get<Student[]>('https://localhost:44367/Student');
  }
  public studentcreate(schoolCreate: StudentCreate) : Observable<Student> {
    return this.httpClient.post<Student>('https://localhost:44367/Student', schoolCreate);
  }
  public studentRemove(schoolId: number): Observable<any>{
    return this.httpClient.delete<any>('https://localhost:44367/Student/' + schoolId);
  }
}
