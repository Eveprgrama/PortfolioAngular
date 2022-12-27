import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editresume',
  templateUrl: './editresume.component.html',
  styleUrls: ['./editresume.component.css']
})
export class EditresumeComponent implements OnInit {
expLab : Experiencia = null;
  constructor(public router: Router, private sExperiencia: ExperienciaService, private activatedrouter: ActivatedRoute) {}

  ngOnInit(): void {
   const id = this.activatedrouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }
    )
  }
onUpdate(): void{
  const id = this.activatedrouter.snapshot.params['id'];
  this.sExperiencia.update(id, this.expLab).subscribe(
    data=>{
      window.location.reload();
    }
  )
}
  






}

