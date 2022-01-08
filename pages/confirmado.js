import { makeStyles } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
    centered: {
        textAlign: "center",
    },
    buttons: {
        marginTop: theme.spacing(2)
    }
}));

export default function LIConfirmado(props) {
    const classes = useStyles();

    return (
        <Obrigado
            social={false}
            subtitle="Inscrição confirmada!"
            text=""
            title={getTitle()} >
            <p>Parabéns pela sua matrícula no <b>Clube Mari Ubialli</b>.</p>
            <p>Tenho certeza que este é só o primeiro passo para o seu sucesso em vendas com bonecas de feltro.</p>
            <p>Você receberá em até 10 minutos um email com o seu acesso.</p>
            <p>Após este tempo se não receber, veja se ele pode ter caído na pasta de spam.</p>
            <p>Nos vemos lá!</p>
            <p></p>
            <p>Qualquer dúvida entre em contato pelo WhatsApp clicando no botão abaixo, ou por email <a href="mailto:contato@mariubialli.com">contato@mariubialli.com</a></p>
            <BotaoWhats float={false} message="Oi, fiz a matrícula do Clube Mari Ubialli..." />
        </Obrigado>
    );
}
