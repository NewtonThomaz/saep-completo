package com.sistema_saep.Service;

import com.sistema_saep.Entity.Estoque;
import com.sistema_saep.Repository.EstoqueRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstoqueService {
    private final EstoqueRepository estoqueRepository;

    public EstoqueService(EstoqueRepository estoqueRepository) {
        this.estoqueRepository = estoqueRepository;
    }

    public List<Estoque> getAllEstoques() {
        return estoqueRepository.findAll();
    }

    public Estoque getEstoqueById(Long id) {
        Optional<Estoque> estoque = estoqueRepository.findById(id);
        return estoque.orElse(null);
    }

    public Estoque salvarEstoque(Estoque estoque) {
        return estoqueRepository.save(estoque);
    }

    public Estoque updateEstoque(Long id, Estoque updatedEstoque) {
        Optional<Estoque> existingEstoque = estoqueRepository.findById(id);
        if (existingEstoque.isPresent()) {
            updatedEstoque.setId(id);
            return estoqueRepository.save(updatedEstoque);
        }
        return null;
    }

    public Boolean deleteEstoque(Long id) {
        Optional<Estoque> existingEstoque = estoqueRepository.findById(id);
        if (existingEstoque.isPresent()) {
            estoqueRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
