import { getSession } from "next-auth/react";
import apostilaQuery from "../../graphql/queries/apostila.graphql";
import client from "../../lib/graphqlClient";

function fullUrl(req) {
  return "http://" + req.headers.host + req.url;
}

export default async function handler(req, res) {
  if (!req.query.slug) return res.status(404).end();

  const session = await getSession({ req });

  if (session) {
    const { data } = await client.query({
      query: apostilaQuery,
      variables: { slug: req.query.slug },
    });

    if (!data.apostila) return res.status(404).end();

    return res.redirect(`${data.apostila.download.url}`);
  } else {
    return res.redirect(`/api/auth/signin?callbackUrl=${fullUrl(req)}`);
  }
}
