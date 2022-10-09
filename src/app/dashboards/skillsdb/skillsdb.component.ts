import { Component, OnInit } from '@angular/core';
import { PortafolioService } from "../../servicios/portafolio.service";

@Component({
  selector: 'app-skillsdb',
  templateUrl: './skillsdb.component.html',
  styleUrls: ['./skillsdb.component.css']
})
export class SkillsdbComponent implements OnInit {

  skill: any;

  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.getDatos().subscribe(datos=> {
      //console.log(datos);
      //this.infoPortafolio.uno;
      this.skill=datos.skills;
    })
  }

}
