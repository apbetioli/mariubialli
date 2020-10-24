import Link from "next/link";
import { useRouter } from "next/router";
import Prismic from "prismic-javascript";
import { Date, RichText } from "prismic-reactjs";
import React from "react";
import { client } from "../../services/prismic";

const Apostila = ({ apostila }) => {
  const router = useRouter();

  //TODO: remove
  console.log(apostila);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href="/apostilas">
        <a>Voltar para apostilas</a>
      </Link>
      {RichText.render(apostila.data.title)}
      <span>{Date(apostila.data.datetime).toLocaleString()}</span>
      {RichText.render(apostila.data.description)}
    </div>
  );
};

export async function getStaticProps(context) {
  const apostila = await client.getByUID("post", context.params.uid);
  return { props: { apostila }, unstable_revalidate: 1 };
}

export async function getStaticPaths() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.post.datetime desc]" }
  );

  const paths = posts.results.map((post) => ({
    params: { uid: post.uid },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Apostila;
