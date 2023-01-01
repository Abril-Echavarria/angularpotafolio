import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url='http://localhost:8080/skill/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.url + 'lista');
  }

  public create(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', skill);
  }

  public update(skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + 'borrar/${id}');
  }

}
