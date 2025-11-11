package com.sistema_saep.Service;

import com.sistema_saep.Entity.Login;
import com.sistema_saep.Repository.LoginRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {
    private final LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public Login authenticate(String username, String password) {
        Login user = loginRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

    public Login getLoginById(Long id) {
        Optional<Login> login = loginRepository.findById(id);
        return login.orElse(null);
    }

    public Login salvarLogin(Login login) {
        return loginRepository.save(login);
    }

    public Login updateLogin(Long id, Login updatedLogin) {
        Optional<Login> existingLogin = loginRepository.findById(id);
        if(existingLogin.isPresent()) {
            updatedLogin.setId(id);
            return loginRepository.save(updatedLogin);
        }
        return null;
    }

    public Boolean deleteLogin(Long Id) {
        Optional<Login> existingLogin = loginRepository.findById(Id);
        if(existingLogin.isPresent()) {
            loginRepository.deleteById(Id);
            return true;
        }
        return false;
    }
}