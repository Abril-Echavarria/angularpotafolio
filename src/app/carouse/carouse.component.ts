import { Component, OnInit } from '@angular/core';
import { Carrusel } from '../model/carrusel';
import { CarruselService } from '../servicios/carrusel.service';
import { PortafolioService } from "../servicios/portafolio.service";

@Component({
  selector: 'app-carouse',
  templateUrl: './carouse.component.html',
  styleUrls: ['./carouse.component.css']
})
export class CarouseComponent implements OnInit {

  img: Carrusel[]=[];

  constructor(private carruselService: CarruselService) { }

  ngOnInit(): void {

    this.cargarCarrusel();
  
  }

  cargarCarrusel():void{
    this.carruselService.list().subscribe(data=>{this.img=data} );
  }

}
