import { Component, OnInit } from '@angular/core';
import { PortafolioService } from "../servicios/portafolio.service";

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: any=[];

  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {

    this.portafolioService.getDatos().subscribe(datos=> {
      //console.log(datos);
      //this.infoPortafolio.uno;
      this.estudios=datos.educacion;
    })
  }

}
