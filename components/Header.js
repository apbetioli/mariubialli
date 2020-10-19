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
    display: "none",
  },
  rightButtons: {
    height: "100%",
    alignItems: "center",
    display: "none",
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
          <div className={classes.leftButtons}>
            <Button className={classes.toolbarButton}>Apostilas grátis</Button>
            <Button className={classes.toolbarButton}>Cursos</Button>
          </div>

          <Link className={classes.logoWrapper} href="/">
            <img className={classes.logo} src="/logo.png" alt="" />
          </Link>

          <div className={classes.rightButtons}>
            <Button className={classes.toolbarButton}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
      <div id="scrollTop" />
    </>
  );
}
