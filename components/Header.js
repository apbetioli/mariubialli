import { Link } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "100px",
  },
  logoWrapper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  leftButtons: {
    flexGrow: 1,
    height: "100%",
  },
  rightButtons: {
    height: "100%",
    alignItems: "center",
  },
  toolbar: {
    height: "100px",
    backgroundColor: theme.palette.secondary.main,
  },
  toolbarButton: {
    height: "100%",
    marginRight: theme.spacing(3),
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftButtons}></div>

          <Link className={classes.logoWrapper} href="/">
            <img className={classes.logo} src="/logo.png" alt="" />
          </Link>

          <div className={classes.rightButtons}>
            <Button
              component={Link}
              href="mailto:contato@mariubialli.com"
              className={classes.toolbarButton}
            >
              Contato
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div id="scrollTop" />
    </>
  );
}
