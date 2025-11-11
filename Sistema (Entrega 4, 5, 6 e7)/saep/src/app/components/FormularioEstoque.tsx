'use client';

import { useFormularioEstoque } from "../hooks/useFormularioEstoque";

interface FormularioEstoqueProps {
  id?: string;
}

export default function FormularioEstoque({ id }: FormularioEstoqueProps) {

  const { form, produtos, handleChange, handleSubmit, handleCancel } = useFormularioEstoque(id);

  const titulo = id ? "Editar Item do Estoque" : "Adicionar Item ao Estoque";

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {titulo} 
        </h1>

        <div className="mb-4">
          <label htmlFor="idProduto" className="block text-gray-700 font-medium">Ferramentas</label>
          <select
            name="idProduto"
            value={form.idProduto}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1 bg-white"
          >
            <option value="" disabled>Selecione uma Ferramenta</option>
            {produtos.map(produto => (
              <option key={produto.id} value={produto.id}>
                {produto.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="localizacao" className="block text-gray-700 font-medium">Localização</label>
          <input type="text" name="localizacao" value={form.localizacao} onChange={handleChange} required className="w-full p-2 border rounded mt-1"/>
        </div>
        
        <div className="mb-6">
          <label htmlFor="quantidade" className="block text-gray-700 font-medium">Quantidade</label>
          <input type="number" name="quantidade" value={form.quantidade} onChange={handleChange} required className="w-full p-2 border rounded mt-1" min="0"/>
        </div>
        
        <div className="flex justify-end gap-4">
          <button type="button" onClick={handleCancel} className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
            Cancelar
          </button>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}