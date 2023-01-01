import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../servicios/persona.service';
/*import { PortafolioService } from '../servicios/portafolio.service';*/


@Component({
  selector: 'app-fotomia',
  templateUrl: './foto.mia.component.html',
  styleUrls: ['./foto.mia.component.css']
})
export class FotoMiaComponent implements OnInit {
  //Aqui podes poner datos puntuales nombre="Abril"

 personas: Persona[]=[];
  
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {

    this.cargarPersona();

  }

  cargarPersona():void{
    this.personaService.list().subscribe(data =>{this.personas=data});  }

}
