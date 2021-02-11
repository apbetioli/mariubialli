import { Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Hidden, SvgIcon } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Alert } from "@material-ui/lab";
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import Head from "next/head";
import { default as React } from "react";
import Countdown from "react-countdown";
import BotaoWhats from "../../components/BotaoWhats";
import ColorButton from "../../components/ColorButton";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import ScrollTo from "../../components/ScrollTo";
import Wave from "../../components/Wave";

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
    backgroundColor: "transparent",
    margin: '16px 16px',
  },
  sectionConteudo: {
    backgroundColor: "#FFF5F7",
  },
  sectionGreen: {
    backgroundColor: "#6BFEDE",
  },
  sectionSobreMim: {
    backgroundColor: "#FE6B8B",
    color: "#FFF",
  },
  sectionWhats: {
    backgroundColor: "#25d366",
    color: "white",
  },
  wave: {
    backgroundColor: "#FE6B8B",
    height: "55rem"
  },
  title: {
    color: "white",
    fontSize: "2em",
  },
  subtitle: {
    color: "white",
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
  fotoMeninas: {
    maxWidth: "100%",
  },
  fotoBonus: {
    maxWidth: "100%",
  },
  check: {
    height: "1rem",
    width: "1rem",
  }
}));

const rocks = [
  { title: "Esmeralda", color: "#6BFEDE", image: require("assets/img/esmeralda.jpg"), description: "Esmeralda é um símbolo da verdade e do amor. Ela é cheia de esperança, atitude e muuuuuito sábia. Além disso, é sonhadora e intuitiva💚" },
  { title: "Rubi", color: "#FE6B8B", image: require("assets/img/rubi.jpg"), description: "Rubi protege as pessoas que ama e tem uma energia infinita! Leva felicidade e paixão em seu coração, e adora ajudar o próximo🌼" },
  { title: "Ágata", color: "#6BFEDE", image: require("assets/img/agata.jpg"), description: "Ágata é forte e corajosa, se aceita como é de verdade! Tem uma energia super positiva e as pessoas ao seu redor se contagiam com a sua felicidade😆" },
  { title: "Angelita", color: "#FE6B8B", image: require("assets/img/angelita.jpg"), description: "Angelita é suuuuper especial, comunicativa e verdadeira. Não perde a esperança mesmo em momentos difícies, pois acredita que dias melhores virão. Ela é a alegria da casa, a alegria da vida todinha da mamãe e do papai, ela é uma verdadeira super heroína🌹" },
  { title: "Jade", color: "#6BFEDE", image: require("assets/img/jade.jpg"), description: "Jade é uma menina super amiga, brincalhona e extrovertida. É considerada a pedra da sorte, prosperidade e amizade🤗" },
  { title: "Rose", color: "#FE6B8B", image: require("assets/img/rose.jpg"), description: "Rose tem muito estilo, é decidida e promove o amor incondicional.\n\nCom amor podemos todas as coisas, tudo torna-se possível💖" },
  { title: "Ametista", color: "#6BFEDE", image: require("assets/img/ametista.jpg"), description: "Ametista parece frágil né? Pois é aí que você se engana. Ela é delicada, porém forte e tem uma paz interior que te eleva a alma🧘‍♀️" },
];

const faqs = [
  { pergunta: "Quais são as formas de pagamento?", resposta: "Você pode pagar com cartão de crédito, cartão de débito virtual da caixa, boleto ou via PIX. A opção por boleto pode levar 72 horas para liberação após o pagamento." },
  { pergunta: "Quando vou receber o acesso? Quando começa o curso?", resposta: "O acesso a sua área de membros é enviado automaticamente após a confirmação de seu pagamento. Ou seja, começa pra você assim que você se inscreve. Se você realizar o pagamento por cartão de crédito, você receberá os dados de acesso em até 10 minutos. Caso o pagamento seja por boleto bancário, a confirmação bancária pode levar até 72 horas." },
  { pergunta: "Por quanto tempo vou poder assistir as aulas?", resposta: "Pelo tempo que quiser. O curso é vitalício. Uma vez seu, é seu pra sempre." },
  { pergunta: "Que tamanho ficam as bonecas depois de prontas?", resposta: "Ficam em média com 28cm podendo variar conforme o tipo de cabelo." },
  { pergunta: "Sou iniciante, este curso é para mim?", resposta: "Não importa se você é experiente em feltro ou iniciante. O curso aborda tudo o que você precisa saber para criar as bonecas com perfeição." },
  { pergunta: "Não tenho máquina de costura. Vou conseguir fazer?", resposta: "Sim. Vou te ensinar a confeccionar tudo à mão. A máquina de costura é opcional." },
];

const checkoutURL = "https://pay.hotmart.com/B46628840G?off=opbx2gl5&checkoutMode=10";

const fimDaPromocao = new Date("2021-02-13 00:00:00");

export function CTA(props) {
  const classes = useStyles();
  return (
    <ScrollTo target="#pricing">
      <ColorButton className={classes.cta}>
        {props.children}
      </ColorButton>
    </ScrollTo>
  );
}

export function CheckoutButton(props) {
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
      <ColorButton className={classes.cta} onClick={handleClickOpen}>
        {props.children}
      </ColorButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Inscreva-se</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body2" color="textSecondary" component="p">
              Na próxima página você poderá escolher a forma de pagamento: <b>cartão, boleto ou pix</b>
            </Typography>
          </DialogContentText>
          <Form buttonText="Continuar inscrição &gt;" tag="JOIASRARAS-CHECKOUT" redirectTo={checkoutURL} emailPlaceholder="Seu email de acesso" />
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function DedoNaFerida() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Qual é a sua preferida?</h1>
            <p>
              Seus nomes têm significado e são inspirados em pedras preciosas. Você irá se conectar com elas, seja pelo estilo ou pela personalidade.
            </p>
          </Grid>
          <Hidden xsDown>
            <Grid item className={classes.centered} xs={12}>
              <Timeline align="alternate">
                {rocks.map((rock) => (
                  <TimelineItem key={rock.title}>
                    <TimelineOppositeContent>

                      <Typography gutterBottom variant="h5" component="h2">
                        {rock.title}
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
                    height="600"
                    image={rock.image}
                    title={rock.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.centered}   >
                      {rock.title}
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
      <Wave className={classes.wave} />
      <Container maxWidth="md">
        <Grid container className={classes.grid} >
          <Grid item xs={12}>
            <h1 className={classes.title}>São 7 joias raras para você confeccionar, personalizar e vender</h1>
            <p className={classes.subtitle}>Faça comigo estas lindas bonecas e se destaque no mercado oferecendo um produto de alta qualidade e diferenciado</p>
          </Grid>
          <Grid item xs={12}>
            <img src={require("assets/img/banner.jpg")} alt="" className={classes.fotoMeninas} />
            <CTA>
              Quero me destacar no mercado
            </CTA>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function Conteudo() {
  const classes = useStyles();
  return (
    <section className={classes.sectionConteudo}>
      <Container maxWidth="lg">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={12} md={6} className={classes.centered}>
            <img src={require("assets/img/conteudo5.jpg")} alt="" className={classes.fotoMeninas} />
          </Grid>
          <Grid item xs={12} md={6}>
            <h1>Muito além de uma apostila</h1>
            <p>
              Este é um curso completo, onde você irá aprender como confeccionar cada boneca com um passo a passo em video.
              Não importa se você é experiente em feltro ou iniciante.
              O curso aborda tudo o que você precisa saber para criar as bonecas com perfeição.
              E você aprenderá técnicas diferenciadas que vão além do feltro para você usar em outros projetos.
              E tudo isso você pode fazer sem máquina de costura.
              Você vai ter acesso a:
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Apostila de moldes</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Passo a passo em vídeo</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> 6 estilos de cabelos</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> 3 tipos de vestidos</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Saia de tule sem costura</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> 3 tipos de calçados</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> 2 tipos de cachecóis usando só as mãos</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> BÔNUS: Saiba como precificar suas bonecas. Aula + planilha.</span>
            </p>
            <CTA>
              Quero aprender tudo isso!
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
          <Grid item className={classes.centered} xs={12}>
            <h1>E você ainda vai receber um bônus especial</h1>
            <p>
              Molde do corpo adaptado para você confeccionar porta maternidades como bastidores, guirlandas e flâmulas.
            </p>
            <p>
              <img src={require("assets/img/bonusespecial.jpg")} alt="" className={classes.fotoBonus} />
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
          <Grid item className={classes.centered} md={6}>
            <img src={require("assets/img/tudoisso.png")} alt="" className={classes.preco} />
          </Grid>
          <Grid item className={classes.centered} md={6}>
            <img src={require("assets/img/price.png")} alt="" className={classes.preco} />
            <CheckoutButton>
              Quero aproveitar a promoção de lançamento!
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
          <Grid item className={classes.centered} md={6}>
            <img src={require("assets/img/garantia.png")} alt="Garantia de 7 dias" />
          </Grid>
          <Grid item md={6} className={classes.justify}>
            <h1>Você não tem nada a perder</h1>
            <p>O curso Joias Raras tem 7 dias de garantia incondicional.</p>
            <p>Você pode assistir todas as aulas e ter acesso ao bônus exclusivo.
            Se por qualquer motivo você não ficar satisfeita,
            basta entrar em contato comigo pelo email contato@mariubialli.com
              e solicitar o reembolso do valor investido.</p>
            <p>Você receberá de volta cada centavo que pagou.</p>
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
          <Grid item md={6} className={classes.justify}>
            <h1>Muito prazer, eu sou mari ubialli</h1>
            <p>
              Amo artesanato em feltro, coisas fofas e criativas!
             </p>
            <p>
              Conheci o feltro quando estava grávida do meu filho em 2018, me apaixonei na mesma hora e comecei a produzir muitas fofuras.
            </p>
            <p>
              Essas bonecas não são apenas bonecas para mim. Elas são a prova de que podemos conseguir fazer algo quando queremos, que podemos superar nossos medos e inseguranças e transformá-los em algo lindo e precioso🥰
            </p>
            <p>
              Quero compartilhar meu aprendizado, e ajudar mais pessoas a conhecerem, se apaixonarem e viverem desse artesanato maravilhoso!
            </p>
          </Grid>
          <Grid item className={classes.centered} md={6}>
            <img className={classes.fotoPerfil} src={require("assets/img/perfil.jpg")} alt="Mari Ubialli" />
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
              <Accordion key={"id" + index}>
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

const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <></>;
  } else {
    return (
      <Alert severity="warning">
        A promoção termina em: {days} dia {hours} horas {minutes} minutos {seconds} segundos
      </Alert>
    );
  }
};

export default function JoiasRarasVendas() {
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

      <Countdown
        daysInHours={true}
        date={fimDaPromocao}
        renderer={countdownRenderer}
      />

      <Promessa />
      <DedoNaFerida />
      <Conteudo />
      <Bonus />
      <div id="pricing" />
      <Preco />
      <Garantia />
      <SobreMim />
      <FAQs />
      <Preco />
      <DuvidasWhats />
      <BotaoWhats />
      <Footer />
    </main>
  );
}
