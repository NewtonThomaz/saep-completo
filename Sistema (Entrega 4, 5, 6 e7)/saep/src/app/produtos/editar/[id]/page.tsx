'use client'

import { useParams } from 'next/navigation';
import NavBar from '../../../components/navbar';
import FormularioProduto from '../../../components/FormularioProduto';
import { withAuth } from '../../../components/withAuth';

function PaginaEdicao() {

  const params = useParams();
  const id = params.id as string;

  return (
    <section className='h-screen'>
      <NavBar texto={"Edição de Produto"} />
      <FormularioProduto id={id} /> 
    </section>
  );
}

export default withAuth(PaginaEdicao);