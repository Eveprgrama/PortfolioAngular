import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-add-estudios',
  templateUrl: './add-estudios.component.html',
  styleUrls: ['./add-estudios.component.css']
})
export class AddEstudiosComponent implements OnInit {
form: FormGroup;
img: string= '';
instituto: string='';
inicio: string='';
fin: string='';
especializacion: string='';
descripcion: string='';
public FormControl: FormControl;

  constructor(public router: Router, private sEstudios: EstudiosService, private FormBuilder: FormBuilder) {
    this.form= this.FormBuilder.group({
      img: [''],
      instituto:[''],
     descripcion : [''],
      inicio : [''],
      fin : [''],
      especializacion : [''],
    })
   }

  ngOnInit(): void {
  }
  get Instituto() {
    return this.form.get("instituto")
   }
 
   get Descripcion(){
    return this.form.get("descripcion")
   }
   
   get Inicio(){
    return this.form.get("inicio")
   }
 
   get Fin(){
    return this.form.get("fin")
   }
 
   get Especializacion(){
    return this.form.get("especializacion")
   }
  
   get Img(){
    return this.form.get("img")
   }

   nuevoEstu(): void{
    const estu = new Estudios(this.img, this.instituto, this.inicio, this.fin, this.descripcion, this.especializacion);
    this.sEstudios.save(estu).subscribe(
      data=>{
        console.log("agregada")
      alert ("Estudio añadido")
      window.location.reload();
    }, err =>{
      window.location.reload();
    })
    };
    
     limpiar():void{
      this.form.reset();
    }
     

}
