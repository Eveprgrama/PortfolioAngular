import { Component, OnInit } from '@angular/core';
import { EditHardskillsComponent } from '../Modales/edit-hardskills/edit-hardskills.component';
import { EliminarComponent } from '../Modales/eliminar/eliminar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
