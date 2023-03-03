
package com.eve.programacion.controller;

import com.eve.programacion.service.SvForm;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("contacto")
@CrossOrigin(origins = "http://localhost:4200")
@Transactional
public class CForm {
       @Autowired
    private SvForm emailService;

  @PostMapping
  public ResponseEntity<String> sendEmail(
      @RequestParam String nombre,
      @RequestParam String email,
      @RequestParam String subject,
      @RequestParam String mensaje) {

    // Create the email body
    String body = "From: " + nombre + "\n";
    body += "Email: " + email + "\n\n";
    body += mensaje;

    // Send the email
    emailService.sendEmail(email, "evelynpenfold94@gmail.com", subject, body);

    // Return a response
    return ResponseEntity.ok("Email enviado exitosamente!");
  }
  }
    
       

