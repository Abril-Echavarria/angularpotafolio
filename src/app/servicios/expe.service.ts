import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expe } from '../model/expe';

@Injectable({
  providedIn: 'root'
})
export class ExpeService {
  url='http://localhost:8080/experiencia/'
  constructor(private httpClient:HttpClient) { }


  public list(): Observable<Expe[]>{
    return this.httpClient.get<Expe[]>(this.url +'lista');
  }
/*
  public detail(id: number): Observable<Expe>{
    return this.httpClient.get<Expe>(this.url + 'detail/${id}');
  }
  */

  public create(experiencia: Expe): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  public update(experiencia: Expe): Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', experiencia);
  }

  public delete(id: number) :Observable<any>{
    return this.httpClient.delete<any>(this.url + 'borrar/${id}');
  }

}
