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

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 50,
    maxWidth: 345,
  },
  content: {
    height: 150,
  },
  media: {
    height: 194,
  },
}));

function Apostila({ asset }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={"/apostilas/" + asset.uid}>
        <CardMedia
          component="img"
          height={classes.media.height}
          className={classes.media}
          image={asset.data.images[0].image.url}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {RichText.asText(asset.data.title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {RichText.asText(asset.data.subtitle)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Apostilas({ assets }) {
  const classes = useStyles();
  return (
    <Container className="fullHeight">
      <Grid container direction="row" justify="center" alignItems="center">
        {assets.results.map((asset) => (
          <Grid key={asset.uid} item md={4}>
            <Apostila asset={asset} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const assets = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "asset"),
    { orderings: "[my.first_publication_date desc]" }
  );
  return { props: { assets }, revalidate: 1 };
}
