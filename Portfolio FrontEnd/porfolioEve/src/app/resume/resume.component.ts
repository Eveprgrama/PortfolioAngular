import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../service/experiencia.service';
import { Experiencia } from '../model/experiencia';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  expe: Experiencia[] = [];
  educacion:any=[];
  trabajo:any=[];

  constructor(private sExperiencia: ExperienciaService, public router: Router, activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    
    /*this.portfolioService.obtenerDatos().subscribe(portfolio => {
      console.log(portfolio);
      this.educacion = portfolio.educacion;
      this.trabajo = portfolio.trabajo;
     });*/
  }
cargarExperiencia(): void{
  this.sExperiencia.lista().subscribe(
    data => {this.expe = data;} );
}



delete(id:number){
  if(id !=undefined){
    this.sExperiencia.delete(id).subscribe(
      data=>{
        this.cargarExperiencia();
        window.location.reload();
      }, err => {
        alert ("failed to delete component")
        window.location.reload();
      }
    )
  }
}



}
