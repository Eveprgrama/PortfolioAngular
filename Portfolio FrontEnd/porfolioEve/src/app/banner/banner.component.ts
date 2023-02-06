import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona: Persona [] = [];
  //inicializar variables de instancia
// img : string = ""; esto es para el json


  constructor(public personaService: PersonaService, public router: Router) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona():void{
    this.personaService.lista().subscribe(data => 
      {this.persona = data;})}


  //ts para scroll del botón al footer
  scrollToElement(selector:any) {
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({behavior: "smooth"}): null;

 
    
  }

}


