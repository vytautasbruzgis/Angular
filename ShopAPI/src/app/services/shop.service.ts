import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Shop from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor (private httpClient: HttpClient) { }

  public getAllShops(): Observable<Shop[]>{
    return this.httpClient.get<Shop[]>("https://localhost:44380/");
  }
}
