import { Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Paper } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HttpsIcon from '@material-ui/icons/Https';
import image from "assets/img/li/banner-dac.webp";
import price from 'assets/img/li/price.webp';
import tudoIsso from 'assets/img/tudoisso.webp';
import Head from "next/head";
import Image from 'next/image';
import { useRouter } from "next/router";
import { default as React } from "react";
import BotaoWhats from "../../../components/BotaoWhats";
import ColorButton from "../../../components/ColorButton";
import Footer from "../../../components/Footer";
import Form from "../../../components/Form";
import ScrollTo from "../../../components/ScrollTo";
import Banner from "../banner";
import SobreMim from "../sobre";

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
        title: "Processo Criativo",
        image: require("assets/img/ls1/the-creative-process.webp"),
        description: "Como desenvolver a percepção criativa para conseguir tirar o projeto da cabeça e colocar no papel. Mesmo que você não saiba desenhar ou não tenha nenhum projeto em mente, vou te guiar através de exemplos que vão te destravar."
    },
    {
        title: "Vetorização",
        image: require("assets/img/ls1/vetorizacao.webp"),
        description: "Você vai aprender a vetorizar seu projeto, isto é, desenhar no computador para poder imprimir e posteriormente montar sua apostila de moldes. De forma simples e passo a passo bem detalhado para mesmo que você que não domina o computador ou tecnologia consiga entender e realizar este processo. E tudo isso usando um programa totalmente gratuito."
    },
    {
        title: "Ciclo evolutivo",
        image: require("assets/img/ls1/testes.webp"),
        description: "Vamos explorar o ciclo evolutivo de criação e testes das peças com dicas valiosas que podem fazer você economizar muito tempo neste processo."
    },
    {
        title: "Criação da apostila",
        image: require("assets/img/ls1/apostila.webp"),
        description: "Vamos transformar seus moldes em uma apostila. Ao final você vai sair com uma apostila em formato PDF prontinha para venda."
    },
    {
        title: "Criação de um curso",
        image: require("assets/img/ls1/curso.webp"),
        description: "Vou te contar como e por que criar seu curso. Vamos explorar tudo o que deu certo e o que não deu certo nos meus cursos para que você comece do jeito certo. Equipamentos, preparação, dicas de edição e muito mais.",
    },
    {
        title: "Como vender",
        image: require("assets/img/ls1/vender2.webp"),
        description: "Você vai aprender como apresentar seus produtos, lançar sua apostila e trabalhar a divulgação para vender todos os dias."
    },
];

const bonus = [
    {
        title: "Mentoria semanal",
        image: require("assets/img/ls1/live.webp"),
        description: "Mentorias online em grupo toda semana por 12 meses comigo. As mentorias ficam gravadas e são disponibilizadas na área de membros para assistir quantas vezes quiser.",
        price: "R$ 5000"
    },
    {
        title: "Grupo no WhatsApp",
        image: require("assets/img/ls1/whatsapp.webp"),
        description: "Um grupo no Whats comigo e com as outras alunas para tirar dúvidas, receber notificações e compartilhar resultados. Você nunca estará sozinha.",
        price: "R$ 197"
    },
    {
        title: "Marketing na prática",
        image: require("assets/img/ls1/faceads.webp"),
        description: "Você vai aprender como divulgar seus produtos de forma automática. Tudo o que eu vou ensinar aqui foi testado na prática na venda dos meus cursos e apostilas.",
        price: "R$ 997"
    },
    {
        title: "Curso Joias Raras Premium",
        image: require("assets/img/jr/bonecas.webp"),
        description: "Aprenda técnicas de criação de bonecas associado a outros materiais e projetos únicos. Quem é iniciante no feltro poderá aprender tudo o que precisa para fazer o curso.",
        price: "R$ 97"
    },
    {
        title: "Kit de Recortes à Laser Joias Raras",
        image: require("assets/img/li/kit.webp"),
        description: "Você vai receber na sua casa um kit de recortes em feltro das 7 bonecas Joias Raras prontinho para você confeccionar e começar a vender já desde o início.",
        price: "R$ 209,90"
    },
    {
        title: "Curso Renascer em Jesus",
        image: require("assets/img/jesus/close.webp"),
        description: "Você vai aprender técnicas de pintura aplicadas ao feltro que pode ser um diferencial nos seus projetos.",
        price: "R$ 39"
    },
    {
        title: "Templates de apostila",
        image: require("assets/img/ls1/template.webp"),
        description: "Vou te dar dois templates de apostila que você poderá usar como base para montar as suas apostilas. Vai ficar muito mais fácil e ainda vai economizar tempo. É copiar, colar e alterar fotos e textos, a estrutura está pronta.",
        price: "R$ 97"
    }
];

const faqs = [
    {
        pergunta: "Não sei desenhar, vou conseguir fazer?",
        resposta: "Sim! Você conseguirá criar de uma maneira simples e prática mesmo sem saber desenhar."
    },
    {
        pergunta: "Sou iniciante, vou conseguir fazer?",
        resposta: "Se você já sabe confeccionar em feltro, você poderá iniciar o curso diretamente. Caso nunca tenha tido contato, nós disponibilizamos como bônus o meu Curso Bonecas Joias Raras onde você poderá aprender a confeccionar as peças passo a passo e terá o contato necessário com feltro para poder começar a criar seus moldes e peças exclusivas."
    },
    {
        pergunta: "Não tenho computador, vou conseguir fazer?",
        resposta: "Não, um computador com mouse é necessário para fazer a vetorização dos moldes."
    },
    {
        pergunta: "Quando começa o curso?",
        resposta: "A aula inaugural será dia 04/11/2021"
    },
    {
        pergunta: "Quando vou receber o curso?",
        resposta: "O acesso a sua área de membros é enviado automaticamente após a confirmação de seu pagamento. Se você realizar o pagamento por cartão de crédito ou PIX, você receberá os dados de acesso em até 10 minutos. Caso o pagamento seja por boleto bancário a confirmação bancária pode levar até 72 horas."
    },
    {
        pergunta: "Como vou receber o curso?",
        resposta: "O curso é disponibilizado na plataforma Nutror da Eduzz e o acesso é enviado ao email cadastrado na compra. Certifique-se que o email está correto para não haver problemas na hora da entrega."
    },
    {
        pergunta: "Por quanto tempo vou poder assistir as aulas?",
        resposta: "O acesso à plataforma do curso, bônus e comunidade tem a duração de 1 ano. Podendo ser renovado após esse prazo."
    },
    {
        pergunta: "Quais são as formas de pagamento?",
        resposta: "Você pode pagar com cartão de crédito em até 12x, usar 2 cartões de crédito ou à vista com PIX e boleto."
    },
];

const buttonStyle = ColorButton.whatsapp;

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

    let checkoutURL = "https://sun.eduzz.com/969161"
    const router = useRouter()
    if (router.query.utm_source)
        checkoutURL += "&utm_source=" + router.query.utm_source
    if (router.query.utm_medium)
        checkoutURL += "&utm_medium=" + router.query.utm_medium
    if (router.query.utm_campaign)
        checkoutURL += "&utm_campaign=" + router.query.utm_campaign

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
                    <Form buttonText="Continuar" tag="AC_LI_#1_CHECKOUT" redirectTo={checkoutURL}
                        emailPlaceholder="Seu email de acesso ao curso" checkout={true} buttonStyle={buttonStyle} showName={true} showPhone={true} >
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

function Entregaveis() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1>Tudo o que você <span className={classes.highlight}>vai aprender</span></h1>
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
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item className={classes.centered} xs={12}>
                        <h3 className={classes.title}>Vá <span className={classes.highlight}>do zero a 5k</span> de faturamento criando peças exclusivas e moldes em feltro</h3>
                        <div className={classes.videoWrapper}>
                            <iframe
                                loading="lazy"
                                className={classes.video}
                                src={"https://www.youtube.com/embed/qD67ke31KX0?rel=0"}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <CTA>
                            Quero me inscrever no desafio
                        </CTA>
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
            <Container maxWidth="md">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1>E não podem faltar os <span className={classes.highlight}>Bônus</span></h1>
                    </Grid>

                    {bonus.map((item) => (
                        <Grid container item xs={12} md={6} spacing={0} key={item.title}>
                            <Card raised={true} className={classes.card}>
                                <CardMedia
                                    component="img"
                                    alt={item.title}
                                    height="200"
                                    image={item.image}
                                    title={item.title}
                                />
                                <CardContent>
                                    <h3><span className={classes.highlight}>BÔNUS:</span> {item.title}</h3>
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
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <Image src={tudoIsso} layout="responsive" width={500} height={200} alt="" className={classes.preco} />
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <Image src={price} layout="responsive" width={400} height={160} alt="" className={classes.preco} />
                        <div className={classes.precoAviso}></div>
                        <CheckoutButton>
                            Quero me inscrever no desafio
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
                        <img src={require("assets/img/ls1/garantia30.webp")} alt="Garantia de 30 dias" />
                    </Grid>
                    <Grid item xs={12} className={classes.justify}>
                        <h1 className={classes.centered}>Garantia 30 + 90 + R$500</h1>
                        <p>Você pode assistir todas as aulas e ter acesso a todos os materiais por 30 dias corridos.
                            Se por qualquer motivo você não ficar satisfeita, basta solicitar o reembolso
                            pelo email contato@mariubialli.com e você receberá 100% do valor investido de volta.</p>
                        <p>Mas eu acredito tanto no meu método que vou colocar todo o risco nas minhas costas.
                            Se em 90 dias assistindo a todas as aulas e fazendo todas as atividades você não chegar ao resultado desejado,
                            eu vou te dar uma consultoria individual para entender melhor sua dificuldade e criaremos um plano de ação.
                            Se em 90 dias, seguindo o seu plano de ação, mesmo assim não tiver resultado,
                            eu vou te devolver todo o seu dinheiro e mais R$500 do meu bolso pelo seu tempo e dedicação neste curso.</p>
                        <CheckoutButton>Quero me inscrever sem riscos</CheckoutButton>
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
                        <h1 className={classes.centered}>Dúvidas frequentes</h1>
                        {faqs.map((faq, index) => (
                            <Accordion key={"id" + index} defaultExpanded={false}>
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
                        <CheckoutButton>
                            Quero me inscrever no desafio
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
                        <h1>Ainda tem dúvidas? Fale conosco no WhatsApp</h1>
                        <BotaoWhats message="Oi, gostaria de saber mais sobre o Desafio Artesã Criativa" float={false} />
                        <BotaoWhats message="Oi, gostaria de saber mais sobre o Desafio Artesã Criativa" float={true} />
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
                        <h1>O que as alunas estão falando da Mari?</h1>
                    </Grid>

                    <Grid item className={classes.centered} xs={12} sm={12}>
                        <Paper elevation={3}>
                            <div className={classes.videoWrapper}>
                                <iframe
                                    loading="lazy"
                                    className={classes.video}
                                    src={"https://player.vimeo.com/video/596289574?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=2ad8803798"}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item className={classes.centered} xs={12} sm={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/jr/testemunho36.webp")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={4}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/jr/testemunho41.webp")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={4}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/jr/testemunho42.webp")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={4}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/jr/testemunho44.webp")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={6}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/jr/testemunho26.webp")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={6}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/jr/testemunho24.webp")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/jr/testemunho35.webp")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default function LIMatriculasAbertas(props) {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Head>
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>

            <Banner image={image} alt="Desafio Artesã Criativa" />
            <Promessa />
            <Desejo />
            <Entregaveis />
            <Bonus />
            <div id="pricing" />
            <Preco />
            <Garantia />
            <SobreMim />
            <Testemunhos1 />
            <FAQs />
            <DuvidasWhats />
            <Preco />
            <Footer />
        </main>
    );
}

LIMatriculasAbertas.defaultProps = {
    origin: 'og',
};
