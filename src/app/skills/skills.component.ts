import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
/*import { PortafolioService } from "../servicios/portafolio.service";*/
import { SkillService } from '../servicios/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[]=[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {

    this.cargarSkill();

  }
//Cargar las Skills
  cargarSkill():void{
    this.skillService.list().subscribe(data=>{this.skills=data} );
  }

}
