import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import theme from "assets/js/theme";
import Api from "services/api";

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

const HeroTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.error.main,
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

export default function Hero(props) {
  const router = useRouter();
  const classes = useStyles();
  const [email, setEmail] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();
    let form = {
      email,
      tag: "TESTE",
    };

    try {
      console.log(process.env.REACT_APP_API_URL);
      await Api.post("/subscribe", form);

      router.push("/obrigado?email=" + email);

    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao se inscrever. Tente novamente mais tarde.");
    }
  }

  return (
    <form onSubmit={onSubmit.bind(this)}>
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
            <HeroTextField
              id="filled-full-width"
              label="Email"
              type="email"
              placeholder="Digite o seu melhor email..."
              fullWidth
              required
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={email}
              onChange={handleEmailChange.bind(this)}
            />
            <Button variant="contained" color="primary" type="submit">
              Quero receber as apostilas em meu email
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}