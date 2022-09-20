import { Component, OnInit } from '@angular/core';
import { EditBannerComponent } from '../Modales/edit-banner/edit-banner.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(selector:any) {
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({behavior: "smooth"}): null;
  }

}


