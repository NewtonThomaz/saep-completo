'use client'

import NavBar from '../../../components/navbar';
import { withAuth } from '../../../components/withAuth';
import FormularioEstoque from '../../../components/FormularioEstoque';

function PaginaEdicao(params: { id: string } ) {
  return (
    <section className='h-screen'>
      <NavBar texto={ "Formulário de Estoque" } />
      <FormularioEstoque id={params.id} />
    </section>
  );
}

export default withAuth(PaginaEdicao);