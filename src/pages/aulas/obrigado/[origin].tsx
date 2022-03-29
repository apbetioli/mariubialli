import { NotificationsActive, Telegram, YouTube } from "@mui/icons-material";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../../../components/Footer";
import MyButton from "../../../components/MyButton";

const sxGridItem = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  p: 2,
};

export default function AulasObrigado() {
  return (
    <>
      <Box>
        <Container component="section" className="center" maxWidth="md">
          <Typography component="h1" variant="h5" mb={3}>
            Siga os passos abaixo para{" "}
            <span className="highlight">confirmar sua participação</span>
          </Typography>
          <p>
            Como as mensagens podem cair na caixa de spam, para garantir que
            você vai ser avisada, você tem duas ações para fazer:
          </p>
        </Container>
      </Box>
      <Container component="section" className="center" maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ ...sxGridItem }}>
              <h3>
                Inscreva-se no <span className="youtube">Youtube</span>
              </h3>
              <p>
                As aulas acontecerão toda quinta às 16h no Youtube. Inscreva-se
                e ative as notificações{" "}
                <NotificationsActive
                  sx={{ fontSize: "1em", verticalAlign: "middle" }}
                />
              </p>
              <MyButton
                size="small"
                href="https://youtube.com/mariubialli?sub_confirmation=1"
                target="_blank"
                rel="noopener"
              >
                <YouTube sx={{ mr: 1 }} />
                Inscrever no Youtube
              </MyButton>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ ...sxGridItem }}>
              <h3>
                Junte-se no <span className="telegram">Telegram</span>
              </h3>
              <p>Para receber os moldes das aulas, avisos e novos conteúdos.</p>
              <MyButton
                color="secondary"
                size="small"
                href="https://t.me/mariubialli"
                target="_blank"
                rel="noopener"
              >
                <Telegram sx={{ mr: 1 }} />
                Entrar no Telegram
              </MyButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const origins = ["gg", "og", "tg", "em"];

  const paths = origins.map((origin) => {
    return { params: { origin: origin } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: params,
    revalidate: 60 * 60, //1h
  };
};
