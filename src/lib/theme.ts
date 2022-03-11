import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#63CCFF",
      main: "#FE6B8B",
      dark: "#FE6B8B",
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
          marginTop: 16,
          marginBottom: 16,
          padding: 16,
          
        },
        contained: {
          backgroundColor: "#006DB3",
          color: "#FFF",
          fontWeight: "bold",
          width: "100%",
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
