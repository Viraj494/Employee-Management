package com.mobitel.EmployeeManagement;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ContentController {

    @GetMapping("/home")
    public String handleWelcome(){
        return "Home";
    }

    @GetMapping("/admin/home")
    public String handleAdmin(){
        return "Admin Page";
    }

    @GetMapping("/user/home")
    public String handleUser(){
        return "User Page";
    }
}
