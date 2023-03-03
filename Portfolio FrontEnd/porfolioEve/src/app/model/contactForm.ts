export class Contactform {
    nombre: string;
    email: string;
    subject: string;
    mensaje: string;

    constructor(nombre:string, email:string, subject:string, mensaje:string){
     this.nombre=nombre;
     this.email=email;
     this.subject=subject;
     this.mensaje=mensaje;
    }
}
