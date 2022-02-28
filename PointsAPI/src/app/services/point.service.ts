import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import PointCreate from '../models/point-create.model';
import Point from '../models/point.model';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  constructor(private httpClient: HttpClient) { }

  public createNewPoint(pointCreate: PointCreate): Observable<Point>{
    return this.httpClient.post<Point>('https://localhost:44304/point', pointCreate);
  }
}
