import { Box } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Section from "../../components/Section";
import SEO from "../../components/SEO";
import aulasPageQuery from "../../graphql/queries/aulasPage.graphql";
import client from "../../lib/graphqlClient";
import Header from "../../components/Header";

export default function Aulas({ seo, hero, sections, origin }) {
  return (
    <>
      <SEO {...seo} />

      <Header />

      <Box component="main">
        <Section {...hero}>
          <Form
            buttonText="Quero ser avisada"
            redirectTo={`/aulas/obrigado/${origin}`}
            tag="AULAS"
          />
        </Section>

        {sections.map((section, index) => {
          return <Section id={section.name + index} key={index} {...section} />;
        })}
      </Box>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const origins = ["fb", "gg", "og", "tg", "em"];

  const paths = origins.map((origin) => {
    return { params: { origin: origin } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: aulasPageQuery,
  });

  return {
    props: {
      ...data.salesPage,
      origin: params.origin,
    },
    revalidate: 60 * 60, //1h
  };
};
