
package com.argentinaprograma.portfolio.repository;

import com.argentinaprograma.portfolio.entity.SobreMi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISobreMiRepository extends JpaRepository<SobreMi, Long> {
    
}
