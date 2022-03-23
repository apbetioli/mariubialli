import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import apostilaQuery from "../../../graphql/queries/apostila.graphql";
import client from "../../../lib/graphqlClient";
import subscribe from "../../../lib/subscribe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.slug) {
    return res.status(404).end();
  }

  const session: Session = await getSession({ req });

  if (!session) {
    const callbackUrl = encodeURI(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/download/${req.query.slug}`
    );
    return res.redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`);
  }

  const { data } = await client.query({
    query: apostilaQuery,
    variables: { slug: req.query.slug },
  });

  if (!data.apostila) {
    return res.status(404).end();
  }

  subscribe({
    email: session.user.email,
    tag: "DOWNLOAD",
    source: req.query.slug,
  }).catch((e) => {
    console.error(e);
  });

  return res.redirect(`${data.apostila.download.url}`);
}
