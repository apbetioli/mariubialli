import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "50px",
  },
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
}));

export default function Obrigado(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0}>
        <Grid item md={3}></Grid>
        <Grid className={classes.centered} item md={6}>
          <h1 className={classes.title}>Obrigado</h1>
          <h4 className={classes.subtitle}>
            Sua inscrição foi realizada com sucesso. Agora é só aguardar que em
            breve você receberá em seu email as apostilas gratuitas.
          </h4>
        </Grid>
      </Grid>
    </div>
  );
}
