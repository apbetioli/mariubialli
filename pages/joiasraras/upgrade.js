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
  { title: "Minis", color: "#6BFEDE", image: require("assets/img/premium0.jpg"), description: "7 bonecas joias raras mini. Elas são menores, com 20cm, e muito mais fofas não acha?💖" },
  { title: "Ursinhas", color: "#FE6B8B", image: require("assets/img/premium2.jpg"), description: "E agora as bonecas tem companhia, essa ursinha suuuuper fofinha em 2 cores: rosa e verde🥰" },
  { title: "Mobile", color: "#6BFEDE", image: require("assets/img/premium3.jpg"), description: "Aprenda comigo a montar esse mobile maravilhoso tema joias raras🌼" },
  { title: "Guirlanda", color: "#FE6B8B", image: require("assets/img/premium4.jpg"), description: "Sem falar nessa guirlanda super especial. Você vai aprender a customizar o nome que quiser e algumas técnicas extras🌹" },
  { title: "Pergolado", color: "#6BFEDE", image: require("assets/img/premium5.jpg"), description: "E a cereja do bolo: o Pergolado. Essa peça é única e nunca vi nada parecido. A inspiração veio de um sonho e vou mostrar em detalhes como fazer. Além disso as bonecas também são diferentes, pois elas podem sentar no balanço🍒" },
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
  { pergunta: "Quais são as formas de pagamento?", resposta: "Você pode pagar com cartão de crédito em até 6x ou à vista com PIX." },
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

  let checkoutURL = "https://payment.hotmart.com/B46628840G?off=tqtloelb&checkoutMode=10"
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

function Conteudo() {
  const classes = useStyles();
  return (
    <section className={classes.sectionConteudo}>
      <Container maxWidth="sm">
        <Grid container className={classes.grid}>
          <Grid item className={classes.centered} xs={12}>
            <h1>O que vou receber?</h1>
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
    <section>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item className={classes.centered} xs={12}>
            <img src={require("assets/img/banner_premium.jpg")} alt="" className={classes.foto} />
          </Grid>
          <Grid item className={classes.centered} xs={12}>
            <h1 className={classes.title}>Seja <span className={classes.highlight}>PREMIUM</span></h1>
            <p className={classes.subtitle}>Oferta <b>única</b> e exclusiva para alunas por <b>tempo limitado*</b></p>
            <div className={classes.precoAviso}>*Promoção válida até 05/08/21 23:59</div>
            <CTA>
              Quero ser premium
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

function Bonus() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.centered}>E não podem faltar os <span className={classes.highlight}>Bônus</span></h1>
            <p>
              <FavoriteIcon className={classes.heart} /><span> O novo <b>Curso Joias Raras Premium</b> vai custar pelo menos <b>R$ 97</b> mas você que já tem o curso vai pagar <b>somente a diferença</b> e ainda receber um <b>SUPER DESCONTO</b> </span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Na página de pagamento você poderá comprar o <b>Curso Renascer em Jesus</b> por apenas <b>R$ 1</b>. Isso mesmo, 1 real. Neste curso extra você aprenderá um lindo Jesus em feltro que para em pé e uma guirlanda slim arco-íris que usa técnica de pintura com stêncil. <br /><b>IM-PER-DÍ-VEL</b></span>
            </p>
          </Grid>
          <Grid item className={classes.centered} xs={12} md={6}>
            <img src={require("assets/img/jesus/curso.jpg")} alt="" className={classes.fotoPerfil} />
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
            <img src={require("assets/img/price_upgrade.png")} alt="" className={classes.preco} />
            <div className={classes.precoAviso}>Promoção válida até 05/08/21 23:59</div>
            <CheckoutButton>
              Quero ser premium
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
            <h1>Tem dúvidas? Fale conosco no WhatsApp</h1>
            <BotaoWhats float={false} message="Oi, gostaria de saber mais sobre o Curso Joias Raras Premium" />
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
              <img src={require("assets/img/testemunho40.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
            </Paper>
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <Paper elevation={3}>
              <img src={require("assets/img/testemunho21.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
            </Paper>
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <Paper elevation={3}>
              <img src={require("assets/img/testemunho31b.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
            </Paper>
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <Paper elevation={3}>
              <img src={require("assets/img/testemunho16.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
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

export default function JoiasRarasUpgradePremium(props) {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Head>
        <title>Joias Raras Premium - Curso de Bonecas em Feltro</title>
        <meta
          name="description"
          content="São 7 lindas bonecas para você confeccionar, personalizar e vender."
        />
        <meta
          name="keywords"
          content="feltro, artesanato, costura, ponto caseado, ponto reto, ponto alinhavo, passo a passo, diy, moldes gratuitos, apostilas gratuitas, bonecas, boneca em feltro"
        />
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <Promessa />
      <Conteudo />
      <Bonus />
      <div id="pricing" />
      <Preco />
      <DuvidasWhats />
      <Footer />
    </main>
  );
}
