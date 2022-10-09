import { Component, OnInit } from '@angular/core';
import { PortafolioService } from "../../servicios/portafolio.service";

@Component({
  selector: 'app-estudiosdb',
  templateUrl: './estudiosdb.component.html',
  styleUrls: ['./estudiosdb.component.css']
})
export class EstudiosdbComponent implements OnInit {

  estudios: any;
  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.getDatos().subscribe(datos=> {
      //console.log(datos);
      //this.infoPortafolio.uno;
      this.estudios=datos.educacion;
    })
  }

}
