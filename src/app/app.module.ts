import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PortafolioService } from './servicios/portafolio.service';

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
    SkillsdbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
