import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';


@Component({
  selector: 'app-fotomia',
  templateUrl: './foto.mia.component.html',
  styleUrls: ['./foto.mia.component.css']
})
export class FotoMiaComponent implements OnInit {
  //Aqui podes poner datos puntuales nombre="Abril"

  info: any;
  
  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.getDatos().subscribe(datos=> {
      console.log(datos);
      //this.infoPortafolio.uno;
      this.info=datos.fotomia
    })
  }

}
