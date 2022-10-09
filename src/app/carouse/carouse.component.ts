import { Component, OnInit } from '@angular/core';
import { PortafolioService } from "../servicios/portafolio.service";

@Component({
  selector: 'app-carouse',
  templateUrl: './carouse.component.html',
  styleUrls: ['./carouse.component.css']
})
export class CarouseComponent implements OnInit {

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
