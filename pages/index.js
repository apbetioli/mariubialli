import Form from "components/Form";
import Hero from "components/Hero";
import PrismicClient from "lib/prismic";
import { RichText } from "prismic-reactjs";
import React from "react";
import Layout from "../components/Layout";

export default function Home(props) {
  const { home } = props;
  return (
    <Layout {...props}>
      <Hero>
        <h1>{RichText.asText(home.data.title)}</h1>
        <h4>
          {RichText.asText(home.data.subtitle)}
        </h4>
        <Form
          buttonText={RichText.asText(home.data.button)}
          redirectTo="/obrigado-newsletter"
          tag="NEWSLETTER"
        />
      </Hero>
    </Layout>
  );
}

export async function getStaticProps() {
  const home = await PrismicClient.getSingle("home");
  return { props: { home }, revalidate: 1 };
}
