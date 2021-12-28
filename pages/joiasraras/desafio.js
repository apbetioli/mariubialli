import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import HttpsIcon from '@material-ui/icons/Https';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Head from "next/head";
import { useRouter } from "next/router";
import { default as React } from "react";
import BotaoWhats from "../../components/BotaoWhats";
import ColorButton from "../../components/ColorButton";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import ScrollTo from "../../components/ScrollTo";

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
        margin: '16px 16px',

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
        fontSize: "2.5em",
        fontStyle: "italic",
        fontWeight: "bold",
    },
    subtitle: {
        fontWeight: "bold",
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

const rocks = [
    { title: "Minis", color: "#6BFEDE", image: require("assets/img/jr/premium0.webp"), description: "7 bonecas joias raras mini. Elas são menores, com 20cm, e muito mais fofas não acha?💖" },
    { title: "Ursinhas", color: "#FE6B8B", image: require("assets/img/jr/premium2.webp"), description: "E agora as bonecas tem companhia, essa ursinha suuuuper fofinha em 2 cores: rosa e verde🥰" },
    { title: "Mobile", color: "#6BFEDE", image: require("assets/img/jr/premium3.webp"), description: "Aprenda comigo a montar esse mobile maravilhoso tema joias raras🌼" },
    { title: "Guirlanda", color: "#FE6B8B", image: require("assets/img/jr/premium4.webp"), description: "Sem falar nessa guirlanda super especial. Você vai aprender a customizar o nome que quiser e algumas técnicas extras🌹" },
    { title: "Pergolado", color: "#6BFEDE", image: require("assets/img/jr/premium5.webp"), description: "E a cereja do bolo: o Pergolado. Essa peça é única e nunca vi nada parecido. A inspiração veio de um sonho e vou mostrar em detalhes como fazer. Além disso as bonecas também são diferentes, pois elas podem sentar no balanço🍒" },
];

const faqs = [
    { pergunta: "1. Entre para o grupo", resposta: "Clique no botão acima que você será direcionada para o grupo do facebook para participar e interagir com as outras participantes." },
    { pergunta: "2. Poste sua boneca", resposta: "Poste uma ou mais fotos das bonecas Joias Raras que você tenha feito e já irá ganhar uma análise da Mari sobre a sua boneca" },
    { pergunta: "3. Poste um comprovante de venda", resposta: "Opcional. Se quiser concorrer a um kit de recortes à laser e outros materiais para confecção das 7 joias raras, poste uma foto que comprove uma venda de uma das bonecas Joias Raras e estará concorrendo." },
    { pergunta: "Não fez nenhuma boneca até hoje ou não vendeu?", resposta: "Não tem problema. Você tem até dia 09/01 para fazer sua boneca e postar no grupo. Quem sabe não é a chance que você esperava para começar?" },
];

const buttonStyle = ColorButton.blue;

function CTA(props) {
    const classes = useStyles();
    return (
        <ScrollTo target="#pricing">
            <ColorButton className={classes.cta} style={buttonStyle}>
                {props.children}
            </ColorButton>
        </ScrollTo>
    );
}

function CheckoutButton(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let checkoutURL = "https://pay.hotmart.com/B46628840G?off=trdhkf3d&checkoutMode=10"
    const router = useRouter()
    if (router.query.hideBillet)
        checkoutURL += "&hideBillet=" + router.query.hideBillet

    return (
        <>
            <ColorButton className={classes.cta} onClick={handleClickOpen} style={buttonStyle}>
                {props.children}
            </ColorButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Inscreva-se
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Form buttonText="Continuar" tag="JRPREMIUM-CHECKOUT" redirectTo={checkoutURL}
                        emailPlaceholder="Seu email de acesso ao curso" checkout={true} buttonStyle={buttonStyle} showName={true} showPhone={true} >
                    </Form>
                    <p className={classes.justify}>
                        <Typography variant="body2" color="textSecondary" component="span">
                            <i className={classes.heart}><HttpsIcon /></i> Compra segura. Você será redirecionada para a Hotmart para concluir o pagamento.
                        </Typography>
                    </p>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </>
    );
}

function Entregaveis() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="sm">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1>O que você vai receber?</h1>
                    </Grid>

                    {rocks.map((rock) => (
                        <Grid container item xs={12} spacing={0} key={rock.title}>
                            <Card raised={true} className={classes.card}>
                                <CardMedia
                                    component="img"
                                    alt={rock.title}
                                    image={rock.image}
                                    title={rock.title}
                                    className={classes.fotoCard}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.centered}   >
                                        <span className={classes.highlight}>{rock.title}</span>
                                    </Typography>
                                    <Typography color="textSecondary" component="p" className={classes.justify} >
                                        {rock.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </section>
    );
}

function Promessa() {
    const classes = useStyles();
    return (
        <section className={classes.sectionSobreMim}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item className={classes.centered} xs={12} sm={6}>
                        <h1 className={classes.title}><span className={classes.highlight}>DESAFIO</span> Minha Joia Rara Está à Venda</h1>
                        <p className={classes.subtitle}>GANHE uma análise da sua boneca pela Mari Ubialli e CONCORRA a um kit completo de recortes das 7 bonecas.</p>
                        <CTA>
                            Entre para o grupo e participe
                        </CTA>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={6}>
                        <img src={require("assets/img/jr/mari-desafio.png")} alt="" className={classes.foto} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Preco() {
    const classes = useStyles();
    return (
        <section className={classes.sectionGreen}>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <img src={require("assets/img/tudoisso.webp")} alt="" className={classes.preco} />
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <img src={require("assets/img/jr/price49.webp")} alt="" className={classes.preco} />
                        <CheckoutButton>
                            Quero ser premium
                        </CheckoutButton>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function DuvidasWhats() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1>Tem dúvidas? Fale conosco no WhatsApp</h1>
                        <BotaoWhats float={false} message="Oi, gostaria de saber mais sobre o Curso Joias Raras Premium" />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}


function FAQs() {
    const classes = useStyles();
    return (
        <section className={classes.sectionFaq}>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item xs={12}>
                        <h2 className={classes.centered}>Como participar?</h2>
                        {faqs.map((faq, index) => (
                            <Accordion key={"id" + index} defaultExpanded={true}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={"panel" + index + "-content"}
                                    id={"panel" + index + "-header"}
                                >
                                    <Typography className={classes.heading} component="h2">{faq.pergunta}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.justify} color="textSecondary" >{faq.resposta}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <CTA>
                            Entre para o grupo e participe
                        </CTA>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}


export default function JoiasRarasUpgradePremium(props) {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Head>
                <title>Joias Raras - Desafio</title>
                <meta
                    name="description"
                    content="Participe do desafio."
                />
                <meta
                    name="keywords"
                    content="feltro, artesanato, costura, ponto caseado, ponto reto, ponto alinhavo, passo a passo, diy, moldes gratuitos, apostilas gratuitas, bonecas, boneca em feltro"
                />
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>
            <Promessa />
            <FAQs />
            <Footer />
        </main>
    );
}
