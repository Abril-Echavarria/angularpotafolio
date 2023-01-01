import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url='http://localhost:8080/persona/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public create(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }

  public update(persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + 'borrar/${{id}}')
  }

}