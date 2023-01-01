import { Component, OnInit } from '@angular/core';
import { Expe } from '../model/expe';
import { ExpeService } from '../servicios/expe.service';
/* import { PortafolioService } from "../servicios/portafolio.service";*/

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Expe[]=[];

  constructor(private expeService: ExpeService) { }

  ngOnInit(): void {

    this.cargarExpe();
    
  }

    cargarExpe():void{
      this.expeService.list().subscribe(data =>{this.experiencias=data});
    }

}
