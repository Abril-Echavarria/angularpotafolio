import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expe } from 'src/app/model/expe';
import { ExpeService } from 'src/app/servicios/expe.service';
import { NgModule } from "@angular/core";

/* import { PortafolioService } from "../../servicios/portafolio.service";*/

@Component({
  selector: 'app-experienciadb',
  templateUrl: './experienciadb.component.html',
  styleUrls: ['./experienciadb.component.css']
})
export class ExperienciadbComponent implements OnInit {

  form:FormGroup;
  id?: number;
  titulo: string='';
  descripcion: string='';
  fechai: string='';
  fechaf: string='';
  img: string='';

  experiencias: Expe[]=[];

 
  constructor(private formBouilder: FormBuilder, private expeService: ExpeService) { 

    this.form= this.formBouilder.group({
      titulo:['',[Validators.required]],
      descripcion:[''],
      fechai:[''],
      fechaf:[''],
      img:['']
    })

  }

  ngOnInit(): void {

    this.cargarExpe();
    
  }

  onCreate(): void{
    const expe = new Expe(this.titulo, this.descripcion, this.fechai, this.fechaf, this.img);
    this.expeService.create(expe).subscribe(data=>{alert("Experiencia añadida")
      window.location.reload();
  });
  }

  limpiar(): void{
    this.form.reset();
  }
  delete(id:number){
    this.expeService.delete(id).subscribe(data=>{
      this.cargarExpe();
    }, err=>{
      alert("no se pudo eliminar la experiencia")
    }  )
  }

  cargarExpe():void{
    this.expeService.list().subscribe(data => {this.experiencias=data});
  }







  get Titulo(){
    return this.form.get("titulo");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  get Fecha(){
    return this.form.get("fecha");
  }

  get Img(){
    return this.form.get("img");
  }

  get tituloValid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get descripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  get fechaValid(){
    return this.Fecha?.touched && !this.Fecha?.valid;
  }

  get imgValid(){
    return this.Img?.touched && !this.Img?.valid;
  }


  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
