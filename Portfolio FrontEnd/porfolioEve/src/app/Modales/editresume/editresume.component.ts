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
form: FormGroup;
  constructor(public router: Router, private sExperiencia: ExperienciaService, private activatedrouter: ActivatedRoute, private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      nombreE:['',[Validators.required]],
      inicio:['', [Validators.required]],
      fin:['', [Validators.required]],
      descripcionE:['', [Validators.required]],
      logo:['', [Validators.required]],
   })
  }

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
      this.router.navigateByUrl('/dashboard');
    }, err =>{
      this.router.navigateByUrl('/dashboard');
    }
  )
}
  
onEnviar(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault; 

  if (this.form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo salio bien ¡Enviar formuario!")
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.form.markAllAsTouched(); 
  }

}





}

