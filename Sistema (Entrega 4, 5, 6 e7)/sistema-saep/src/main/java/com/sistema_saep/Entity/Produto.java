package com.sistema_saep.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O campo nome é obrigatório")
    private String nome;

    @NotBlank(message = "O campo material é obrigatório")
    private String material; //descricao

    @NotNull(message = "O campo tamanho é obrigatório")
    private Double tamanho; //precoCusto

    @NotNull(message = "O campo peso é obrigatório")
    private Double peso; //precoVenda

    @NotNull(message = "O campo estoque mínimo é obrigatório")
    private Integer estoqueMinimo;

    @NotBlank(message = "O campo marca é obrigatório")
    private String marca;

    @NotBlank(message = "O campo modelo é obrigatório")
    private String modelo;

    @NotNull(message = "O campo ano fabricação é obrigatório")
    private Integer anoFabricacao;

    @NotBlank(message = "O campo especificações é obrigatório")
    private String especificacoes; //compatibilidade
}
