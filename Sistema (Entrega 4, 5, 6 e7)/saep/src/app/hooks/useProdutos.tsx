'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'; 
import api from '../lib/api';
import { Produto } from '../types/produto';

export function useProdutos() {
  const router = useRouter();
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    api.get<Produto[]>('/produtos/').then(response => {
      setProdutos(response.data);
    });
  }, []);

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter esta ação!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
    });
 
    if (result.isConfirmed) {
      api.delete(`/produtos/${id}`).then(() => {
        setProdutos(produtosAtuais => produtosAtuais.filter(p => p.id !== id));
        
        Swal.fire('Excluído!', 'O produto foi removido.', 'success');
      });
    }
  };

  const handleAdd = () => router.push('/produtos/cadastro'); 
  const handleEdit = (id: number) => router.push(`/produtos/editar/${id}`);
  return {
    produtos,
    handleDelete,
    handleAdd,
    handleEdit
  };
}