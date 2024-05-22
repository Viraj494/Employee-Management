package com.mobitel.EmployeeManagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate; // Use java.time.LocalDate for date fields

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String eid;
    private String name;
    private String nic;
    private String email;
    private String mobile;

    private String division;
    private String designation;

    private String addr1;
    private String addr2;
    private LocalDate dob; // Use LocalDate for date of birth
    private LocalDate doj; // Use LocalDate for date of joining
    private double salary; // Use double or BigDecimal for salary
}
