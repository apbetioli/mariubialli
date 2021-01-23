import { Button, Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Grid, Hidden, Link, SvgIcon, TextField } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { WhatsApp } from "@material-ui/icons";
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import { default as React } from "react";
import ColorButton from "../components/ColorButton";
import Footer from "../components/Footer";
import Wave from "../components/Wave";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cta: {
    width: "100%",
    textAlign: "center"
  },
  grid: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  centered: {
    textAlign: "center",
  },
  justify: {
    textAlign: "justify",
  },
  video: {
    position: "absolute",
    left: 0,
    height: "100%",
    top: 0,
    width: "100%",
  },
  videoWrapper: {
    height: 0,
    marginTop: 25,
    marginBottom: 25,
    position: "relative",
    paddingBottom: "56.25%",
  },
  whatsapp: {
    color: "white",
    backgroundColor: "#25d366",
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 10,
    "&:hover": {
      backgroundColor: "#075e54",
    }
  },
  card: {
    margin: '16px 16px',
  },
  sectionBlue: {
    backgroundColor: "#FFF5F7",
  },
  sectionGreen: {
    backgroundColor: "#6BFEDE",
  },
  sectionRed: {
    backgroundColor: "#FE6B8B",
  },
  sectionWhats: {
    color: "white",
    backgroundColor: "#25d366",
  },
  wave: {
    backgroundColor: "#FE6B8B",
    height: "50rem"
  },
  title: {
    color: "white"
  }
}));

const rocks = [
  { title: "Esmeralda", color: "#6BFEDE", image: require("assets/img/esmeralda.jpg"), description: "Esmeralda é um símbolo da verdade e do amor. Na Grécia e na Roma antigas, dizia-se que a esmeralda era a pedra preciosa da deusa Vênus, fornecedora de amor e esperança. Do outro lado do mundo, as esmeraldas eram reverenciadas pelos incas e consideradas pelos egípcios como uma fonte de vida eterna. As esmeraldas foram consideradas um presente de Thoth, o antigo deus da sabedoria. A esmeralda também é conhecida como uma pedra da intuição, associada à visão e à revelação de eventos e verdades futuras." },
  { title: "Rubi", color: "#FE6B8B", image: require("assets/img/rubi.jpg"), description: "Rubi é protetora e pode trazer felicidade e paixão à vida de quem o usa. Acredita-se que tenha o poder de alinhar e emprestar energia ao corpo. Acredita-se que também protege contra entidades negativas que absorvem energia positiva, promovendo vitalidade espiritual e bem-estar em geral." },
  { title: "Ágata", color: "#6BFEDE", image: require("assets/img/agata.jpg"), description: "Ágata representa força e coragem; ela tonifica e fortalece a mente e o corpo, ancorando e estabilizando emoções e energia física. Ágata ajuda na aceitação de si mesmo e a ver a verdade. Suas qualidades de cura e limpeza eliminam as energias negativas, acalmando e acalmando a mente, corpo e espírito." },
  { title: "Angelita", color: "#FE6B8B", image: require("assets/img/cristal.jpg"), description: "Angelita é a pedra de grande consciência. Ajuda com uma comunicação clara, compassiva e verdadeira, permitindo que você fale a sua verdade. Angelita promove sentimentos de compaixão, compreensão e aceitação, permitindo que você encontre paz no assunto em questão. Também ajuda a facilitar o contato com o reino angélico, ao mesmo tempo que o ajuda a manter contato com a realidade cotidiana." },
  { title: "Jade", color: "#6BFEDE", image: require("assets/img/jade.jpg"), description: "Jade é uma poderosa balanceadora emocional, nutrindo e trazendo paz e pureza para sua vida, removendo pensamentos e energia negativos. Ela irradia o divino, promovendo amor incondicional, serenidade, clareza de espírito, coragem e sabedoria. Jade é considerada a pedra da sorte, prosperidade e amizade. Ela pode aprimorar seus sonhos, permitindo que você desperte conhecimentos ocultos e se torne quem você realmente é." },
  { title: "Rose", color: "#FE6B8B", image: require("assets/img/safira.jpg"), description: "Rose (Quartzo Rosa) promove amor incondicional, perdão, paz e compaixão. Ela cria harmonia nos relacionamentos e nos ensina sobre a verdadeira essência do amor. Purifica e abre o coração, permitindo-nos expressar nossas emoções. Reduz o estresse e a tensão, permitindo-nos expressar amor, sensibilidade e compaixão por nós mesmos e pelos outros. Traz uma cura interior profunda, aumentando o amor próprio, o valor próprio e a autoconfiança. Pode ser usada para atrair amor para sua vida e manter relacionamentos amorosos felizes." },
  { title: "Ametista", color: "#6BFEDE", image: require("assets/img/blenda.jpg"), description: "Ametista é a pedra da espiritualidade e do contentamento, confere estabilidade, força, paz interior. É uma grande pedra para meditação e para aumentar sua intuição e habilidades psíquicas com sua energia calmante e pacífica. A ametista fornece clareza e melhora a percepção e compreensão consciente." },
];

export function CTA(props) {
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
            Entre com o seu email. Na próxima página você poderá escolher a forma de pagamento.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <ColorButton onClick={handleClose}>
            Continuar &gt;&gt;
          </ColorButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function Conteudo() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Peças que você irá criar</h1>
            <p>
              Esta coleção de bonecas foi inspirada nas pedras preciosas mais conhecidas e seus significados.
              Conheça agora cada uma.
            </p>
          </Grid>
          <Hidden xsDown>
            <Grid item className={classes.centered} xs={12}>
              <Timeline align="alternate">
                {rocks.map((rock) => (
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Paper elevation={0} className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {rock.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {rock.description}
                        </Typography>
                      </Paper>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot style={{backgroundColor: rock.color}}>
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
              <Grid item xs={12} sm={4} spacing={3}>
                <Card raised={true} className={classes.card}>
                  <CardMedia
                    component="img"
                    alt={rock.title}
                    height="300"
                    image={rock.image}
                    title={rock.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.centered}   >
                      {rock.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.justify} >
                      {rock.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Hidden>
          <Grid item className={classes.centered} xs={12}>
            <CTA>
              Sim! Quero criar estas lindas peças!
              </CTA>
          </Grid>
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
        <Grid className={classes.grid} spacing={3} >
          <Grid item xs={12}>
            <h1 className={classes.title}>São 7 joias raras para você confeccionar, personalizar e vender.</h1>
            <p className={classes.title}>Estas lindas bonecas irão iluminar sua vida.</p>

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

function DedoNaFerida() {
  const classes = useStyles();
  return (
    <section className={classes.sectionBlue}>
      <Container maxWidth="md">
        <Grid className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Curso Meninas Preciosas</h1>
            <p>
              Muito além de uma apostila de moldes, este é um curso completo, onde você irá aprender como confeccionar cada boneca com um passo a passo em video.
              Não importa se você é experiente em feltro ou iniciante. O curso aborda tudo o que você precisa saber para criar as bonecas com perfeição.
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function BotaoFlutuanteWhats() {
  const classes = useStyles();
  return (
    <Link target="_blank" rel="noopener" href="https://api.whatsapp.com/send?phone=5544999114058&text=Oi!%20Gostaria%20de%20tirar%20minhas%20d%C3%BAvidas%20sobre%20a%20Cole%C3%A7%C3%A3o%20J%C3%B3ias%20Raras.">
      <Fab className={classes.whatsapp} color="green" size="medium" aria-label="Dúvidas? Fale conosco.">
        <WhatsApp />
      </Fab>
    </Link>
  );
}

function Bonus() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Bônus</h1>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function Reforco() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>O que você vai receber?</h1>
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
        <Grid className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Tudo isso por apenas</h1>
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
        <Grid className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Teste grátis por 7 dias</h1>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function SobreMim() {
  const classes = useStyles();
  return (
    <section className={classes.sectionRed}>
      <Container maxWidth="md">
        <Grid className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Muito prazer, eu sou mari ubialli</h1>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function FAQs() {
  const classes = useStyles();
  return (
    <section>
      <section className={classes.sectionFaq}>
        <Container maxWidth="md">
          <Grid className={classes.grid} spacing={3}>
            <Grid item className={classes.centered} xs={12}>
              <h1>Perguntas frequentes</h1>
            </Grid>
          </Grid>
        </Container>
      </section>
    </section>
  );
}

function DuvidasWhats() {
  const classes = useStyles();
  return (
    <section>
      <section className={classes.sectionWhats}>
        <Container maxWidth="md">
          <Grid className={classes.grid} spacing={3}>
            <Grid item className={classes.centered} xs={12}>
              <h1>Ainda tem dúvidas? Fale conosco no WhatsApp</h1>
            </Grid>
          </Grid>
        </Container>
      </section>
    </section>
  );
}

export default function JoiasRarasPerpetuo(props) {
  return (
    <>
      <VideoVendas />
      <DedoNaFerida />
      <Conteudo />
      <Bonus />
      <Reforco />
      <Preco />
      <Garantia />
      <SobreMim />
      <FAQs />
      <Preco />
      <DuvidasWhats />
      <BotaoFlutuanteWhats />
      <Footer />
    </>
  );
}
