import React from "react";
import Layout from "../components/Layout";
import Obrigado from "../components/Obrigado";

export default function ObrigadoDownload(props) {
  return (
    <Layout {...props}>
      <Obrigado subtitle="Seu download iniciará em instantes!">
        <p>Caso o download não inicie automaticamente verifique se o seu navegador está bloqueando popups.</p>
      </Obrigado>
    </Layout>
  )
}
