import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import pageQuery from "../graphql/queries/page.graphql";
import pagesQuery from "../graphql/queries/pages.graphql";
import client from "../lib/graphqlClient";

export default function GraphCMSPage({ seo, content, showHeader, showFooter }) {
  return (
    <>
      {seo && <SEO {...seo} />}
      {showHeader && <Header />}
      <main>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: content.html }} />
        </Container>
      </main>
      {showFooter && <Footer />}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: pagesQuery,
  });

  const paths = data.pages.map((page) => {
    return { params: { slug: page.slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: pageQuery,
    variables: { slug: params.slug },
  });

  return {
    props: {
      ...data.page,
      revalidate: 60 * 60, //1h
    },
    notFound: !data.page,
  };
};
