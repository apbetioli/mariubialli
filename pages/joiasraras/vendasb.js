import { Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Hidden, IconButton, Link, Paper, SvgIcon } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HttpsIcon from '@material-ui/icons/Https';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import Head from "next/head";
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

const rocks = [
  { title: "Esmeralda", color: "#6BFEDE", image: require("assets/img/esmeralda.jpg"), description: "Esmeralda é um símbolo da verdade e do amor. Ela é cheia de esperança, atitude e muuuuuito sábia. Além disso, é sonhadora e intuitiva💚" },
  { title: "Rubi", color: "#FE6B8B", image: require("assets/img/rubi.jpg"), description: "Rubi protege as pessoas que ama e tem uma energia infinita! Leva felicidade e paixão em seu coração, e adora ajudar o próximo🌼" },
  { title: "Ágata", color: "#6BFEDE", image: require("assets/img/agata.jpg"), description: "Ágata é forte e corajosa, se aceita como é de verdade! Tem uma energia super positiva e as pessoas ao seu redor se contagiam com a sua felicidade😆" },
  { title: "Angelita", color: "#FE6B8B", image: require("assets/img/angelita.jpg"), description: "Angelita é suuuuper especial, comunicativa e verdadeira. Não perde a esperança mesmo em momentos difícies, pois acredita que dias melhores virão. Ela é a alegria da casa, a alegria da vida todinha da mamãe e do papai, ela é uma verdadeira super heroína🌹" },
  { title: "Jade", color: "#6BFEDE", image: require("assets/img/jade.jpg"), description: "Jade é uma menina super amiga, brincalhona e extrovertida. É considerada a pedra da sorte, prosperidade e amizade🤗" },
  { title: "Rose", color: "#FE6B8B", image: require("assets/img/rose.jpg"), description: "Rose, também conhecida como Rose Quartz, tem muito estilo, é decidida e promove o amor incondicional.\n\nCom amor podemos todas as coisas, tudo torna-se possível💖" },
  { title: "Ametista", color: "#6BFEDE", image: require("assets/img/ametista.jpg"), description: "Ametista parece frágil né? Pois é aí que você se engana. Ela é delicada, porém forte e tem uma paz interior que te eleva a alma🧘‍♀️" },
];

const faqs = [
  { pergunta: "Quando começa o curso?", resposta: "O curso começa assim que você se inscrever. Todas as aulas já estão gravadas e todos os materiais estão disponíveis para baixar." },
  { pergunta: "Quando vou receber o curso?", resposta: "O acesso a sua área de membros é enviado automaticamente após a confirmação de seu pagamento. Se você realizar o pagamento por cartão de crédito ou PIX, você receberá os dados de acesso em até 10 minutos. Caso o pagamento seja por boleto bancário a confirmação bancária pode levar até 72 horas." },
  { pergunta: "Como vou receber o curso?", resposta: "O curso é enviado ao email cadastrado na compra. Certifique-se que o email está correto para não haver problemas na hora da entrega." },
  { pergunta: "Sou iniciante, vou conseguir fazer?", resposta: "Sim. O curso pensado especialmente para quem é iniciante e aborda tudo o que você precisa saber para criar as bonecas com perfeição. E possui um módulo exclusivo com as principais técnicas que você precisa conhecer." },
  { pergunta: "Não tenho máquina de costura. É um problema?", resposta: "Não. Vou te ensinar a confeccionar tudo à mão. A máquina de costura é opcional." },
  { pergunta: "O curso é online?", resposta: "Sim, o curso é 100% online em video com 5 horas de video aulas divididas em mais de 40 aulas. Tudo bem explicado passo a passo para não ter dúvidas." },
  { pergunta: "Por quanto tempo vou poder assistir as aulas?", resposta: "Pelo tempo que quiser. O curso é vitalício. Uma vez seu, é seu pra sempre." },
  { pergunta: "Que tamanho ficam as bonecas depois de prontas?", resposta: "Ficam em média com 28cm podendo variar conforme o tipo de cabelo." },
  { pergunta: "Os materiais estão inclusos?", resposta: "Não, os materiais para confecção devem ser adquiridos à parte." },
  { pergunta: "O valor é único ou é mensalidade?", resposta: "Este valor é único. Você paga uma vez só e tem acesso a tudo isso sem prazo de validade." },
  { pergunta: "Quais são as formas de pagamento?", resposta: "Você pode pagar com cartão de crédito, PIX ou boleto. E ainda pode parcelar no cartão (com juros)." },
];

const checkoutURL = "https://pay.hotmart.com/B46628840G?checkoutMode=10";
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

  return (
    <div>
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
            emailPlaceholder="Seu email de acesso" checkout={true} buttonStyle={buttonStyle} showName={true} showPhone={true} >
            <p className={classes.justify}>
              <Typography variant="body2" color="textSecondary" component="span">
                Ao continuar você concorda com nossa <Link className={classes.link} href="/politica-de-privacidade" target="_blank" rel="noopener">política de privacidade</Link>.
            </Typography>
            </p>
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
    </div>
  );
}

function Conteudo() {
  const classes = useStyles();
  return (
    <section className={classes.sectionConteudo}>
      <Container maxWidth="md">
        <Grid container className={classes.grid}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Conheça as <span className={classes.highlight}>joias raras</span></h1>
            <p>
              Seus nomes têm significado e são inspirados em pedras preciosas.
            </p>
            <p>
              Você irá se conectar com elas, seja pelo estilo ou pela personalidade.
            </p>
          </Grid>
          <Hidden xsDown>
            <Grid item className={classes.centered} xs={12}>
              <Timeline align="alternate">
                {rocks.map((rock) => (
                  <TimelineItem key={rock.title}>
                    <TimelineOppositeContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <span className={classes.highlight}>{rock.title}</span>
                      </Typography>
                      <Typography color="textSecondary" component="p">
                        {rock.description}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: rock.color }}>
                        <SvgIcon>
                          <svg viewBox="0 0 24 20">
                            <path fill="currentColor" d="M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z" />
                          </svg>
                        </SvgIcon>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Card className={classes.root}>
                        <CardMedia
                          component="img"
                          alt={rock.title}
                          height="600"
                          image={rock.image}
                          title={rock.title}
                        />
                      </Card>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Hidden>
          <Hidden smUp>
            {rocks.map((rock) => (
              <Grid container item xs={12} sm={4} spacing={0} key={rock.title}>
                <Card raised={true} className={classes.card}>
                  <CardMedia
                    component="img"
                    alt={rock.title}
                    height="400"
                    image={rock.image}
                    title={rock.title}
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
          </Hidden>
        </Grid>
      </Container>
    </section>
  );
}

function Promessa() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item className={classes.centered} xs={12} lg={7}>
            <img src={require("assets/img/banner.jpg")} alt="" className={classes.foto} />
          </Grid>
          <Grid item className={classes.centered} xs={12} lg={5}>
            <h1 className={classes.title}>São 7 joias raras para você <span className={classes.highlight}>confeccionar, personalizar e vender</span></h1>
            <p className={classes.subtitle}>Se você está em busca de um projeto <span className={classes.highlightText}>diferenciado</span>, seja para vender, dar de presente ou até como terapia nestes tempos difíceis, então estas Joias Raras são para você.</p>
            <CTA>
              Quero começar já minhas joias raras
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
            <h1 className={classes.centered}>Este curso é <span className={classes.highlight}>especialmente para você</span> que</h1>
            <p>
              <i><FavoriteIcon className={classes.heart} /> </i>Ama feltro e está apaixonada por elas assim como eu
            </p>
            <p>
              <i><FavoriteIcon className={classes.heart} /> </i>Quer se diferenciar no mercado com técnicas que vão além do feltro
            </p>
            <p>
              <i><FavoriteIcon className={classes.heart} /> </i>Está em busca de uma atividade para reduzir o stress do dia-a-dia
            </p>
            <p>
              <i><FavoriteIcon className={classes.heart} /> </i>É iniciante e quer um curso detalhado com um ótimo suporte para tirar dúvidas
            </p>
            <p>
              <i><FavoriteIcon className={classes.heart} /> </i>Está buscando uma nova fonte de renda
            </p>
            <p>
              <i><FavoriteIcon className={classes.heart} /> </i>Quer desenvolver novas habilidades e descobrir novas paixões
            </p>
            <CTA>
              Sim! Este curso é para mim!
            </CTA>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function AcessoImediato() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12} md={6}>
            <img src={require("assets/img/topic_apostila.png")} alt="" className={classes.foto} />
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.centered}>Entre agora e tenha <span className={classes.highlight}>acesso imediato</span></h1>
            <p>
              Após a confirmação do pagamento você terá acesso imediato a:
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> 5 horas de conteúdo divido em mais de 40 aulas</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Apostila digital de moldes das 7 bonecas</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Lista de materiais</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Suporte na área do curso, por email e WhatsApp</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Módulo exclusivo para iniciantes</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Acesso vitalício</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /> <span className={classes.highlight}>Bônus:</span><span> Apostila digital de moldes adaptado para porta maternidade</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /> <span className={classes.highlight}>Bônus:</span><span> Planilha de precificação com aula explicativa para que você obtenha lucro nas suas vendas.</span>
            </p>
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
            <img src={require("assets/img/tudoisso.png")} alt="" className={classes.preco} />
          </Grid>
          <Grid item className={classes.centered} xs={12} md={6}>
            <img src={require("assets/img/price_discount.png")} alt="" className={classes.preco} />
            <div className={classes.precoAviso}>* o preço pode subir a qualquer momento</div>
            <CheckoutButton>
              Quero me inscrever agora
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
          <Grid item className={classes.centered} xs={12} md={6}>
            <img src={require("assets/img/garantia.png")} alt="Garantia de 7 dias" />
          </Grid>
          <Grid item xs={12} md={6} className={classes.justify}>
            <h1 className={classes.centered}>Você tem 7 dias de <span className={classes.highlight}>garantia incondicional</span></h1>
            <p>Você pode assistir todas as aulas e ter acesso a todos os materiais.
            Se por qualquer motivo você não ficar satisfeita, basta solicitar o reembolso
              pelo email contato@mariubialli.com e você receberá 100% do valor investido de volta.</p>
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
            <h1 className={classes.centered}>Muito prazer, eu sou mari ubialli</h1>
            <p>Amo artesanato em feltro, coisas fofas e criativas!</p>
            <p>Conheci o feltro quando estava grávida do meu filho em 2018, me apaixonei na mesma hora e comecei a produzir muitas fofuras.</p>
            <p>Essas bonecas não são apenas bonecas para mim. Elas são a prova de que podemos conseguir fazer algo quando queremos, que podemos superar nossos medos e inseguranças e transformá-los em algo lindo e precioso.</p>
            <p>Quero compartilhar meu aprendizado, e ajudar mais pessoas a conhecerem, se apaixonarem e viverem desse artesanato maravilhoso!</p>
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
            <h1>O que os alunos estão <br /><span className={classes.highlight}>falando do curso?</span></h1>
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <Paper elevation={3}>
              <img src={require("assets/img/testemunho16.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
            </Paper>
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <Paper elevation={3}>
              <img src={require("assets/img/testemunho21.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
            </Paper>
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <Paper elevation={3}>
              <img src={require("assets/img/testemunho22.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
            </Paper>
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <Paper elevation={3}>
              <img src={require("assets/img/testemunho31b.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
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

export default function JoiasRarasVendasB(props) {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Head>
        <title>Joias Raras - Curso de Bonecas em Feltro</title>
        <meta
          name="description"
          content="São 7 lindas bonecas para você confeccionar, personalizar e vender."
        />
        <meta
          name="keywords"
          content="feltro, artesanato, costura, ponto caseado, ponto reto, ponto alinhavo, passo a passo, diy, moldes gratuitos, apostilas gratuitas, bonecas, boneca em feltro"
        />
        <meta name="robots" content="index,nofollow"></meta>
      </Head>

      <Promessa />
      <DedoNaFerida />
      <Testemunhos1 />
      <Conteudo />
      <AcessoImediato />
      <div id="pricing" />
      <Preco />
      <Garantia />
      <Testemunhos3 />
      <SobreMim />
      <FAQs />
      <DuvidasWhats />
      <Preco />
      <Footer />
    </main>
  );
}
