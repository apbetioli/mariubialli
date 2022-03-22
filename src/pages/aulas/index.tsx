import { EventAvailable } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from "@mui/material";
import { GetStaticProps } from "next";
import Image from "next/image";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Section from "../../components/Section";
import SEO from "../../components/SEO";
import aboutQuery from "../../graphql/queries/about.graphql";
import client from "../../lib/graphqlClient";

export default function Aulas({ seo, about }) {
  return (
    <>
      <SEO {...seo} />
      <main>
        <Box component="section">
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: "1.5em" },
                    mb: 5,
                  }}
                >
                  Seja avisada das melhores aulas de{" "}
                  <span className="highlight">bonecas de feltro</span>
                </Typography>
                <p>
                  <EventAvailable
                    className="highlightText"
                    sx={{ verticalAlign: "bottom" }}
                  />{" "}
                  Toda quinta às 16h
                </p>
                <Form
                  buttonText="Quero ser avisada"
                  redirectTo="/aulas/obrigado"
                  tag="AULAS"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <Image
                  src="/esmeralda.png"
                  alt=""
                  width="1280"
                  height="800"
                  layout="intrinsic"
                  className="image"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box
          component="section"
          sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
        >
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card elevation={5} className="card">
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image="/bonecas.webp"
                    alt=""
                  ></CardMedia>
                  <CardContent>
                    Aulas completas, passo a passo com moldes gratuitos
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card elevation={5} className="card">
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image="/bonecas.webp"
                    alt=""
                  ></CardMedia>
                  <CardContent>
                    Aprenda a utilizar materiais diferenciados para valorizar
                    suas bonecas
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card elevation={5} className="card">
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image="/bonecas.webp"
                    alt=""
                  ></CardMedia>
                  <CardContent>
                    Aulas atualizadas para desenvolver sua técnica e habilidades
                    manuais
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {about && <Section {...about} />}
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: aboutQuery,
    variables: { id: "cl0gud3ep06ho0bkec85o2hcd" },
  });

  return {
    props: {
      seo: {
        title: "Aulas Gratuitas de Feltro",
        description:
          "Aprenda a criar bonecas lindas com técnica e acabamento perfeitos, mesmo que você nunca tenha costurado, com aulas totalmente gratuitas toda semana",
      },
      about: data.section,
    },
    revalidate: 60 * 60, //1h
  };
};
