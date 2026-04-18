import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourcePath = path.join(rootDir, "src", "content", "blogPosts.ts");
const outputPath = path.join(rootDir, "scripts", "generated", "blog-route-data.json");

const text = await fs.readFile(sourcePath, "utf8");
const blockMatch = text.match(/export const blogPosts:[\s\S]*?= \{([\s\S]*?)\n\};/);
if (!blockMatch) throw new Error("Could not locate blogPosts block");

const block = blockMatch[1];
const entryRegex = /"([a-z0-9-]+)": \{[\s\S]*?title: "([^"]+)",[\s\S]*?author: "([^"]+)",[\s\S]*?date: "([^"]+)",[\s\S]*?content: \[\n\s+"([\s\S]*?)"/g;

const posts = [];
let match;
while ((match = entryRegex.exec(block)) !== null) {
  const [, slug, title, author, date, firstParagraph] = match;
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
