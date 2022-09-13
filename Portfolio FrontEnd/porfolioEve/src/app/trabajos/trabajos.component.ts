import { Component, OnInit } from '@angular/core';
import { EditPortfolioComponent } from '../Modales/edit-portfolio/edit-portfolio.component'; 
import { EliminarComponent } from '../Modales/eliminar/eliminar.component';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
