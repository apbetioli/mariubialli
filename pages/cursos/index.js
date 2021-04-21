import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import PrismicClient from "lib/prismic";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import React from "react";
import Layout from "../../components/Layout";

const useStyles = makeStyles((theme) => ({
  centered: {
    textAlign: "center",
  },
  card: {
    margin: "auto",
    maxWidth: 345,
  },
  media: {
    height: 194,
  },
}));

function Curso({ asset }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={asset.data.href.url}>
        <CardMedia
          component="img"
          height={classes.media.height}
          className={classes.media}
          image={asset.data.images[0].image.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {RichText.asText(asset.data.title)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Cursos(props) {
  const classes = useStyles();

  return (
    <Layout {...props}>
      <Container className="fullHeight">
        <h1 className={classes.centered}>Cursos</h1>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          {props.assets.results.map((asset) => (
            <Grid key={asset.uid} item md={4}>
              <Curso asset={asset} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const assets = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "course"),
    { orderings: "[document.first_publication_date desc]" }
  );
  const title = "Cursos";
  const page = "/cursos";
  return { props: { assets, title, page }, revalidate: 1 };
}
