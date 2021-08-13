import { Container, Typography, withStyles } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { WhatsApp } from "@material-ui/icons";
import Head from "next/head";
import React from "react";
import ColorButton from "../../../components/ColorButton";
import Footer from "../../../components/Footer";
import Obrigado from "../../../components/Obrigado";

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

export default function LS1Obrigado() {

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => { setProgress(80); }, 500);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <>
      <Head>
        <title>Artesã Suprema - Mari Ubialli</title>
        <meta
          name="description"
          content="Vem aprender como gerar renda criando seus próprios moldes em feltro."
        />
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>

      <Obrigado title="Quase lá..." subtitle="Faltam apenas 2 passos para finalizar sua inscrição!"
        social={false}>
        <LinearProgressWithLabel value={progress} />
        <h4>1) Clique no botão abaixo e entre para o grupo do WhatsApp para receber todas as informações de acesso.</h4>
        <ColorButton
          variant="contained"
          type="button"
          href="/whats"
          target="_blank"
          style={ColorButton.whatsapp}
        >
          <WhatsApp />&nbsp; Entrar para o grupo
        </ColorButton>

        <p>&nbsp;</p>

        <h4>2) Acesse seu email e responda a pesquisa que te enviamos!</h4>
        <p>O nosso objetivo é fazer com que você aproveite ao máximo esse evento! Queremos ouvir de você quais são suas principais dificuldades e necessidades para garantir que esse evento vai superar suas expectativas.</p>
      </Obrigado>

      <Footer />

    </>
  )
}
