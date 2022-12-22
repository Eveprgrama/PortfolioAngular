import { Component, OnInit } from '@angular/core';
import { EditPortfolioComponent } from '../Modales/edit-portfolio/edit-portfolio.component'; 
import * as AOS from 'aos';
import { PortfolioService } from '../Servicios/portfolio.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
  worklist:any;

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void{
    this.portfolioService.obtenerDatos().subscribe(portfolio => {
      console.log(portfolio);
      this.worklist = portfolio.trabajos;
     });
  }

}
