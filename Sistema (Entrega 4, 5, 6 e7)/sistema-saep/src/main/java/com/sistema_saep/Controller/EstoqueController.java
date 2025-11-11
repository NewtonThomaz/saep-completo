package com.sistema_saep.Controller;

import com.sistema_saep.Entity.Estoque;
import com.sistema_saep.Service.EstoqueService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/estoque")
public class EstoqueController {
    private final EstoqueService estoqueService;

    public EstoqueController(EstoqueService estoqueService) {
        this.estoqueService = estoqueService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Estoque> getEstoqueById(@PathVariable Long id) {
        Estoque estoque = estoqueService.getEstoqueById(id);
        if (estoque != null) {
            return ResponseEntity.ok(estoque);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<Estoque>> getAllEstoques() {
        List<Estoque> estoques = estoqueService.getAllEstoques();
        return ResponseEntity.ok(estoques);
    }

    @PostMapping("/")
    public ResponseEntity<Estoque> criarEstoque(@RequestBody @Valid Estoque estoque) {
        Estoque novoEstoque = estoqueService.salvarEstoque(estoque);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoEstoque);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Estoque> updateEstoque(@PathVariable Long id, @RequestBody @Valid Estoque estoque) {
        Estoque updatedEstoque = estoqueService.updateEstoque(id, estoque);
        if (updatedEstoque != null) {
            return ResponseEntity.ok(updatedEstoque);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEstoque(@PathVariable Long id) {
        Boolean deleted = estoqueService.deleteEstoque(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}