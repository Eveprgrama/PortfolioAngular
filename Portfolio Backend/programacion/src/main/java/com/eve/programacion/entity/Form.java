
package com.eve.programacion.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Form {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
    @NotNull
    private String subject;
    @NotNull
   private String nombre;
    @NotNull
   private String email;
    @NotNull
   private String mensaje;

    public Form() {
    }

    public Form(Long id, String subject, String nombre, String email, String mensaje) {
        this.id = id;
        this.subject = subject;
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
    }
   
   
}
