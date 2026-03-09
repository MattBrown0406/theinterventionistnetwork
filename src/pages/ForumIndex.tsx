import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useForumCategories, useRecentThreads, useForumStats, useCategoryThreadCounts } from "@/hooks/useForum";
import { formatDistanceToNow } from "date-fns";

const forumRules = [
  "No identifying client information — ever. Use pseudonyms and change details.",
  "Respect confidentiality of fellow members and their cases.",
  "No referral fee solicitation or patient brokering discussion.",
  "Professional and respectful discourse at all times.",
  "Treatment center reviews should be honest and based on direct experience.",
  "Violations may result in membership suspension.",
];

const ForumIndex = () => {
  const { data: categories = [] } = useForumCategories();
  const { data: recentThreads = [] } = useRecentThreads();
  const { data: stats } = useForumStats();
  const { data: threadCounts = {} } = useCategoryThreadCounts();

  return (
    <>
      <SEO
        title="Member Discussion Forum — The Interventionist Network"
        description="Connect with fellow interventionists. Discuss cases, share treatment center reviews, find regional coverage, and grow your practice."
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          "@type": "WebPage",
          name: "Member Discussion Forum",
          description: "Connect with fellow interventionists in our professional discussion forum.",
          url: "https://theinterventionistnetwork.com/forum",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Forum", item: "https://theinterventionistnetwork.com/forum" },
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                Member Discussion Forum
              </h1>
              <p className="text-lg text-primary-foreground/70">
                Connect with fellow interventionists. Share knowledge. Get support.
              </p>
            </div>
            <Button variant="gold" size="lg" asChild>
              <Link to="/forum/new">New Thread</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-muted/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span><strong className="text-foreground">{stats?.threads ?? 0}</strong> threads</span>
            <span><strong className="text-foreground">{stats?.replies ?? 0}</strong> replies</span>
            <span><strong className="text-foreground">{categories.length}</strong> categories</span>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="lg:col-span-2 space-y-3">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/forum/${cat.slug}`}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-gold/40 transition-colors group"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold group-hover:text-gold transition-colors">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{cat.description}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      {threadCounts[cat.id] ?? 0}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {recentThreads.map((thread) => (
                    <Link
                      key={thread.id}
                      to={`/forum/thread/${thread.id}`}
                      className="block p-3 bg-card border border-border rounded-lg hover:border-gold/40 transition-colors"
                    >
                      <p className="font-medium text-sm line-clamp-1">{thread.title}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span className="text-gold">{(thread.forum_categories as any)?.name}</span>
                        <span>·</span>
                        <span>{thread.author_name}</span>
                        <span>·</span>
                        <span className="flex items-center gap-0.5">
                          <Clock className="w-3 h-3" />
                          {formatDistanceToNow(new Date(thread.last_reply_at), { addSuffix: true })}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {thread.reply_count} {thread.reply_count === 1 ? "reply" : "replies"}
                      </div>
                    </Link>
                  ))}
                  {recentThreads.length === 0 && (
                    <p className="text-sm text-muted-foreground">No threads yet.</p>
                  )}
                </div>
              </div>

              {/* Forum Rules */}
              <Accordion type="single" collapsible>
                <AccordionItem value="rules" className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Forum Rules
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {forumRules.map((rule, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForumIndex;
