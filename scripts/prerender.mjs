import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const indexPath = path.join(distDir, "index.html");
const blogDataPath = path.join(rootDir, "scripts", "generated", "blog-route-data.json");

const baseRoutes = ["/", "/about", "/find", "/help", "/contact", "/join", "/apply", "/blog", "/faq", "/badge", "/verify"];

const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const blogPosts = JSON.parse(await fs.readFile(blogDataPath, "utf8"));
const slugToPost = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));
const routes = [...baseRoutes, ...blogPosts.map((post) => `/blog/${post.slug}`)];

const formatTitle = (route) => {
  if (route === "/") return "The Interventionist Network";
  if (route === "/blog") return "Blog | The Interventionist Network";
  if (route.startsWith("/blog/")) return `${slugToPost[route.replace("/blog/", "")]?.title || "Blog"} | The Interventionist Network`;
  return "The Interventionist Network";
};

const formatDescription = (route) => {
  if (route === "/") return "Professional addiction intervention resources, vetted interventionists, and guidance for families in crisis.";
  if (route === "/blog") return "Expert insights on addiction intervention, family recovery, and navigating the treatment system from The Interventionist Network.";
  if (route.startsWith("/blog/")) return slugToPost[route.replace("/blog/", "")]?.excerpt || "Addiction intervention insights from The Interventionist Network.";
  return "The Interventionist Network.";
};

const renderAppShell = (route) => {
  if (route === "/blog") {
    const items = blogPosts
      .map((post) => `<article><h2><a href="/blog/${post.slug}">${escapeHtml(post.title)}</a></h2><p>${escapeHtml(post.excerpt)}</p></article>`)
      .join("");
    return `<main><h1>Blog</h1><p>Insights, stories, and guidance for families and professionals.</p>${items}</main>`;
  }

  if (route.startsWith("/blog/")) {
    const post = slugToPost[route.replace("/blog/", "")];
    if (post) {
      return `<main><nav><a href="/blog">Back to Blog</a></nav><article><h1>${escapeHtml(post.title)}</h1><p>${escapeHtml(post.author)} • ${escapeHtml(post.date)}</p><p>${escapeHtml(post.excerpt)}</p></article></main>`;
    }
  }

  return "<main><h1>The Interventionist Network</h1></main>";
};

const template = await fs.readFile(indexPath, "utf8");
for (const route of routes) {
  const outputPath = route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route.slice(1), "index.html");
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(formatTitle(route))}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/?>(?![\s\S]*<meta name="description")/, `<meta name="description" content="${escapeHtml(formatDescription(route))}" />`)
    .replace('<div id="root"></div>', `<div id="root">${renderAppShell(route)}</div>`);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html);
}
