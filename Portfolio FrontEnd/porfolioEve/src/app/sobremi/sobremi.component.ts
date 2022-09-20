import { Component, OnInit } from '@angular/core';
import { EditSobremiComponent } from '../Modales/edit-sobremi/edit-sobremi.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
