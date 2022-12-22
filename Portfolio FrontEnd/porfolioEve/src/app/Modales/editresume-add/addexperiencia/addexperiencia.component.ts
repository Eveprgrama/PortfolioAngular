import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-addexperiencia',
  templateUrl: './addexperiencia.component.html',
  styleUrls: ['./addexperiencia.component.css']
})
export class AddexperienciaComponent implements OnInit {
  form: FormGroup;
  nombreE:string='';
  descripcionE:string='';
  inicio:string='';
  fin:string='';
  localidad:string='';
  img:string='';

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
 
 
 
 
 onCreate():void {
   const expe = new Experiencia (this.nombreE, this.descripcionE, this.inicio, this.fin, this.localidad, this.img);
   this.sExperiencia.save(expe).subscribe(data =>{alert("Experiencia añadida");
     window.location.reload();
   }, err =>{
    window.location.reload();
   })

   }
   limpiar():void{
     this.form.reset();
   }
onEnviar(event:Event){
  event.preventDefault;
  if (this.form.valid){
    this.onCreate();
  }else{
    alert("falló la carga, intente nuevamente");
    this.form.markAllAsTouched();
  }
}
}
