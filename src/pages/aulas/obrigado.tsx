import { Telegram, YouTube } from "@mui/icons-material";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import MyButton from "../../components/MyButton";
import * as fbq from "../../lib/fpixel";

const sxGridItem = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  p: 2,
};

export default function AulasObrigado() {
  const router = useRouter();

  useEffect(() => {
    fbq.completeRegistration(router.query);
  }, [router.query]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.light,
        }}
      >
        <Container component="section" className="center" maxWidth="md">
          <Typography component="h1" variant="h5" mb={3}>
            Siga os passos abaixo para{" "}
            <span className="highlight">confirmar sua participação</span>
          </Typography>
          <div className="videoWrapper">
            <iframe
              loading="lazy"
              src={
                "https://www.youtube.com/embed/Xy0sV7QmdwY?rel=0&modestbranding=1&showinfo=0"
              }
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </Box>
      <Container component="section" className="center" maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ ...sxGridItem }}>
              <h3>
                Junte-se no <span className="telegram">Telegram</span>
              </h3>
              <p>
                Clique abaixo e entre no meu canal exclusivo do Telegram para
                receber avisos e atualizações de aulas e novos conteúdos.
              </p>
              <MyButton
                color="secondary"
                size="small"
                href="https://t.me/mariubialli"
                target="_blank"
              >
                <Telegram sx={{ mr: 1 }} />
                Entrar no Telegram
              </MyButton>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ ...sxGridItem }}>
              <h3>
                Inscreva-se no <span className="youtube">Youtube</span>
              </h3>
              <p>
                Clique abaixo e se inscreva no Youtube para ter acesso a aulas
                exclusivas de feltro.
              </p>
              <MyButton
                size="small"
                href="https://youtube.com/mariubialli?sub_confirmation=1"
                target="_blank"
              >
                <YouTube sx={{ mr: 1 }} />
                Inscrever no Youtube
              </MyButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
