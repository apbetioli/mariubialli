import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import { GetStaticProps } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import apostilasQuery from "../graphql/queries/apostilas.graphql";
import client from "../lib/graphqlClient";

export default function Apostilas({ seo, title, apostilas }) {
  return (
    <>
      {seo && <SEO {...seo} />}

      <Header />

      <Container>
        <h2>{title}</h2>

        <Grid container spacing={3}>
          {apostilas.map((apostila, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: 1, display: "flex", flexDirection: "column" }}
                >
                  <CardMedia component="div" sx={{ position: "relative" }}>
                    <Image
                      src={apostila.cover.url}
                      alt={apostila.title}
                      width={500}
                      height={281}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      priority={index <= 1}
                    />
                  </CardMedia>

                  <CardContent sx={{ flexGrow: 1 }}>
                    <h4>{apostila.title}</h4>
                    <p>{apostila.subtitle}</p>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href={apostila.videoUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      Assistir
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      href={`/api/download/${apostila.slug}`}
                      target="_blank"
                      rel="noopener"
                    >
                      Download
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: apostilasQuery });
  return {
    props: data.apostilasPages[0],
    revalidate: 60 * 60,
  };
};
