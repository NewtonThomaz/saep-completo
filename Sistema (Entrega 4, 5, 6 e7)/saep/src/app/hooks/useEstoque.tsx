'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { Estoque } from '../types/estoque';
import { Produto } from '../types/produto'; 

interface EstoqueComProduto extends Omit<Estoque, 'produto'> {
  produto: Produto;
}

export function useEstoque() {
  const router = useRouter();
  const [estoques, setEstoques] = useState<Estoque[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<Estoque[]>('/estoque/'),
      api.get<Produto[]>('/produtos/')
    ]).then(([estoqueResponse, produtosResponse]) => {
      
      const listaDeEstoque = estoqueResponse.data;
      const listaDeProdutos = produtosResponse.data;

      const estoquesComNomes = listaDeEstoque.map(itemDoEstoque => {
        const produtoCompleto = listaDeProdutos.find(p => p.id === itemDoEstoque.produto.id);
        return {
          ...itemDoEstoque,
          produto: produtoCompleto || itemDoEstoque.produto 
        };
      });

      setEstoques(estoquesComNomes as EstoqueComProduto[]);
      
    }).catch(error => {
      console.error("Erro ao carregar dados combinados:", error);
      Swal.fire('Erro', 'Não foi possível carregar os dados da página.', 'error');
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: 'Tem certeza?', text: 'Você não poderá reverter esta ação!', icon: 'warning',
      showCancelButton: true, confirmButtonText: 'Sim, excluir!', cancelButtonText: 'Cancelar',
    });
    if (result.isConfirmed) {
      api.delete(`/estoque/${id}`).then(() => {
        setEstoques(estoquesAtuais => estoquesAtuais.filter(e => e.id !== id));
        Swal.fire('Excluído!', 'O item do estoque foi removido.', 'success');
      });
    }
  };

  const handleAdd = () => router.push('/estoque/cadastro'); 
  const handleEdit = (id: number) => router.push(`/estoque/editar/${id}`);
  
  return {
    estoques,
    loading,
    handleDelete,
    setEstoques,
    handleAdd,
    handleEdit
  };
}