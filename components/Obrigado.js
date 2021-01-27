import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";
import ColorButton from "./ColorButton";

const useStyles = makeStyles((theme) => ({
  centered: {
    textAlign: "center",
  },
  button: {
    marginBottom: 30,
  },
}));

export default function Obrigado(props) {
  const classes = useStyles();

  return (
    <Container className="fullHeight">
      <Grid className={classes.grid} container spacing={0}>
        <Grid item md={3} xs={12}></Grid>
        <Grid className={classes.centered} item md={6} xs={12}>
          <h1 className={classes.title}>Obrigada</h1>
          <h2 className={classes.subtitle}>{props.children}</h2>
          <p className={classes.subtitle}>
            Enquanto isso, siga-me nas redes sociais e acompanhe as novidades!
          </p>
        </Grid>
        <Grid item md={3} xs={12}></Grid>
        <Grid item md={2} xs={12}></Grid>
        <Grid className={classes.centered} item md={4} xs={12}>
          <ColorButton
            className={classes.button}
            style={ColorButton.youtube}
            href="https://www.youtube.com/channel/UC8YxukVEnCQLNmbExz-ViAA?sub_confirmation=1"
            target="_blank"
            rel="noopener"
          >
            <YouTubeIcon />
            &nbsp; Inscreva-se no meu canal
          </ColorButton>
        </Grid>
        <Grid className={classes.centered} item md={4} xs={12}>
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
        <Grid item md={2} xs={12}></Grid>
      </Grid>
    </Container>
  );
}
