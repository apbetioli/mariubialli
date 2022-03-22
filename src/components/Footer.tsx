import { Box } from "@mui/material";
import MUILink from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        fontSize: "0.7em",
        justifyContent: "center",
        p: 3,
      }}
    >
      <MUILink m={1} href="/politica-de-privacidade" target="_blank">
        Politica de Privacidade
      </MUILink>
      <MUILink m={1} href="/termos-de-uso" target="_blank">
        Termos de Uso
      </MUILink>
    </Box>
  );
}
