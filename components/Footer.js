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
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid>
        <Grid item lg={12} className={classes.footerLinks}>
          <Link href="/politica-de-privacidade" target="_blank" rel="noopener">Política de privacidade</Link>
          {" - "}
          <Link href="/termos-de-uso" target="_blank" rel="noopener">Termos de uso</Link>
        </Grid>
        <Hidden smUp>
          <Grid item lg={12}>
            Copyright &copy; 2021 Mari Ubialli - 33.939.585/0001-69
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item lg={12}>
            &copy; 2022 Mari Ubialli - 33.939.585/0001-69 - Todos os direitos reservados
          </Grid>
        </Hidden>
      </Grid>
    </footer >
  );
}
