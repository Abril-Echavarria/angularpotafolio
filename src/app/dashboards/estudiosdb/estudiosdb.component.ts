import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { PortafolioService } from "../../servicios/portafolio.service";

@Component({
  selector: 'app-estudiosdb',
  templateUrl: './estudiosdb.component.html',
  styleUrls: ['./estudiosdb.component.css']
})
export class EstudiosdbComponent implements OnInit {

  form:FormGroup;
  id!: number;
  titulo: string='';
  descripcion: string='';
  fechai: string='';
  fechaf: string='';
  img: string=''
  estudios: Estudio[]=[];

  constructor(private formBouilder: FormBuilder,private estudioService: EstudioService) { 
    this.form= this.formBouilder.group({
      titulo:['',[Validators.required] ],
      descripcion:[''],
      fechai:[''],
      fechaf:[''],
      img:['']
    })
  }

  ngOnInit(): void {
    this.cargarEstudio();
  }

  onCreate(): void{
    const estudio= new Estudio(this.titulo,this.descripcion, this.fechai, this.fechaf, this.img);
    this.estudioService.create(estudio).subscribe(data=>{alert("Estudio añadido")
    window.location.reload();  
  } )
  }
  limpiar(): void{
    this.form.reset();
  }
  delete(id: number): void{
    this.estudioService.delete(id).subscribe(data=>{
      this.cargarEstudio();
    } )
  }

  cargarEstudio():void{
    this.estudioService.list().subscribe(data => {this.estudios=data});
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
    }else{
      alert("Fallo en la carga.");
      this.form.markAllAsTouched();
    }
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
