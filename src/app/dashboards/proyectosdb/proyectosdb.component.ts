import { Component, OnInit } from '@angular/core';
import { PortafolioService } from "../../servicios/portafolio.service";

@Component({
  selector: 'app-proyectosdb',
  templateUrl: './proyectosdb.component.html',
  styleUrls: ['./proyectosdb.component.css']
})
export class ProyectosdbComponent implements OnInit {

  proyecto: any;
  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.getDatos().subscribe(datos=> {
      //console.log(datos);
      //this.infoPortafolio.uno;
      this.proyecto=datos.proyectos;
    })
  }

}
