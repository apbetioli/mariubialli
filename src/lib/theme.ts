import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#016f57",
      light: "#E1FFF8",
      dark: "#016f57",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#63CCFF",
      main: "#6B8BFE",
      dark: "#012DC9",
      contrastText: "#FFF",
    },
    success: {
      main: "#FE6B8B",
      light: "#FFE1E8",
      dark: "#B90129",
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
          fontWeight: "bold",
          width: "100%",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "#016f57",
          backgroundColor: "white",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});

export default theme;
