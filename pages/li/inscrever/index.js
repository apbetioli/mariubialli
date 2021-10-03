import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckBox, LocationOn } from "@material-ui/icons";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Head from "next/head";
import { default as React } from "react";
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
                        <h3>Descubra como ir <span className={classes.highlight}>do zero a 5k</span> por mês criando peças exclusivas e moldes em feltro</h3>
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

function Programacao() {
    const classes = useStyles();
    return (
        <section className={classes.sectionConteudo}>
            <Container maxWidth="sm">
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <h3 className={classes.centered}>Confira o cronograma</h3>
                        <p>
                            <EventAvailableIcon className={classes.heart} /><span> <b>18/10 - Aula 01</b> - Como começar a criar e não depender mais de moldes existentes</span>
                        </p>
                        <p>
                            <EventAvailableIcon className={classes.heart} /><span> <b>20/10 - Aula 02</b> - Como vender todos os dias as suas criações</span>
                        </p>
                        <p>
                            <EventAvailableIcon className={classes.heart} /><span> <b>22/10 - Aula 03</b> - Conteúdo surpresa</span>
                        </p>
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

function SobreMim() {
    const classes = useStyles();
    return (
        <section className={classes.sectionSobreMim}>
            <Container maxWidth="sm">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} md={6}>
                        <img className={classes.fotoPerfil} src={require("assets/img/perfil.webp")} alt="Mari Ubialli" />
                    </Grid>
                    <Grid item md={6} className={classes.justify}>
                        <h3 className={classes.centered}>Com quem você vai aprender?</h3>
                        <p>Prazer, sou Mari Ubialli. Sou apaixonada por artesanato em feltro e por ensinar.</p>
                        <p>Com mais de 1500 alunas em cursos, meu objetivo é ensinar artesãs como ir do zero a 5k por mês criando peças exclusivas e seus próprios moldes em feltro, permitindo que vivam do que amam fazer.</p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.sectionSobreMim}>
            <div className={classes.centered}>
                <img className={classes.foto} src={require("assets/img/li/banner-mac.webp")} alt="Maratona Artesã Criativa" />
            </div>
        </div>
    );
}

export default function LIInscrever(props) {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Head>
                <title>Artesã Criativa - Mari Ubialli</title>
                <meta
                    name="description"
                    content="Vem aprender como ir do zero a 5k criando peças exclusivas e seus próprios moldes em feltro."
                />
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>

            <div id="form" />
            <Banner />

            <Promessa {...props} />
            <Programacao />
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
