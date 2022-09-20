import { Component, OnInit } from '@angular/core';
import { EditPortfolioComponent } from '../Modales/edit-portfolio/edit-portfolio.component'; 
import { EliminarComponent } from '../Modales/eliminar/eliminar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
    AOS.init();
  }

}
