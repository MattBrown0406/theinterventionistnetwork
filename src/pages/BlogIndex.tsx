import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const blogPosts = [
  {
    slug: "how-to-find-a-qualified-interventionist",
    title: "How to Find a Qualified Interventionist: What Families Need to Know",
    excerpt: "Finding a qualified interventionist when you've never needed one before isn't simple. This guide walks you through what credentials matter, what questions to ask, and why the platform you use to search can make all the difference.",
    author: "Matt Brown",
    date: "2025-03-09",
    readTime: "8 min read",
  },
  {
    slug: "why-we-dont-charge-referral-fees",
    title: "Why We Don't Charge Referral Fees (And Why It Matters for Your Family)",
    excerpt: "In an industry rife with kickbacks and patient brokering, we chose a different path. Here's why our zero-referral-fee model protects families and produces better outcomes.",
    author: "Matt Brown",
    date: "2024-03-01",
    readTime: "5 min read",
  },
];

const BlogIndex = () => {
  return (
    <>
      <SEO
        title="Blog — Addiction Intervention Insights"
        description="Expert insights on addiction intervention, family recovery, and navigating the treatment system from The Interventionist Network."
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://theinterventionistnetwork.com/blog" },
          ],
        }}
      />

      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            <span className="text-gold">Blog</span>
          </h1>
          <p className="text-primary-foreground/70 mt-2">Insights, stories, and guidance for families and professionals.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-card border border-border rounded-lg p-6 lg:p-8 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold group-hover:text-gold transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;
