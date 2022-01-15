import { Container, Grid, makeStyles, Paper, Typography, withStyles } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { WhatsApp } from "@material-ui/icons";
import Head from "next/head";
import React from "react";
import Banner from "../../components/Banner";
import ColorButton from "../../components/ColorButton";
import Contador from "../../components/Contador";
import Footer from "../../components/Footer";
import Programacao from "../../components/Programacao";

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
    backgroundColor: '#fe6b8b',
  }
}))(LinearProgress);


const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  centered: {
    alignSelf: "center",
    textAlign: "center",
    width: "100%",
  },
  card: {
    backgroundColor: "white",
    margin: '16px 16px',

  },
  cta: {
    textAlign: "center",
    width: "100%",
  },
  highlight: {
    backgroundColor: "#FE6B8B",
    color: "#FFF",
    fontStyle: "italic",
    fontWeight: "bold",
    paddingRight: 5,
  },
  title: {
    fontSize: "2em",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  foto: {
    maxWidth: "100%",
  },
  paper: {
    padding: 10,
    margin: 10
  }
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

function DoisPassos(props) {
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

            <Paper className={classes.paper}>
              <h4>1) Entre para o grupo do WhatsApp da Minissérie</h4>
              <p>Clique no botão abaixo para entrar para o grupo do WhatsApp e receber todos os avisos da Minissérie</p>
              <ColorButton
                variant="contained"
                type="button"
                href={props.whats}
                target="_blank"
                style={ColorButton.whatsapp}
              >
                <WhatsApp />&nbsp; Entrar para o grupo
              </ColorButton>

              <p>&nbsp;</p>
            </Paper>

            <Paper className={classes.paper}>
              <h4>2) Acesse seu email e responda a pesquisa que te enviamos!</h4>
              <p>O nosso objetivo é fazer com que você aproveite ao máximo esse evento! Queremos ouvir de você quais são suas principais dificuldades e necessidades para garantir que esse evento vai superar suas expectativas.</p>
              <p>PS.: Caso não encontre o e-mail, procure na sua caixa de lixo eletrônico, spam ou aguarde alguns minutos e verifique novamente.</p>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default function LIObrigado(props) {
  return (
    <>
      <Head>
        <title>{props.name} | Mari Ubialli</title>
        <meta
          name="description"
          content={props.rome}
        />
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>

      <Banner />
      <DoisPassos {...props} />

      <Contador date={new Date(props.startDate)} prefix="A minissérie começa em" />

      <Programacao />

      <Footer />
    </>
  )
}

LIObrigado.defaultProps = {
  origin: 'og',
  whats: "https://bit.ly/mbf-pag-obrigado-whats",
  name: "Minissérie Bonequeira de Feltro",
  rome: "Gere renda extra vendendo suas bonecas de feltro",
  startDate: "2022-01-24 08:00:00"
};
