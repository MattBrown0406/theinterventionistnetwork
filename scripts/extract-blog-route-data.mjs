import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const postsDir = path.join(rootDir, "src", "content", "posts");
const outputPath = path.join(rootDir, "scripts", "generated", "blog-route-data.json");

const files = (await fs.readdir(postsDir)).filter((f) => f.endsWith(".ts"));

const posts = [];
for (const file of files) {
  const slug = file.replace(/\.ts$/, "");
  const text = await fs.readFile(path.join(postsDir, file), "utf8");
  const title = text.match(/^  title: "((?:[^"\\]|\\.)*)",$/m)?.[1];
  const author = text.match(/^  author: "((?:[^"\\]|\\.)*)",$/m)?.[1];
  const date = text.match(/^  date: "([^"]+)",$/m)?.[1];
  const contentIdx = text.indexOf("  content: [");
  const firstParagraph = text.slice(contentIdx).match(/^    "((?:[^"\\]|\\.)*)",?$/m)?.[1];
  if (!title || !author || !date || !firstParagraph) {
    throw new Error(`Could not extract metadata from ${file}`);
  }
  posts.push({
    slug,
    title,
    author,
    date,
    excerpt: firstParagraph.replaceAll('\\"', '"').replaceAll("\\n", " "),
    readTime: `${Math.max(5, Math.round((firstParagraph.length / 900) * 5))} min read`,
  });
}

posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, JSON.stringify(posts, null, 2));
