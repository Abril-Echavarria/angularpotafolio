import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../model/persona';
import { PersonaService } from '../../servicios/persona.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  perso:Persona=null;

  constructor(private formBuilder: FormBuilder, 
              private personaService: PersonaService,
              private activatedRoute: ActivatedRoute,
              private router:Router) { 

                this.form= this.formBuilder.group({
                  id:[''],
                  nombre:[''],
                  apellido: [''],
                  edad: [''],
                  sobremi:[''],
                  mini:[''],
                  foto:[''],
                  email:[''],
                  clave:['']
            
                })
              }

  ngOnInit(): void {
   const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data=>{
      this.perso=data;
    } )
  }
//Ver la persona
  cargarPersona():void{
    this.personaService.detail(1).subscribe(data=>{
      this.perso=data
    })
  }
//Guardar cambios
  onUpdate():void{
    this.personaService.update(this.form.value).subscribe(data=>{
      alert("Persona modificada.");
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
//Get de todos los datos que contiene la persona
  get Id(){
    return this.form.get("id");
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Apellido(){
    return this.form.get("apellido");
  }

  get Edad(){
    return this.form.get("edad");
  }
  get Sobremi(){
    return this.form.get("sobremi");
  }
  get Mini(){
    return this.form.get("mini");
  }
  get img(){
    return this.form.get("img");
 }

 get email(){
  return this.form.get("email");
}

get clave(){
  return this.form.get("clave");
}

}
