import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import { default as React } from "react";
import ColorButton from "../../components/ColorButton";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontSize: "1rem",
    },
    cta: {
        textAlign: "center",
        width: "100%",
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
    card: {
        backgroundColor: "white",
        margin: '16px 16px'
    },
    sectionConteudo: {
        backgroundColor: "#ffe8ed",
        marginTop: 50,
    },
    sectionGreen: {
        marginTop: 30,
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
    highlightGreen: {
        backgroundColor: "#6BFEDE",
        color: "gray",
        fontStyle: "italic",
        fontWeight: "bold",
        paddingRight: 5,
    },
    sectionWhats: {
        backgroundColor: "#25d366",
        color: "white",
    },
    heart: {
        color: "#FE6B8B",
        position: "relative",
        top: 5,
    },
    wave: {
        height: "55rem"
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
    fotoPerfil: {
        maxHeight: 300,
        maxWidth: "100%",
    },
    heading: {
        color: "#FE6B8B",
        fontWeight: "bold"
    },
    preco: {
        maxWidth: 600,
        width: "100%",
        marginBottom: 15,
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


function WhatsButton(props) {
    const classes = useStyles();
    return (
        <ColorButton className={classes.cta} style={buttonStyle} href="/whats" target="_blank">
            Entrar para o grupo no WhatsApp
        </ColorButton>
    )
}

function Promessa(props) {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item className={classes.centered} xs={12}>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <h1 className={classes.title}>Gere renda criando seus próprios moldes de feltro</h1>
                        <div className={classes.videoWrapper}>
                            <iframe
                                loading="lazy"
                                className={classes.video}
                                src={"https://www.youtube.com/embed/09wc_jPE_jA?rel=0"}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <WhatsButton {...props} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Garantia(props) {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} xs={12}>
                        <img src={require("assets/img/ls1/garantia30.webp")} alt="Garantia de 30 dias" />
                    </Grid>
                    <Grid item xs={12} className={classes.justify}>
                        <h1 className={classes.centered}>Garantia de 30 + 90 + 200%</h1>
                        <p>Você pode assistir todas as aulas e ter acesso a todos os materiais por 30 dias corridos.
                            Se por qualquer motivo você não ficar satisfeita, basta solicitar o reembolso
                            pelo email contato@mariubialli.com e você receberá 100% do valor investido de volta.</p>
                        <p>Mas eu acredito tanto no meu método que vou colocar todo o risco nas minhas costas.
                            Se em 90 dias assistindo a todas as aulas e fazendo todas as atividades você não chegar ao resultado desejado,
                            eu vou te dar uma consultoria individual para entender melhor sua dificuldade e criaremos um plano de ação.
                            Se em 90 dias, seguindo o seu plano de ação, mesmo assim não tiver resultado,
                            eu vou te devolver 100% do seu dinheiro e mais 100% do meu bolso, ou seja,
                            o dobro do valor investido pelo seu tempo e dedicação neste método.</p>
                        <CheckoutButton>Quero me inscrever sem riscos</CheckoutButton>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default function LS1Aula(props) {
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

            <Promessa {...props} />
            <Footer />
        </main>
    );
}
