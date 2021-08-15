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
import Head from "next/head";
import { useRouter } from "next/router";
import { default as React } from "react";
import BotaoWhats from "../../components/BotaoWhats";
import ColorButton from "../../components/ColorButton";
import Footer from "../../components/Footer";
import Form from "../../components/Form";

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
        title: "Testes",
        image: require("assets/img/ls1/testes.webp"),
        description: "Neste módulo vamos falar sobre a etapa de testes das peças, e dicas valiosas que podem fazer você economizar muito tempo neste processo."
    },
    {
        title: "Criação da Apostila",
        image: require("assets/img/ls1/apostila.webp"),
        description: "Vamos transformar seus moldes em uma apostila. Ao final deste módulo você vai sair com uma apostila em formato PDF prontinha para venda."
    },
    {
        title: "Criação de curso",
        image: require("assets/img/ls1/curso.webp"),
        description: "Vou te contar o por que e como criar seu curso. Vamos explorar tudo o que deu certo e o que não deu certo nos meus cursos para que você comece do jeito certo. Equipamentos, preparação, dicas de edição e muito mais.",
        price: "R$ 197"
    },
    {
        title: "Como vender?",
        image: require("assets/img/ls1/vender2.webp"),
        description: "Você vai aprender a divulgar e fazer o lançamento da sua apostila de uma forma muito eficiente, utilizando as mesmas ferramentas que eu utilizo nos meus lançamentos."
    }
];

const bonus = [
    {
        title: "Live semanal",
        image: require("assets/img/ls1/live.webp"),
        description: "Uma aula ao vivo comigo e as colegas de classe toda semana para tirar dúvidas e fazer análises.",
        price: "Não tem preço"
    },
    {
        title: "Como anunciar nas redes sociais",
        image: require("assets/img/ls1/faceads.webp"),
        description: "100% voltado para artesãs. Aprenda o que funciona (e o que não funciona) na criação de anúncios para vender todos os dias. Tudo o que eu vou ensinar aqui foi testado na prática na venda dos meus cursos.",
        price: "R$ 997"
    },
    {
        title: "Templates de apostila",
        image: require("assets/img/ls1/template.webp"),
        description: "Vou te dar dois templates de apostila que você poderá usar como base para montar as suas. Vai ficar muito mais fácil e ainda vai economizar tempo.",
        price: "R$ 97"
    },
    {
        title: "Curso Joias Raras",
        image: require("assets/img/banner.jpg"),
        description: "Você vai ver por dentro como eu faço meus cursos e apostilas e aprender técnicas de criação de bonecas associado a outros materiais e projetos únicos. Quem é iniciante no feltro poderá aprender tudo o que precisa para fazer o curso.",
        price: "R$ 97"
    },
    {
        title: "Curso Renascer em Jesus",
        image: require("assets/img/jesus/close.webp"),
        description: "Você vai aprender técnicas de pintura aplicadas ao feltro que pode ser um diferencial nos seus projetos.",
        price: "R$ 39"
    },
    {
        title: "Comunidade no facebook",
        image: require("assets/img/ls1/comunidade.webp"),
        description: "A comunidade será o lugar para tirar dúvidas sobre o curso e interagir com as outras alunas, compartilhar aprendizados e resultados. Você nunca estará sozinha."
    },
    {
        title: "Canal no telegram",
        image: require("assets/img/ls1/telegram.webp"),
        description: "Uma via direta entre eu e você para você receber notificações das aulas e plantões de dúvidas para não ficar de fora."
    },
];

const faqs = [
    {
        pergunta: "Quando começa o curso?",
        resposta: "A primeira aula de boas vindas será dia 09/07/2021. Os módulos com as respectivas aulas gravadas serão disponibilizados semanalmente na plataforma."
    },
    {
        pergunta: "Quando vou receber o curso?",
        resposta: "O acesso a sua área de membros é enviado automaticamente após a confirmação de seu pagamento. Se você realizar o pagamento por cartão de crédito ou PIX, você receberá os dados de acesso em até 10 minutos. Caso o pagamento seja por boleto bancário a confirmação bancária pode levar até 72 horas."
    },
    {
        pergunta: "Como vou receber o curso?",
        resposta: "O curso é disponibilizado na plataforma da Hotmart e o acesso é enviado ao email cadastrado na compra. Certifique-se que o email está correto para não haver problemas na hora da entrega."
    },
    {
        pergunta: "Sou iniciante, vou conseguir fazer?",
        resposta: "Sim! Se você já sabe confeccionar em feltro, você poderá iniciar o curso diretamente. Caso nunca tenha tido contato, nós disponibilizamos como bônus o meu Curso Bonecas Joias Raras onde você poderá aprender a confeccionar as peças passo a passo."
    },
    {
        pergunta: "Não tenho computador, vou conseguir fazer?",
        resposta: "Não, um computador será necessário para fazer a vetorização dos moldes."
    },
    {
        pergunta: "O curso é online?",
        resposta: "Sim, o curso é 100% online em video e ficará gravado para assistir quando quiser."
    },
    {
        pergunta: "Por quanto tempo vou poder assistir as aulas?",
        resposta: "O acesso ao curso tem a duração de 1 ano. Podendo ser renovado após esse prazo."
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
        <CheckoutButton>
            {props.children}
        </CheckoutButton>
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

    let checkoutURL = "https://sun.eduzz.com/969161?skip=1"
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
                    <Form buttonText="Continuar" tag="JOIASRARAS-CHECKOUT" redirectTo={checkoutURL}
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
            <Container maxWidth="lg">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1>Tudo o que você <span className={classes.highlight}>vai aprender</span></h1>
                    </Grid>

                    {deliverables.map((item) => (
                        <Grid container item xs={12} sm={6} md={4} spacing={0} key={item.title}>
                            <Card raised={true} className={classes.card}>
                                <CardMedia
                                    component="img"
                                    alt={item.title}
                                    height="200"
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
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <h1 className={classes.title}>Descubra as estratégias para <span className={classes.highlight}>gerar renda criando seus próprios moldes de feltro</span></h1>
                        <p className={classes.subtitle}>Assista ao video e veja a oportunidade que te espera!</p>

                        <div className={classes.videoWrapper}>
                            <iframe
                                loading="lazy"
                                className={classes.video}
                                src={"https://www.youtube.com/embed/09wc_jPE_jA?rel=0"}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <CTA>
                            Quero gerar renda criando meus próprios moldes
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
            <Container maxWidth="md">
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <h1 className={classes.centered}>Este treinamento é <span className={classes.highlight}>especialmente para você</span> que</h1>
                        {who.map((item) => (
                            <p>
                                <i><FavoriteIcon className={classes.heart} /> </i>{item}
                            </p>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Objecoes() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item xs={12}>
                        <h1 className={classes.centered}>Seu sonho é viver de artesanato em feltro?</h1>
                        <p className={classes.centered}>
                            <b>Então você precisa parar de perder tempo!</b>
                        </p>
                        <p>
                            Meu objetivo é permitir que artesãs que já trabalham com artesanato em feltro consigam criar suas próprias peças exclusivas, ou adaptar projetos colocando o seu toque pessoal, sem ter que recusar encomendas por não achar moldes, ou quiçá, vender sua apostila ou curso.
                        </p>
                        <p>
                            Para vender você não precisa ter muitos seguidores no instagram, nem precisa ser muito conhecida.
                        </p>
                        <p>
                            Você só precisa trilhar o caminho certo, com um método prático que te leve direto ao ponto. Por isso eu criei este treinamento, quer saber mais?
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
            <Container maxWidth="lg">
                <Grid container className={classes.grid}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1>E não podem faltar os <span className={classes.highlight}>Bônus</span></h1>
                    </Grid>

                    {bonus.map((item) => (
                        <Grid container item xs={12} sm={6} md={4} spacing={0} key={item.title}>
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
                        <img src={require("assets/img/tudoisso.png")} alt="" className={classes.preco} />
                    </Grid>
                    <Grid item className={classes.centered} xs={12} md={6}>
                        <img src={require("assets/img/ls1/price.webp")} alt="" className={classes.preco} />
                        <div className={classes.precoAviso}></div>
                        <CheckoutButton>
                            Quero me inscrever agora mesmo
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

function SobreMim() {
    const classes = useStyles();
    return (
        <section className={classes.sectionSobreMim}>
            <Container maxWidth="md">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} md={6}>
                        <img className={classes.fotoPerfil} src={require("assets/img/perfil.webp")} alt="Mari Ubialli" />
                    </Grid>
                    <Grid item md={6} className={classes.justify}>
                        <h1 className={classes.centered}>prazer, mari ubialli</h1>
                        <p>Sou apaixonada por artesanato em feltro e por ensinar.</p>
                        <p>Com mais de 1300 alunas em cursos, meu objetivo é ensinar artesãs as estratégias para gerar renda criando seus próprios moldes, permitindo que vivam do que amam fazer.</p>
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
                        <BotaoWhats float={false} />
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
                        <h1>O que as alunas estão falando da Mari?</h1>
                    </Grid>

                    <Grid item className={classes.centered} xs={12} sm={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho36.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={4}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho41.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={4}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho42.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={4}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho44.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={6}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho26.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={6}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho24.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12} sm={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho35.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

function Testemunhos3() {
    const classes = useStyles();
    return (
        <section className={classes.sectionConteudo}>
            <Container maxWidth="sm" className={classes.centered}>
                <Grid container className={classes.grid} spacing={1}>
                    <Grid item className={classes.centered} xs={12}>
                        <h1>Venha fazer parte deste grupo de alunas <span className={classes.highlight}>encantadas</span></h1>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho24.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho25.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho26.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho29.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho33.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho34.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho35.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho36.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <Paper elevation={3}>
                            <img src={require("assets/img/testemunho37.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.centered} xs={12}>
                        <p>
                            <CheckoutButton>
                                Quero fazer parte deste grupo
                            </CheckoutButton>
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default function LS1Replay(props) {
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

            <Promessa />
            <DedoNaFerida />
            <Objecoes />
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
