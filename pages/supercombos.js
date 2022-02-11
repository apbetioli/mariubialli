import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Paper } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HttpsIcon from '@material-ui/icons/Https';
import price from 'assets/img/li/price.webp';
import tudoIsso from 'assets/img/tudoisso.webp';
import Head from "next/head";
import Image from 'next/image';
import { useRouter } from "next/router";
import { default as React } from "react";
import BotaoWhats from "../components/BotaoWhats";
import ColorButton from "../components/ColorButton";
import Footer from "../components/Footer";
import Form from "../components/Form";
import SobreMim from "../components/Sobre";

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
        margin: '0'
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
    sectionPrimary: {
        backgroundColor: "#151515",
        backgroundImage: "linear-gradient(135deg, rgba(254, 107, 139, 0.8), #151515)",
        color: "#fe6b8b",
        height: 200,
        paddingTop: 50
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
    containerFull: {}
}));

const who = [
    "Quer parar de competir por preço",
    "Está buscando uma nova fonte de renda",
    "Recusa encomendas por falta de moldes",
    "Trabalha com feltro e quer se diferenciar, colocar sua identidade nas peças",
    "Está decepcionada com o instagram que não entrega mais suas publicações",
    "Impulsiona posts e não vê resultado",
    "Vende apostilas somente no lançamento e depois nada",
    "Quer aprender as técnicas para vender todos os dias"
]

const deliverables = [
    {
        title: "Curso Iniciantes em Feltro",
        image: require("assets/img/li/courses/1.webp"),
        description: "Para você que entrou agora, este curso aborda as técnicas base fundamentais para você começar a fazer lindas peças em feltro. Vai aprender os principais pontos, tudo sobre moldes e feltro."
    },
    {
        title: "Curso Bonecas Joias Raras Premium",
        image: require("assets/img/li/courses/2.webp"),
        description: "O curso mais completo de bonecas que conquistou muitos corações. Você vai aprender a fazer as 7 joias raras: Esmeralda, Rubi, Ametista, Angelita, Ágata, Rose e Jade. E em 2 tamanhos diferentes. Além de poder fazer combinações entre elas e ter milhares de opções."
    },
    {
        title: "Curso Projetos Com Bonecas",
        image: require("assets/img/li/courses/3.webp"),
        description: "Várias opções de projetos para você compor com bonecas. Entre eles: Bastidores, Guirlandas, Móbile e o famoso Pergolado com balanço."
    },
    {
        title: "Curso Bonecas Articuladas (Em Breve)",
        image: require("assets/img/li/courses/4.webp"),
        description: "Este curso ainda em desenvolvimento será adicionado ao Clube em Breve. Com ele o céu será o limite. Você terá muitas opções de roupas, como por exemplo o guarda-roupa profissões. Além de ser um projeto pensado para facilitar e reduzir o seu tempo confeccionando as bonecas."
    },
    {
        title: "Curso de Precificação",
        image: require("assets/img/li/courses/7.webp"),
        description: "Este curso é uma das bases da renda extra e é explorado em detalhes. Você poderá baixar uma planilha para te ajudar a fazer os cálculos e orçamentos.",
    },
    {
        title: "Curso de Fotografia e Edição",
        image: require("assets/img/li/courses/8.webp"),
        description: "Aprenda a tirar fotos das suas bonecas que chamam a atenção. Componha cenários e use elementos que valorizem a boneca. Aprenda a editar as fotos para melhorar iluminação, corrigir defeitos, eliminar distrações e deixar o fundo branco.",
    },
    {
        title: "Curso Dominando o Instagram",
        image: require("assets/img/li/courses/9.webp"),
        description: "Neste curso você vai aprender tudo sobre Instagram e como deixá-lo atraente e pronto para venda. Você vai saber avaliar o seu instagram e tudo o que precisa melhorar nele.",
    },
    {
        title: "Curso de Vendas e Entrega",
        image: require("assets/img/li/courses/10.webp"),
        description: "Neste curso você vai aprender tudo sobre venda, onde vender, como criar loja no facebook e instagram, marketplaces, loja virtual e também tudo sobre entrega pessoalmente e via transportadoras, frete, etc.",
    },
    {
        title: "Curso de anúncios nas redes sociais",
        image: require("assets/img/li/courses/11.webp"),
        description: "Você vai aprender como automatizar as suas vendas utilizando marketing digital e aumentar os seus resultados. ",
    },
    {
        title: "Comunidade",
        image: require("assets/img/li/comunidade.webp"),
        description: "A comunidade será o lugar para postar seus resultados, consultar e tirar dúvidas. Interagir e fazer parcerias.",
        price: "R$ 197"
    }
];

const bonus = [
    {
        title: "Curso Desafio Artesã Criativa",
        image: require("assets/img/li/courses/12.webp"),
        description: "Este curso é para quem quer se libertar de moldes. Você vai aprender o processo de criação e começará a criar seus próprios moldes, apostilas e cursos.",
        price: "R$ 597"
    },
    {
        title: "Curso Costurando Bonecas de Feltro na Máquina",
        image: require("assets/img/li/courses/13.webp"),
        description: "Você vai perder o medo da máquina e vai aprender como acelerar algumas partes do processo de confecção, o que fará com que tenha mais lucro nas vendas.",
        price: "R$ 197"
    },
    {
        title: "Curso Renascer em Jesus",
        image: require("assets/img/li/courses/5.webp"),
        description: "Este curso é um bonus extra. Aprenda a fazer uma guirlanda com técnica em stêncil e um Jesus que pára em pé. Um projeto fantástico para a Páscoa e Natal.",
        price: "R$ 97"
    },
    {
        title: "20% de desconto em materiais",
        image: require("assets/img/li/desconto.webp"),
        description: "Você vai receber 20% de desconto na lojamariubialli.com.br para comprar feltro, recortes a laser e outros materiais, durante o prazo de vigência do clube.",
    }
];

const bonusVIP = [
    {
        title: "Mentoria em Grupo",
        image: require("assets/img/li/live.webp"),
        description: "Para matrículas até 23:59 - você irá ganhar a mentoria que é um acelerador de resultados. A mentoria é o presente preferido das alunas.",
        price: "R$ 5000"
    }
];

const faqs = [
    {
        pergunta: "Posso comprar mais de um combo?",
        resposta: "Sim, é só fazer a compra de um combo, depois voltar e comprar os outros."
    },
    {
        pergunta: "Quando começa o curso?",
        resposta: "Os cursos são 100% online e estão gravados. Assim que você fizer sua matrícula, você receberá um email com o acesso a todos os cursos."
    },
    {
        pergunta: "Por quanto tempo vou poder assistir as aulas?",
        resposta: "O acesso aos cursos tem duração de 1 ano."
    },
];

const buttonStyle = ColorButton.whatsapp;

function CheckoutButton(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let checkoutURL = (props.checkoutURL || "/checkout") + "?1=1"
    const router = useRouter()
    if (router.query.utm_source)
        checkoutURL += "&utm_source=" + router.query.utm_source
    if (router.query.utm_medium)
        checkoutURL += "&utm_medium=" + router.query.utm_medium
    if (router.query.utm_campaign)
        checkoutURL += "&utm_campaign=" + router.query.utm_campaign
    if (router.query.utm_content)
        checkoutURL += "&utm_content=" + router.query.utm_content
    if (router.query.utm_term)
        checkoutURL += "&utm_term=" + router.query.utm_term

    return (
        <>
            <ColorButton className={classes.cta} onClick={handleClickOpen} style={buttonStyle}>
                {props.children}
            </ColorButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    {props.title || "Matricule-se"}
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Form buttonText="Continuar" tag={props.tag} redirectTo={checkoutURL}
                        emailPlaceholder="Seu email de acesso" checkout={true} buttonStyle={buttonStyle} showName={true} showPhone={true} >
                    </Form>
                    <p className={classes.justify}>
                        <Typography variant="body2" color="textSecondary" component="span">
                            <i className={classes.heart}><HttpsIcon /></i> Compra segura. Você será redirecionada para a Eduzz para concluir o pagamento.
                        </Typography>
                    </p>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </>
    );
}

function Entregaveis({ name, deliverables }) {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="sm">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h3 className={classes.highlight}>{name}</h3>
                    </Grid>

                    {deliverables.map((item) => (
                        <Grid container item xs={12} md={6} spacing={0} key={item.title}>
                            <Card raised={true} className={classes.card}>
                                <CardMedia
                                    component="img"
                                    alt={item.title}
                                    image={item.image}
                                    title={item.title}
                                />
                                <CardContent>
                                    <h3>{item.title}</h3>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.justify} >
                                        {item.description}
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
        <section>
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item className={classes.centered} xs={12}>
                        <p>Para você que não teve a oportunidade de entrar para o <b>CLUBE MARI UBIALLI</b> dessa vez, separamos combos exclusivos com preços promocionais para você ter resultados desde já</p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function DedoNaFerida() {
    const classes = useStyles();
    return (
        <section className={classes.sectionConteudo}>
            <Container maxWidth="sm">
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <h1 className={classes.centered}>Este desafio é <span className={classes.highlight}>especialmente para você</span> que</h1>
                        {who.map((item, index) => (
                            <p key={"id" + index}>
                                <i><FavoriteIcon className={classes.heart} /> </i>{item}
                            </p>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Desejo() {
    const classes = useStyles();
    return (
        <section className={classes.sectionConteudo}>
            <Container maxWidth="sm">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item xs={12}>
                        <h3 className={classes.centered}>Seu sonho é <span className={classes.highlight}>viver de feltro?</span></h3>
                        <p>
                            Meu objetivo é levar você artesã que já trabalha com artesanato em feltro a criar seus moldes para se diferenciar no mercado.
                        </p>
                        <p>
                            Crie suas próprias peças exclusivas, adapte projetos colocando o seu toque pessoal e venda a sua apostila ou curso.
                        </p>
                        <p>
                            Com uma metodologia testada e validada você vai chegar lá muito mais rápido e gastando muito menos tempo e dinheiro.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Metodo() {
    const classes = useStyles();
    return (
        <section className={classes.sectionConteudo}>
            <Container maxWidth="sm">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item xs={12} className={classes.justify}>
                        <h1 className={classes.centered}>Venda <span className={classes.highlight}>todos os dias</span></h1>
                        <p>
                            O <b>Método DAC (Divulgação Ativa e Conexão)</b> foi o método que eu concebi para ter vendas todos os dias.
                        </p>
                        <p>
                            Você precisa divulgar ativamente todos os dias para novas pessoas além de divulgar para sua audiência.
                        </p>
                        <p>
                            Crie conexão emocional com a sua cliente, mostrando não o seu produto mas o benefício que ele vai gerar.
                        </p>
                        <p>
                            Esta estratégia vai te trazer o reconhecimento que você busca!
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Bonus() {
    const classes = useStyles();

    return (
        <section>
            <Container maxWidth="sm">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h3>E não podem faltar os <span className={classes.highlight}>Bônus</span></h3>
                    </Grid>

                    {bonus.map((item) => (
                        <Grid container item xs={12} md={6} spacing={0} key={item.title}>
                            <Card raised={true} className={classes.card}>
                                <CardMedia
                                    component="img"
                                    alt={item.title}
                                    image={item.image}
                                    title={item.title}
                                />
                                <CardContent>
                                    <h3>{item.title}</h3>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.justify} >
                                        {item.description}
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

function BonusVIP() {
    const classes = useStyles();

    return (
        <section className={classes.sectionConteudo}>
            <Container maxWidth="sm">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h3>Presentes <span className={classes.highlight}>exclusivos</span></h3>
                        <p>Se você se matricular no primeiro dia, segunda-feira 07/02</p>
                    </Grid>

                    {bonusVIP.map((item) => (
                        <Grid container item xs={12} md={6} spacing={0} key={item.title}>
                            <Card raised={true} className={classes.card}>
                                <CardMedia
                                    component="img"
                                    alt={item.title}
                                    height="300"
                                    image={item.image}
                                    title={item.title}
                                />
                                <CardContent>
                                    <h3>{item.title}</h3>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.justify} >
                                        {item.description}
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

function Preco() {
    const classes = useStyles();
    return (
        <section className={classes.sectionGreen}>
            <Container maxWidth="sm">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <Image src={tudoIsso} layout="responsive" width={500} height={200} alt="" className={classes.preco} />
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <Image src={price} layout="responsive" width={400} height={160} alt="" className={classes.preco} />
                        <div className={classes.precoAviso}></div>
                        <CheckoutButton>
                            Quero me matricular agora
                        </CheckoutButton>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Garantia() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="sm">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} xs={12}>
                        <img className={classes.foto} src={require("assets/img/garantia7.png")} alt="Garantia de 7 dias" />
                    </Grid>
                    <Grid item xs={12} className={classes.justify}>
                        <h1 className={classes.centered}>SATISFAÇÃO garantida</h1>
                        <p>Você terá acesso completo a todas as aulas e materiais. Se por qualquer motivo você não ficar satisfeita, dentro de 7 dias, basta solicitar o reembolso e você receberá todo seu dinheiro de volta.</p>
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
            <Container maxWidth="sm">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item xs={12}>
                        <h1 className={classes.centered}>Dúvidas frequentes</h1>
                        {faqs.map((faq, index) => (
                            <Accordion key={"id" + index} defaultExpanded={false}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={"panel" + index + "-content"}
                                    id={"panel" + index + "-header"}
                                >
                                    <Typography className={classes.heading} component="h3">{faq.pergunta}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.justify} color="textSecondary" >{faq.resposta}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
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
            <Container maxWidth="sm">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1>Ainda tem dúvidas? Fale conosco no WhatsApp</h1>
                        <BotaoWhats message="Olá, gostaria de saber mais sobre os Combos Promocionais" float={false} />
                        <BotaoWhats message="Oi, gostaria de saber mais sobre os Combos Promocionais" float={true} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Testemunhos1() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="sm" className={classes.centered}>
                <Grid container className={classes.grid} spacing={1}>
                    <Grid item className={classes.centered} xs={12}>
                        <h3>Resultados surpreendentes de <span className={classes.highlight}>pessoas como você</span></h3>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <div className={classes.videoWrapper}>
                                <iframe
                                    loading="lazy"
                                    className={classes.video}
                                    src={"https://www.youtube.com/embed/ccuA_fBH4U8?rel=0&modestbranding=1&showinfo=0"}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
}

const materiais = new Date("2022-02-07 10:00:00");
const mentoria = new Date("2022-02-08 00:00:00");
const fechaCarrinho = new Date("2022-02-12 00:00:00")

export default function LIMatriculasAbertas(props) {
    const classes = useStyles();
    const router = useRouter();

    let countdownMessage = "Os Super combos acabam em"
    let countdownDeadline = materiais;

    return (
        <main className={classes.root}>
            <Head>
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>

            <div className={classes.sectionPrimary}>
                <div className={classes.centered}>
                    <h1>Combos exclusivos por tempo limitado</h1>
                </div>
            </div>

            <Promessa />

            <Container maxWidth="sm" className={classes.containerFull}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card raised={true} className={classes.card}>
                            <CardMedia
                                component="img"
                                alt="COMBO 1"
                                image={require("assets/img/li/combo1.svg")}
                                title="COMBO 1"
                            />
                            <CardContent>
                                <p>✅ CURSO BONECAS JOIAS RARAS PREMIUM</p>
                                <p>✅ CURSO PROJETOS COM BONECAS</p>
                                <p>✅ BÔNUS: CURSO INICIANTES EM FELTRO</p>
                                <h2>TUDO O QUE VOCÊ VAI receber</h2>
                                <p><b>CURSO BONECAS JOIAS RARAS PREMIUM:</b> O curso mais completo de bonecas que conquistou muitos corações. Você vai aprender a fazer as 7 Joias Raras: Esmeralda, Rubi, Ametista, Angelita, Ágata, Rose e Jade. E em 2 tamanhos diferentes. Além de poder fazer combinações entre elas e ter milhares de opções.</p>
                                <p><img src={require("assets/img/li/bonecas.webp")} className={classes.foto}></img></p>
                                <p><b>CURSO PROJETOS COM BONECAS:</b> Para desbloquear as possibilidades do que você pode fazer com bonecas, este curso te dará várias opções de projetos, passo a passo, para você compor com bonecas. Entre eles: Bastidores, Guirlandas, Móbile e o famoso Pergolado com balanço. </p>
                                <p><img src={require("assets/img/li/premium.jpg")} className={classes.foto}></img></p>
                                <p><b>BÔNUS: CURSO INICIANTES EM FELTRO:</b> Para você que está iniciando agora no feltro, este curso aborda as técnicas base fundamentais para você começar a fazer lindas peças em feltro. Vai aprender os principais pontos, tudo sobre moldes e feltro. </p>
                                <p>ACESSO POR 1 ANO</p>
                                <h3>De <s>R$297</s> por <span className={classes.highlight}>R$197</span> à vista</h3>
                                <h3>Ou <span className={classes.highlight}>12x R$19,70</span> no cartão ou 2 cartões</h3>
                            </CardContent>
                            <CardActions>
                                <CheckoutButton title="Combo 1 - Bonequeira Premium" checkoutURL="https://sun.eduzz.com/1278693" tag="DS_COMBO1_CHECKOUT">Quero ser bonequeira premium</CheckoutButton>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card raised={true} className={classes.card}>
                            <CardMedia
                                component="img"
                                alt="COMBO 2"
                                image={require("assets/img/li/combo2.svg")}
                                title="COMBO 2"
                            />
                            <CardContent>
                                <p>✅ <span className={classes.highlight}>PRÉ-VENDA:</span> CURSO BONECAS ARTICULADAS</p>
                                <p>✅ BÔNUS: CURSO INICIANTES EM FELTRO</p>
                                <h2>TUDO O QUE VOCÊ VAI receber</h2>
                                <p><b><span className={classes.highlight}>PRÉ-VENDA:</span> CURSO BONECAS ARTICULADAS:</b> Este curso ainda em desenvolvimento será adicionado ao Clube em Breve. Com ele o céu será o limite. Você terá muitas opções de roupas, como por exemplo o guarda-roupa profissões. Além de ser um projeto pensado para facilitar e reduzir o seu tempo confeccionando as bonecas.</p>
                                <p><b><span className={classes.highlight}>ATENÇÃO:</span> Este curso ainda não está gravado e está em produção. Aproveite o valor promocional de pré-venda.</b></p>
                                <p><b>BÔNUS: CURSO INICIANTES EM FELTRO:</b> Para você que está iniciando agora no feltro, este curso aborda as técnicas base fundamentais para você começar a fazer lindas peças em feltro. Vai aprender os principais pontos, tudo sobre moldes e feltro. </p>
                                <p>ACESSO POR 1 ANO - contado a partir da data de entrega do curso</p>
                                <h3>De <s>R$247</s> por <span className={classes.highlight}>R$147</span> à vista</h3>
                                <h3>Ou <span className={classes.highlight}>12x R$14,70</span> no cartão ou 2 cartões</h3>
                            </CardContent>
                            <CardActions>
                                <CheckoutButton title="Combo 2 - Bonequeira articulada" checkoutURL="https://sun.eduzz.com/1278730" tag="DS_COMBO2_CHECKOUT">Quero ser bonequeira articulada</CheckoutButton>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card raised={true} className={classes.card}>
                            <CardMedia
                                component="img"
                                alt="COMBO 3"
                                image={require("assets/img/li/combo3.svg")}
                                title="COMBO 3"
                            />
                            <CardContent>
                                <p>✅ CURSO RENASCER EM JESUS</p>
                                <p>✅ BÔNUS: CURSO INICIANTES EM FELTRO</p>
                                <h2>TUDO O QUE VOCÊ VAI RECEBER</h2>
                                <p><b>CURSO RENASCER EM JESUS:</b> Um projeto que vende muito na Páscoa e Natal. Neste curso você aprenderá a fazer um Jesus que para em pé e também um Jesus menor junto com uma linda Guirlanda arco-íris feita com pintura em stêncil. Você aprenderá técnicas diferenciadas para seus projetos.</p>
                                <p><img src={require("assets/img/li/jesus.jpg")} className={classes.foto}></img></p>
                                <p><b>BÔNUS: CURSO INICIANTES EM FELTRO:</b> Para você que está iniciando agora no feltro, este curso aborda as técnicas base fundamentais para você começar a fazer lindas peças em feltro. Vai aprender os principais pontos, tudo sobre moldes e feltro. </p>
                                <p>ACESSO POR 1 ANO</p>
                                <h3>De <s>R$97</s> por <span className={classes.highlight}>R$47</span> à vista</h3>
                                <h3>Ou <span className={classes.highlight}>11x R$5,06</span> no cartão ou 2 cartões</h3>
                            </CardContent>
                            <CardActions>
                                <CheckoutButton title="Combo 3 - Renascer em Jesus" checkoutURL="https://sun.eduzz.com/1278735" tag="DS_COMBO3_CHECKOUT">Quero Jesus</CheckoutButton>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card raised={true} className={classes.card}>
                            <CardMedia
                                component="img"
                                alt="COMBO 4"
                                image={require("assets/img/li/combo4.svg")}
                                title="COMBO 4"
                            />
                            <CardContent>
                                <p>✅ CURSO DE PRECIFICAÇÃO</p>
                                <h2>TUDO O QUE VOCÊ VAI RECEBER</h2>
                                <p><b>CURSO DE PRECIFICAÇÃO:</b> Aprenda a precificar corretamente suas bonecas e projetos em feltro. Este curso é uma das bases da renda extra e é explorado em detalhes. Você poderá baixar uma planilha para te ajudar a fazer os cálculos e orçamentos.</p>
                                <p>ACESSO POR 1 ANO</p>
                                <h3><span className={classes.highlight}>R$97</span> à vista</h3>
                                <h3>Ou <span className={classes.highlight}>12x R$9,70</span> no cartão ou 2 cartões</h3>
                            </CardContent>
                            <CardActions>
                                <CheckoutButton title="Curso de Precificação" checkoutURL="https://sun.eduzz.com/1278743" tag="DS_COMBO4_CHECKOUT">Quero aprender a precificar corretamente </CheckoutButton>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card raised={true} className={classes.card}>
                            <CardMedia
                                component="img"
                                alt="COMBO 5"
                                image={require("assets/img/li/combo5.svg")}
                                title="COMBO 5"
                            />
                            <CardContent>
                                <p>✅ CURSO DE FOTOGRAFIA E EDIÇÃO</p>
                                <h2>TUDO O QUE VOCÊ VAI RECEBER</h2>
                                <p><img src={require("assets/img/li/fotografia.jpg")} className={classes.foto}></img></p>
                                <p><b>CURSO DE FOTOGRAFIA E EDIÇÃO:</b> Aprenda como tirar as melhores fotos com seu celular, preparar ambientes e cenários para tirar fotos que realmente chamam à atenção e valorizem suas bonecas e projetos em feltro. Afinal a foto do seu produto é a primeira impressão dos seus clientes. Além de um módulo exclusivo em edições para corrigir iluminação, remover objetos indesejados e distrações, realçar o projeto ou até remover e deixar o fundo branco.</p>
                                <p>ACESSO POR 1 ANO</p>
                                <h3><span className={classes.highlight}>R$97</span> à vista</h3>
                                <h3>Ou <span className={classes.highlight}>12x R$9,70</span> no cartão ou 2 cartões</h3>
                            </CardContent>
                            <CardActions>
                                <CheckoutButton title="Curso de Fotografia e Edição" checkoutURL="https://sun.eduzz.com/1278748" tag="DS_COMBO5_CHECKOUT">Quero aprender a fotografar e editar minhas fotos</CheckoutButton>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card raised={true} className={classes.card}>
                            <CardMedia
                                component="img"
                                alt="COMBO 6"
                                image={require("assets/img/li/combo6.svg")}
                                title="COMBO 6"
                            />
                            <CardContent>
                                <p>✅ CURSO DOMINANDO O INSTAGRAM</p>
                                <h2>TUDO O QUE VOCÊ VAI RECEBER</h2>
                                <p><b>CURSO DOMINANDO O INSTAGRAM:</b> Neste curso você vai aprender tudo sobre Instagram e como deixá-lo atraente e pronto para venda. Você vai saber avaliar o seu Instagram e tudo o que precisa melhorar nele para atrair compradores.</p>
                                <p><b>Aula bônus:</b> Aprenda a criar seu primeiro anúncio investindo só 6 reais por dia</p>
                                <p>ACESSO POR 1 ANO</p>
                                <h3><span className={classes.highlight}>R$97</span> à vista</h3>
                                <h3>Ou <span className={classes.highlight}>12x R$9,70</span> no cartão ou 2 cartões</h3>
                            </CardContent>
                            <CardActions>
                                <CheckoutButton title="Curso Dominando o Instagram" checkoutURL="https://sun.eduzz.com/1278744" tag="DS_COMBO6_CHECKOUT">Quero dominar meu Instagram</CheckoutButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Garantia />
            <SobreMim />
            <Testemunhos1 />
            <FAQs />
            <DuvidasWhats />
            <Footer />
        </main>
    );

}
