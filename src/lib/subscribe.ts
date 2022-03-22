export default async function subscribe(form) {
  const dev = process.env.NODE_ENV !== "production";

  const server = dev
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return await fetch(`${server}/api/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
}
