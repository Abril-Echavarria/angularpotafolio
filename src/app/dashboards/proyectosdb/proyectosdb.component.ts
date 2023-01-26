import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
/*import { PortafolioService } from "../../servicios/portafolio.service";*/

@Component({
  selector: 'app-proyectosdb',
  templateUrl: './proyectosdb.component.html',
  styleUrls: ['./proyectosdb.component.css']
})
export class ProyectosdbComponent implements OnInit {

  form:FormGroup;
  id!: number;
  titulo: string='';
  descripcion: string='';
  fechai: string='';
  fechaf: string='';
  img: string=''

  proyectos: Proyecto[]=[];
  
  constructor(private proyectoS: ProyectoService, private formBouilder: FormBuilder) {
    this.form= this.formBouilder.group({
      titulo:['',[Validators.required] ],
      descripcion:[''],
      fechai:[''],
      fechaf:[''],
      img:['']
    })
   }

  ngOnInit(): void {
    this.cargarProyecto();
  }
//Crear un nuevo proyecto
  onCreate(): void{
    const proyecto= new Proyecto(this.titulo, this.descripcion, this.fechai, this.fechaf, this.img);
    this.proyectoS.create(proyecto).subscribe(data=>{alert("Proyecto añadido")
    window.location.reload();
  })
  }
//Limpiar la pagina
  limpiar(): void{
    this.form.reset();
  }
//Eliminar un proyecto
  delete(id: number): void{
    this.proyectoS.delete(id).subscribe(data=>{
      this.cargarProyecto();
      alert("se pudo eliminar satisfactoriamente")
    } )
  }
//Ver los proyectos
  cargarProyecto():void{
    this.proyectoS.list().subscribe(data => {this.proyectos=data});
  }
//crear un proyecto
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
    }else{
      alert("Fallo en la carga.");
      this.form.markAllAsTouched();
    }
  }
//Get de todos los datos que puede contener un proyecto
  get Titulo(){
    return this.form.get("titulo");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  get Fechaf(){
    return this.form.get("fechaf");
  }

  get Fechai(){
    return this.form.get("fechai");
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

  get fechaiValid(){
    return this.Fechai?.touched && !this.Fechai?.valid;
  }

  get fechafValid(){
    return this.Fechaf?.touched && !this.Fechaf?.valid;
  }

  get imgValid(){
    return this.Img?.touched && !this.Img?.valid;
  }
}
