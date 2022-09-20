import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-editresume',
  templateUrl: './editresume.component.html',
  styleUrls: ['./editresume.component.css']
})
export class EditresumeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
