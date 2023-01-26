import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Carrusel } from 'src/app/model/carrusel';
import { CarruselService } from 'src/app/servicios/carrusel.service';

@Component({
  selector: 'app-skill2',
  templateUrl: './skill2.component.html',
  styleUrls: ['./skill2.component.css']
})
export class Skill2Component implements OnInit {

  form:FormGroup;
  id: number;
  nombre: string;
  url: string;

  carrusel:Carrusel[]=[];

  constructor(private formBouilder: FormBuilder, private carruselS:CarruselService) {
    this.form= this.formBouilder.group({
      nombre:[''],
      url:['']
    })
   }

  ngOnInit(): void {
    this.cargarCarrusel();
  }
//Subir una nueva imagen
  onCreate(): void{
    const carrusel= new Carrusel(this.nombre, this.url);
    this.carruselS.create(carrusel).subscribe(data=>{alert("Carrusel añadido")
    window.location.reload();  
  } )
  }
  //Limpiar la pagina
  limpiar(): void{
    this.form.reset();
  }
//Eliminar una imagen
  delete(id: number): void{
    this.carruselS.delete(id).subscribe(data=>{
      alert("se pudo eliminar satisfactoriamente")
      this.cargarCarrusel();
    } )
  }
//Ver todas las imagenes
  cargarCarrusel():void{
    this.carruselS.list().subscribe(data => {this.carrusel=data});
  }
//Subir una nueva imagen
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
    }else{
      alert("Fallo en la carga.");
      this.form.markAllAsTouched();
    }
  }
  //Get de todos los datos que puede contener una imagen
  get Nombre(){
    return this.form.get("nombre");
  }
  get Url(){
    return this.form.get("url");
  }

}
