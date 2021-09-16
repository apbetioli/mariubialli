import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LocationOn } from "@material-ui/icons";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Head from "next/head";
import { default as React, useEffect } from "react";
import ColorButton from "../../../components/ColorButton";
import Footer from "../../../components/Footer";
import Form from "../../../components/Form";

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
        marginTop: 50,
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
        <section>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1 className={classes.title}>Inscrições encerradas!</h1>
                        <p className={classes.subtitle}>Se você quer <b>gerar renda criando seus próprios moldes de feltro</b>, inscreva-se abaixo para ser avisada da abertura de uma nova turma.</p>
                        <p className={classes.subtitle}></p>
                        <Form buttonText="QUERO SER AVISADA!" tag="AC_ESPERA_TURMA2" redirectTo={`/ac/obrigado`}
                            emailPlaceholder="Digite seu melhor email" buttonStyle={buttonStyle} showTerms={false}>
                        </Form>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
}

function SobreMim() {
    const classes = useStyles();
    return (
        <section className={classes.sectionSobreMim}>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} md={6}>
                        <img className={classes.fotoPerfil} src={require("assets/img/perfil.webp")} alt="Mari Ubialli" />
                    </Grid>
                    <Grid item md={6} className={classes.justify}>
                        <h1 className={classes.centered}>Com quem você <span className={classes.highlight}>vai aprender?</span></h1>
                        <p>Prazer, sou Mari Ubialli. Sou apaixonada por artesanato em feltro e por ensinar.</p>
                        <p>Com mais de 1300 alunas em cursos, meu objetivo é ensinar artesãs as estratégias para gerar renda criando seus próprios moldes, permitindo que vivam do que amam fazer.</p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default function AcEspera(props) {

    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Head>
                <title>Artesã Criativa - Mari Ubialli</title>
                <meta
                    name="description"
                    content="Vem aprender como gerar renda criando seus próprios moldes em feltro."
                />
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>

            <div id="form" />
            <Promessa {...props} />
            <SobreMim />
            <Footer />

        </main>
    );
}