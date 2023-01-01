import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  url='http://localhost:8080/estudios/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.url + 'lista')
  }

  public create(estudio: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear',estudio);
  }

  public update(estudio: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', estudio);
  }

  public delete(id: number) : Observable<any>{
    return this.httpClient.delete<any>(this.url + 'borrar/${id} ');
  }

}
