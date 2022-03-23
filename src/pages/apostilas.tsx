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
import Footer from "../components/Footer";
import Header from "../components/Header";
import apostilasQuery from "../graphql/queries/apostilas.graphql";
import client from "../lib/graphqlClient";

export default function Apostilas({ apostilas }) {
  return (
    <>
      <Header />
      <Container>
        <h2>Apostilas gratuitas</h2>
        <Grid container spacing={3}>
          {apostilas.map((apostila, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: 1, display: "flex", flexDirection: "column" }}
                >
                  <CardMedia
                    component="img"
                    src={apostila.cover.url}
                    alt={apostila.title}
                    sx={{ height: 200 }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <h4>{apostila.title}</h4>
                    <p>{apostila.subtitle}</p>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href={apostila.videoUrl}
                      target="_blank"
                    >
                      Assistir
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      href={`/api/download/${apostila.slug}`}
                      target="_blank"
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
    props: data,
    revalidate: 60 * 60,
  };
};
