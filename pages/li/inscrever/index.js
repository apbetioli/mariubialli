import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckBox, LocationOn } from "@material-ui/icons";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Head from "next/head";
import { default as React } from "react";
import ColorButton from "../../../components/ColorButton";
import Footer from "../../../components/Footer";
import Form from "../../../components/Form";
import Banner from "../banner";
import Programacao from "../programacao";
import SobreMim from "../sobre";

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
}));

const buttonStyle = ColorButton.whatsapp;

function CTA(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Grid container>
                <Grid item className={classes.centered} xs={12}>
                    <p><b>Inscreva-se agora gratuitamente:</b></p>
                    <Form buttonText="QUERO ME INSCREVER" buttonStyle={ColorButton.blue} tag={`AC_LI_#1_${props.origin.toUpperCase()}`} redirectTo={`/obrigado/${props.origin}`}
                        emailPlaceholder="Digite seu melhor email" buttonStyle={buttonStyle} showTerms={false}>
                    </Form>
                </Grid>
            </Grid>
        </Container>
    );
}

function Promessa(props) {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="sm">
                <Grid container>
                    <Grid item className={classes.centered} xs={12}>
                        <h3>Saia do zero e fature de 1 a 5k criando peças exclusivas e moldes em feltro</h3>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <i><EventAvailableIcon className={classes.heart} /> </i>De 18/10 a 22/10
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <i><LocationOn className={classes.heart} /> </i>100% Online e 100% Gratuito
                    </Grid>
                </Grid>
            </Container>
            <CTA {...props} />
        </div>
    );
}

function Conteudo() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="sm">
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <h3 className={classes.centered}>O que você terá acesso nessa Maratona</h3>
                        <p>
                            <CheckBox className={classes.heart} /><span> <b>Aulas exclusivas</b> - A Maratona Artesã CRIAtiva vai contar com 3 aulas exclusivas onde você vai aprender como ir do zero a 5k por mês criando peças exclusivas e moldes de feltro</span>
                        </p>
                        <p>
                            <CheckBox className={classes.heart} /><span> <b>Grupo no WhatsApp</b> - Você vai ter acesso a um grupo exclusivo no WhatsApp. Lá você vai receber todas as atividades e informações de acesso da Maratona Artesã CRIAtiva</span>
                        </p>
                        <p>
                            <CheckBox className={classes.heart} /><span> <b>Comunidade no Facebook</b> - Haverá uma comunidade exclusiva no Facebook em que você poderá discutir sobre o conteúdo da Maratona Artesã CRIAtiva, fazer comentários, tirar dúvidas com nossa equipe e melhor, interagir e fazer networking com pessoas que estão ali com o mesmo objetivo que você.</span>
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </section>
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

            <section className={classes.sectionConteudo}>
                <Programacao />
            </section>

            <Conteudo />
            <SobreMim />
            <section className={classes.sectionCta}>
                <CTA {...props} />
            </section>
            <Footer />

        </main>
    );
}

LIInscrever.defaultProps = {
    origin: 'og',
};
