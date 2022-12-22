import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona: Persona = new Persona("","","","");
  //inicializar variables de instancia
// img : string = ""; esto es para el json


  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
   
 //si fuera un array iria ej habilidades: Habilidad[]=[];
//este comando trae datos del porfolio
   /* this.portfolioService.obtenerDatos().subscribe(portfolio => {*/
    
      
    
  }
  cargarPersona():void{
    this.personaService.getPersona().subscribe(data => 
      {this.persona = data;})}
  //ts para scroll del botón al footer
  scrollToElement(selector:any) {
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({behavior: "smooth"}): null;

    //para el get persona del backend 
    //el suscribe es un metodo que escucha siempre que el observable haga un cambio
    
  }

}


