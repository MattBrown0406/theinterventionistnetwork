import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import blogFindInterventionist from "@/assets/blog-find-interventionist.jpg";

const blogContent: Record<string, { title: string; author: string; date: string; image?: string; imageAlt?: string; content: string[] }> = {
  "how-to-find-a-qualified-interventionist": {
    title: "How to Find a Qualified Interventionist: What Families Need to Know",
    author: "Matt Brown",
    date: "2025-03-09",
    image: blogFindInterventionist,
    imageAlt: "Family having a supportive conversation in a living room",
    content: [
      "When a family member is struggling with addiction or alcoholism, the desire to act — to do something, anything — can feel overwhelming. But finding a qualified interventionist when you've never needed one before isn't simple. A quick internet search turns up thousands of results, many of them connected to treatment centers with financial motives you can't see. This guide will walk you through how to find a qualified interventionist the right way: understanding what credentials actually matter, what questions to ask, and why the platform you use to search can make all the difference.",
      "## What Is a Professional Interventionist?",
      "A professional interventionist is a trained specialist who helps families navigate the process of encouraging a loved one to accept treatment for addiction, alcoholism, or co-occurring mental health conditions. They are not therapists (though some hold therapy licenses). They are not treatment center salespeople (though many are paid by them — more on that shortly). A skilled interventionist understands the science of addiction, family systems dynamics, and how to structure a conversation that leads to lasting change.",
      "An interventionist's job is not to force someone into treatment. It is to create a compassionate, structured environment where a person in crisis can hear the truth from people they love — and choose a different path.",
      "## Why Finding the Right Person Matters So Much",
      "An intervention done poorly can backfire. A loved one who feels ambushed, shamed, or manipulated is less likely to accept help — and may become more entrenched in denial. The stakes are too high to choose an interventionist based on whoever shows up first in a paid ad.",
      "Families deserve access to professionals who are there to serve their loved one's recovery — not to funnel them toward a specific facility that pays referral commissions. This conflict of interest is widespread in the addiction treatment industry, and it starts with how interventionists are found and compensated.",
      "## What Credentials Should a Qualified Interventionist Have?",
      "Credentialing in the intervention field is not perfectly standardized, but there are recognized certifications that signal serious professional training. When evaluating an addiction intervention specialist, look for:",
      "• CIP (Certified Intervention Professional) — offered through the Association of Intervention Specialists (AIS), this is one of the most recognized credentials in the field.\n• ARISE Certified Interventionist — trained in the ARISE Network's Invitational Intervention model.\n• Board Registered Interventionist (BRI-I or BRI-II) — offered through the Network of Independent Interventionists.\n• Additional licenses — many interventionists hold licenses as LCSWs, LPCs, CADCs, or other clinical credentials that deepen their expertise.",
      "Certification alone doesn't guarantee a great outcome — experience, approach, and ethics matter equally. But credentials are a reasonable first filter.",
      "## Questions to Ask Before Hiring an Interventionist",
      "Most families have never done this before. Here are the questions that separate a trustworthy professional from one you should walk away from:",
      "• Are you certified, and by which organization?\n• How many interventions have you personally facilitated?\n• Do you receive referral fees or commissions from treatment centers?\n• How do you match a client to a treatment program?\n• What is your approach if the person refuses treatment during the intervention?\n• What follow-up support do you provide to the family after the intervention?\n• What is your fee, and what does it include?",
      "That third question — about referral fees — is one of the most important you can ask. An honest answer tells you a great deal about whose interests this professional is really serving.",
      "## The Referral Fee Problem: Why It Affects You",
      "Here is something the addiction treatment industry doesn't advertise: many interventionists receive thousands of dollars in commissions for placing a family member in a specific treatment center. The interventionist doesn't bill you for this — the facility pays them on the back end after your loved one is admitted.",
      "This creates an obvious conflict of interest. The interventionist's financial incentive is now tied to which facility they recommend, not which facility is the best clinical fit for your family member. Families are rarely told this is happening.",
      "This is the exact problem that The Interventionist Network was built to solve. Every professional listed on TIN pays a flat monthly fee to be in the directory — no referral arrangements, no kickbacks, no hidden incentives. When you find an interventionist through our directory, you know their recommendation is based on clinical judgment, not commission.",
      "## How to Evaluate an Interventionist's Experience",
      "Beyond credentials, real-world experience matters enormously in professional intervention services. An interventionist who has conducted three interventions is very different from one who has facilitated three hundred. When reviewing a professional's profile or speaking with them directly, look for:",
      "• Years of active practice in the field\n• Specialization relevant to your situation (adolescents, executives, specific substances, co-occurring disorders)\n• Geographic availability — some interventionists travel nationally; others serve a specific region\n• Testimonials or verifiable references from past clients\n• Clear description of their intervention model",
      "## The Difference Between a Good Search and a Dangerous One",
      "Searching \"interventionist near me\" on Google will return a mix of individual professionals, directories, and treatment center landing pages designed to capture your information and route you toward specific facilities. Some of these are ethically operated. Many are not.",
      "When evaluating any directory or referral service, ask: how does this platform make money? If the answer is referral fees from treatment centers — or if you can't get a clear answer at all — be cautious.",
      "TIN's model is built differently. Interventionists pay to list their practice. Families search for free. Nobody earns a commission when your loved one accepts treatment. It's a straightforward, ethical model built on transparency — and it's why the professionals listed here chose to be here.",
      "## How to Use The Interventionist Network to Find Help",
      "Finding the right professional through TIN is straightforward. Visit our directory to browse verified intervention professionals. You can filter by location, specialty, credential type, and availability. Every profile includes the professional's credentials, experience, approach, and contact information — no gatekeeping, no upsell.",
      "If you're not sure where to start, read through a few profiles and notice who speaks to your specific situation. A family dealing with opioid addiction and a co-occurring anxiety disorder needs a different specialist than a family navigating teenage alcohol abuse or executive-level denial. The right match matters.",
      "## Frequently Asked Questions",
      "## How much does a professional interventionist cost?",
      "Fees vary depending on experience, location, and the scope of services provided. Most professional interventionists charge between $1,500 and $10,000 for a full intervention, which may include pre-intervention family coaching, the intervention itself, and placement assistance. Be wary of interventionists who charge very little upfront — they may be compensated primarily through referral commissions from treatment centers.",
      "## How do I know if an interventionist is legitimate?",
      "Look for recognized certifications such as CIP (Certified Intervention Professional), Board Registered Interventionist (BRI), or ARISE credentials. Ask directly whether they receive referral fees from treatment facilities. Verify their experience and ask for references. Professionals listed on The Interventionist Network have been vetted and operate without referral fee arrangements.",
      "## What is the best type of intervention for addiction?",
      "There is no single \"best\" model — the right approach depends on your family's dynamics and your loved one's specific situation. Common models include the Johnson Intervention (confrontational), the ARISE Invitational model (gentler, collaborative), and the CRAFT approach (focused on family behavior change). A qualified interventionist will help you understand which model fits your situation.",
      "## Can I do an intervention without a professional interventionist?",
      "Families sometimes attempt interventions without professional guidance, but this carries significant risk. Without expertise in de-escalation, addiction science, and family systems, a poorly structured conversation can damage relationships and reduce the likelihood your loved one accepts help. A trained professional dramatically improves the odds of a successful outcome.",
      "## Where can I find a certified interventionist near me?",
      "Visit our directory to search vetted, certified intervention professionals. You can filter by location, specialty, and credential type. Every listed professional pays a flat membership fee — there are no referral arrangements — so you know their recommendations serve your family, not a treatment center's bottom line.",
    ],
  },
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
