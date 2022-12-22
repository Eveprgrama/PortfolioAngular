
package com.argentinaprograma.portfolio.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class SobreMi {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     
     @NotNull
     private String primertexto;
     private String segundotexto;
     @NotNull
     private String imagen;

    public SobreMi(Long id, String primertexto, String segundotexto, String imagen) {
        this.id = id;
        this.primertexto = primertexto;
        this.segundotexto = segundotexto;
        this.imagen = imagen;
    }

    public SobreMi() {
    }
    
}
