import React from "react";
import ColorButton from "../../components/ColorButton";
import Obrigado from "../../components/Obrigado";
import LinearProgress from '@material-ui/core/LinearProgress';
import DraftsIcon from '@material-ui/icons/Drafts';
import Box from '@material-ui/core/Box';
import { Container, Grid, makeStyles, Typography, withStyles } from "@material-ui/core";
import Footer from "../../components/Footer";
import { WhatsApp } from "@material-ui/icons";

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

const useStyles = makeStyles((theme) => ({
  centered: {
    textAlign: 'center'
  }
}));

export default function InscreverObrigado(props) {
  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => { setProgress(90); }, 500);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <>
      <section>
        <Container maxWidth="md">
        </Container>
      </section>

      <Obrigado title="Quase lá..." subtitle="Faltam apenas 2 passos para finalizar sua inscrição!"
        social={false}>
        <LinearProgressWithLabel value={progress} />

        <h4>1) Clique no botão abaixo e entre para o grupo do WhatsApp para receber todas as informações de acesso.</h4>
        <ColorButton
          variant="contained"
          type="button"
          href="https://wa.me/5544920024218"
          target="_blank"
          style={ColorButton.whatsapp}
        >
           <WhatsApp/>&nbsp; Entrar para o grupo
        </ColorButton>

        <h4>2) Acesse seu email e responda a pesquisa que te enviamos!</h4>

        <p><DraftsIcon /></p>

        <p>#ArtesãSuprema</p>
      </Obrigado>

      <Footer />

    </>
  )
}
