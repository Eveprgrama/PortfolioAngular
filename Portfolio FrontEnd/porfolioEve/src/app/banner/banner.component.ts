import { Component, OnInit } from '@angular/core';
import { EditBannerComponent } from '../Modales/edit-banner/edit-banner.component';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
function navigateSection(): any {
  const element = document.getElementById('footer') as HTMLElement;
  element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
}