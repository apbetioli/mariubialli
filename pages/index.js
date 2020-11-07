import { makeStyles } from "@material-ui/core";
import Form from "components/Form";
import Hero from "components/Hero";
import PrismicClient from "lib/prismic";
import React from "react";
import { RichText } from "prismic-reactjs";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3.3125rem",
    lineHeight: "1.5em",
  },
  subtitle: {
    fontSize: "1.125rem",
    lineHeight: "1.5em",
  },
}));

export default function Home({ home }) {
  const classes = useStyles();
  return (
    <>
      <Hero>
        <h1 className={classes.title}>{RichText.asText(home.data.title)}</h1>
        <h4 className={classes.subtitle}>{RichText.asText(home.data.subtitle)}</h4>
        <Form
          buttonText={RichText.asText(home.data.button)}
          redirectTo="/obrigado-newsletter"
          tag="NEWSLETTER"
        />
      </Hero>
    </>
  );
}

export async function getStaticProps() {
  const home = await PrismicClient.getSingle("home");

  return { props: { home }, revalidate: 1 };
}
