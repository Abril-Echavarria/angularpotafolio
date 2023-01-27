import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';
/*import { PortafolioService } from "../servicios/portafolio.service";*/

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[]=[];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {

    this.cargarProyec();

  }
//Cargar los proyectos
  cargarProyec(): void{
    this.proyectoService.list().subscribe(data =>{this.proyectos=data} )
  }

}
