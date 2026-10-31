// Pre-renders every route from src/app/routes.tsx into its own static HTML file,
// then writes sitemap.xml from the same route list.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SITE = "https://www.usdcrecertification.com";
const root = process.cwd();
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, routes } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Replaces the content of a <meta name="..."> or <meta property="..."> tag.
function setMeta(html, key, value) {
  const pattern = new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*(")`);
  return html.replace(pattern, (_, start, end) => `${start}${escapeAttr(value)}${end}`);
}

function buildPage(route) {
  const url = `${SITE}${route.path}`;
  const body = render(route.path);

  let html = template.replace(
    /<div id="root">[\s\S]*?<\/div>(?=\s*(?:<script|<\/body>))/,
    () => `<div id="root">${body}</div>`
  );
  if (!html.includes(body) && body.length > 0) {
    throw new Error(`Failed to inject rendered body for ${route.path}: #root not found in template`);
  }
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(route.title)}</title>`);
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    (_, start, end) => `${start}${url}${end}`
  );
  html = setMeta(html, "description", route.description);
  html = setMeta(html, "og:title", route.title);
  html = setMeta(html, "og:description", route.description);
  html = setMeta(html, "og:url", url);
  html = setMeta(html, "twitter:title", route.title);
  html = setMeta(html, "twitter:description", route.description);
  html = setMeta(html, "twitter:url", url);
  return html;
}

for (const route of routes) {
  const outFile =
    route.path === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.path.replace(/^\//, ""), "index.html");
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, buildPage(route), "utf8");
  console.log(`prerendered ${route.path} -> ${path.relative(root, outFile)}`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .map(
    (route) => `  <url>
    <loc>${SITE}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n");
fs.writeFileSync(
  path.join(distDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  "utf8"
);
console.log(`sitemap.xml written with ${routes.length} URL(s)`);

fs.rmSync(ssrDir, { recursive: true, force: true });
