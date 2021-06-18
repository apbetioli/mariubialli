import { useRouter } from "next/router";
import React from "react";
import BotaoWhats from "../../components/BotaoWhats";
import Layout from "../../components/Layout";
import Obrigado from "../../components/Obrigado";
import { Grid, makeStyles } from "@material-ui/core";
import ColorButton from "../../components/ColorButton";

function getTitle() {
    const router = useRouter();
    let title = "Obrigada";
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


export default function JoiasRarasConfirmado(props) {
    const classes = useStyles();

    return (
        <Layout {...props}>
            <Obrigado
                social={false}
                subtitle="Inscrição confirmada!"
                text=""
                title={getTitle()} >
                <p>Você receberá em até 10 minutos um email da <b>Hotmart</b> com o seu acesso ao curso.</p>
                <p>Após este tempo se não receber, veja se ele pode ter caído na pasta de spam.</p>
                <p>Nos vemos no curso!</p>
                <p></p>
                <p>Enquanto isso aproveite para ir conhecendo os materiais na nossa lojinha:</p>
                <Grid container spacing={3} className={classes.buttons}>
                    <Grid className={classes.centered} item md={12} xs={12}>
                        <ColorButton
                            className={classes.button}
                            href="https://lojamariubialli.com.br?utm_source=mariubialli.com&utm_medium=obrigado"
                            target="_blank"
                            rel="noopener"
                            >
                            www.lojamariubialli.com.br
                        </ColorButton>
                    </Grid>
                </Grid>
                <br/>
                <p></p>
                <p>Qualquer dúvida entre em contato pelo WhatsApp clicando no botão abaixo, ou por email <a href="mailto:contato@mariubialli.com">contato@mariubialli.com</a></p>
                <BotaoWhats float={false} />
            </Obrigado>
        </Layout >
    );
}
