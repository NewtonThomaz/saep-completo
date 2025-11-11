'use client'

import FormularioEstoque from "../../components/FormularioEstoque";
import NavBar from "../../components/navbar";
import { withAuth } from "../../components/withAuth";

function PaginaCadastro() {
  return (
    <section>
      <NavBar texto="Movimentação de estoque" />
      <FormularioEstoque />
    </section>
  );
}

export default withAuth(PaginaCadastro);