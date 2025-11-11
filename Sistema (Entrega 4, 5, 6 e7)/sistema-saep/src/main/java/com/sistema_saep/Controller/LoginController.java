package com.sistema_saep.Controller;

import com.sistema_saep.Entity.Login;
import com.sistema_saep.Service.LoginService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class LoginController {
    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/auth")
    public ResponseEntity<Login> authenticate(@RequestBody Login loginDetails) {
        Login authenticatedUser = loginService.authenticate(loginDetails.getUsername(), loginDetails.getPassword());

        if (authenticatedUser != null) {
            authenticatedUser.setPassword(null);
            return ResponseEntity.ok(authenticatedUser);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Login> getLoginById(@PathVariable Long id) {
        Login login = loginService.getLoginById(id);
        if (login != null) {
            return ResponseEntity.ok(login);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<Login>> getAllLogin() {
        List<Login> login = loginService.getAllLogins();
        return ResponseEntity.ok(login);
    }

    @PostMapping("/register")
    public ResponseEntity<Login> criarLogin(@RequestBody @Valid Login login) {
        Login criarLogin = loginService.salvarLogin(login);
        return ResponseEntity.status(HttpStatus.CREATED).body(criarLogin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Login> updateLogin(@PathVariable Long id, @RequestBody @Valid Login login) {
        Login updatedLogin = loginService.updateLogin(id, login);
        if (updatedLogin != null) {
            return ResponseEntity.ok(updatedLogin);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Login> deleteLogin(@PathVariable Long id) {
        Boolean deleted = loginService.deleteLogin(id);
        if (deleted) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}