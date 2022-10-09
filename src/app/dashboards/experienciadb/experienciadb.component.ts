import { Component, OnInit } from '@angular/core';
import { PortafolioService } from "../../servicios/portafolio.service";

@Component({
  selector: 'app-experienciadb',
  templateUrl: './experienciadb.component.html',
  styleUrls: ['./experienciadb.component.css']
})
export class ExperienciadbComponent implements OnInit {

  expe: any;
  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.getDatos().subscribe(datos=> {
      //console.log(datos);
      //this.infoPortafolio.uno;
      this.expe=datos.experiencia;
    })
  }

}
