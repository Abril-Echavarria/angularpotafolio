import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-botonlogout',
  templateUrl: './botonlogout.component.html',
  styleUrls: ['./botonlogout.component.css']
})
export class BotonlogoutComponent implements OnInit {

  persona: any;

  constructor(private ruta: Router ,private personaService: PersonaService) {

   }

  ngOnInit(): void {    

  }



}
