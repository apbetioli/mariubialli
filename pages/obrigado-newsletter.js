import React from "react";
import Layout from "../components/Layout";
import Obrigado from "../components/Obrigado";

export default function ObrigadoNewsletter(props) {
  return (
    <Layout {...props}>
      <Obrigado>
        Sua inscrição foi realizada com sucesso. Agora é só aguardar que em
        breve você receberá em seu email as apostilas gratuitas.
      </Obrigado>
    </Layout>
  );
}
