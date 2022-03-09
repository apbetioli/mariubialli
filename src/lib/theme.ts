import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#63CCFF",
      main: "#009BE5",
      dark: "#006DB3",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#FE6B8B",
      contrastText: "#FFF",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontSize: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          width: "100%",
        },
        contained: {
          boxShadow: "none",
          "&:active": {
            boxShadow: "none",
          },
          "&:hover": {
            backgroundColor: "white",
            color: "#006DB3",
          },
        },
      },
    },
  },
});

export default theme;
