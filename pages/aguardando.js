import { useRouter } from "next/router";
import React from "react";
import BotaoWhats from "../components/BotaoWhats";
import Obrigado from "../components/Obrigado";

function getTitle() {
    const router = useRouter();
    let title = "Parabéns";
    if (router.query.c_name)
        title += " " + router.query.c_name;
    return title;
}

export default function LIAguardando(props) {
    return (
        <Obrigado
            social={false}
            subtitle="Leia com atenção!"
            text=""
            title={getTitle()} >
            <p>Parabéns pela sua matrícula no <b>Clube Mari Ubialli</b>.</p>
            <p>Tenho certeza que este é só o primeiro passo para o seu sucesso em vendas com bonecas de feltro.</p>
            <p>Você receberá o login e senha automaticamente no email cadastrado assim que o pagamento for aprovado.</p>
            <p>A aprovação do pagamento pelo banco pode levar até 72 horas.</p>
            <p>Qualquer dúvida entre em contato pelo WhatsApp clicando no botão abaixo, ou por email <a href="mailto:contato@mariubialli.com">contato@mariubialli.com</a></p>
            <BotaoWhats float={false} message="Oi, fiz a matrícula por boleto do Clube Mari Ubialli..." />
        </Obrigado>
    );
}
