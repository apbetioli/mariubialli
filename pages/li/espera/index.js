import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import { default as React } from "react";
import ColorButton from "../../../components/ColorButton";
import Footer from "../../../components/Footer";
import Form from "../../../components/Form";
import Banner from "../banner";
import SobreMim from "../sobre";
import image from "assets/img/li/banner-dac.webp";

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
    sectionCta: {
        marginBottom: 30,
        marginTop: 50,
    },
    sectionConteudo: {
        backgroundColor: "#ffe8ed",
        marginTop: 50,
    },
    sectionSobreMim: {
        backgroundColor: "#FE6B8B",
        color: "#FFF",
    },
    highlight: {
        backgroundColor: "#FE6B8B",
        color: "#FFF",
        fontStyle: "italic",
        fontWeight: "bold",
        paddingRight: 5,
    },
    highlightText: {
        color: "#FE6B8B",
        fontStyle: "italic",
        fontWeight: "bold",
    },
    heart: {
        color: "#FE6B8B",
        position: "relative",
        top: 5,
    },
    title: {
        fontSize: "2em",
        fontStyle: "italic",
        fontWeight: "bold",
    },
    subtitle: {
        color: "gray",
        fontSize: "1.3em",
    },
    fotoCard: {
        maxHeight: 600,
    },
    fotoPerfil: {
        maxHeight: 300,
        maxWidth: "100%",
    },
    heading: {
        color: "#FE6B8B",
        fontWeight: "bold"
    },
    precoAviso: {
        color: "gray",
        fontSize: "0.8rem",
        marginBottom: 14,
    },
    foto: {
        maxWidth: "100%",
    },
    fotoTestemunho: {
        width: "100%",
    },
    check: {
        height: "1rem",
        width: "1rem",
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
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
                        <Form buttonText="QUERO SER AVISADA!" tag="AC_ESPERA_TURMA3" redirectTo={`/espera/obrigado`}
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
            <Banner image={image} alt="Desafio Artesã Criativa" />
            <Promessa {...props} />
            <SobreMim />
            <Footer />

        </main>
    );
}