import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expe } from 'src/app/model/expe';
import { ExpeService } from 'src/app/servicios/expe.service';

@Component({
  selector: 'app-expeedit',
  templateUrl: './expeedit.component.html',
  styleUrls: ['./expeedit.component.css']
})
export class ExpeeditComponent implements OnInit {
  form: FormGroup;
  expe: Expe=null;

  constructor(private formBouilder: FormBuilder, 
              private expeService: ExpeService,              
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
    this.expeService.detail(id).subscribe(data=>{
      this.expe=data;
    } )
  }

  onUpdate():void{
    this.expeService.update(this.form.value).subscribe(data=>{
      alert("Estudio modificado.");
      this.router.navigate(['']);
    } )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
    
      this.onUpdate();
    }else{
      alert("Fallo en la carga.");
      this.form.markAllAsTouched();
    }
  }

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
