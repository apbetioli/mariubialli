import { GetStaticProps } from "next";
import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";
import salesPageQuery from "../graphql/queries/salesPage.graphql";
import client from "../lib/graphqlClient";

export default function Clube({ seo, hero, sections, whatsApp }) {
  return (
    <>
      {seo && <SEO {...seo} />}

      <Hero {...hero} />

      {sections.map((section, index) => {
        return <Section id={section.name + index} key={index} {...section} />;
      })}

      {whatsApp && <WhatsAppButton {...whatsApp} />}

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: salesPageQuery,
  });

  return {
    props: data.salesPage,
    revalidate: 60 * 60, //1h
  };
};
