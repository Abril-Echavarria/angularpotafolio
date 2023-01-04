import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarComponent } from './editar/editar.component';
import { ErrorComponent } from './error/error.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  {path:"principal", component:PrincipalComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"", redirectTo:"/principal", pathMatch:"full"},
   {path:"dashboard/persona/:id", component:EditarComponent},
  {path:"**", component:ErrorComponent}
 
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
