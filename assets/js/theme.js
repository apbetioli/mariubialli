import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    button: {
      borderRadius: 0
    },
  },
  footer: {
    height: 80,
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
  },
});

export default theme;
