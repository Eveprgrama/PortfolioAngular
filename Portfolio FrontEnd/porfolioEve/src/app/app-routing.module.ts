import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { EditSobremiComponent } from './Modales/edit-sobremi/edit-sobremi.component';
import { EditresumeComponent } from './Modales/editresume/editresume.component';

const routes: Routes = [
  {path:"index", component:IndexComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"editexp/:id", component:EditresumeComponent},
  {path: "editsobremi/:id", component:EditSobremiComponent},
  {path:"", redirectTo: "/index", pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
