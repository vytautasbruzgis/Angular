import { Injectable } from '@angular/core';
import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import School from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<School[]>{
    return this.httpClient.get<School[]>('https://localhost:44367/School');
  }
}
