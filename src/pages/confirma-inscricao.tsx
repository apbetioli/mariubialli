import { useRouter } from "next/router";
import React, { useEffect } from "react";
import subscribe from "../lib/subscribe";

export default function ConfirmaInscricao() {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.email) return;

    subscribe({
      email: router.query.email,
      tag: "CONFIRMED",
    });
  }, [router.query.email]);

  return (
    <div className="center">
      <h1>Email confirmado com sucesso!</h1>
      <p>Você continuará recebendo nossos emails e avisos por email.</p>
      <p>
        Adicione o email <b>contato@mariubialli.com</b> aos seus contatos para
        não perder nenhuma novidade.
      </p>
    </div>
  );
}
