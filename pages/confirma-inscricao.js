import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import Obrigado from "../components/Obrigado";
import subscribe from "../lib/subscribe";

export default function ObrigadoInscricao(props) {
  const router = useRouter();

  if (router.query.email) {
    subscribe({
      email: router.query.email,
      tag: 'CONFIRMED'
    });
  }

  return (
    <Layout {...props}>
      <Obrigado subtitle="Email confirmado com sucesso!">
        <p>Você continuará recebendo nossos emails e avisos por email.</p>
        <p>Adicione o email <b>contato@mariubialli.com</b> aos seus contatos para não perder nenhuma novidade.</p>
      </Obrigado>
    </Layout>
  )
}
