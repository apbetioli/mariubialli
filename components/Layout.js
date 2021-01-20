import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";

export default function Layout(props) {
  return (
    <>
      <Header />

      {props.children}

      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <Footer />
    </>
  );
}
