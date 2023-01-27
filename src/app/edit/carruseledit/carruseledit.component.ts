import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrusel } from 'src/app/model/carrusel';
import { CarruselService } from 'src/app/servicios/carrusel.service';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-carruseledit',
  templateUrl: './carruseledit.component.html',
  styleUrls: ['./carruseledit.component.css']
})
export class CarruseleditComponent implements OnInit {
  form: FormGroup;
  carru:Carrusel=null

  constructor(private formBuilder: FormBuilder,
              private carruselS:CarruselService,
              private activatedRoute: ActivatedRoute,
              private router:Router) { 
                this.form= this.formBuilder.group({
                  id:[''],
                  nombre:[''],
                  url:['']
                })
              }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.carruselS.detail(id).subscribe(data=>{
      this.carru=data;
    } )
  }
//Ver los datos de una imagen
  cargarCarrusel():void{
    this.carruselS.detail(1).subscribe(data=>{
      this.carru=data
    })
  }
//Guardar
  onUpdate():void{
    this.carruselS.update(this.form.value).subscribe(data=>{
      alert("Carrusel modificada.");
      this.router.navigate(['']);
    } )
  }
//Guardar cambios
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onUpdate();
    }else{
      alert("Fallo en la carga.");
      this.form.markAllAsTouched();
    }
  }
//Get de todos los datos que contienen las imagenes
  get Id(){
    return this.form.get("id");
  }

  get nombre(){
    return this.form.get("nombre");
  }

  get url(){
    return this.form.get("url");
  }

}
