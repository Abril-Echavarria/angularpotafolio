import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrusel } from '../model/carrusel';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  url='http://localhost:8080/carrusel/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Carrusel[]>{
    return this.httpClient.get<Carrusel[]>(this.url + 'lista');
  }

  public create(carrusel: Carrusel): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', carrusel);
  }

  public update (carrusel: Carrusel): Observable<any>{
    return this.httpClient.put<any>(this.url  + 'update', carrusel);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  public detail(id: number): Observable<Carrusel>{
    return this.httpClient.get<Carrusel>(this.url +  `ver/${id}`);
  }

}
