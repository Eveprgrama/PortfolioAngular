
package com.argentinaprograma.portfolio.controller;

import com.argentinaprograma.portfolio.entity.SobreMi;
import com.argentinaprograma.portfolio.service.ImpSobreMiService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CtrilSobreMi {
    @Autowired 
    private ImpSobreMiService interSobremi;
    
    @GetMapping("/sobremi/traer")
    public List<SobreMi> getSobreMi() {
       return interSobremi.getSobreMi();
    }
    @PostMapping ("/sobremi/crear")
    public String createSobremi(@RequestBody SobreMi about) {
        interSobremi.saveSobreMi(about);
        //devuelve un string avisando si creó correctamente
        return "Sobre Mi fue creado correctamente";
    }
    
    @DeleteMapping ("/sobremi/borrar/{id}")
    public String deleteSobreMi (@PathVariable Long id){
        interSobremi.deleteSobreMi(id);
        //devuelve un string avisando que borró correctamente
        return "Sobre mí fue borrado correctamente";
    }
    
    @PutMapping ("/sobremi/editar/{id}")
    public SobreMi editSobremi (@PathVariable Long id,
                                @RequestParam("primertexto") String nuevoPrimertexto,
                                @RequestParam("segundotexto") String nuevoSegundotexto,
                                @RequestParam("imgen") String nuevaImagen) {
        //busco la persona en cuestion
        SobreMi yo = interSobremi.findSobreMi(id);
        
        //esto tambien puede ir en un service
        //para desacoplar aún mejor el código en un nuevo método
        yo.setPrimertexto(nuevoPrimertexto);
        yo.setSegundotexto(nuevoSegundotexto);
        yo.setImagen(nuevaImagen);
        
        interSobremi.saveSobreMi(yo);
        //reconoce la nueva Persona
        return yo;
        }
    
    @GetMapping("sobremi/traer/informacion")
    public SobreMi findSobreMi() {
        return interSobremi.findSobreMi((long)1);
    }
    
}
