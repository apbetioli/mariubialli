export default async function subscribe(form) {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
}
