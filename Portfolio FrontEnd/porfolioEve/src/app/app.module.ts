import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './redes/redes.component';
import { LoginComponent } from './Modales/login/login.component';
import { BannerComponent } from './banner/banner.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ResumeComponent } from './resume/resume.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { SoftskillsComponent } from './softskills/softskills.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/Error.component';
import { IndexComponent } from './index/index.component';
import { NavbardashboardComponent } from './dashboard/navbardashboard/navbardashboard.component';
import { EditBannerComponent } from './Modales/edit-banner/edit-banner.component';
import { EditSobremiComponent } from './Modales/edit-sobremi/edit-sobremi.component';
import { EditresumeComponent } from './Modales/editresume/editresume.component';
import { EliminarComponent } from './Modales/eliminar/eliminar.component';
import { EditHardskillsComponent } from './Modales/edit-hardskills/edit-hardskills.component';
import { EditSoftComponent } from './Modales/edit-soft/edit-soft.component';
import { EditPortfolioComponent } from './Modales/edit-portfolio/edit-portfolio.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [				
    AppComponent,
    NavbarComponent,
    RedesComponent,
    LoginComponent,
    BannerComponent,
    SobremiComponent,
    ResumeComponent,
    HardSkillsComponent,
    SoftskillsComponent,
    TrabajosComponent,
    FooterComponent,
      DashboardComponent,
      ErrorComponent,
      IndexComponent,
      NavbardashboardComponent,
      EditBannerComponent,
      EditSobremiComponent,
      EditresumeComponent,
      EliminarComponent,
      EditHardskillsComponent,
      EditSoftComponent,
      EditPortfolioComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
