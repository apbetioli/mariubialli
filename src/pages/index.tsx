import { GetStaticProps } from "next";
import React from "react";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section from "../components/Section";
import WhatsAppButton from "../components/WhatsAppButton";
import salesPageQuery from "../graphql/queries/salesPage.graphql";
import client from "../lib/graphqlClient";

export default function Home({
  hero,
  sections,
  whatsApp,
  checkoutTag,
  checkoutUrl,
}) {
  return (
    <>
      <Hero {...hero} />

      {sections.map((section, index) => {
        return (
          <Section
            id={section.name + index}
            key={index}
            {...section}
            checkoutTag={checkoutTag}
            checkoutUrl={checkoutUrl}
          />
        );
      })}

      {whatsApp && <WhatsAppButton {...whatsApp} />}

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: salesPageQuery });

  return {
    props: data.salesPage,
    revalidate: 60 * 60, //1h
  };
};
