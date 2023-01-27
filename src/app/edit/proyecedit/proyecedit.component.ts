import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyecedit',
  templateUrl: './proyecedit.component.html',
  styleUrls: ['./proyecedit.component.css']
})
export class ProyeceditComponent implements OnInit {
  form: FormGroup;
  proyec: Proyecto=null;

  constructor(private proyectoS: ProyectoService, 
              private formBouilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router:Router) {
                this.form= this.formBouilder.group({
                  id:[''],
                  titulo:['',[Validators.required] ],
                  descripcion:[''],
                  fechai:[''],
                  fechaf:[''],
                  img:['']
                })
               }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(data=>{
      this.proyec=data;
    } )
  }
//Guardar
  onUpdate():void{
    this.proyectoS.update(this.form.value).subscribe(data=>{
      alert("Proyecto modificado.");
      this.router.navigate(['']);
    } )
  }
//Guardar los cambios
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onUpdate();
    }else{
      alert("Fallo en la carga.");
      this.form.markAllAsTouched();
    }
  }
//Get de los datos que contienen las experiencias
  get Id(){
    return this.form.get("id");
  }

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

}
