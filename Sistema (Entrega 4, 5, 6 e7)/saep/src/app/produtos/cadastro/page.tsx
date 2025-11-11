'use client'

import FormularioProduto from "../../components/FormularioProduto";
import NavBar from "../../components/navbar";
import { withAuth } from "../../components/withAuth";

function PaginaCadastro() {
  return (
    <section>
      <NavBar texto="Cadastro de Produto" />
      <FormularioProduto />
    </section>
  );
}

export default withAuth(PaginaCadastro);