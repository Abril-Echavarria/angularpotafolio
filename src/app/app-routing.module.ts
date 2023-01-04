import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarruseleditComponent } from './edit/carruseledit/carruseledit.component';
import { EditarComponent } from './edit/editar/editar.component';
import { EstudioeditComponent } from './edit/estudioedit/estudioedit.component';
import { ExpeeditComponent } from './edit/expeedit/expeedit.component';
import { ProyeceditComponent } from './edit/proyecedit/proyecedit.component';
import { SkilleditComponent } from './edit/skilledit/skilledit.component';
import { ErrorComponent } from './error/error.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  {path:"principal", component:PrincipalComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"", redirectTo:"/principal", pathMatch:"full"},
   {path:"dashboard/persona/:id", component:EditarComponent},
   {path:"dashboard/carrusel/:id", component:CarruseleditComponent},
   {path:"dashboard/estudio/:id", component:EstudioeditComponent},
   {path:"dashboard/experiencia/:id", component:ExpeeditComponent},
   {path:"dashboard/proyecto/:id", component:ProyeceditComponent},
   {path:"dashboard/skill/:id", component:SkilleditComponent},
  {path:"**", component:ErrorComponent}
 
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
