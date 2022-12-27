import {  ChangeDetectionStrategy, Component, EventEmitter, 
  Input, OnInit, OnChanges, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sobremi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/service/sobremi.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-edit-sobremi',
  templateUrl: './edit-sobremi.component.html',
  styleUrls: ['./edit-sobremi.component.css']
})
export class EditSobremiComponent implements OnInit {
  smedit: Sobremi = null;
  form: FormGroup;
 
  constructor(public router: Router, private ssobremi: SobremiService, private activatedRouter: ActivatedRoute, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      imagen: ['', Validators.required],
      texto: ['', Validators.required],
     
  });
   }

  ngOnInit(): void {
    this.ssobremi.getSobreMi().subscribe(
      data =>{
        this.smedit = data;
      }
    )
    
  }
  onUpdate(): void{
    this.ssobremi.update(1, this.smedit).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

}
