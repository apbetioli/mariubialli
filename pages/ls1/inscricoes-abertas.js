import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Head from "next/head";
import { default as React } from "react";
import ColorButton from "../../../components/ColorButton";
import Footer from "../../../components/Footer";
import Form from "../../../components/Form";
import ScrollTo from "../../../components/ScrollTo";

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

function CTA() {
    const classes = useStyles();
    return (
        <section className={classes.sectionCta}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item className={classes.centered} xs={12}>
                        <ScrollTo target="#form">
                            <ColorButton className={classes.cta} style={buttonStyle}>
                                Quero me inscrever agora mesmo
                            </ColorButton>
                        </ScrollTo>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
}

function Promessa(props) {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1 className={classes.title}>Gere renda criando seus próprios moldes em feltro</h1>
                        <p className={classes.subtitle}>Uma aula ao vivo onde vou revelar as 3 estratégias que você pode usar para gerar renda criando seus próprios moldes de feltro.</p>
                        <p className={classes.subtitle}>02/09 às 20h</p>
                        <p className={classes.subtitle}>100% online e gratuito</p>
                        <p>{props.origin}</p>
                        <Form buttonText="QUERO SABER MAIS" tag="LS1" redirectTo={"/obrigado"}
                            emailPlaceholder="Digite seu melhor email" buttonStyle={buttonStyle} showTerms={false}>
                        </Form>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
}

function Programacao() {
    const classes = useStyles();
    return (
        <section className={classes.sectionConteudo}>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <img src={require("assets/img/jesus/curso.jpg")} alt="" className={classes.fotoPerfil} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1>Programação do evento</h1>
                        <p>Anota na sua agenda para não perder as 3 estratégias que você pode usar para gerar renda criando seus próprios moldes de feltro.</p>
                        <p><i><EventAvailableIcon className={classes.heart} /> </i>02/09 - Quinta-feira às 20h</p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Entregaveis() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item xs={12}>
                        <h1 className={classes.centered}>O que você vai ter acesso?</h1>
                        <p>
                            <FavoriteIcon className={classes.heart} /><span> <b>Aula exclusiva:</b> Uma aula exclusiva onde você vai aprender a gerar renda criando seus moldes de feltro</span>
                        </p>
                        <p>
                            <FavoriteIcon className={classes.heart} /><span> <b>Grupo no WhatsApp:</b> você vai ter acesso a um grupo exclusivo no WhatsApp. Lá você vai receber todas as informações em primeira mão.</span>
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function SobreMim() {
    const classes = useStyles();
    return (
        <section className={classes.sectionSobreMim}>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} md={6}>
                        <img className={classes.fotoPerfil} src={require("assets/img/perfil.jpg")} alt="Mari Ubialli" />
                    </Grid>
                    <Grid item md={6} className={classes.justify}>
                        <h1 className={classes.centered}>Prazer, mari ubialli</h1>
                        <p>Sou apaixonada por artesanato em feltro e por ensinar.</p>
                        <p>Com mais de 1300 alunas em cursos, meu objetivo é ensinar artesãs as estratégias para gerar renda criando seus próprios moldes, permitindo que vivam do que amam fazer.</p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default function DesafioEuVetorizoInscrever(props) {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Head>
                <title>Desafio Eu Vetorizo - Mari Ubialli</title>
                <meta
                    name="description"
                    content="Vem aprender como gerar renda criando seus próprios moldes em feltro."
                />
                <meta
                    name="keywords"
                    content="feltro, artesanato, costura, ponto caseado, ponto reto, ponto alinhavo, passo a passo, diy, moldes gratuitos, apostilas gratuitas, bonecas, boneca em feltro, criar moldes, criar apostilas"
                />
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>

            <div id="form" />
            <Promessa />
            <Programacao />
            <Entregaveis />
            <SobreMim />
            <CTA />
            <Footer />
        </main>
    );
}

export async function getStaticProps(context) {
    const origin = context.params.origin
    return { props: { origin }, revalidate: 1 };
}

export async function getStaticPaths() {
    const paths = [
        { params: { origin: 'instagram' } },
        { params: { origin: 'faceads' } },
        { params: { origin: 'googleads' } },
        { params: { origin: 'telegram' } },
        { params: { origin: 'email' } }
    ];

    return {
        paths,
        fallback: true,
    };
}

