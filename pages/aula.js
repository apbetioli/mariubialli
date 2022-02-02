import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import { default as React } from "react";
import Banner from "../components/Banner";
import ColorButton from "../components/ColorButton";
import Footer from "../components/Footer";
import { WhatsApp } from "@material-ui/icons";

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
    paper: {
        padding: 10,
        marginTop: 30
    }
}));

function Video(props) {
    const classes = useStyles();
    const enable01 = new Date(props.date01) <= new Date()
    const enable02 = new Date(props.date02) <= new Date()
    const enable03 = new Date(props.date03) <= new Date()
    const enable04 = new Date(props.date04) <= new Date()
    return (
        <section>
            <Container maxWidth="sm">
                <Grid container spacing={1}>
                    <Grid item className={classes.centered}>
                        <h3>{props.rome}</h3>
                    </Grid>
                    <Grid item className={classes.centered} xs={3}>
                        <ColorButton
                            style={props.num == '01' ? ColorButton.active : ColorButton.primary}
                            href="/aula-01">
                            AULA 1<br />{enable01 ? 'ASSISTIR' : '31/01'}
                        </ColorButton>
                    </Grid>
                    <Grid item className={classes.centered} xs={3}>
                        <ColorButton
                            style={props.num == '02' ? ColorButton.active : ColorButton.primary}
                            href="/aula-02"
                            >
                            AULA 2<br />{enable02 ? 'ASSISTIR' : '02/02'}
                        </ColorButton>
                    </Grid>
                    <Grid item className={classes.centered} xs={3} >
                        <ColorButton
                            style={props.num == '03' ? ColorButton.active : ColorButton.primary}
                            href="/aula-03"
                            disabled={!enable03}>
                            AULA 3<br />{enable03 ? 'ASSISTIR' : '04/02'}
                        </ColorButton>
                    </Grid>
                    <Grid item className={classes.centered} xs={3} >
                        <ColorButton
                            style={props.num == '04' ? ColorButton.active : ColorButton.primary}
                            href="/aula-04"
                            disabled={!enable04}>
                            LIVE<br />{enable04 ? 'ASSISTIR' : '06/02 19h'}
                        </ColorButton>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <div className={classes.videoWrapper}>
                            <iframe
                                loading="lazy"
                                className={classes.video}
                                src={"https://www.youtube.com/embed/" + props.videoID + "?rel=0&modestbranding=1&showinfo=0"}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} >
                        <ColorButton style={ColorButton.primary} href="/comunidade" target="_blank">
                            Entrar na comunidade exclusiva no facebook
                        </ColorButton>

                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper className={classes.paper} >
                            <p>Entre no grupo do WhatsApp para receber as próximas aulas</p>
                            <ColorButton style={ColorButton.primary} href="/whats" target="_blank">
                                Entrar no grupo do WhatsApp
                            </ColorButton>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default function LIAula(props) {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Head>
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>

            <div id="form" />

            <Banner />

            <Video {...props} />

            <Footer />

        </main>
    );
}

LIAula.defaultProps = {
    rome: 'Gere renda extra vendendo suas bonecas de feltro',
    num: '01',
    date01: '2022-01-31 08:00:00',
    date02: '2022-02-02 07:30:00',
    date03: '2022-02-04 07:30:00',
    date03: '2022-02-05 07:30:00',
    videoID: '5GJHGYvTOq8'
};
