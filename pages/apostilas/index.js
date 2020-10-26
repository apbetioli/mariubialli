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

function Apostila({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={"/apostilas/" + post.uid}>
        <CardMedia
          component="img"
          height={classes.media.height}
          className={classes.media}
          image={post.data.images[0].image.url}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {RichText.asText(post.data.title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {RichText.asText(post.data.subtitle)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Apostilas({ posts }) {
  const classes = useStyles();
  return (
    <Container className="fullHeight">
      <Grid container direction="row" justify="center" alignItems="center">
        {posts.results.map((post) => (
          <Grid item md={4}>
            <Apostila key={post.uid} post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.post.datetime desc]" }
  );

  return { props: { posts }, unstable_revalidate: 1 };
}
