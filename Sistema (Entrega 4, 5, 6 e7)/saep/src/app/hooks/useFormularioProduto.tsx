'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { ProdutoForm } from '../types/ProdutoForm';

export function useFormularioProduto(id?: string) {
  const router = useRouter();
  const [form, setForm] = useState<ProdutoForm>(
    {
      nome: '',
      material: '',
      tamanho: '',
      peso: '',
      estoqueMinimo: '',
      marca: '',
      modelo: '',
      anoFabricacao: '',
      especificacoes: ''

    });
  const isEditMode = Boolean(id);

  useEffect(() => {
    console.log('[useFormularioProduto] useEffect disparado.');
    console.log('[useFormularioProduto] ID recebido:', id);
    console.log('[useFormularioProduto] isEditMode:', isEditMode);
    if (isEditMode) {
      api.get(`/produtos/${id}`)
        .then(response => {
          const data = response.data;

          const normalize = (value: any): string => {
            if (value === null || typeof value === 'undefined') {
              return '';
            }
            return String(value);
          };

          setForm({
            nome: normalize(data.nome),
            material: normalize(data.material),
            tamanho: normalize(data.tamanho),
            peso: normalize(data.peso),
            estoqueMinimo: normalize(data.estoqueMinimo),
            marca: normalize(data.marca),
            modelo: normalize(data.modelo),
            anoFabricacao: normalize(data.anoFabricacao),
            especificacoes: normalize(data.especificacoes)
          });
        })
        .catch(() => {
          Swal.fire('Erro', 'Produto não encontrado', 'error').then(() => router.push('/produtos'));
        });
    }
  }, [id, isEditMode, router]);

  return {
    form,
    isEditMode,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm(currentForm => ({ ...currentForm, [name]: value }));
    },
    handleCancel: () => {
      router.push('/produtos');
    },

    handleSubmit: (e: React.FormEvent) => {
      e.preventDefault();

      const produtoParaEnviar = {
        ...form,
        tamanho: Number(String(form.tamanho)) || 0,
        peso: Number(String(form.peso)) || 0,
        estoqueMinimo: Number(String(form.estoqueMinimo)) || 0,
        anoFabricacao: Number(String(form.anoFabricacao)) || 0
      };

      const method = isEditMode ? 'put' : 'post';
      const url = isEditMode ? `/produtos/${id}` : '/produtos/';
      const successMessage = `Produto ${isEditMode ? 'atualizado' : 'cadastrado'} com sucesso!`;

      api[method](url, produtoParaEnviar)
        .then(() => {

          return Swal.fire('Sucesso', successMessage, 'success');
        })
        .then(() => {

          router.push('/produtos');
        })
        .catch((error) => {

          console.error("Falha ao salvar o produto:", error);
          Swal.fire('Erro', 'Não foi possível salvar o produto.', 'error');
        });
    },
  };
}