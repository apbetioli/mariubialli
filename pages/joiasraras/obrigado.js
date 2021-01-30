import React from "react";
import Layout from "../../components/Layout";
import Obrigado from "../../components/Obrigado";

export default function JoiasRarasObrigadoEspera(props) {
  return (
    <Layout {...props}>
      <Obrigado
        subtitle="ATENÇÃO: Só mais uma coisa importante"
        text="" >
        <p>Agora é só aguardar que você receberá em seu email mais detalhes de como vai funcionar na segunda-feira dia 08/02.</p>
        <p>Para garantir que tudo ocorra certinho, você receberá em alguns minutos um email de confirmação. Se não receber, ele pode ter caído na pasta de spam.</p>
        <p>Me acompanhe também no instagram que também vou postar atualizações lá e para não perder os sorteios que acontecerão durante a semana.</p>
      </Obrigado>
    </Layout >
  );
}
