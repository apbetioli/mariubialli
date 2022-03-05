import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import PAGE_QUERY from "../graphql/queries/page.graphql";
import client from "../lib/apollo-client";

export default function GraphCMSPage({ page }) {
  return (
    <>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: page.content.html }} />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "politica-de-privacidade" } },
      { params: { slug: "termos-de-uso" } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: PAGE_QUERY,
    variables: { slug: params.slug },
  });

  return {
    props: {
      page: data.page,
      revalidate: 60*60, //1h
    },
    notFound: !data.page,
  };
};
