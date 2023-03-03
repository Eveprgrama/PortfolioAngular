import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contactform } from '../model/contactForm';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url = 'http://localhost:8080/contacto/';
  constructor(private httpCliente: HttpClient) { }

  public recibir(Contactform: Contactform): Observable<any>{
    return this.httpCliente.post<any>(this.url, Contactform)
  }
}
