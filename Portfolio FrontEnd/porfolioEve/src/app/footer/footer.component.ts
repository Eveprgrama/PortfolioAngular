import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from '../service/email.service';
import { Contactform } from '../model/contactForm';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
contactForm: Contactform = {
  nombre: '',
  email: '',
  mensaje: '',
  subject: '',
}
isFormSubmitted=false;
 

  constructor(private http: HttpClient, private emailservice: EmailService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Submit() {
    this.emailservice.recibir(this.contactForm).subscribe(
      () => {
        this.toastr.success('El correo electrónico ha sido enviado con éxito', 'Éxito');
      },
      error => {
        this.toastr.error('Ha ocurrido un error al enviar el correo electrónico', 'Error');
        console.log(error);
      }
    );
  }   


}
