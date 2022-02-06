import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckBox, LocationOn } from "@material-ui/icons";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Head from "next/head";
import { default as React } from "react";
import Banner from "../../components/Banner";
import ColorButton from "../../components/ColorButton";
import Contador from "../../components/Contador";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
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

const buttonStyle = ColorButton.primary;

function CTA(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Grid container>
                <Grid item className={classes.centered} xs={12}>
                    <Form buttonText="QUERO PARTICIPAR" buttonStyle={ColorButton.blue} tag={`${props.tagPrefix}_${props.origin.toUpperCase()}`} redirectTo={`/obrigado/${props.origin}`}
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
        <section className={classes.gradientBackground}>
            <Container maxWidth="sm">
                <Grid container>
                    <Grid item className={classes.centered} xs={12}>
                        <h3>{props.rome}</h3>
                        <p>{props.description}</p>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <i><LocationOn className={classes.heart} /> </i>
                        <b>Evento online e gratuito</b>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <i><EventAvailableIcon className={classes.heart} /> </i>
                        <b>{props.dates}</b>
                    </Grid>
                </Grid>
            </Container>
            <p></p>
            <CTA {...props} />
        </section>
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

            <Contador date="2022-02-07 00:00:00" prefix="As aulas saem do ar em" />
            <Banner alt={props.name} />

            <Promessa {...props} />

            <Conteudo />
            <SobreMim />

            <section className={classes.sectionCta}>
                <Container maxWidth="sm">
                    <p>Participe da Minissérie Bonequeira de Feltro e aprenda o caminho para você criar e vender bonecas de feltro e gerar renda extra, mesmo se você nunca trabalhou com feltro.</p>
                </Container>
                <CTA {...props} />
            </section>

            <Footer />

        </main>
    );
}

LIInscrever.defaultProps = {
    origin: 'og',
    name: "Minissérie Bonequeira de Feltro",
    rome: "Gere renda vendendo suas bonecas de feltro",
    description: "Uma semana de aulas que vão te mostrar o melhor caminho para você vender suas bonecas de feltro e gerar renda do seu artesanato.",
    dates: "Dos dias 31/01 a 06/02",
    startDate: "2022-01-06 23:59:00",
    tagPrefix: "BF_LI_JAN22"
};
