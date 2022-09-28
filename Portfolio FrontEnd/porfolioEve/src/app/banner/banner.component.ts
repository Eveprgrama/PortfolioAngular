import { Component, OnInit } from '@angular/core';
import { EditBannerComponent } from '../Modales/edit-banner/edit-banner.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioService } from '../Servicios/portfolio.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //inicializar variables de instancia
 nombre: string = "";
 apellido: string = "";
 titulo: string = "";
 img : string = ""


  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(portfolio => {
     //definir informacion a mostrar
     console.log(portfolio);
      this.nombre = portfolio.nombre;
      this.apellido = portfolio.apellido;
      this.titulo = portfolio.banner.titulo;
      this.img = portfolio.banner.img;
    })
  }
  //ts para scroll del botón al footer
  scrollToElement(selector:any) {
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({behavior: "smooth"}): null;
  }

}


