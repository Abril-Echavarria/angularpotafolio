import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { PortafolioService } from "../../servicios/portafolio.service";

@Component({
  selector: 'app-skillsdb',
  templateUrl: './skillsdb.component.html',
  styleUrls: ['./skillsdb.component.css']
})
export class SkillsdbComponent implements OnInit {

  form:FormGroup;
  id!: number;
  nombre: string='';
  numero: 0=0;

  skill: Skill[]=[];

  constructor(private skillS: SkillService, private formBouilder: FormBuilder) { 
    this.form= this.formBouilder.group({
      nombre:['',[Validators.required] ],
      numero:['',[Validators.required, Validators.min(0), Validators.max(100)]]
    })
  }

  ngOnInit(): void {

  }

  onCreate(): void{
    const skill= new Skill(this.nombre,this.numero);
    this.skillS.create(skill).subscribe(data=>{alert("Skill añadido")
    window.location.reload();  
  } )
  }

  cargarSkill():void{
    this.skillS.list().subscribe(data => {this.skill=data});
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

  limpiar(): void{
    this.form.reset();
  }
  delete(id: number): void{
    this.skillS.delete(id).subscribe(data=>{
      this.cargarSkill();
    } )
  }


  get Nombre(){
    return this.form.get("nombre");
  }

  get Numero(){
    return this.form.get("numero");
  }

  get NombreValid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get NumeroValid(){
    return this.Numero?.touched && !this.Numero?.valid;
  }


}
