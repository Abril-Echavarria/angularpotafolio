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
import { PanelloginComponent } from './panellogin/panellogin.component';
import { PrincipalComponent } from './principal/principal.component';
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [
  {path:"principal", component:PrincipalComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[GuardGuard]},
  {path:"", redirectTo:"/principal", pathMatch:"full"},
  {path:"login", component:PanelloginComponent},
   {path:"dashboard/persona/:id", component:EditarComponent,canActivate:[GuardGuard]},
   {path:"dashboard/carrusel/:id", component:CarruseleditComponent, canActivate:[GuardGuard]},
   {path:"dashboard/estudio/:id", component:EstudioeditComponent, canActivate:[GuardGuard]},
   {path:"dashboard/experiencia/:id", component:ExpeeditComponent, canActivate:[GuardGuard]},
   {path:"dashboard/proyecto/:id", component:ProyeceditComponent, canActivate:[GuardGuard]},
   {path:"dashboard/skill/:id", component:SkilleditComponent, canActivate:[GuardGuard]},
  {path:"**", component:ErrorComponent}
 
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
