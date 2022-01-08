import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import { default as React } from "react";
import ColorButton from "../../components/ColorButton";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Banner from "../../components/Banner";
import SobreMim from "../../components/Sobre";
import image from "assets/img/li/banner-mbf.webp";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontSize: "1rem",
    },
    grid: {
        paddingTop: 30,
        paddingBottom: 30,
    },
    centered: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
    },
    justify: {
        textAlign: "justify",
    },
    card: {
        backgroundColor: "white",
        margin: '16px 16px',

    },
    cta: {
        textAlign: "center",
        width: "100%",
    },
    highlight: {
        backgroundColor: "#FE6B8B",
        color: "#FFF",
        fontStyle: "italic",
        fontWeight: "bold",
        paddingRight: 5,
    },
    title: {
        fontSize: "2em",
        fontStyle: "italic",
        fontWeight: "bold",
    },
    foto: {
        maxWidth: "100%",
    },
}));

const buttonStyle = ColorButton.whatsapp;

function Promessa(props) {
    const classes = useStyles();
    return (
        <section className={classes.sectionPromessa}>
            <Container maxWidth="sm">
                <Grid container>
                    <Grid item className={classes.centered} xs={12}>
                        <h3>As Matrículas estão encerradas no momento!</h3>
                        <p>Mas você pode cadastrar seu e-mail e entrar na nossa lista de espera para receber informações em primeira mão sobre as próximas oportunidades:</p>
                        <p></p>
                        <Form buttonText="QUERO SER AVISADA!" tag="ESPERA_TURMA3" redirectTo={`/espera/obrigado`}
                            emailPlaceholder="Digite seu melhor email" buttonStyle={buttonStyle} 
                            showTerms={true}
                            showPhone={true} 
                            requirePhone={false}>
                        </Form>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
}

export default function LIEspera(props) {

    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Head>
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>

            <div id="form" />
            <Banner image={image} />
            <Promessa {...props} />
            <SobreMim />
            <Footer />

        </main>
    );
}