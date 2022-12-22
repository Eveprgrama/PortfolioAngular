import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
 Persona: Persona = new Persona ("","","","");
  constructor(public router: Router, private activatedRouter: ActivatedRoute, private Personaservice: PersonaService) { }

  ngOnInit(): void {
   /* const id = this.activatedRouter.snapshot.params['id'];
    this.Personaservice.detail(id).subscribe(
      data =>{
        this.Persona = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )*/
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Personaservice.update(id, this.Persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )

  }
  uploadImage($event:any){

  }
}

