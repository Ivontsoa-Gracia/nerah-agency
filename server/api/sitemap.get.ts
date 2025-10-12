export default defineEventHandler((event) => {
  event.node.res.setHeader("Content-Type", "application/xml");

  const routes = ["/", "/main", "/portfolio", "/services"];

  const urls = routes
    .map((r) => `<url><loc>https://nerah-agency.vercel.app${r}</loc></url>`)
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return sitemap;
});
