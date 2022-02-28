import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import newPointList from '../models/new_pointlist.model';
import PointListCreate from '../models/pointlist-create.model';

@Injectable({
  providedIn: 'root'
})
export class PointlistService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<newPointList[]> {
    return this.httpClient.get<newPointList[]>('https://localhost:44304/pointlist');
  }
  public get(id: number): Observable<newPointList> {
    return this.httpClient.get<newPointList>(`https://localhost:44304/pointlist/${id}`);
  }
  public delete(id: number): Observable<any> {
     return this.httpClient.delete<any>(`https://localhost:44304/pointlist/${id}`);
  }
  // public create(pointListCreate: PointListCreate): Observable<newPointList> {
  //   return this.httpClient.put<PointListCreate>('https://localhost:44304/pointlist');
  // }
}
