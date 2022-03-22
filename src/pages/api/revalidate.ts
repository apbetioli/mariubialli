import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  /*
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
 */
  try {
    const path = req.query.path?.toString() ?? "/";
    await res.unstable_revalidate(path);

    console.log("revalidate", path);

    return res.json({ revalidate: path });
  } catch (err) {
    console.error(err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).json({ error: err.message });
  }
}
