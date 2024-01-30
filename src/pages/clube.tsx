import { GetStaticProps } from "next";
import React from "react";
import Footer from "../components/Footer";
import MyButton from "../components/MyButton";
import ScrollTo from "../components/ScrollTo";
import Section from "../components/Section";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";
import clubePageQuery from "../graphql/queries/clubePage.graphql";
import client from "../lib/graphqlClient";
import Header from "../components/Header";

export default function Clube({ seo, hero, sections, whatsApp }) {
  return (
    <>
      {seo && <SEO {...seo} />}

      <Header />

      <Section {...hero}>
        <ScrollTo target="#cl0hf0m2t1rx30bkekq62j6h6">
          <MyButton>Quero fazer bonecas perfeitas</MyButton>
        </ScrollTo>
      </Section>

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
    query: clubePageQuery,
  });

  return {
    props: data.salesPage,
    revalidate: 60 * 60, //1h
  };
};
