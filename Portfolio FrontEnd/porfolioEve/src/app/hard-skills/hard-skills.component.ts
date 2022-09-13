import { Component, OnInit } from '@angular/core';
import { EditHardskillsComponent } from '../Modales/edit-hardskills/edit-hardskills.component';
import { EliminarComponent } from '../Modales/eliminar/eliminar.component';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
