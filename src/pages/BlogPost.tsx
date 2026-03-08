import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const blogContent: Record<string, { title: string; author: string; date: string; content: string[] }> = {
  "why-we-dont-charge-referral-fees": {
    title: "Why We Don't Charge Referral Fees (And Why It Matters for Your Family)",
    author: "Matt Brown",
    date: "2024-03-01",
    content: [
      "When a family calls a helpline or treatment referral service, they often believe they're getting unbiased guidance. The reality is far different. Most referral services in the addiction treatment industry operate on a commission model — they receive a fee for every client they send to a treatment center. These fees can range from $1,000 to $50,000 per placement.",
      "This creates an obvious conflict of interest. The person \"helping\" your family has a financial incentive to send your loved one to whichever facility pays the highest commission — not whichever facility is the best fit for their needs.",
      "At The Interventionist Network, we've eliminated this conflict entirely. Our interventionists pay a flat monthly membership fee to be part of the network. That's it. When a family is matched with an interventionist through our platform, zero dollars change hands. The interventionist charges their professional fee directly to the family, just as they would if the family found them independently.",
      "## Why This Matters\n\nThe referral fee model doesn't just create conflicts of interest — it actively harms families. When financial incentives drive treatment recommendations, families often end up at facilities that are expensive, far from home, or simply not the right level of care. Worse, the referral fee culture has fueled a shadowy industry of \"patient brokers\" who recruit vulnerable people in early recovery and shuttle them between treatment centers, collecting fees at every stop.",
      "## The Ethical Alternative\n\nOur model is simple: interventionists pay for visibility and access to families who need help. Families pay nothing to be matched. The interventionist's only incentive is to do excellent work — because their reputation within the network depends on it.",
      "We believe this is how the entire industry should work. Until it does, The Interventionist Network will continue to operate by a different standard — one that puts families first, every single time.",
      "## What You Can Do\n\nIf you're a family seeking help, ask every referral service you contact: \"Do you receive a fee if I choose this provider?\" If the answer is yes — or if they won't answer — consider that a red flag. You deserve transparency, and your loved one deserves recommendations based on clinical fit, not financial incentives.",
      "If you're an interventionist who shares our values, we'd love to hear from you. Apply to join the network and be part of the solution.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogContent[slug] : null;

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
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
          </header>

          <div className="space-y-6">
            {post.content.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={i} className="text-xl font-bold mt-8">{paragraph.replace("## ", "")}</h2>;
              }
              // Handle paragraphs that have ## inline
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
