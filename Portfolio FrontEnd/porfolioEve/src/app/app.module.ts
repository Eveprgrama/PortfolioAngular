import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
