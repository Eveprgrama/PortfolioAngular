
package com.argentinaprograma.portfolio.interfac;

import com.argentinaprograma.portfolio.entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona pers);
    
    //Eliminar un usuario por Id
    public void deletePersona(Long id);
    
    //Buscar una persona por Id
    public Persona findPersona(Long id);
}
