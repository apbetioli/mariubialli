import { Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Hidden, IconButton, SvgIcon } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
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
    backgroundColor: "transparent",
    margin: '16px 16px',
  },
  sectionConteudo: {
    backgroundColor: "#ffe8ed",
    marginTop: 50,
  },
  sectionGreen: {
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
  wave: {
    height: "55rem"
  },
  title: {
    fontSize: "2em",
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

const recap = [
  { title: "5 horas de conteúdo divido em mais de 40 aulas" },
  { title: "Apostila digital de moldes em PDF" },
  { title: "Apostila digital bônus em PDF" },
  { title: "Planilha de precificação" },
  { title: "Lista de materiais" },
  { title: "Suporte na área do curso e por WhatsApp" },
  { title: "Módulo exclusivo para iniciantes" }
];

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
  { pergunta: "Quando começa o curso?", resposta: "Todas as aulas já estão gravadas e todos os materiais disponíveis para você assistir e fazer assim que se inscrever." },
  { pergunta: "O curso é em vídeo?", resposta: "Sim, o curso é 100% online com 5 horas de video aulas divididas em mais de 40 aulas. Tudo bem explicado passo a passo." },
  { pergunta: "Por quanto tempo vou poder assistir as aulas?", resposta: "Pelo tempo que quiser. O curso é vitalício. Uma vez seu, é seu pra sempre." },
  { pergunta: "Que tamanho ficam as bonecas depois de prontas?", resposta: "Ficam em média com 28cm podendo variar conforme o tipo de cabelo." },
  { pergunta: "Sou iniciante, vou conseguir fazer?", resposta: "Não importa se você é experiente em feltro ou iniciante. O curso inclui um módulo especialmente para quem é iniciante e aborda tudo o que você precisa saber para criar as bonecas com perfeição." },
  { pergunta: "Não tenho máquina de costura. É um problema?", resposta: "Não. Vou te ensinar a confeccionar tudo à mão. A máquina de costura é opcional." },
  { pergunta: "O valor é único ou é mensalidade?", resposta: "Este valor é único. Você paga uma vez só e tem acesso a tudo isso sem prazo de validade." },
  { pergunta: "Quais são as formas de pagamento?", resposta: "Você pode pagar com cartão de crédito, PIX ou boleto." },
  { pergunta: "Quando vou receber o acesso?", resposta: "O acesso a sua área de membros é enviado automaticamente após a confirmação de seu pagamento. Se você realizar o pagamento por cartão de crédito ou PIX, você receberá os dados de acesso em até 10 minutos. Caso o pagamento seja por boleto bancário a confirmação bancária pode levar até 72 horas." },
];

const checkoutURL = "https://pay.hotmart.com/B46628840G?checkoutMode=10";

function CTA(props) {
  const classes = useStyles();
  return (
    <ScrollTo target="#pricing">
      <ColorButton className={classes.cta}>
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
      <ColorButton className={classes.cta} onClick={handleClickOpen}>
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
          <DialogContentText>
            <Typography variant="body2" color="textSecondary" component="span">
              Na próxima página você poderá escolher a forma de pagamento: <b>cartão, pix ou boleto</b>
            </Typography>
          </DialogContentText>
          <Form buttonText="Continuar" tag="JOIASRARAS-CHECKOUT" redirectTo={checkoutURL} emailPlaceholder="Seu email de acesso" />
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
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>Qual é a sua <span className={classes.highlight}>preferida?</span></h1>
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
        <Grid container spacing={3}>
          <Grid item className={classes.centered} xs={12} lg={7} md={6}>
            <div className={classes.videoWrapper}>
              <iframe src="https://player.vimeo.com/video/527623450?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                className={classes.video}
                width="1920"
                height="1080"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen title="Aperte o Play"></iframe>
            </div>
          </Grid>

          <Grid item className={classes.centered} xs={12} lg={5} md={6}>
            <h1 className={classes.title} >São 7 joias raras para você <span className={classes.highlight}>confeccionar, personalizar e vender</span></h1>
            <p className={classes.subtitle}>Adicione estas lindas bonecas ao seu portifólio e se destaque no mercado oferecendo um produto de alta qualidade e diferenciado.</p>
            <CTA>
              Quero me destacar no mercado
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
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={12} className={classes.centered}>
            <img src={require("assets/img/banner.jpg")} alt="" className={classes.foto} />
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.centered}><span className={classes.highlight}>Para quem</span> é o curso?</h1>
            <p>
              Muito além de uma apostila, este é um curso completo com passo a passo em vídeo para quem quer confeccionar estas lindas bonecas.
            </p>
            <p>
              Não importa se você é experiente em feltro ou iniciante. O curso aborda tudo o que você precisa saber para criar as bonecas com perfeição.
            </p>
            <p>
              Você aprenderá técnicas diferenciadas que vão além do feltro para você usar em outros projetos.
              E tudo isso você pode fazer sem máquina de costura.
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

function SobreCurso() {
  const classes = useStyles();
  return (
    <section className={classes.sectionConteudo}>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={12} md={6} className={classes.centered}>
            <img src={require("assets/img/topic_apostila.png")} alt="" className={classes.foto} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.justify}>
            <h1 className={classes.centered}>Você <span className={classes.highlight}>vai aprender</span></h1>
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
              <CheckIcon className={classes.check} /><span> 2 tipos de cachecóis</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> E muito mais!</span>
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
          <Grid item className={classes.centered} xs={12} md={6}>
            <img src={require("assets/img/planilha.webp")} alt="" className={classes.foto} />
          </Grid>
          <Grid item className={classes.justify} xs={12} md={6}>
            <h1 className={classes.centered}><span className={classes.highlight}>Bônus:</span> Venda com lucro</h1>
            <p>
              Saiba como precificar da forma certa as suas bonecas para que você possa vendê-las e obter lucro de verdade.
            </p>
            <p>
              Eu vou disponibilizar uma planilha para você com todos os materiais, calculado para cada boneca, pronta para você colocar seus valores e descobrir seu preço.
            </p>
            <p>
              Além disso tem uma aula em vídeo que eu explico tudo sobre a planilha e mostro como usá-la.
            </p>
            <p>
              Você nunca mais venderá uma peça sem calcular corretamente o seu preço e você poderá usar este modelo para os seus demais trabalhos.
            </p>
            <CTA>
              Quero ter lucro nas vendas!
            </CTA>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function BonusEspecial() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1>E você ainda vai receber um <span className={classes.highlight}>bônus SUUUPER especial</span></h1>
            <p>
              Molde das bonecas adaptado para você confeccionar porta maternidades como bastidores, guirlandas e flâmulas.
            </p>
            <p>
              <img src={require("assets/img/bonusespecial.jpg")} alt="" className={classes.foto} />
            </p>
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
          <Hidden xsDown>
            <Grid item className={classes.centered} xs={12} md={6}>
              <img src={require("assets/img/topic_bonus.png")} alt="" className={classes.foto} />
            </Grid>
          </Hidden>
          <Grid item className={classes.justify} xs={12} md={6}>
            <h1 className={classes.centered}>Entre agora e tenha <span className={classes.highlight}>acesso imediato</span></h1>
            <p>
              Ao se inscrever por <b>cartão</b> ou <b>PIX</b> você recebe o acesso imediato a:
            </p>
            {recap.map((topic) => (
              <p key={topic.title}>
                <CheckIcon className={classes.check} /><span> {topic.title}</span>
              </p>
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function AcessoVitalicio() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h1 className={classes.centered}>O curso é seu <span className={classes.highlight}>para sempre</span></h1>
            <p>
              Você paga uma vez e tem acesso vitalício, para poder assistir as aulas no seu tempo e quantas vezes quiser, além de receber todas as futuras atualizações.
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
            <h1 className={classes.centered}>Você não tem <span className={classes.highlight}>nada a perder</span></h1>
            <p>O Curso Bonecas Joias Raras tem 7 dias de garantia incondicional.</p>
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
        <Grid container className={classes.grid} spacing={0}>
          <Grid item className={classes.centered} xs={12}>
            <h1>O que os alunos estão <br /><span className={classes.highlight}>falando do curso?</span></h1>
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <img src={require("assets/img/testemunho16.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <img src={require("assets/img/testemunho15.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <img src={require("assets/img/testemunho14.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <img src={require("assets/img/testemunho22.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function Testemunhos2() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={0}>
          <Grid item className={classes.centered} xs={12} sm={4}>
            <img src={require("assets/img/testemunho12.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={4}>
            <img src={require("assets/img/testemunho6.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={4}>
            <img src={require("assets/img/testemunho13.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={4}>
            <img src={require("assets/img/testemunho2.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={4}>
            <img src={require("assets/img/testemunho9.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={4}>
            <img src={require("assets/img/testemunho10.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12}>
            <CheckoutButton>
              Estou convencida, quero entrar para o curso
            </CheckoutButton>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function Testemunhos3() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md" className={classes.centered}>
        <Grid container className={classes.grid} spacing={0}>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <img src={require("assets/img/testemunho20.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <img src={require("assets/img/testemunho21.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <img src={require("assets/img/testemunho1.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12} sm={3}>
            <img src={require("assets/img/testemunho23.jpg")} alt="Testemunho" className={classes.fotoTestemunho} />
          </Grid>
          <Grid item className={classes.centered} xs={12}>
            <CheckoutButton>
              Estou convencida, quero entrar para o curso
            </CheckoutButton>
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

      <Promessa />
      <DedoNaFerida />
      <Testemunhos1 />
      <Conteudo />
      <SobreCurso />
      <AcessoVitalicio />
      <Bonus />
      <BonusEspecial />
      <AcessoImediato />
      <div id="pricing" />
      <Preco />
      <Garantia />
      <Testemunhos3 />
      <SobreMim />
      <FAQs />
      <Preco />
      <DuvidasWhats />
      <Footer />
    </main>
  );
}
