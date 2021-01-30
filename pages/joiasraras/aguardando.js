import React from "react";
import BotaoWhats from "../../components/BotaoWhats";
import Layout from "../../components/Layout";
import Obrigado from "../../components/Obrigado";

export default function JoiasRarasAguardando(props) {
    return (
        <Layout {...props}>
            <Obrigado
                social={false}
                subtitle="Aguardando confirmação!"
                text="" >
                <p>Se você pagou por boleto você receberá o acesso ao curso assim que o pagamento for aprovado.</p>
                <p>Qualquer dúvida entre em contato pelo WhatsApp clicando no botão abaixo, ou por email <a href="mailto:contato@mariubialli.com">contato@mariubialli.com</a></p>
                <BotaoWhats float={false} message="Oi, estou aguardando confirmação do pagamento do curso joias raras e gostaria de tirar algumas dúvidas." />
            </Obrigado>
        </Layout >
    );
}
