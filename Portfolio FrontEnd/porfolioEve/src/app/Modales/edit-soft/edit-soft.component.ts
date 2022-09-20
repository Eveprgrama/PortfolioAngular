import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-edit-soft',
  templateUrl: './edit-soft.component.html',
  styleUrls: ['./edit-soft.component.css']
})
export class EditSoftComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
