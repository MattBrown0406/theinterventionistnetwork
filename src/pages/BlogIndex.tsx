import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const blogPosts = [
  {
    slug: "cost-of-an-intervention-what-it-includes",
    title: "How Much Does an Intervention Cost — and What Does It Include?",
    excerpt: "The cost of a professional intervention typically ranges from $2,500 to $10,000 or more. This guide breaks down what's included, what factors affect the price, and how to know if you're getting fair value for your family.",
    author: "Matt Brown",
    date: "2026-03-30",
    readTime: "10 min read",
  },
  {
    slug: "questions-to-ask-before-hiring-an-interventionist",
    title: "10 Essential Questions to Ask Before Hiring an Interventionist",
    excerpt: "Not all interventionists are the same. This guide gives you the exact questions to ask before hiring — covering credentials, process, cost, and post-intervention support — so you can make a confident, informed decision for your family.",
    author: "Matt Brown",
    date: "2026-03-27",
    readTime: "11 min read",
  },
  {
    slug: "building-referral-relationships-with-treatment-centers",
    title: "Building Referral Relationships with Treatment Centers: A Practitioner's Guide",
    excerpt: "Building referral relationships with treatment centers is a core professional responsibility. This guide covers how to identify the right partners, what treatment centers look for in interventionists, and how to build a mutual referral system that supports long-term practice growth.",
    author: "Matt Brown",
    date: "2026-03-26",
    readTime: "12 min read",
  },
  {
    slug: "how-families-enable-addiction-and-how-to-address-it",
    title: "How Families Enable Addiction — and How Interventionists Can Address It Therapeutically",
    excerpt: "Enabling is one of the most misunderstood concepts in addiction work. This guide explores how to identify enabling patterns in families, understand their attachment-based roots, and address them therapeutically — both before and after the intervention.",
    author: "Matt Brown",
    date: "2026-03-24",
    readTime: "12 min read",
  },
  {
    slug: "understanding-intervention-models-for-families",
    title: "Understanding Intervention Models for Families: Which Approach Is Right for Your Loved One?",
    excerpt: "There are several well-established intervention models for families, each with a distinct philosophy, structure, and set of outcomes. This guide walks you through the Johnson Model, ARISE, CRAFT, and systemic approaches — and helps you start an informed conversation with a professional.",
    author: "Matt Brown",
    date: "2026-03-23",
    readTime: "12 min read",
  },
  {
    slug: "the-business-of-running-an-intervention-practice",
    title: "The Business of Running an Intervention Practice: A Practitioner's Guide to Sustainability and Growth",
    excerpt: "The clinical skill that got you here is only half the equation. This guide covers fee structures, referral pipelines, financial planning, and building a practice that lets you keep showing up for families in crisis — year after year.",
    author: "Matt Brown",
    date: "2026-03-22",
    readTime: "14 min read",
  },
  {
    slug: "how-to-prepare-your-family-for-an-intervention",
    title: "How to Prepare Your Family for an Intervention: A Complete Guide",
    excerpt: "Knowing how to prepare your family for an intervention can mean the difference between a moment that changes everything and one that falls short. This guide walks families through every stage — from contacting a professional to what happens the day you sit down together.",
    author: "Matt Brown",
    date: "2026-03-18",
    readTime: "12 min read",
  },
  {
    slug: "working-with-resistant-clients-and-families",
    title: "Working With Resistant Clients and Families: A Practitioner's Guide to Breaking Through",
    excerpt: "Resistance is not the exception in intervention work — it is the terrain. This guide explores how to read resistance as communication, meet it with clinical curiosity, and move families toward change even when the process feels stuck.",
    author: "Matt Brown",
    date: "2026-03-15",
    readTime: "14 min read",
  },
  {
    slug: "vicarious-trauma-and-self-care-for-interventionists",
    title: "Recognizing and Recovering from Vicarious Trauma: A Self-Care Guide for Professional Interventionists",
    excerpt: "Vicarious trauma in interventionists is not a sign of weakness — it is an occupational hazard of deep empathic engagement. This guide explores how it manifests in intervention work and the concrete steps you can take to build a resilient, sustainable practice.",
    author: "Matt Brown",
    date: "2026-03-14",
    readTime: "12 min read",
  },
  {
    slug: "what-credentials-to-look-for-in-an-interventionist",
    title: "What Credentials Should You Look for in a Professional Interventionist?",
    excerpt: "Intervention is an unregulated field in most states. Knowing what credentials to look for is the first step to making a confident, informed decision when hiring a professional interventionist for your family.",
    author: "Matt Brown",
    date: "2026-03-13",
    readTime: "9 min read",
  },
  {
    slug: "trauma-informed-approaches-in-intervention-work",
    title: "Trauma-Informed Approaches in Intervention Work: A Practitioner's Guide",
    excerpt: "Trauma is almost never absent from the families we work with. Understanding and applying trauma-informed approaches in intervention work isn't a specialty skill — it's a baseline competency. This guide explores how to integrate these principles into every stage of your practice.",
    author: "Matt Brown",
    date: "2026-03-12",
    readTime: "11 min read",
  },
  {
    slug: "what-to-expect-during-an-intervention",
    title: "What to Expect During a Professional Intervention: A Complete Family Guide",
    excerpt: "Understanding what to expect during an intervention can help replace fear with preparation and purpose. This guide walks you through every stage of a professionally facilitated intervention.",
    author: "Matt Brown",
    date: "2026-03-11",
    readTime: "10 min read",
  },
  {
    slug: "understanding-family-systems-in-crisis",
    title: "Understanding Family Systems in Crisis: A Practitioner's Guide to Intervening in Addiction",
    excerpt: "Addiction does not happen in isolation. It emerges from patterns of interaction, roles, boundaries, and emotional regulation that have been building for years. This guide explores how family systems theory applies directly to your work as an interventionist.",
    author: "Matt Brown",
    date: "2026-03-10",
    readTime: "12 min read",
  },
  {
    slug: "how-to-find-a-qualified-interventionist",
    title: "How to Find a Qualified Interventionist: A Family's Complete Guide",
    excerpt: "Knowing how to find a qualified interventionist can feel overwhelming when you're already under enormous stress. This guide cuts through the confusion — covering credentials, red flags, questions to ask, and how to evaluate your options with confidence.",
    author: "Matt Brown",
    date: "2026-03-16",
    readTime: "10 min read",
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
