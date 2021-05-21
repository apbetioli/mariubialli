import { Container, Grid, makeStyles } from "@material-ui/core";
import { Telegram } from "@material-ui/icons";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as fbq from '../lib/fpixel';
import ColorButton from "./ColorButton";

const useStyles = makeStyles((theme) => ({
  centered: {
    textAlign: "center",
  },
  buttons: {
    marginTop: theme.spacing(2)
  }
}));

function triggerCompleteRegistration() {
  let router = useRouter();

  useEffect(() => {
    if (!router.query.em)
      return;

    let params = {
      em: router.query.em
    };

    if (router.query.ph) params.ph = router.query.ph
    if (router.query.fn) params.fn = router.query.fn

    fbq.track("CompleteRegistration", params)
  })
}

export default function Obrigado(props) {
  triggerCompleteRegistration(props);

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
      </Grid>
      {props.social &&
        <Grid container spacing={3} className={classes.buttons}>
          <Grid className={classes.centered} item xs={12}>
            <p>
              {props.text}
            </p>

          </Grid>
          <Grid className={classes.centered} item xs={12}>
            <ColorButton
              className={classes.button}
              style={ColorButton.blue}
              href="http://t.me/mariubialli"
              target="_blank"
              rel="noopener"
            >
              <Telegram />
              &nbsp; Entre para o canal no Telegram
            </ColorButton>
          </Grid>
        </Grid>
      }
    </Container >
  );
}

Obrigado.defaultProps = {
  title: "Obrigada",
  subtitle: "Inscrição realizada com sucesso!",
  text: "Entre para o meu canal de conteúdo do telegram e receba avisos em primeira mão!",
  social: true
};
