import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortafolioService } from "../../servicios/portafolio.service";
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-sobremidb',
  templateUrl: './sobremidb.component.html',
  styleUrls: ['./sobremidb.component.css']
})
export class SobremidbComponent implements OnInit {

  
  personas: Persona []=[];

  constructor(private formBouilder: FormBuilder, private personaService: PersonaService) {

   }

  ngOnInit(): void {
   this.cargarPersona();
  }
//Ver la persona
 cargarPersona():void{
    this.personaService.list().subscribe(data =>{this.personas=data});  }
}
