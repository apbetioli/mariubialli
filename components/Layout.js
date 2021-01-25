import { makeStyles, useScrollTrigger, Zoom } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTo from "./ScrollTo";

const useStyles = makeStyles((theme) => ({
  scrollTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 10,
  },
}));


export default function Layout(props) {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <Header />

      {props.children}

      <Zoom in={trigger}>
        <ScrollTo target="#scrollTop" className={classes.scrollTop}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTo>
      </Zoom>

      <Footer />
    </>
  );
}
