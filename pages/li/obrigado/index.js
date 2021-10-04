import { Container, Grid, makeStyles, Typography, withStyles } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { WhatsApp } from "@material-ui/icons";
import Head from "next/head";
import React from "react";
import ColorButton from "../../../components/ColorButton";
import Footer from "../../../components/Footer";
import Banner from "../banner";
import Contador from "../contador";
import Programacao from "../programacao";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: "1rem",
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
  card: {
    backgroundColor: "white",
    margin: '16px 16px',

  },
  cta: {
    textAlign: "center",
    width: "100%",
  },
  sectionCta: {
    marginBottom: 30,
    marginTop: 50,
  },
  sectionConteudo: {
    backgroundColor: "#ffe8ed",
    marginTop: 50,
  },
  sectionGreen: {
    marginTop: 50,
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
  heart: {
    color: "#FE6B8B",
    position: "relative",
    top: 5,
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

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function DoisPassos() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => { setProgress(80); }, 500);
    return () => { clearInterval(timer); };
  }, []);


  return (
    <section>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item className={classes.centered} xs={12}>

            <h2>Faltam apenas 2 passos para finalizar sua inscrição!</h2>

            <LinearProgressWithLabel value={progress} />
            <h4>1) Clique no botão abaixo e entre para o grupo do WhatsApp para receber todas as informações de acesso.</h4>
            <ColorButton
              variant="contained"
              type="button"
              href="https://bit.ly/mac-whats-obrigado"
              target="_blank"
              style={ColorButton.whatsapp}
            >
              <WhatsApp />&nbsp; Entrar para o grupo
            </ColorButton>

            <p>&nbsp;</p>

            <h4>2) Acesse seu email e responda a pesquisa que te enviamos!</h4>
            <p>O nosso objetivo é fazer com que você aproveite ao máximo esse evento! Queremos ouvir de você quais são suas principais dificuldades e necessidades para garantir que esse evento vai superar suas expectativas.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default function LIObrigado() {

  return (
    <>
      <Head>
        <title>Artesã Criativa - Mari Ubialli</title>
        <meta
          name="description"
          content="Vem aprender como ir do zero a 5k criando peças exclusivas e seus próprios moldes em feltro."
        />
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>

      <Banner />
      <DoisPassos />
      <Contador date={new Date("2021-10-18 08:00:00")} title="A Maratona começa em" />
      <Programacao />

      <Footer />
    </>
  )
}

LIObrigado.defaultProps = {
  origin: 'og',
};
