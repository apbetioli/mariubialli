import { Box } from "@mui/material";
import MUILink from "@mui/material/Link";

export default function Footer() {
  return (
    <footer>
      <Box
        id="footer"
        component="section"
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
        >
          <MUILink m={1} href="/politica-de-privacidade" target="_blank">
            Politica de Privacidade
          </MUILink>
          <MUILink m={1} href="/termos-de-uso" target="_blank">
            Termos de Uso
          </MUILink>
        </Box>
      </Box>
    </footer>
  );
}
