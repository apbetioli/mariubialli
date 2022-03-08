import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Hero from "../../components/Hero";
import courseQuery from "../../graphql/queries/course.graphql";
import coursesQuery from "../../graphql/queries/courses.graphql";
import client from "../../lib/graphqlClient";

export default function Course({ course }) {
  return (
    <>
      <Hero
        title={course.title}
        subtitle={course.description}
        cta="Comprar agora"
      />
      <Container>{course.title}</Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: coursesQuery,
  });

  const paths = data.courses.map((course) => {
    return { params: { slug: course.slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: courseQuery,
    variables: { slug: params.slug },
  });

  return {
    props: {
      course: data.course,
      revalidate: 60 * 60, //1h
    },
    notFound: !data.course,
  };
};
