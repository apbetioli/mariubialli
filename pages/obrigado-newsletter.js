import React from "react";
import Layout from "../components/Layout";
import Obrigado from "../components/Obrigado";

export default function ObrigadoNewsletter(props) {
  return (
    <Layout {...props}>
      <Obrigado {...props}>
        <p>Agora é só aguardar que assim que tiver novas apostilas gratuitas você receberá em seu email.</p>
        <p>Para garantir que tudo ocorra certinho, você receberá em alguns minutos um email de confirmação. Se não receber, ele pode ter caído na pasta de spam.</p>
      </Obrigado>
    </Layout >
  );
}
