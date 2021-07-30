import React from "react";
import Layout from "../components/Layout";
import Obrigado from "../components/Obrigado";

export default function ObrigadoDoubleOptin(props) {
  return (
    <Layout {...props}>
      <Obrigado subtitle="Inscrição confirmada" />
    </Layout>
  )
}
