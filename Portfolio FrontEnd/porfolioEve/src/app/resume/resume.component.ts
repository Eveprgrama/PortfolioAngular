import { Component, OnInit } from '@angular/core';
import { EditresumeComponent } from '../Modales/editresume/editresume.component';
import { EliminarComponent } from '../Modales/eliminar/eliminar.component';
import * as AOS from 'aos';
import { PortfolioService } from '../Servicios/portfolio.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  educacion:any=[];
  trabajo:any=[];

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(portfolio => {
      console.log(portfolio);
      this.educacion = portfolio.educacion;
      this.trabajo = portfolio.trabajo;
     });
  }

}
