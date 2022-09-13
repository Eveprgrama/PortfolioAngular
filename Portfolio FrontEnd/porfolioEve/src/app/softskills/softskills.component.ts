import { Component, OnInit } from '@angular/core';
import { EditSoftComponent } from '../Modales/edit-soft/edit-soft.component'; 
import { EliminarComponent } from '../Modales/eliminar/eliminar.component';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css']
})
export class SoftskillsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
