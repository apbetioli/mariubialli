import { Card, CardContent, CardMedia, Container, Grid, Paper } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image from "assets/img/li/banner-dac.webp";
import Head from "next/head";
import { default as React } from "react";
import ColorButton from "../../components/ColorButton";
import Footer from "../../components/Footer";
import Banner from "./banner";
import SobreMim from "./sobre";

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
        image: require("assets/img/li/desenho.webp"),
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
    {
        title: "Marketing na prática",
        image: require("assets/img/ls1/faceads.webp"),
        description: "Você vai aprender como automatizar as suas vendas utilizando marketing digital e escalar os seus resultados. Tudo o que eu vou ensinar aqui foi testado na prática na venda dos meus cursos e apostilas.",
        price: "R$ 997"
    },
    {
        title: "Comunidade no Facebook",
        image: require("assets/img/ls1/comunidade.webp"),
        description: "A comunidade será o lugar para postar seus resultados, consultar e tirar dúvidas. Interagir e fazer parcerias.",
        price: "R$ 197"
    },
    {
        title: "Grupo no WhatsApp",
        image: require("assets/img/ls1/whatsapp.webp"),
        description: "Um grupo aberto no WhatsApp comigo e com as outras alunas do desafio para tirar dúvidas e receber avisos. Você nunca estará sozinha.",
        price: "R$ 197"
    },
];

const bonus = [
    {
        title: "Mentoria semanal",
        image: require("assets/img/ls1/live.webp"),
        description: "Mentoria online em grupo toda semana por 1 ano inteiro. As mentorias ficam gravadas e são disponibilizadas na área de membros para assistir quantas vezes quiser.",
        price: "R$ 5000"
    },
    {
        title: "Templates de apostila",
        image: require("assets/img/ls1/template.webp"),
        description: "Vou te dar dois templates de apostila que você poderá usar como base para montar as suas apostilas. Vai ficar muito mais fácil e ainda vai economizar tempo. É copiar, colar e alterar fotos e textos, a estrutura está pronta.",
        price: "R$ 97"
    },
    {
        title: "Curso Renascer em Jesus",
        image: require("assets/img/jesus/close.webp"),
        description: "Você vai aprender técnicas de pintura aplicadas ao feltro que pode ser um diferencial nos seus projetos.",
        price: "R$ 47"
    },
    {
        title: "Curso Joias Raras Premium",
        image: require("assets/img/jr/bonecas.webp"),
        description: "Aprenda técnicas de criação de bonecas associado a outros materiais e projetos únicos. Quem é iniciante no feltro poderá aprender tudo o que precisa para aproveitar o desafio.",
        price: "R$ 97"
    },
    {
        title: "10% de desconto em materiais",
        image: require("assets/img/li/desconto.webp"),
        description: "Você vai receber 10% de desconto na lojamariubialli.com.br para comprar feltro, recortes a laser e outros materiais, durante o prazo de vigência do curso.",
    }
];

const bonusVIP = [
    {
        title: "Kit de Materiais Joias Raras",
        image: require("assets/img/li/kit.webp"),
        description: "Você vai receber na sua casa um kit de recortes em feltro e outros materiais para confecção de uma boneca Joias Raras, prontinho para você aproveitar ao máximo o curso.",
        price: "R$ 34,90"
    },
    {
        title: "Caderno de desenho personalizado",
        image: require("assets/img/li/caderno.webp"),
        description: "Você vai receber na sua casa um caderno de desenho e um lápis personalizado com seu nome. Tudo o que você precisa para começar a criar!",
    },

];

const faqs = [
    {
        pergunta: "Não sei desenhar, vou conseguir fazer?",
        resposta: "Sim! O meu método vai te desbloquear e você conseguirá criar de uma maneira simples e prática mesmo sem saber desenhar."
    },
    {
        pergunta: "Sou iniciante no feltro, vou conseguir fazer?",
        resposta: "Se você já sabe confeccionar em feltro, você poderá iniciar o treinamento diretamente. Caso nunca tenha tido contato, nós disponibilizamos como bônus o meu Curso Joias Raras Premium onde você poderá aprender a confeccionar várias peças passo a passo e terá o contato necessário diferentes técnicas para poder começar a criar seus moldes e peças exclusivas."
    },
    {
        pergunta: "Não tenho computador, vou conseguir fazer?",
        resposta: "Não, um computador com mouse é necessário para fazer a vetorização dos moldes."
    },
    {
        pergunta: "Quando começa o desafio?",
        resposta: "Os 4 primeiros módulos já estão disponíveis para serem assistidos e os demais serão entregues semanalmente. Os desafios serão abertos durante o programa em datas ainda indefinidas."
    },
    {
        pergunta: "Quando vou receber o acesso?",
        resposta: "O acesso a sua área de membros é enviado automaticamente após a confirmação de seu pagamento. Se você realizar o pagamento por cartão de crédito ou PIX, você receberá os dados de acesso em até 10 minutos. Caso o pagamento seja por boleto bancário a confirmação bancária pode levar até 72 horas."
    },
    {
        pergunta: "Como vou receber o acesso?",
        resposta: "O acesso às aulas é disponibilizado na plataforma Nutror da Eduzz e o acesso é enviado ao email cadastrado na compra. Certifique-se que o email está correto para não haver problemas na hora da entrega."
    },
    {
        pergunta: "Por quanto tempo vou poder assistir as aulas?",
        resposta: "O acesso às aulas, bônus e comunidade tem a duração de 1 ano. Podendo ser renovado após esse prazo."
    },
    {
        pergunta: "Quais são as formas de pagamento?",
        resposta: "À vista por PIX e boleto ou você pode pagar com cartão de crédito em até 12x e ainda usar 2 cartões de crédito para dividir o limite."
    },
];

const buttonStyle = ColorButton.whatsapp;

function CTA(props) {
    const classes = useStyles();
    return (
        <ColorButton className={classes.cta} style={buttonStyle} href="https://bit.ly/mac-vip-aula-03" target="_blank">
            {props.children}
        </ColorButton>
    );
}

function Entregaveis() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h2>O treinamento por dentro</h2>
                    </Grid>

                    {deliverables.map((item) => (
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

function Promessa() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item className={classes.centered} xs={12}>
                        <h3>Chegou o dia que você terá a chance de se tornar uma <span className={classes.highlight}>Artesã Criativa</span> e começar a faturar de 1k a 5k com suas peças exclusivas e moldes de feltro</h3>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <p>Entre para o Grupo VIP e receba o link de matrícula 1 hora <b>ANTES DE TODO MUNDO</b>, ou seja, na segunda-feira <b>25/10 às 8 horas</b></p>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <CTA>
                            Quero entrar para o grupo VIP
                        </CTA>
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
                        <h1>E não podem faltar os <span className={classes.highlight}>Presentes</span></h1>
                    </Grid>

                    {bonus.map((item) => (
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

function BonusVIP() {
    const classes = useStyles();

    return (
        <section className={classes.sectionConteudo}>
            <Container maxWidth="md">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h2>Presentes <span className={classes.highlight}>VIP</span></h2>
                        <p>Se você for uma das 50 primeiras a se matricular para o Desafio, você receberá na sua casa:</p>
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

                    <Grid item className={classes.centered} xs={12}>
                        <p>*Válido somente para residentes no Brasil</p>
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
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <img src={require("assets/img/ls1/garantia30.webp")} alt="Garantia de 30 dias" />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.justify}>
                        <h1 className={classes.centered}>Seu risco é zero</h1>
                        <p>Ao fazer seu investimento hoje, você tem 30 dias para pedir seu dinheiro de volta, caso entenda que esse investimento na sua educação não valeu a pena.</p>
                        <p>Eu quero tornar a sua decisão simples para você. Você terá tempo mais que suficiente para avaliar o seu investimento.</p>
                        <p>Você terá acesso completo a todas as aulas, bônus e mentorias. Se por qualquer motivo você não ficar satisfeita, basta solicitar o reembolso e você receberá 100% do valor investido de volta.</p>
                    </Grid>
                    <Grid item xs={12} className={classes.justify}>
                        <h1 className={classes.centered}>Dinheiro de volta em 90 dias + R$500</h1>
                        <p>Eu tenho certeza que com o meu método você terá resultado.</p>
                        <p>Caso você não consiga criar seus próprios moldes em 90 dias eu te devolvo todo valor investido e ainda te dou mais R$ 500 pelo seu tempo e energia investidos neste treinamento.</p>
                        <p>Basta que você assista todas as aulas e coloque em prática os desafios que serão propostos. Se mesmo assim não tiver resultado eu vou marcar uma consultoria individual com você.</p>
                        <CTA>Quero entrar para o grupo VIP</CTA>
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
                    </Grid>
                    <Grid item xs={12}>
                        <CTA>Quero entrar para o grupo VIP</CTA>
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
            <Container maxWidth="md" className={classes.centered}>
                <Grid container className={classes.grid} spacing={1}>
                    <Grid item className={classes.centered} xs={12}>
                        <h3>Resultados surpreendentes de <span className={classes.highlight}>pessoas como você</span></h3>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <Paper elevation={3}>
                            <div className={classes.videoWrapper}>
                                <iframe
                                    loading="lazy"
                                    className={classes.video}
                                    src={"https://www.youtube.com/embed/eZW6Gm95Ogg?rel=0&modestbranding=1&showinfo=0"}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <Paper elevation={3}>
                            <div className={classes.videoWrapper}>
                                <iframe
                                    loading="lazy"
                                    className={classes.video}
                                    src={"https://www.youtube.com/embed/Gn_y3QY8sWU?rel=0&modestbranding=1&showinfo=0"}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={12}>
                        <CTA>
                            Quero entrar para o grupo VIP
                        </CTA>
                    </Grid>
                </Grid>
            </Container>
        </section >
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
            <BonusVIP />
            <Entregaveis />
            <Bonus />
            <Garantia />
            <SobreMim />
            <Testemunhos1 />
            <FAQs />
            <Footer />
        </main>
    );
}

LIMatriculasAbertas.defaultProps = {
    origin: 'og',
};
