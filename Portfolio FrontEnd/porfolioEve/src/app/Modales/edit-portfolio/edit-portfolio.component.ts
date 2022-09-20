import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
