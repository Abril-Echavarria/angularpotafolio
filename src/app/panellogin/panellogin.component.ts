import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-panellogin',
  templateUrl: './panellogin.component.html',
  styleUrls: ['./panellogin.component.css']
})
export class PanelloginComponent implements OnInit {
  form:FormGroup;

  constructor(private formbuilder:FormBuilder, private autenticacionS:AutenticacionService, private router:Router) {
    this.form=this.formbuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        clave:['',[Validators.required,Validators.minLength(8)]]
      }
    )
   }

  ngOnInit(): void {
  }

  get Email(){
       return this.form.get('email');
      }
    
    get Clave(){
      return this.form.get('clave');
    }



    onEnviar(event:Event){
      event.preventDefault;
      this.autenticacionS.loginPersona(this.form.value).subscribe(data=>{
        console.log('DATA'+ JSON.stringify(data)); 
        this.router.navigate(['/dashboard'])
      }); 
    } 
}
