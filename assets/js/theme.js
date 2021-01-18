import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  footer: {
    height: 100,
  },
  palette: {
    primary: {
      main: "#B8697C",
    },
    secondary: {
      main: "#EED2D9",
    },
    info: {
      main: "#CFE6F1",
    },
    error: {
      main: "#B8697C",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
