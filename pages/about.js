import { Container, Grid, makeStyles } from "@material-ui/core";
import PrismicClient from "lib/prismic";
import { RichText } from "prismic-reactjs";
import React from "react";
import classnames from "classnames";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  photo: {
    maxHeight: 400,
    maxWidth: "100%",
  },
  bio: {
    textAlign: "justify",
  },
}));

export default function QuemSouEu(props) {
  const classes = useStyles();
  const { about } = props;
  return (
    <Layout {...props}>
      <Container className={classnames("fullHeight", classes.root)}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={6} className={classes.bio}>
            {RichText.render(about.data.bio)}
          </Grid>
          <Grid item md={6}>
            <img src={about.data.photo.url} alt="" className={classes.photo} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await PrismicClient.getSingle("about");
  const title = "Sobre";
  const page = "/about";
  return { props: { about, title, page }, revalidate: 1 };
}
