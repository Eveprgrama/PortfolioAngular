/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package com.eve.programacion.controller;

import com.eve.programacion.entity.SobreMi;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author Evelyn
 */
public class CtrlSobreMiTest {
    
    public CtrlSobreMiTest() {
    }
    
    @BeforeAll
    public static void setUpClass() {
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
    }
    
    @AfterEach
    public void tearDown() {
    }

    /**
     * Test of getSobreMi method, of class CtrlSobreMi.
     */
    @Test
    public void testGetSobreMi() {
        System.out.println("getSobreMi");
        CtrlSobreMi instance = new CtrlSobreMi();
        List<SobreMi> expResult = null;
        List<SobreMi> result = instance.getSobreMi();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of createSobreMi method, of class CtrlSobreMi.
     */
    @Test
    public void testCreateSobreMi() {
        System.out.println("createSobreMi");
        SobreMi smi = null;
        CtrlSobreMi instance = new CtrlSobreMi();
        String expResult = "";
        String result = instance.createSobreMi(smi);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of deleteSobreMi method, of class CtrlSobreMi.
     */
    @Test
    public void testDeleteSobreMi() {
        System.out.println("deleteSobreMi");
        int id = 0;
        CtrlSobreMi instance = new CtrlSobreMi();
        String expResult = "";
        String result = instance.deleteSobreMi(id);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of editSobreMi method, of class CtrlSobreMi.
     */
    @Test
    public void testEditSobreMi() {
        System.out.println("editSobreMi");
        int id = 0;
        String nuevoTexto = "";
        String nuevaImagen = "";
        CtrlSobreMi instance = new CtrlSobreMi();
        SobreMi expResult = null;
        SobreMi result = instance.editSobreMi(id, nuevoTexto, nuevaImagen);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getById method, of class CtrlSobreMi.
     */
    @Test
    public void testGetById() {
        System.out.println("getById");
        int id = 0;
        CtrlSobreMi instance = new CtrlSobreMi();
        ResponseEntity<SobreMi> expResult = null;
        ResponseEntity<SobreMi> result = instance.getById(id);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of findSobreMi method, of class CtrlSobreMi.
     */
    @Test
    public void testFindSobreMi() {
        System.out.println("findSobreMi");
        CtrlSobreMi instance = new CtrlSobreMi();
        SobreMi expResult = null;
        SobreMi result = instance.findSobreMi();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
    
}
