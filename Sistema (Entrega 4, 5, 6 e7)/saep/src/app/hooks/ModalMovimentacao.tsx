// /components/ModalMovimentacao.tsx
'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import api from '../lib/api';
import { Estoque } from '../types/estoque';

interface Props {
  item: Estoque;
  onClose: () => void;
  onSuccess: (estoqueAtualizado: Estoque) => void;
}

export function ModalMovimentacao({ item, onClose, onSuccess }: Props) {
  const [tipo, setTipo] = useState<'ENTRADA' | 'SAIDA'>('ENTRADA');
  const [quantidadeMovimentada, setQuantidadeMovimentada] = useState<number | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const qtd = Number(quantidadeMovimentada);
    if (isNaN(qtd) || qtd <= 0) {
      Swal.fire('Atenção!', 'A quantidade deve ser maior que zero.', 'warning');
      return;
    }

    let novaQuantidadeTotal = item.quantidade;

    if (tipo === 'ENTRADA') {
      novaQuantidadeTotal += qtd;
    } else {
      if (qtd > item.quantidade) {
        Swal.fire('Erro!', 'A quantidade de saída não pode ser maior que o estoque atual.', 'error');
        return;
      }
      novaQuantidadeTotal -= qtd;
    }

    try {
      const response = await api.put(`/estoque/${item.id}`, {
        ...item,
        quantidade: novaQuantidadeTotal,
      });

      Swal.fire('Sucesso!', 'Estoque atualizado com sucesso.', 'success');

      const estoqueComInfoExtra = {
        ...response.data,
        ultimaMovimentacao: {
          tipo,
          quantidade: quantidadeMovimentada,
          data: new Date().toISOString(), 
        },
      };


      onSuccess(estoqueComInfoExtra);
      onClose();
    } catch {
      Swal.fire('Erro!', 'Não foi possível atualizar o estoque.', 'error');
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0000009b] flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-3">Movimentar: {item.produto?.nome}</h2>
        <p className="mb-4">
          Estoque Atual: <strong>{item.quantidade}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold">Tipo de Movimentação</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value as 'ENTRADA' | 'SAIDA')}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ENTRADA">Entrada</option>
              <option value="SAIDA">Saída</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-semibold">Quantidade</label>
            <input
              type="number"
              min="1"
              value={quantidadeMovimentada}
              onChange={(e) => setQuantidadeMovimentada(e.target.value ? Number(e.target.value) : '')}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
