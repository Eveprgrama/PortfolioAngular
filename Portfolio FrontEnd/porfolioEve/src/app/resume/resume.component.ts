import { Component, OnInit } from '@angular/core';
import { EditresumeComponent } from '../Modales/editresume/editresume.component';
import { EliminarComponent } from '../Modales/eliminar/eliminar.component';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
