import React from "react";
import BotaoWhats from "../../components/BotaoWhats";
import Layout from "../../components/Layout";
import Obrigado from "../../components/Obrigado";

export default function JoiasRarasAguardando(props) {
    return (
        <Layout {...props}>
            <Obrigado
                social={false}
                subtitle="Leia com atenção!"
                text="" >
                <p>Fico muito feliz que tenha se inscrito no curso das bonecas Joias Raras.</p>
                <p>Para não perder sua vaga, faça o pagamento <b>ainda hoje</b> para que o curso seja liberado o mais rápido possível.</p>
                <p>Você receberá o acesso ao curso automaticamente no email cadastrado assim que o pagamento for aprovado.</p>
                <p>A aprovação do pagamento pelo banco pode levar até 72 horas.</p>
                <p>Qualquer dúvida entre em contato pelo WhatsApp clicando no botão abaixo, ou por email <a href="mailto:contato@mariubialli.com">contato@mariubialli.com</a></p>
                <BotaoWhats float={false} message="Oi, estou aguardando confirmação do pagamento do curso joias raras e gostaria de tirar algumas dúvidas." />
            </Obrigado>
        </Layout >
    );
}
