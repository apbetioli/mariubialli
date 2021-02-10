import React from "react";
import BotaoWhats from "../../components/BotaoWhats";
import Layout from "../../components/Layout";
import Obrigado from "../../components/Obrigado";

export default function JoiasRarasConfirmado(props) {
    return (
        <Layout {...props}>
            <Obrigado
                social={false}
                subtitle="Inscrição confirmada!"
                text="" >
                <p>Você receberá em até 10 minutos um email da <b>Hotmart</b> com o seu acesso ao curso.</p>
                <p>Após este tempo se não receber, veja se ele pode ter caído na pasta de spam.</p>
                <p>Nos vemos no curso!</p>
                <p>Qualquer dúvida entre em contato pelo WhatsApp clicando no botão abaixo, ou por email <a href="mailto:contato@mariubialli.com">contato@mariubialli.com</a></p>
                <BotaoWhats float={false} message="Oi, estou com dificuldades em acessar o curso das bonecas joias raras e gostaria de tirar algumas dúvidas." />
            </Obrigado>
        </Layout >
    );
}
