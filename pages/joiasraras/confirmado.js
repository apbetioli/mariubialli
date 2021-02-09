import React from "react";
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
                <p>Qualquer dúvida entre em contato pelo email contato@mariubialli.com</p>
            </Obrigado>
        </Layout >
    );
}
