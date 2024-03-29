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
//Crear una experiencia
  onCreate(): void{
    const expe = new Expe(this.titulo, this.descripcion, this.fechai, this.fechaf, this.img);
    this.expeService.create(expe).subscribe(data=>{
      alert("Experiencia añadida")
      window.location.reload();
  });
  }
//Limpiar la pagina
  limpiar(): void{
    this.form.reset();
  }
//Borrar una experiencia
  delete(id:number){
    this.expeService.delete(id).subscribe(data=>{
      alert("se pudo eliminar satisfactoriamente")
      this.cargarExpe();
    }  )
  }
//Ver todas las experiencia
  cargarExpe():void{
    this.expeService.list().subscribe(data => {this.experiencias=data});
  }
//Get de todos los datos que puede contener una experiencia
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

//Crear una experiencia
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
