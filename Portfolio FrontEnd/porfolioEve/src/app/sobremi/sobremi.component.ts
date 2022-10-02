import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../Servicios/portfolio.service';



@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  texto1: string = "";
  texto2: string = "";
  imagen: string = "";

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(portfolio => {
      //definir informacion a mostrar
      console.log(portfolio);
       this.texto1 = portfolio.sobremi.texto1;
       this.texto2 = portfolio.sobremi.texto2;
       this.imagen = portfolio.sobremi.imagen;
     })
  }

}
