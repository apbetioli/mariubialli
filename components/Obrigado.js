import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.error.main,
    fontSize: "3.3125rem",
    lineHeight: "1.5em",
  },
  subtitle: {
    color: theme.palette.error.main,
    fontSize: "1.125rem",
    lineHeight: "1.5em",
  },
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
          <h1 className={classes.title}>Obrigado</h1>
          <h4 className={classes.subtitle}>{props.children}</h4>
          <h5 className={classes.subtitle}>
            Enquanto isso, siga-me nas redes sociais e acompanhe as novidades!
          </h5>
        </Grid>
        <Grid item md={3} xs={12}></Grid>
        <Grid item md={2} xs={12}></Grid>
        <Grid className={classes.centered} item md={4} xs={12}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            href="https://www.youtube.com/channel/UC8YxukVEnCQLNmbExz-ViAA?sub_confirmation=1"
            target="_blank"
            rel="noopener"
          >
            <YouTubeIcon />
            &nbsp; Inscreva-se no meu canal
          </Button>
        </Grid>
        <Grid className={classes.centered} item md={4} xs={12}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            href="http://www.instagram.com/mariubialli"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
            &nbsp; Siga-me no instagram
          </Button>
        </Grid>
        <Grid item md={2} xs={12}></Grid>
      </Grid>
    </Container>
  );
}
