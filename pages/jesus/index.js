import { Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper } from "@material-ui/core"
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Head from "next/head"
import { useRouter } from "next/router"
import { default as React } from "react"
import BotaoWhats from "../../components/BotaoWhats"
import ColorButton from "../../components/ColorButton"
import Footer from "../../components/Footer"
import Form from "../../components/Form"
import ScrollTo from "../../components/ScrollTo"

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
    alignSelf: "center",
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
    },
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
}))

const faqs = [
  { pergunta: "Quando vou receber o acesso? Quando começa o curso?", resposta: "O acesso a sua área de membros é enviado automaticamente após a confirmação de seu pagamento. Ou seja, começa pra você assim que você se inscreve. Se você realizar o pagamento por cartão de crédito ou PIX, você receberá os dados de acesso em até 10 minutos. Caso o pagamento seja por boleto bancário, a confirmação bancária pode levar até 72 horas." },
  { pergunta: "O curso é em vídeo?", resposta: "Sim, o curso é 100% online e em vídeo. Tudo bem explicado passo a passo." },
  { pergunta: "Por quanto tempo vou poder assistir as aulas?", resposta: "Pelo tempo que quiser. O curso é vitalício. Uma vez seu, é seu pra sempre." },
  { pergunta: "Que tamanho fica depois de pronto?", resposta: "O Jesus que pára em pé fica com 30cm. A guirlanda tem 30 cm de diâmetro e o Jesus da guirlanda tem 24cm" },
  { pergunta: "Sou iniciante, vou conseguir fazer?", resposta: "Não importa se você é experiente em feltro ou iniciante. O curso inclui um módulo especialmente para quem é iniciante e aborda tudo o que você precisa saber para criar as bonecas com perfeição." },
  { pergunta: "Não tenho máquina de costura. É um problema?", resposta: "Não. Vou te ensinar a confeccionar tudo à mão. A máquina de costura é opcional." },
  { pergunta: "O valor é único ou é mensalidade?", resposta: "Este valor é único. Você paga uma vez só e tem acesso a tudo isso sem prazo de validade." },
  { pergunta: "Quais são as formas de pagamento?", resposta: "Você pode pagar com cartão de crédito, PIX ou boleto. A opção por boleto pode levar 72 horas para liberação após o pagamento." },
]

function CTA(props) {
  const classes = useStyles()
  return (
    <ScrollTo target="#pricing">
      <ColorButton className={classes.cta}>
        {props.children}
      </ColorButton>
    </ScrollTo>
  )
}

function CheckoutButton(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  let checkoutURL = "https://pay.hotmart.com/D49033705A?checkoutMode=10"
  const router = useRouter()
  if (router.query.off)
    checkoutURL += "&off=" + router.query.off

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
              Na próxima página você poderá escolher a forma de pagamento
            </Typography>
          </DialogContentText>
          <Form buttonText="Continuar" tag="JESUS-CHECKOUT" redirectTo={checkoutURL} emailPlaceholder="Seu email de acesso" showName={true} showPhone={true} />
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  )
}

function Promessa() {
  const classes = useStyles()
  return (
    <section>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item className={classes.centered} xs={12} lg={7} md={6}>
            <img src={require("assets/img/jesus/capa.jpg")} alt="" className={classes.foto} />
          </Grid>

          <Grid item className={classes.centered} xs={12} lg={5} md={6}>
            <h1 className={classes.title} >Todo dia é uma nova oportunidade para se renascer em Jesus</h1>
            <p className={classes.subtitle}>Aprenda a confeccionar uma linda guirlanda slim com técnica de pintura com stencil e um Jesus com 30 cm que para em pé sozinho</p>
            <CTA>
              Quero renascer em Jesus!
            </CTA>
          </Grid>

        </Grid>
      </Container>
    </section>
  )
}

function SobreCurso() {
  const classes = useStyles()
  return (
    <section className={classes.sectionConteudo}>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={12} md={7} className={classes.centered}>
            <img src={require("assets/img/jesus/jesus1.jpg")} alt="" className={classes.foto} />
          </Grid>
          <Grid item xs={12} md={5}>
            <h1 className={classes.centered}>Você <span className={classes.highlight}>vai receber</span></h1>
            <p>
              <CheckIcon className={classes.check} /><span> Apostila de moldes em tamanho real pronta para imprimir em A4</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Passo a passo em vídeo</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Moldes de Jesus que para em pé com 30cm</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Moldes de Jesus com 24cm adaptado para guirlanda</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Moldes para guirlanda slim</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Como fazer técnica de pintura com stencil</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Como fazer manto com caída</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Duas opções de escrita prontas</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Módulo exclusivo para iniciantes</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Lista de materiais</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Suporte para tirar dúvidas</span>
            </p>
            <p>
              <CheckIcon className={classes.check} /><span> Acesso vitalício</span>
            </p>
          </Grid>
          <Grid item xs={12} className={classes.centered}>
            <img src={require("assets/img/jesus/jesus2.jpg")} alt="" className={classes.foto} />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

function Preco() {

  const classes = useStyles()

  const router = useRouter()
  let priceImg = require("assets/img/price27.png")
  if (router.query.off == "nxgx5qja")
    priceImg = require("assets/img/price_discount_19.png")

  return (
    <section className={classes.sectionGreen}>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12} md={6}>
            <img src={require("assets/img/tudoisso.png")} alt="" className={classes.preco} />
          </Grid>
          <Grid item className={classes.centered} xs={12} md={6}>
            <img src={priceImg} alt="" className={classes.preco} />
            <div className={classes.precoAviso}>* o preço pode subir a qualquer momento</div>
            <CheckoutButton>
              Quero me inscrever agora!
            </CheckoutButton>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

function SobreMim() {
  const classes = useStyles()
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
            <p>Quero compartilhar meu aprendizado, e ajudar mais pessoas a conhecerem, se apaixonarem e viverem desse artesanato maravilhoso!</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

function FAQs() {
  const classes = useStyles()
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
  )
}

function DuvidasWhats() {
  const classes = useStyles()
  return (
    <BotaoWhats float={true} message="Oi, gostaria de saber mais sobre o Curso Renascer em Jesus" />
  )
}

function DedoNaFerida() {
  const classes = useStyles()
  return (
    <section>

      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12} md={6}>
            <img src={require("assets/img/jesus/felizpascoa.jpg")} alt="" className={classes.foto} />
          </Grid>
          <Grid item className={classes.centered} xs={12} md={6}>
            <img src={require("assets/img/jesus/elevive.jpg")} alt="" className={classes.foto} />
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.centered}><span className={classes.highlight}>Para quem</span> é o curso?</h1>
          </Grid>
          <Grid item md={4}>
            <CheckIcon className={classes.check} /> Seja por hobby ou para venda, você terá tudo o que precisa para criar este lindo trabalho. Aproveite a temporada de páscoa, mas venda o restante do ano também. Jesus nunca sai de moda.
            </Grid>
          <Grid item md={4}>
            <CheckIcon className={classes.check} /> Você pode personalizar o texto da guirlanda como quiser: Feliz Páscoa, Ele vive! E o que mais sua imaginação mandar.
            </Grid>
          <Grid item md={4}>
            <CheckIcon className={classes.check} /> O passo a passo é 100% online e em vídeo para que não fique nenhuma dúvida. E se ficar dúvidas eu vou te responder.
            </Grid>
          <Grid item md={4}>
            <CheckIcon className={classes.check} /> Não precisa de máquina de costura, ensino tudo à mão. Mas se tiver a máquina você também pode usar para acelerar o seu trabalho.
            </Grid>
          <Grid item md={4}>
            <CheckIcon className={classes.check} /> Se você é iniciante, tem um módulo exclusivo para te ensinar as técnicas básicas para a confecção.
            </Grid>
          <Grid item md={4}>
            <CheckIcon className={classes.check} /> Você aprenderá técnicas diferenciadas que vão além do feltro para você usar em outros projetos.
            </Grid>
          <Grid item xs={12}>
            <CTA>
              Sim! Este curso é para mim!
            </CTA>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default function JesusVendas() {
  const classes = useStyles()
  return (
    <main className={classes.root}>
      <Head>
        <title>Curso Renascer em Jesus</title>
        <meta
          name="description"
          content="Aprenda a confeccionar uma linda guirlanda slim com técnica de pintura com stencil e um Jesus com 30 cm que para em pé sozinho."
        />
        <meta
          name="keywords"
          content="feltro, artesanato, costura, ponto caseado, ponto reto, ponto alinhavo, passo a passo, diy, moldes gratuitos, apostilas gratuitas, bonecas, boneca em feltro, jesus, páscoa"
        />
        <meta name="robots" content="index,nofollow"></meta>
      </Head>

      <Promessa />
      <DedoNaFerida />
      <SobreCurso />
      <div id="pricing" />
      <Preco />
      <SobreMim />
      <FAQs />
      <Preco />
      <DuvidasWhats />
      <Footer />
    </main>
  )
}
