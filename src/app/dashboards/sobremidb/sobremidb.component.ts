import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortafolioService } from "../../servicios/portafolio.service";
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-sobremidb',
  templateUrl: './sobremidb.component.html',
  styleUrls: ['./sobremidb.component.css']
})
export class SobremidbComponent implements OnInit {

  
  personas: Persona []=[];

  constructor(private formBouilder: FormBuilder, private personaService: PersonaService) {

   }

  ngOnInit(): void {
   this.cargarPersona();
  }

  /* onCreate(): void{
    const persona= new Persona(this.nombre,this.apellido, this.edad, this.sobremi, this.mini, this.foto);
    this.personaService.create(persona).subscribe(data=>{alert("Persona añadido")
    window.location.reload();  
  } )
  }
*/
 cargarPersona():void{
    this.personaService.list().subscribe(data =>{this.personas=data});  }


   /* onEnviar(event:Event){
      event.preventDefault;
      if(this.form.valid){
        this.onEnviar();
      }else{
        alert("Fallo en la carga.");
        this.form.markAllAsTouched();
      }
    }

    onUpdate():void{
      this.personaService.update(this.form.value).subscribe(data=>{
        alert("Persona modificada.");
      } )
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
    }*/
}
