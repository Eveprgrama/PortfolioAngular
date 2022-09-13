import { Component, OnInit } from '@angular/core';
import { EditSobremiComponent } from '../Modales/edit-sobremi/edit-sobremi.component';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
