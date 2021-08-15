import { useRouter } from "next/router";
import React from "react";
import BotaoWhats from "../../components/BotaoWhats";
import Obrigado from "../../components/Obrigado";
    const router = useRouter();
    let title = "Obrigada";
    if (router.query.c_name)
        title += " " + router.query.c_name;
    return title;
}

export default function LS1Aguardando(props) {
    return (
        <Obrigado
            social={false}
            subtitle="Leia com atenção!"
            text=""
            title={getTitle()} >
            <p>Fico muito feliz que tenha se inscrito no <b>Curso Artesã Criativa</b>.</p>
            <p>Faça o pagamento <b>ainda hoje</b> para que o curso seja liberado o mais rápido possível.</p>
            <p>Você receberá o acesso ao curso automaticamente no email cadastrado assim que o pagamento for aprovado.</p>
            <p>A aprovação do pagamento pelo banco pode levar até 72 horas.</p>
            <p>Qualquer dúvida entre em contato pelo WhatsApp clicando no botão abaixo, ou por email <a href="mailto:contato@mariubialli.com">contato@mariubialli.com</a></p>
            <BotaoWhats float={false} message="Oi, fiz a compra por boleto do Curso Artesã Criativa..." />
        </Obrigado>
    );
}
