import { Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Hidden, SvgIcon } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    paddingTop: 50,
    paddingBottom: 50,
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
    height: "50rem"
  },
  title: {
    color: "white"
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
    maxHeight: 400,
  },
  check: {
    height: "1rem",
    width: "1rem",
  }
}));

const rocks = [
  { title: "Esmeralda", color: "#6BFEDE", image: require("assets/img/esmeralda.jpg"), description: "Esmeralda é um símbolo da verdade e do amor. Na Grécia e na Roma antigas, dizia-se que a esmeralda era a pedra preciosa da deusa Vênus, fornecedora de amor e esperança. Do outro lado do mundo, as esmeraldas eram reverenciadas pelos incas e consideradas pelos egípcios como uma fonte de vida eterna. As esmeraldas foram consideradas um presente de Thoth, o antigo deus da sabedoria. A esmeralda também é conhecida como uma pedra da intuição, associada à visão e à revelação de eventos e verdades futuras." },
  { title: "Rubi", color: "#FE6B8B", image: require("assets/img/rubi.jpg"), description: "Rubi é protetora e pode trazer felicidade e paixão à vida de quem a usa. Acredita-se que tenha o poder de alinhar e emprestar energia ao corpo. Acredita-se que também protege contra entidades negativas que absorvem energia positiva, promovendo vitalidade espiritual e bem-estar em geral." },
  { title: "Ágata", color: "#6BFEDE", image: require("assets/img/agata.jpg"), description: "Ágata representa força e coragem; ela tonifica e fortalece a mente e o corpo, ancorando e estabilizando emoções e energia física. Ágata ajuda na aceitação de si mesmo e a ver a verdade. Suas qualidades de cura e limpeza eliminam as energias negativas, acalmando e acalmando a mente, corpo e espírito." },
  { title: "Angelita", color: "#FE6B8B", image: require("assets/img/angelita.jpg"), description: "Angelita é a pedra de grande consciência. Ajuda com uma comunicação clara, compassiva e verdadeira, permitindo que você fale a sua verdade. Angelita promove sentimentos de compaixão, compreensão e aceitação, permitindo que você encontre paz no assunto em questão. Também ajuda a facilitar o contato com o reino angélico, ao mesmo tempo que o ajuda a manter contato com a realidade cotidiana." },
  { title: "Jade", color: "#6BFEDE", image: require("assets/img/jade.jpg"), description: "Jade é uma poderosa balanceadora emocional, nutrindo e trazendo paz e pureza para sua vida, removendo pensamentos e energia negativos. Ela irradia o divino, promovendo amor incondicional, serenidade, clareza de espírito, coragem e sabedoria. Jade é considerada a pedra da sorte, prosperidade e amizade. Ela pode aprimorar seus sonhos, permitindo que você desperte conhecimentos ocultos e se torne quem você realmente é." },
  { title: "Rose", color: "#FE6B8B", image: require("assets/img/rose.jpg"), description: "Rose (Quartzo Rosa) promove amor incondicional, perdão, paz e compaixão. Ela cria harmonia nos relacionamentos e nos ensina sobre a verdadeira essência do amor. Purifica e abre o coração, permitindo-nos expressar nossas emoções. Reduz o estresse e a tensão, permitindo-nos expressar amor, sensibilidade e compaixão por nós mesmos e pelos outros. Traz uma cura interior profunda, aumentando o amor próprio, o valor próprio e a autoconfiança. Pode ser usada para atrair amor para sua vida e manter relacionamentos amorosos felizes." },
  { title: "Ametista", color: "#6BFEDE", image: require("assets/img/ametista.jpg"), description: "Ametista é a pedra da espiritualidade e do contentamento, confere estabilidade, força, paz interior. É uma grande pedra para meditação e para aumentar sua intuição e habilidades psíquicas com sua energia calmante e pacífica. A ametista fornece clareza e melhora a percepção e compreensão consciente." },
];

const checkoutURL = "https://pay.hotmart.com/B46628840G?off=opbx2gl5";

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
            Digite seu email para iniciar sua inscrição agora.
            <Typography variant="body2" color="textSecondary" component="p">
              Na próxima página você poderá escolher a forma de pagamento.
          </Typography>
          </DialogContentText>
          <Form buttonText="Continuar inscrição &gt;" tag="JOIASRARAS-CHECKOUT" redirectTo={checkoutURL + "&email="} />
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
            <h1>Conheça as meninas preciosas que você irá criar</h1>
            <p>
              Esta coleção de bonecas foi inspirada nas pedras preciosas e seus significados. Conheça e conecte-se com cada uma.
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
              <Grid container item xs={12} sm={4} spacing={3} key={rock.title}>
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

function VideoVendas() {
  const classes = useStyles();
  return (
    <section>
      <Wave className={classes.wave} />
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3} >
          <Grid item xs={12}>
            <h1 className={classes.title}>São 7 joias raras para você confeccionar, personalizar e vender.</h1>
            <p className={classes.title}>Conheça as meninas preciosas: Esta coleção de bonecas foi inspirada nas pedras preciosas e seus significados. Conheça e conecte-se com cada uma. Estas lindas bonecas irão iluminar sua vida.</p>

            <div className={classes.videoWrapper}>
              <iframe
                className={classes.video}
                src="https://www.youtube.com/embed/VnDLmAIthHw?rel=0"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <CTA>
              Sim! Quero iluminar minha vida!
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
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item md={6} className={classes.centered}>
            <img src={require("assets/img/meninas.jpg")} alt="" className={classes.fotoMeninas} />
          </Grid>
          <Grid item md={6} className={classes.justify}>
            <h1>O que você terá acesso?</h1>
            <p>
              Muito além de uma apostila de moldes, este é um curso completo, onde você irá aprender como confeccionar cada boneca com um passo a passo em video.
              Não importa se você é experiente em feltro ou iniciante. O curso aborda tudo o que você precisa saber para criar as bonecas com perfeição.
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Apostila de moldes em PDF</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Passo a passo em vídeo</span>
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
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Bônus especial</h1>
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
          <Grid item className={classes.justify} md={6}>
            <h1>Você vai receber tudo isso</h1>
            <p>
              <CheckIcon className={classes.check} /><span> Apostila de moldes em PDF</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Passo a passo em vídeo</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> BÔNUS: Fotos em alta resolução</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> BÔNUS: Bastidores desta apostila</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> BÔNUS: Aula de precificação</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> BÔNUS ESPECIAL: Guirlanda</span>
            </p>

          </Grid>
          <Grid item className={classes.centered} md={6}>
            <img src={require("assets/img/pricediscount.png")} alt="" className={classes.preco} />
            <CheckoutButton>
              Quero criar estas lindas bonecas!
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
            <p>As Meninas Preciosas tem 7 dias de garantia incondicional</p>
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

const faqs = [
  { pergunta: "Quando vou receber o acesso? Quando começa o curso?", resposta: "O acesso a sua área de membros é enviado automaticamente após a confirmação de seu pagamento. Ou seja, começa pra você assim que você se inscreve. Se você realizar o pagamento por cartão de crédito, você receberá os dados de acesso em até 10 minutos. Caso o pagamento seja por boleto bancário, a confirmação bancária pode levar até 72 horas." }
];

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

      <VideoVendas />
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
