
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Injectable } from '@angular/core';
//import { BehaviorSubject, map, Observable } from 'rxjs';

//@Injectable({
//  providedIn: 'root'
//})
//export class AutenticacionService {
 // url='http://localhost:8080/autenticacion/login'
 // currentUserSubject:BehaviorSubject<any>
  //sessionStorage: any;

  //constructor(private http:HttpClient) { 
  //  this.currentUserSubject=new
  //  BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  //}

  //loginPersona(credenciales:any):Observable<any>{
  //  console.log(credenciales);
  //  var httpOptions = {
  //    Headers: new HttpHeaders({
  //      'content-Type' : 'aplication/json'
   //   } ),
   // }
   // return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data =>{
    //  sessionStorage.setItem('currentUser',JSON.stringify(data));
    //  this.currentUserSubject.next(data);
    //  console.log("aut service esta corriendo"+ JSON.stringify(data));
    //  return data;
    //} ))
  //}

 // get usuarioAutenticado(){
  //  return this.currentUserSubject.value;
  //}
//}


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url='http://localhost:8080/persona/autenticacion/login';
  currentUserSubject:BehaviorSubject<any>;
  //sessionStorage: any;

  constructor(private http:HttpClient){
    console.log("AutenticacionS funciona")
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
    
  }
//loginPersona(credenciales:any):Observable<any>{ 
  //console.log(credenciales);
  //var httpOptions = {                
   // headers: new HttpHeaders({
  //  'Content-Type' : 'application/json'
  //  }),
  //        }
 // return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
 //   sessionStorage.setItem('currentUser', JSON.stringify(data));
 //   this.currentUserSubject.next(data);
  //  console.log("Service esta corriendo "+ JSON.stringify(data));
  //  return data;
  //      }));
//}


loginPersona(credenciales:any):Observable<any>
{
  return this.http.post(this.url, credenciales).pipe(
    map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    })
  )
}

  get usuarioAutenticado() {
    
    return this.currentUserSubject.value;
  }

}