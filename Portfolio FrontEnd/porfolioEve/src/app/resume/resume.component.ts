import { Component, OnInit } from '@angular/core';
import { EditresumeComponent } from '../Modales/editresume/editresume.component';
import { EliminarComponent } from '../Modales/eliminar/eliminar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
