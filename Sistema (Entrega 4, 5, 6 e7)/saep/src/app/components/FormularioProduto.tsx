'use client';

import { useFormularioProduto } from '../hooks/useFormularioProduto';

export default function FormularioProduto({ id }: { id?: string }) {
  const { form, isEditMode, handleChange, handleSubmit, handleCancel } = useFormularioProduto(id);

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isEditMode ? 'Editar Produto' : 'Cadastrar Produto'}
        </h1>

        <div className="mb-4">
          <label htmlFor="nome">Nome</label>
          <input placeholder="Insira o nome da Ferramenta" type="text" name="nome" value={form.nome} onChange={handleChange} required className="w-full p-2 border rounded mt-1" />
        </div>

        <div className="mb-4">
          <label htmlFor="material">Material</label>
          <input placeholder="Insira o material da Ferramenta" type="text" name="material" value={form.material} onChange={handleChange} required className="w-full p-2 border rounded mt-1" />
        </div>

        <div className="mb-4">
          <label htmlFor="tamanho">Tamanho</label>
          <input placeholder="Insira o tamanho da Ferramenta" type="number" name="tamanho" value={form.tamanho} onChange={handleChange} required className="w-full p-2 border rounded mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="peso">Peso</label>
          <input placeholder="Insira o Peso da Ferramenta" type="number" name="peso" value={form.peso} onChange={handleChange} required className="w-full p-2 border rounded mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="estoqueMinimo">Estoque mínimo</label>
          <input placeholder="Insira o estoque mínimo da Ferramenta" type="number" name="estoqueMinimo" value={form.estoqueMinimo} onChange={handleChange} required className="w-full p-2 border rounded mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="marca">Marca</label>
          <input placeholder="Insira a marca da Ferramenta" type="text" name="marca" value={form.marca} onChange={handleChange} required className="w-full p-2 border rounded mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="modelo">Modelo</label>
          <input placeholder="Insira o modelo da Ferramenta" type="text" name="modelo" value={form.modelo} onChange={handleChange} required className="w-full p-2 border rounded mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="ano_fabricao">Ano de Fabricação</label>
          <input placeholder="Insira o ano de fabricação da Ferramenta" type="text" name="anoFabricacao" value={form.anoFabricacao} onChange={handleChange} required className="w-full p-2 border rounded mt-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="especificacoes">Especificações</label>
          <input placeholder="Insira as especificações da Ferramenta" type="text" name="especificacoes" value={form.especificacoes} onChange={handleChange} required className="w-full p-2 border rounded mt-1" />
        </div>



        <div className="flex justify-end gap-4">
          <button type="button" onClick={handleCancel} className="bg-gray-200 py-2 px-4 rounded">
            Cancelar
          </button>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
            {isEditMode ? 'Atualizar' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  );
}