import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-skilledit',
  templateUrl: './skilledit.component.html',
  styleUrls: ['./skilledit.component.css']
})
export class SkilleditComponent implements OnInit {
  form: FormGroup;
  skill: Skill=null;

  constructor(private skillS: SkillService, 
    private formBouilder: FormBuilder,               
    private activatedRoute: ActivatedRoute,
    private router:Router) { 
      this.form= this.formBouilder.group({
        id:[''],
        nombre:['',[Validators.required] ],
        numero:['']
      })
    }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillS.detail(id).subscribe(data=>{
      this.skill=data;
    } )
  }
//Guardar
  onUpdate():void{
    this.skillS.update(this.form.value).subscribe(data=>{
      alert("Skill modificado.");
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

  get Nombre(){
    return this.form.get("nombre");
  }

  get Numero(){
    return this.form.get("numero");
  }

  

}
