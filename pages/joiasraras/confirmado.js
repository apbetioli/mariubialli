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
                <p>Você receberá em até 10 minutos um email da hotmart com o acesso ao curso.</p>
                <p>Após este tempo se não receber, veja se ele pode ter caído na pasta de spam.</p>
                <p>Qualquer dúvida entre em contato pelo WhatsApp clicando no botão abaixo.</p>
                <BotaoWhats float={false} message="Oi, estou com dúvidas no acesso ao curso joias raras." />
            </Obrigado>
        </Layout >
    );
}
