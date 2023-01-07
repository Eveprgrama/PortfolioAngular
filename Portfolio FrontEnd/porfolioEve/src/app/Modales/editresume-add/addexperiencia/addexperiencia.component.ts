import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addexperiencia',
  templateUrl: './addexperiencia.component.html',
  styleUrls: ['./addexperiencia.component.css']
})
export class AddexperienciaComponent implements OnInit {
  form: FormGroup;
  nombreE:'';
  descripcionE:'';
  inicio:'';
  fin:'';
  localidad:'';
  img:'';
  public formcontrol: FormControl;



  constructor(public router: Router, private sExperiencia: ExperienciaService, private FormBuilder: FormBuilder) { 
    this.form= this.FormBuilder.group({
      nombreE:['', [Validators.required]],
       descripcionE : [''],
       inicio : [''],
       fin : [''],
       localidad : [''],
       img: [''],
    })
  }

  ngOnInit(): void {
  }
  //declaracion para las validaciones 
  get NombreE() {
    return this.form.get("nombreE")
   }
 
   get DescripcionE(){
    return this.form.get("DescripcionE")
   }
   
   get Inicio(){
    return this.form.get("inicio")
   }
 
   get Fin(){
    return this.form.get("fin")
   }
 
   get Localidad(){
    return this.form.get("localidad")
   }
  
   get Img(){
    return this.form.get("img")
   }
   
   get NombreEValid(){
    return this.NombreE.touched && !this.NombreE.valid;
  }
 
 submitData(): void{
const expe = new Experiencia(this.nombreE, this.descripcionE, this.inicio, this.fin, this.localidad, this.img);
this.sExperiencia.save(expe).subscribe(
  data=>{
    console.log("agregada")
  alert ("Experiencia añadida")
  window.location.reload();
}, err =>{
  window.location.reload();
})
};

 limpiar():void{
  this.form.reset();
}
 
 
 
}