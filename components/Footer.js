import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    height: theme.footer.height,
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className="copyright">
        &copy; 2020 Mari Ubialli - Artesanato Criativo
      </div>
    </footer>
  );
}
