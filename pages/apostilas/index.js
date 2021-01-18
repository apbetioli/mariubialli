import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PrismicClient from "lib/prismic";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import React from "react";
import Layout from "../../components/Layout";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 20,
    maxWidth: 345,
  },
  content: {
    [theme.breakpoints.up("sm")]: {
      height: 150,
    },    
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

export default function Apostilas(props) {
  return (
    <Layout {...props}>
      <Container className="fullHeight">
        <h1>Apostilas Gratuitas</h1>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          {props.assets.results.map((asset) => (
            <Grid key={asset.uid} item md={4}>
              <Apostila asset={asset} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const assets = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "asset"),
    { orderings: "[document.first_publication_date desc]" }
  );
  return { props: { assets }, revalidate: 1 };
}
