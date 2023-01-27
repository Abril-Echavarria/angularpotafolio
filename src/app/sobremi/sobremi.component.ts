import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  personas: Persona[]=[]

  ngOnInit(): void {
    this.cargarPersona();
  }
//Cargar los datos
  cargarPersona():void{
    this.personaService.list().subscribe(data =>{this.personas=data});  }

}
