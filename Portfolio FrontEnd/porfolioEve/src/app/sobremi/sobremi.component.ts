import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sobremi } from '../model/sobremi';
import { SobremiService } from '../service/sobremi.service';




@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  sobremi:Sobremi[] = [];

  constructor(private sobremiservice:SobremiService, public router: Router) { }

  ngOnInit(): void {
   this.cargarSobremi()
  }

  cargarSobremi():void{
    this.sobremiservice.lista().subscribe(data => 
      {this.sobremi = data;})}

}