import { Box } from "@mui/material";
import MUILink from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        display: "flex",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        fontSize: "0.7em",
        justifyContent: "center",
        p: 3,
      }}
      className="rainbow"
    >
      <MUILink
        m={1}
        href="/politica-de-privacidade"
        target="_blank"
        rel="noopener"
      >
        Politica de Privacidade
      </MUILink>
      <MUILink m={1} href="/termos-de-uso" target="_blank" rel="noopener">
        Termos de Uso
      </MUILink>
    </Box>
  );
}
