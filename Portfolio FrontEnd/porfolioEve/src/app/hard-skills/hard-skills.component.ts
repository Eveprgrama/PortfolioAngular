import { Component, OnInit } from '@angular/core';
import { EditHardskillsComponent } from '../Modales/edit-hardskills/edit-hardskills.component';
import { EliminarComponent } from '../Modales/eliminar/eliminar.component';
import * as AOS from 'aos';
import { PortfolioService } from '../Servicios/portfolio.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  porcentaje:any;

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    AOS.init()
    this.portfolioService.obtenerDatos().subscribe(portfolio => {
      console.log(portfolio);
      this.porcentaje = portfolio.porcentajes;
     });
  }

}
