import { Grid, makeStyles } from "@material-ui/core";
import Form from "components/Form";
import PrismicClient from "lib/prismic";
import { RichText } from "prismic-reactjs";
import React from "react";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "10px",
  },
  centered: {
    textAlign: "center",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  const { home } = props;

  return (
    <Layout {...props}>
      <div className="fullHeight">
        <Grid className={classes.grid} container spacing={0}>
          <Grid item md={3}></Grid>
          <Grid className={classes.centered} item md={6}>

            <h1>{RichText.asText(home.data.title)}</h1>
            <h4>
              {RichText.asText(home.data.subtitle)}
            </h4>
            <Form
              buttonText={RichText.asText(home.data.button)}
              redirectTo="/obrigado-newsletter"
              tag="NEWSLETTER"
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const home = await PrismicClient.getSingle("home");
  return { props: { home }, revalidate: 1 };
}
