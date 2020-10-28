import { Container, Grid, makeStyles } from "@material-ui/core";
import PrismicClient from "lib/prismic";
import { RichText } from "prismic-reactjs";
import React from "react";

const useStyles = makeStyles((theme) => ({
  photo: {
    height: 400,
    maxWidth: "100%",
  },
  bio: {
    textAlign: "justify",
  },
}));

export default function QuemSouEu({ about }) {
  const classes = useStyles();
  return (
    <Container className="fullHeight">
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item md={6}>
          <img src={about.data.photo.url} alt="" className={classes.photo} />
        </Grid>
        <Grid item md={6} className={classes.bio}>
          {RichText.render(about.data.bio)}
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const about = await PrismicClient.getSingle("quem_sou_eu");
  return { props: { about }, revalidate: 1 };
}
