import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes: Routes =[
  {path:"principal", component:PrincipalComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"", redirectTo:"/principal", pathMatch:"full"},
  {path:"persona/:id", component:EditarComponent},
  {path:"**", component:ErrorComponent}
 
]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modal/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { CarouseComponent } from './carouse/carouse.component';
import { FotoMiaComponent } from './foto.mia/foto.mia.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbardashComponent } from './navbardash/navbardash.component';
import { BotonloginComponent } from './botonlogin/botonlogin.component';
import { BotonlogoutComponent } from './botonlogout/botonlogout.component';
import { SobremidbComponent } from './dashboards/sobremidb/sobremidb.component';
import { ListadbComponent } from './dashboards/listadb/listadb.component';
import { ExperienciadbComponent } from './dashboards/experienciadb/experienciadb.component';
import { EstudiosdbComponent } from './dashboards/estudiosdb/estudiosdb.component';
import { ProyectosdbComponent } from './dashboards/proyectosdb/proyectosdb.component';
import { SkillsdbComponent } from './dashboards/skillsdb/skillsdb.component';
import { Skill2Component } from './dashboards/skill2/skill2.component';

import { EditarComponent } from './edit/editar/editar.component';
import { Routes } from '@angular/router';
import { CarruseleditComponent } from './edit/carruseledit/carruseledit.component';
import { EstudioeditComponent } from './edit/estudioedit/estudioedit.component';
import { ExpeeditComponent } from './edit/expeedit/expeedit.component';
import { ProyeceditComponent } from './edit/proyecedit/proyecedit.component';
import { SkilleditComponent } from './edit/skilledit/skilledit.component';
import { PersonaService } from './servicios/persona.service';
import { InterceptorService } from './servicios/interceptor.service';
import { PanelloginComponent } from './panellogin/panellogin.component';
import { BotondashComponent } from './botondash/botondash.component';
import { BotonindexComponent } from './botonindex/botonindex.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    CarouseComponent,
    FotoMiaComponent,
    SobremiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    DashboardComponent,
    ErrorComponent,
    ContactoComponent,
    PrincipalComponent,
    NavbardashComponent,
    BotonloginComponent,
    BotonlogoutComponent,
    SobremidbComponent,
    ListadbComponent,
    ExperienciadbComponent,
    EstudiosdbComponent,
    ProyectosdbComponent,
    SkillsdbComponent,
    Skill2Component,
    EditarComponent,
    CarruseleditComponent,
    EstudioeditComponent,
    ExpeeditComponent,
    ProyeceditComponent,
    SkilleditComponent,
    PanelloginComponent,
    BotondashComponent,
    BotonindexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PersonaService,{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
