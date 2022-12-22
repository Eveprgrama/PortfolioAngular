
package com.argentinaprograma.portfolio.service;

import com.argentinaprograma.portfolio.entity.SobreMi;
import com.argentinaprograma.portfolio.interfac.ISobreMiService;
import com.argentinaprograma.portfolio.repository.ISobreMiRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;


public class ImpSobreMiService implements ISobreMiService {
    @Autowired ISobreMiRepository sobremirep;

    @Override
    public List<SobreMi> getSobreMi() {
         List<SobreMi> acercade = sobremirep.findAll();
        return acercade;
    }

    @Override
    public void saveSobreMi(SobreMi yo) {
        sobremirep.save(yo);
    }

    @Override
    public void deleteSobreMi(Long id) {
        sobremirep.deleteById(id);
    }

    @Override
    public SobreMi findSobreMi(Long id) {
        SobreMi yo = sobremirep.findById(id).orElse(null);
        return yo;
    }
    
}
