import { Component, OnInit } from '@angular/core';
import { EditSoftComponent } from '../Modales/edit-soft/edit-soft.component'; 
import { PortfolioService } from '../Servicios/portfolio.service';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css']
})
export class SoftskillsComponent implements OnInit {
  habilidadesuno:any;
  habilidadesdos:any;

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(portfolio => {
      console.log(portfolio);
      this.habilidadesuno = portfolio.softuno;
      this.habilidadesdos = portfolio.softdos;
     });
  }

}
