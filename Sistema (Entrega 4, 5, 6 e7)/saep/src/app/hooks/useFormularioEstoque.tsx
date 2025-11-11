'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { EstoqueForm } from '../types/estoqueForm';
import { Produto } from '../types/produto';

const ESTADO_INICIAL: EstoqueForm = {
  localizacao: '',
  quantidade: '',
  idProduto: '',
};

export function useFormularioEstoque(id?: string) {
  const router = useRouter();
  const isEditMode = Boolean(id);
  const [form, setForm] = useState<EstoqueForm>(ESTADO_INICIAL);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    api.get<Produto[]>('/produtos/').then(response => {
      setProdutos(response.data);
    }).catch(error => {
      console.error("Erro ao buscar a lista de produtos:", error);
      Swal.fire('Erro!', 'Não foi possível carregar a lista de produtos.', 'error');
    });

    if (isEditMode) {
      api.get(`/estoque/${id}`).then(response => {
        const data = response.data;
        setForm({
          localizacao: data.localizacao || '',
          quantidade: String(data.quantidade || ''),
          idProduto: String(data.produto?.id || ''), 
        });
      }).catch(error => {
        console.error(`Erro ao buscar o item de estoque ${id}:`, error);
        Swal.fire('Erro!', 'Não foi possível carregar os dados para edição.', 'error');
        router.push('/estoque');
      });
    }
  }, [id, isEditMode, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const idProdutoNumerico = parseInt(String(form.idProduto), 10);

    if (!idProdutoNumerico) {
      Swal.fire('Atenção!', 'Você precisa selecionar um produto.', 'warning');
      return;
    }

    const dadosParaEnviar = {
      localizacao: form.localizacao,
      quantidade: parseInt(String(form.quantidade), 10) || 0,
      produto: {
        id: idProdutoNumerico
      }
    };
    
    const promise = isEditMode 
      ? api.put(`/estoque/${id}`, dadosParaEnviar)
      : api.post('/estoque/', dadosParaEnviar);

    promise.then(() => {
      Swal.fire({
        title: 'Sucesso!',
        text: `Item do estoque ${isEditMode ? 'atualizado' : 'salvo'} com sucesso.`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });
      setTimeout(() => router.push('/estoque'), 1500); 
    }).catch(error => {
        console.error("Erro ao salvar o item do estoque:", error);
        const errorMessage = error.response?.data?.message || 'Não foi possível salvar o item.';
        Swal.fire('Erro!', errorMessage, 'error');
    });
  };

  const handleCancel = () => {
    router.push('/estoque');
  };

  return {
    form,
    isEditMode,
    produtos,
    handleChange,
    handleSubmit,
    handleCancel,
  };
}