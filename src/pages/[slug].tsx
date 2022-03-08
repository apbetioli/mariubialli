import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../components/Footer";
import pageQuery from "../graphql/queries/page.graphql";
import pagesQuery from "../graphql/queries/pages.graphql";
import client from "../lib/graphqlClient";

export default function GraphCMSPage({ page }) {
  return (
    <>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: page.content.html }} />
      </Container>
      {page.showFooter && <Footer />}
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
      page: data.page,
      revalidate: 60 * 60, //1h
    },
    notFound: !data.page,
  };
};
