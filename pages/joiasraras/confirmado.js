import { Grid, makeStyles } from "@material-ui/core";
import { Telegram } from "@material-ui/icons";
import { useRouter } from "next/router";
import React from "react";
import ColorButton from "../../components/ColorButton";
import Layout from "../../components/Layout";
import Obrigado from "../../components/Obrigado";

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

    React.useEffect(() => {
        if (window.dataLayer) {
            window.dataLayer.push({ event: "optimize.jr.purchase.confirmed" });
            console.log("optimize.jr.purchase.confirmed");
        }
    }, []);

    return (
        <Layout {...props}>
            <Obrigado
                social={false}
                subtitle="Inscrição confirmada!"
                text=""
                title={getTitle()} >
                <p>Você receberá em até 10 minutos um email com o seu acesso ao curso.</p>
                <p>Após este tempo se não receber, veja se ele pode ter caído na pasta de spam.</p>
                <p></p>
                <p>Enquanto isso aproveite para entrar para o canal secreto joias raras no Telegram:</p>
                <Grid container spacing={3} className={classes.buttons}>
                    <Grid className={classes.centered} item md={12} xs={12}>
                        <ColorButton
                            style={ColorButton.blue}
                            href="https://t.me/joinchat/2E4j-QiRMoU2NzEx"
                            target="_blank"
                            rel="noopener"
                        >
                            <Telegram /> Entrar para o Telegram
                        </ColorButton>
                    </Grid>
                </Grid>
            </Obrigado>
        </Layout >
    );
}
