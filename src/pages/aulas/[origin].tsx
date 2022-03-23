import { EventAvailable } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Section from "../../components/Section";
import SEO from "../../components/SEO";
import aulasPageQuery from "../../graphql/queries/aulasPage.graphql";
import client from "../../lib/graphqlClient";

export default function Aulas({ seo, sections, origin }) {
  return (
    <>
      <SEO {...seo} />
      <main>
        <Box component="section" className="rainbow-box">
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={6}
                lg={5}
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
                  redirectTo={`/aulas/obrigado/${origin}`}
                  tag="AULAS"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={7}
                sx={{
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <Image
                  src="/bonecas.webp"
                  alt=""
                  width="954"
                  height="442"
                  layout="intrinsic"
                  className="image"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box className="rainbow-box">
          {sections.map((section, index) => {
            return (
              <Section id={section.name + index} key={index} {...section} />
            );
          })}
        </Box>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const origins = ["fb", "gg", "og", "tg", "em"];

  const paths = origins.map((origin) => {
    return { params: { origin: origin } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: aulasPageQuery,
  });

  console.log(data);

  return {
    props: {
      ...data.salesPage,
      origin: params.origin,
    },
    revalidate: 60 * 60, //1h
  };
};
