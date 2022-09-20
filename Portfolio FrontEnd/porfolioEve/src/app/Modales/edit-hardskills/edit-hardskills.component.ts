import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-edit-hardskills',
  templateUrl: './edit-hardskills.component.html',
  styleUrls: ['./edit-hardskills.component.css']
})
export class EditHardskillsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
