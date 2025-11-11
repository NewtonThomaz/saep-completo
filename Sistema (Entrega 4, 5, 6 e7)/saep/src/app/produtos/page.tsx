'use client';

import NavBar from '../components/navbar';
import { withAuth } from '../components/withAuth';
import { useProdutos } from '../hooks/useProdutos';
import { useState } from 'react';



function PaginaProdutos() {
    const { produtos, handleDelete, handleAdd, handleEdit } = useProdutos();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <section>
            <NavBar texto={"Ferramentas"} />
            <section className="container mx-auto p-4">
                <section className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Ferramentas</h1>
                    <div className="flex gap-2 items-center">
                        <input
                            type="text"
                            placeholder="Pesquisar por nome..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border rounded-lg px-3 py-2"
                        />
                        <button
                            onClick={handleAdd}
                            className="bg-blue-600 text-white rounded-full w-12 h-12 text-2xl"
                        >
                            +
                        </button>
                    </div>
                </section>


                <section className="bg-white shadow-md rounded-lg overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-4 text-left">Nome</th>
                                <th className="py-3 px-4 text-left">Tamanho</th>
                                <th className="py-3 px-4 text-left">Peso</th>
                                <th className="py-3 px-4 text-left">Estoque Mínimo</th>
                                <th className="py-3 px-4 text-left">Marca</th>
                                <th className="py-3 px-4 text-left">Modelo</th>
                                <th className="py-3 px-4 text-left">Ano</th>
                                <th className="py-3 px-4 text-left">Especificacoes</th>
                                <th className="py-3 px-4 text-right">Ações</th>


                            </tr>
                        </thead>
                        <tbody>
                            {[...produtos]
                                .filter((p) =>
                                    p.nome.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .sort((a, b) => a.nome.localeCompare(b.nome))
                                .map((produto) => (
                                    <tr key={produto.id} className="border-t hover:bg-gray-50">
                                        <td className="py-3 px-4">{produto.nome}</td>
                                        <td className="py-3 px-4">{produto.tamanho}</td>
                                        <td className="py-3 px-4">{produto.peso}</td>
                                        <td className="py-3 px-4">{produto.estoqueMinimo}</td>
                                        <td className="py-3 px-4">{produto.marca}</td>
                                        <td className="py-3 px-4">{produto.modelo}</td>
                                        <td className="py-3 px-4">{produto.anoFabricacao}</td>
                                        <td className="py-3 px-4">{produto.especificacoes}</td>
                                        <td className="py-3 px-4 text-right">
                                            <button
                                                onClick={() => handleEdit(produto.id)}
                                                className="text-blue-500 font-semibold mr-4"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleDelete(produto.id)}
                                                className="text-red-500 font-semibold"
                                            >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    );
}

export default withAuth(PaginaProdutos);