import { useRouter } from "next/router";
import React from "react";
import BotaoWhats from "../../components/BotaoWhats";
import Layout from "../../components/Layout";
import Obrigado from "../../components/Obrigado";

function getTitle() {
    const router = useRouter();
    let title = "Obrigada";
    if (router.query.c_name)
        title += " " + router.query.c_name;
    return title;
}

export default function JoiasRarasAguardando(props) {
    return (
        <Layout {...props}>
            <Obrigado
                social={false}
                subtitle="Leia com atenção!"
                text=""
                title={getTitle()} >
                <p>Fico muito feliz que tenha se inscrito no Curso Joias Raras.</p>
                <p>Atente-se para o prazo de vencimento do boleto que é de <b>1 dia útil</b>.</p>
                <p>A aprovação do pagamento pelo banco pode levar até 72 horas.</p>
                <p>Você receberá o acesso ao curso automaticamente no email cadastrado assim que o pagamento for aprovado.</p>
                <p>Qualquer dúvida entre em contato pelo WhatsApp clicando no botão abaixo, ou por email <a href="mailto:contato@mariubialli.com">contato@mariubialli.com</a></p>
                <BotaoWhats float={false} message="Oi, fiz a compra por boleto do Curso Bonecas Joias Raras..." />
            </Obrigado>
        </Layout >
    );
}
