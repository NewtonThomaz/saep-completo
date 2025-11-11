package com.sistema_saep.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Estoque {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O campo localizaçao é obrigatório")
    private String localizacao;

    @NotNull(message = "O campo quantidade é obrigatório")
    private Integer quantidade;

    @ManyToOne
    @JoinColumn(name = "idProduto")
    @NotNull(message = "O campo produto é obrigatório")
    private Produto produto;
}