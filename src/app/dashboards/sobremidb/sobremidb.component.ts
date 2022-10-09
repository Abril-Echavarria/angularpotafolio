import { Component, OnInit } from '@angular/core';
import { PortafolioService } from "../../servicios/portafolio.service";

@Component({
  selector: 'app-sobremidb',
  templateUrl: './sobremidb.component.html',
  styleUrls: ['./sobremidb.component.css']
})
export class SobremidbComponent implements OnInit {

  img: any;

  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.getDatos().subscribe(datos=> {
      //console.log(datos);
      //this.infoPortafolio.uno;
      this.img=datos.carouse;
    })
  }

}
