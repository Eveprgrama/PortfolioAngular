import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { EditBannerComponent } from './Modales/edit-banner/edit-banner.component';
import { EditEstudiosComponent } from './Modales/edit-estudios/edit-estudios/edit-estudios.component';
import { EditHardskillsComponent } from './Modales/edit-hardskills/edit-hardskills.component';
import { EditSobremiComponent } from './Modales/edit-sobremi/edit-sobremi.component';
import { EditresumeComponent } from './Modales/editresume/editresume.component';

const routes: Routes = [
  {path:"index", component:IndexComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"editexp/:id", component:EditresumeComponent},
  {path: "editsobremi/:id", component:EditSobremiComponent},
  {path: "editestu/:id", component:EditEstudiosComponent},
  {path: "editbanner/:id", component: EditBannerComponent},
  {path: "edithardskills/:id", component: EditHardskillsComponent},
  {path:"", redirectTo: "/index", pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
