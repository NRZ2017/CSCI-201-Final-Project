package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//web request management 
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        User registered = userService.registerNewUserAccount(user);
        return ResponseEntity.ok(registered);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        User authenticated = userService.authenticate(user.getUsername(), user.getPassword());
        if (authenticated != null) {
            return ResponseEntity.ok("User authenticated successfully");
        }
        return ResponseEntity.badRequest().body("Failed to authenticate");
    }
}
