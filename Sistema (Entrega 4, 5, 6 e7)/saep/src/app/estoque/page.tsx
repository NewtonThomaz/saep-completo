'use client';

import { useState } from 'react';

import NavBar from '../components/navbar';
import { withAuth } from '../components/withAuth';
import { useEstoque } from '../hooks/useEstoque';
import { Estoque } from '../types/estoque';
import { ModalMovimentacao } from '../hooks/ModalMovimentacao';

function PaginaEstoque() {
  function formatarData(data: Date | string | null | undefined): string {
  if (!data) {
    return '-';
  }
  const dataObj = new Date(data);
  if (isNaN(dataObj.getTime())) {
    console.warn("Valor de data inválido recebido:", data);
    return '-';
  }
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dataObj);
}
  const { estoques, setEstoques, loading, handleDelete, handleAdd } = useEstoque();

  const [itemSelecionado, setItemSelecionado] = useState<Estoque | null>(null);

  const handleSuccess = (estoqueAtualizado: Estoque) => {
    setEstoques(estoquesAtuais =>
      estoquesAtuais.map(e =>
        e.id === estoqueAtualizado.id ? estoqueAtualizado : e
      )
    );
    setItemSelecionado(null);
  };

  if (loading) return <p>Carregando...</p>;

  const itensEmAlerta = estoques.filter(item => {
    const estoqueMinimo = item.produto?.estoqueMinimo || 0;
    return estoqueMinimo > 0 && item.quantidade <= estoqueMinimo;
  });

  return (
    <section>
      <NavBar texto={"Estoque"} />
      <div className="container mx-auto p-4">

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Controle de Estoque</h1>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white rounded-full w-12 h-12 text-2xl"
          >
            +
          </button>
        </div>

        {itensEmAlerta.length > 0 && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded" role="alert">
            <p className="font-bold">Atenção: Estoque Baixo!</p>
            <p>
              Você tem <strong>{itensEmAlerta.length}</strong> item(ns) que
              atingiram ou estão abaixo do estoque mínimo.
            </p>
            <ul className="list-disc list-inside mt-2">
              {itensEmAlerta.map(item => (
                <li key={item.id}>{item.produto?.nome} (Qtd: {item.quantidade} / Mín: {item.produto?.estoqueMinimo})</li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Ferramentas</th>
                <th className="py-3 px-4 text-left">Última Movimentação</th>
                <th className="py-3 px-4 text-left">Data da Movimentação</th>
                <th className="py-3 px-4 text-left">Quantidade Total</th>
                <th className="py-3 px-4 text-left">Estoque Mínimo</th>
                <th className="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {estoques.map((item) => {
                const estoqueMinimo = item.produto?.estoqueMinimo || 0;
                const emAlerta = estoqueMinimo > 0 && item.quantidade <= estoqueMinimo;
                const qtdClasses = `
                  py-3 px-4 font-bold
                  ${emAlerta ? 'text-red-700' : ''}
                `;

                return (
                  <tr key={item.id} className={`border-t ${emAlerta ? 'bg-red-100 hover:bg-red-200 text-red-900' : 'hover:bg-gray-50'} `}>

                    <td className="py-3 px-4 font-medium">{item.produto?.nome}</td>

                    <td className="py-3 px-4">
                      {item.ultimaMovimentacao ? (
                        <span className={item.ultimaMovimentacao?.tipo === 'ENTRADA' ? 'text-green-600' : 'text-red-600'}>
                          {item.ultimaMovimentacao?.tipo === 'ENTRADA' ? '+' : '-'} {item.ultimaMovimentacao?.quantidade}
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td>
                      {item.ultimaMovimentacao ? formatarData(item.ultimaMovimentacao.data) : '-'}
                    </td>
                    <td className={qtdClasses}>
                      {item.quantidade}
                    </td>

                    <td className="py-3 px-4">
                      {item.produto?.estoqueMinimo || '-'}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => setItemSelecionado(item)}
                        className="text-blue-500 font-semibold mr-4"
                      >
                        Atualizar
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 font-semibold"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {itemSelecionado && (
        <ModalMovimentacao
          item={itemSelecionado}
          onClose={() => setItemSelecionado(null)}
          onSuccess={handleSuccess}
        />
      )}
    </section>
  );
}

export default withAuth(PaginaEstoque);