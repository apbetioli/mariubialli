import { Grid, Hidden, Link, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    alignItems: "center",
    display: "flex",
    fontSize: "0.675rem",
    justifyContent: "center",
    height: theme.footer.height,
    textAlign: "center"
  },
  footerLinks: {
    fontWeight: "bold",
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid>
        <Grid item lg={12} className={classes.footerLinks}>
          <Link href="/politica-de-privacidade">Política de privacidade</Link>
          {" - "}
          <Link href="/termos-de-uso">Termos de uso</Link>
        </Grid>
        <Hidden smUp>
          <Grid item lg={12}>
            &copy; 2020 Mari Ubialli
          </Grid>
          <Grid item lg={12}>
            Todos os direitos reservados
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item lg={12}>
            &copy; 2020 Mari Ubialli - Todos os direitos reservados
          </Grid>
        </Hidden>
      </Grid>
    </footer >
  );
}
