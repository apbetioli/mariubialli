import { makeStyles } from "@material-ui/core";
import Form from "components/Form";
import Hero from "components/Hero";
import React from "react";

const useStyles = makeStyles((theme) => ({
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
}));

export default function Home(props) {
  const classes = useStyles();
  return (
    <>
      <Hero>
        <h1 className={classes.title}>Apostilas gratuitas toda semana</h1>
        <h4 className={classes.subtitle}>
          Deixe seu email e receba semanalmente as apostilas de moldes de feltro
          que eu faço nos meus vídeos do youtube. E o melhor: são totalmente
          gratuitas.
        </h4>
        <Form />
      </Hero>
    </>
  );
}
