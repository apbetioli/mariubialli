import { Container, Grid, Hidden, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import Image from 'next/image';
import { default as React } from "react";
import aula01 from "../../assets/img/li/aula-01.webp";
import aula02 from "../../assets/img/li/aula-02-a.webp";
import aula03 from "../../assets/img/li/aula-03.webp";
import ColorButton from "../../components/ColorButton";
import Footer from "../../components/Footer";
import Banner from "./banner";

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
    sectionGreen: {
        marginTop: 50,
        marginBottom: 30,
        backgroundColor: "#6BFEDE",
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
        marginTop: 40,
        marginBottom: 40
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
    video: {
        left: 0,
        height: "100%",
        position: "absolute",
        top: 0,
        width: "100%",
    },
    videoWrapper: {
        height: 0,
        marginTop: 25,
        marginBottom: 25,
        paddingBottom: "56.25%",
        position: "relative",
    },
    thumb: {
        maxWidth: "100%",
    },
}));

function Promessa() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item className={classes.centered} xs={12}>
                        <h3>Saia do zero e fature até 5k criando peças exclusivas e moldes em feltro</h3>
                        <div className={classes.videoWrapper}>
                            <iframe
                                loading="lazy"
                                className={classes.video}
                                src={"https://www.youtube.com/embed/IJ0uyP5yrvo?rel=0&modestbranding=1&showinfo=0"}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} >
                        <ColorButton style={ColorButton.facebook} href="https://bit.ly/mac-comunidade-aula-02" target="_blank">
                            Entrar para a comunidade da maratona no facebook
                        </ColorButton>
                        <br />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Conteudo() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item className={classes.centered} xs={12} sm={4}>
                        <Link href="/aula-01">
                            <Image src={aula01} layout="responsive" width={640} height={360} alt="" className={classes.thumb} />
                        </Link>
                    </Grid>
                    <Hidden xsDown>
                        <Grid item className={classes.centered} xs={12} sm={4}>
                            <Image src={aula02} layout="responsive" width={640} height={360} alt="" className={classes.thumb} />
                        </Grid>
                    </Hidden>
                    <Grid item className={classes.centered} xs={12} sm={4}>
                        <Link href="/aula-03">
                            <Image src={aula03} layout="responsive" width={640} height={360} alt="" className={classes.thumb} />
                        </Link>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <p>Se você ainda não está no grupo do whatsapp, entre clicando no botão para receber notificações das aulas</p>
                        <ColorButton style={ColorButton.whatsapp} href="https://bit.ly/mac-aula02-whats" target="_blank">
                            Entrar para a grupo da maratona no WhatsApp
                        </ColorButton>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
}

export default function LIInscrever(props) {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Head>
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>

            <div id="form" />

            <Banner />
            <Promessa {...props} />
            <Conteudo />
            <Footer />

        </main>
    );
}

LIInscrever.defaultProps = {
    origin: 'og',
};
