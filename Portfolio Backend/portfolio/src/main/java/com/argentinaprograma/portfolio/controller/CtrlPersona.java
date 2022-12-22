
package com.argentinaprograma.portfolio.controller;

import com.argentinaprograma.portfolio.entity.Persona;
import com.argentinaprograma.portfolio.service.ImpPersonaService;
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
public class CtrlPersona {
    @Autowired 
    private ImpPersonaService interPersona;
    
    @GetMapping("/personas/traer")
    public List<Persona> getPersona() {
       return interPersona.getPersona();
    }
    @PostMapping ("/personas/crear")
    public String createStudent(@RequestBody Persona pers) {
        interPersona.savePersona(pers);
        //devuelve un string avisando si creó correctamente
        return "La persona fue creada correctamente";
    }
    
    @DeleteMapping ("/personas/borrar/{id}")
    public String deletePersona (@PathVariable Long id){
        interPersona.deletePersona(id);
        //devuelve un string avisando que borró correctamente
        return "La persona fue borrada correctamente";
    }
    
    @PutMapping ("/personas/editar/{id}")
    public Persona editPersona (@PathVariable Long id,
                                @RequestParam("nombre") String nuevoNombre,
                                @RequestParam("apellido") String nuevoApellido,
                                @RequestParam("titulo") String nuevoTitulo,
                                @RequestParam("img") String nuevaImagen) {
        //busco la persona en cuestion
        Persona perso = interPersona.findPersona(id);
        
        //esto tambien puede ir en un service
        //para desacoplar aún mejor el código en un nuevo método
        perso.setApellido(nuevoApellido);
        perso.setNombre(nuevoNombre);
        perso.setTitulo(nuevoTitulo);
        perso.setImg(nuevaImagen);
        
        interPersona.savePersona(perso);
        //reconoce la nueva Persona
        return perso;
        }
    
    @GetMapping("personas/traer/perfil")
    public Persona findPersona() {
        return interPersona.findPersona((long)1);
    }
}
