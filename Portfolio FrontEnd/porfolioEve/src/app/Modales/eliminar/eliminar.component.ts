import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
