import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckBox, LocationOn } from "@material-ui/icons";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Head from "next/head";
import { default as React } from "react";
import ColorButton from "../../components/ColorButton";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Banner from "../../components/Banner";
import Programacao from "../../components/Programacao";
import SobreMim from "../../components/Sobre";

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
    highlight: {
        backgroundColor: "#FE6B8B",
        color: "#FFF",
        fontStyle: "italic",
        fontWeight: "bold",
        paddingRight: 5,
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
    foto: {
        maxWidth: "100%",
    },
    check: {
        height: "1rem",
        width: "1rem",
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
                    <Form buttonText="QUERO ME INSCREVER" buttonStyle={ColorButton.blue} tag={`${props.tagPrefix}_${props.origin.toUpperCase()}`} redirectTo={`/obrigado/${props.origin}`}
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
                        <h3>{props.rome}</h3>
                        <p>{props.description}</p>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <i><EventAvailableIcon className={classes.heart} /> </i>{props.dates}
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <i><LocationOn className={classes.heart} /> </i>100% Online e Gratuito
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
                        <h3 className={classes.centered}>O que você terá acesso nessa Minissérie</h3>
                        <p>
                            <CheckBox className={classes.heart} /><span> <b>Aulas exclusivas</b> - A Minissérie Bonequeira de Feltro vai contar com 3 aulas exclusivas onde você vai aprender como gerar renda extra vendendo suas bonecas de feltro</span>
                        </p>
                        <p>
                            <CheckBox className={classes.heart} /><span> <b>Grupo no WhatsApp</b> - Você vai ter acesso a um grupo exclusivo no WhatsApp. Lá você vai receber todas as atividades e informações de acesso da Minissérie Bonequeira de Feltro</span>
                        </p>
                        <p>
                            <CheckBox className={classes.heart} /><span> <b>Comunidade no Facebook</b> - Haverá uma comunidade exclusiva no Facebook em que você poderá discutir sobre o conteúdo da Minissérie Bonequeira de Feltro, fazer comentários, tirar dúvidas com nossa equipe e melhor, interagir e fazer networking com pessoas que estão ali com o mesmo objetivo que você.</span>
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
                <title>{props.name} | Mari Ubialli</title>
                <meta
                    name="description"
                    content={props.rome}
                />
            </Head>

            <div id="form" />

            <Banner alt={props.name} />
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
    name: "Minissérie Bonequeira de Feltro",
    rome: "Gere renda extra vendendo suas bonecas de feltro",
    description: "3 super aulas que vão te mostrar o caminho para conquistar sua renda extra vendendo suas bonecas de feltro. Inscreva-se e reserve já o seu lugar.",
    dates: "De 24/01 a 28/01",
    tagPrefix: "BF_LI_JAN22"
};
