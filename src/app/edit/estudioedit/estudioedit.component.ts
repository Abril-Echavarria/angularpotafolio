import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-estudioedit',
  templateUrl: './estudioedit.component.html',
  styleUrls: ['./estudioedit.component.css']
})
export class EstudioeditComponent implements OnInit {

  form: FormGroup;
  estudio: Estudio=null;

  constructor(private formBuilder: FormBuilder, 
    private estudioService: EstudioService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { 
      this.form= this.formBuilder.group({
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
    this.estudioService.detail(id).subscribe(data=>{
      this.estudio=data;
    } )
  }
//Guardar los cambios
  onUpdate():void{
    this.estudioService.update(this.form.value).subscribe(data=>{
      alert("Estudio modificado.");
      this.router.navigate(['']);
    } )
  }
//Guardar
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
    
      this.onUpdate();
    }else{
      alert("Fallo en la carga.");
      this.form.markAllAsTouched();
    }
  }
//Get de los datos que contienen los estudios
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
