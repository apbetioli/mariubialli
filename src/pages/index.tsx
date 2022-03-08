import { GetStaticProps } from "next";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MyButton from "../components/MyButton";
import Section from "../components/Section";
import WhatsAppButton from "../components/WhatsAppButton";
import salesPageQuery from "../graphql/queries/salesPage.graphql";
import client from "../lib/graphqlClient";

const CTA = () => {
  return (
    <MyButton
      sx={{
        backgroundColor: (theme) => theme.palette.primary.dark,
        mt: 2,
      }}
    >
      Quero fazer minha inscrição agora
    </MyButton>
  );
};

export default function Home({ hero, courses, sections, priceSection }) {
  return (
    <>
      <Hero {...hero} />

      <Courses courses={courses} />

      {sections.map((section, i) => {
        return (
          <Section
            id={section.type === "price" ? "price" : null}
            key={"section" + i}
            {...section}
          >
            {section.type === "price" && <CTA />}
          </Section>
        );
      })}

      <WhatsAppButton
        phone="5544920024218"
        message="Oi, gostaria de saber mais sobre os Cursos Mari Ubialli"
        tooltip="Dúvidas? Fale conosco"
      />

      <Section {...priceSection}>
        <CTA />
      </Section>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: salesPageQuery });

  console.log(JSON.stringify(data));

  const priceSection = data.salesPage.sections.filter(
    (section) => section.type === "price"
  )[0];

  return {
    props: {
      hero: data.salesPage.hero,
      sections: data.salesPage.sections,
      courses: data.courses,
      priceSection,
    },
    revalidate: 1,
  };
};
