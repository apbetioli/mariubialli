import { Container, Grid, makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";
import ColorButton from "./ColorButton";

const useStyles = makeStyles((theme) => ({
  centered: {
    textAlign: "center",
  },
  buttons: {
    marginTop: theme.spacing(2)
  }
}));

export default function Obrigado(props) {
  const classes = useStyles();

  return (
    <Container className="fullHeight" maxWidth="md">
      <Grid container spacing={0}>
        <Grid className={classes.centered} item xs={12}>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </Grid>
        <Grid className={classes.centered} item xs={12}>
          {props.children}
        </Grid>
        <Grid className={classes.centered} item xs={12}>
          <p>
            {props.text}
          </p>
        </Grid>
      </Grid>
      {props.social &&
        <Grid container spacing={3} className={classes.buttons}>
          <Grid className={classes.centered} item md={6} xs={12}>
            <ColorButton
              className={classes.button}
              href="http://www.instagram.com/mariubialli"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            &nbsp; Siga-me no instagram
          </ColorButton>
          </Grid>
          <Grid className={classes.centered} item md={6} xs={12}>
            <ColorButton
              className={classes.button}
              style={ColorButton.youtube}
              href="https://www.youtube.com/channel/UC8YxukVEnCQLNmbExz-ViAA?sub_confirmation=1"
              target="_blank"
              rel="noopener"
            >
              <YouTubeIcon />
            &nbsp; Inscreva-se no YouTube
          </ColorButton>
          </Grid>
        </Grid>
      }
    </Container >
  );
}

Obrigado.defaultProps = {
  title: "Obrigada",
  subtitle: "Incrição realizada com sucesso!",
  text: "Enquanto isso, siga-me nas redes sociais e acompanhe as novidades!",
  social: true
};
