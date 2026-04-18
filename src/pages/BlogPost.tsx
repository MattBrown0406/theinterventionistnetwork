import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { blogPosts } from "@/content/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-gold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.content[0].substring(0, 155) + "..."}
        ogType="article"
        article={{ author: post.author, publishedTime: post.date }}
      />
      <SchemaMarkup
        type="Article"
        data={{
          headline: post.title,
          author: { "@type": "Person", name: post.author },
          datePublished: post.date,
          publisher: { "@type": "Organization", name: "The Interventionist Network" },
          url: `https://theinterventionistnetwork.com/blog/${slug}`,
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://theinterventionistnetwork.com/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://theinterventionistnetwork.com/blog/${slug}` },
          ],
        }}
      />

      <article className="py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="font-medium text-foreground">{post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            {post.image && (
              <img src={post.image} alt={post.imageAlt || post.title} className="w-full rounded-lg object-cover max-h-[400px]" />
            )}
          </header>

          <div className="space-y-6">
            {post.content.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={i} className="text-xl font-bold mt-8">{paragraph.replace("## ", "")}</h2>;
              }

              if (paragraph.includes("\n•") || paragraph.startsWith("•")) {
                const items = paragraph.split("\n").filter((line) => line.trim().startsWith("•"));
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-2">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^•\s*/, "")}</li>
                    ))}
                  </ul>
                );
              }

              const parts = paragraph.split(/^## /m);
              if (parts.length > 1) {
                return (
                  <div key={i}>
                    <h2 className="text-xl font-bold mt-8 mb-3">{parts[0].replace("## ", "").split("\n")[0]}</h2>
                    <p className="text-muted-foreground leading-relaxed">{parts[0].split("\n").slice(1).join(" ").trim() || parts[1]}</p>
                  </div>
                );
              }

              return <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center font-bold text-navy/50">MB</div>
              <div>
                <p className="font-semibold text-sm">{post.author}</p>
                <p className="text-xs text-muted-foreground">Founder, The Interventionist Network</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
