import { Container, Grid, makeStyles } from "@material-ui/core";
import { RichText } from "prismic-reactjs";
import React from "react";
import { client } from "../services/prismic";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    marginBottom: 50,
  },
  photo: {
    maxWidth: "100%",
  },
}));

export default function QuemSouEu({ about }) {
  const classes = useStyles();
  return (
    <Container className="fullHeight">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item md={6}>
          <img src={about.data.photo.url} alt="" className={classes.photo} />
        </Grid>
        <Grid item md={6}>
          {RichText.render(about.data.bio)}
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const about = await client.getSingle("quem_sou_eu");

  console.log(about);

  return { props: { about }, unstable_revalidate: 1 };
}
