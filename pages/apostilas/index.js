import Link from "next/link";
import Prismic from "prismic-javascript";
import { Date, RichText } from "prismic-reactjs";
import React from "react";
import { client } from "../../services/prismic";

export default function Apostilas({ posts }) {
  return (
    <>
      <ul>
        {posts.results.map((post) => (
          <li key={post.uid}>
            <Link href={"/apostilas/" + post.uid}>
              <a>{RichText.render(post.data.title)}</a>
            </Link>
            <span>{Date(post.data.datetime).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.post.datetime desc]" }
  );

  return { props: { posts } };
}
