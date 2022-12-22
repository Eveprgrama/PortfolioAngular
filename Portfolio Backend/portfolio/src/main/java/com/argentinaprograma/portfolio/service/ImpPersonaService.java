
package com.argentinaprograma.portfolio.service;

import com.argentinaprograma.portfolio.entity.Persona;
import com.argentinaprograma.portfolio.interfac.IPersonaService;
import com.argentinaprograma.portfolio.repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService {
    @Autowired IPersonaRepository personarep;

    @Override
    public List<Persona> getPersona() {
        List<Persona> listapersonas = personarep.findAll();
        return listapersonas;
    }

    @Override
    public void savePersona(Persona pers) {
        personarep.save(pers);
    }

    @Override
    public void deletePersona(Long id) {
        personarep.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona pers = personarep.findById(id).orElse(null);
       return pers;
    }

    
}
