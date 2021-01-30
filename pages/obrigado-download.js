import React from "react";
import Layout from "../components/Layout";
import Obrigado from "../components/Obrigado";
import subscribe from "../lib/subscribe";
import useUser from "../lib/useUser";

export default function ObrigadoDownload(props) {
  const { user } = useUser()

  if (user) {
    subscribe({
      email: user.email,
      tag: "DOWNLOAD"
    })
  }

  return (
    <Layout {...props}>
      <Obrigado subtitle="Seu download iniciará em instantes!">
        <p>Caso o download não inicie automaticamente verifique se o seu navegador está bloqueando popups.</p>
      </Obrigado>
    </Layout>
  )
}
