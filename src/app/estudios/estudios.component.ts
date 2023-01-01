import { Component, OnInit } from '@angular/core';
import { Estudio } from '../model/estudio';
import { EstudioService } from '../servicios/estudio.service';
/*import { PortafolioService } from "../servicios/portafolio.service";*/

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: Estudio[]=[]

  constructor(private estudioService: EstudioService) { }

  ngOnInit(): void {
    this.cargarEstudio();
  }

  cargarEstudio(): void{
    this.estudioService.list().subscribe(data=>(this.estudios=data));
  }

}
