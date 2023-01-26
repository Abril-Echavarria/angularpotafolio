import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuarioAuth: boolean= false;

  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser') == "null") {
      this.usuarioAuth = false;        
    } else if (sessionStorage.getItem('currentUser') == null){
        this.usuarioAuth = false;       
    }else{
        this.usuarioAuth = true;      
    }
  }

  closeSession(){
    sessionStorage.removeItem("currentUser");
    window.location.reload();
  }

}
