addEventListener("fetch", event => {
  event.respondWith((async () => {
    const url = new URL(event.request.url);
    const name = url.searchParams.get("name") ?? "world";
    return new Response(JSON.stringify({ hello: name }), {
      headers: { "Content-Type": "application/json" },
    });
  })());
});
