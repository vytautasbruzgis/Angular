import { Injectable } from '@angular/core';
import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import School from '../models/school.model';
import SchoolCreate from '../models/school-create.model';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<School[]>{
    return this.httpClient.get<School[]>('https://localhost:44367/School');
  }
  public create(schoolCreate: SchoolCreate) : Observable<School> {
    return this.httpClient.post<School>('https://localhost:44367/School', schoolCreate);
  }
  public schoolRemove(schoolId: number): Observable<any>{
    return this.httpClient.delete<any>('https://localhost:44367/School/' + schoolId);
  }
}
