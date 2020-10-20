import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import React from "react";
import Form from "./Form";

const backgroundImage = require("assets/img/hero.jpg");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hero: {
    background: `url('${backgroundImage}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  grid: {
    zIndex: 2,
    position: "relative",
    padding: "50px",
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: "3.3125rem",
    lineHeight: "1.5em",
  },
  subtitle: {
    color: theme.palette.primary.main,
    fontSize: "1.125rem",
    lineHeight: "1.5em",
  },
  centered: {
    textAlign: "center",
  },
}));

export default function Hero(props) {
  const classes = useStyles();

  return (
    <div className={classnames(classes.hero, "hero")}>
      <Grid className={classes.grid} container spacing={0}>
        <Grid item md={3}></Grid>
        <Grid className={classes.centered} item md={6}>
          <h1 className={classes.title}>Apostilas gratuitas toda semana</h1>
          <h4 className={classes.subtitle}>
            Deixe seu email e receba semanalmente as apostilas de moldes de
            feltro que eu faço nos meus vídeos do youtube. E o melhor: são
            totalmente gratuitas.
          </h4>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}
