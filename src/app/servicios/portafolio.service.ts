import { Injectable } from '@angular/core';
//Para unir al Json
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  //A seguir uniendolo, el primer http en alias,
  constructor(private http:HttpClient) { }

  getDatos():Observable<any> {
    return  this.http.get('./assets/json/datos.json')
  }
}
