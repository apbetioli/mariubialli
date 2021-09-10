import { Container, Grid, Link, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import ColorButton from "../components/ColorButton";
import Wave from "../components/Wave";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        paddingTop: 30,
        width: "100%",
    },
    button: {
        width: "100%",
    },
    logo: {
        height: "80px",
    }
}));


function populateUtmSource() {
    useEffect(() => {
        const source = window.localStorage.getItem("utm_source");
        if (!source) {
            window.localStorage.setItem("utm_source", "instagram");
        }
    });
}

function Links() {
    const classes = useStyles();
    return (
        <>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Link className={classes.logoWrapper} href="https://instagram.com/mariubialli">
                        <img className={classes.logo} src="/logo.png" alt="" />
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="https://t.me/mariubialli"
                        className={classes.button}
                        style={ColorButton.blue}
                    >
                        Conteúdo no Telegram
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="https://www.youtube.com/mariubialli?sub_confirmation=1"
                        className={classes.button}
                        style={ColorButton.youtube}
                    >
                        Inscreva-se no YouTube
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="https://artesacriativa.com.br?utm_source=insta&utm_medium=bio"
                        className={classes.button}
                        style={ColorButton.whatsapp}
                    >
                        Desafio Artesã Criativa
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="/joiasraras"
                        className={classes.button}
                        style={ColorButton.whatsapp}
                    >
                        Curso Joias Raras Premium
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="/jesus"
                        className={classes.button}
                        style={ColorButton.whatsapp}
                    >
                        Curso Renascer em Jesus
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="/apostilas"
                        className={classes.button}
                        style={ColorButton.whatsapp}
                    >
                        Apostilas e moldes gratuitos
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="/"
                        className={classes.button}
                    >
                        mariubialli.com
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="https://www.lojamariubialli.com.br?utm_source=instagram&utm_medium=bio"
                        className={classes.button}
                    >
                        lojamariubialli.com.br
                    </ColorButton>
                </Grid>

                <Grid item xs={12}>
                    <ColorButton
                        href="http://joiasraras.mariubialli.com"
                        className={classes.button}
                        style={ColorButton.primary}
                    >
                        Acesso alunos Joias Raras
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="http://joiasraras.mariubialli.com"
                        className={classes.button}
                        style={ColorButton.primary}
                    >
                        Acesso alunos Joias Raras
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="https://app.nutror.com/v3/curso/f3f0008b898e291a6c03be63ea883c57b9f5a794"
                        className={classes.button}
                        style={ColorButton.primary}
                    >
                        Acesso alunos Desafio Artesa Criativa
                    </ColorButton>
                </Grid>
            </Grid>
        </>
    )
}

export default function Bio() {
    populateUtmSource();

    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={classes.root}>
            <Wave />
            <Links />
        </Container>
    );
}
