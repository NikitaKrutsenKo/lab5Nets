export default async function handler(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") ?? "world";
  return new Response(JSON.stringify({ hello: name }), {
    headers: { "Content-Type": "application/json" },
  });
}
