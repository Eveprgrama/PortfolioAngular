
package com.argentinaprograma.portfolio.interfac;

import com.argentinaprograma.portfolio.entity.SobreMi;
import java.util.List;

public interface ISobreMiService {
    //traer el sobremi
    public List<SobreMi> getSobreMi();
    
    //guardar el sobremi
    public void saveSobreMi(SobreMi yo);
    
    //eliminar objeto por id
    public void deleteSobreMi(Long id);
    
    //Buscar un objeto por id
    public SobreMi findSobreMi(Long id);
    
}
