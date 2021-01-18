import React from "react";
import Layout from "../components/Layout";
import Obrigado from "../components/Obrigado";

export default function ObrigadoDownload(props) {
  return (
    <Layout {...props}>
      <Obrigado>Seu download iniciará em instante!</Obrigado>
    </Layout>
  );
}
