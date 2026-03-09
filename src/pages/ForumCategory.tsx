import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Pin, Lock, Clock, MessageSquare, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useForumCategories, useForumThreadsByCategory } from "@/hooks/useForum";
import { formatDistanceToNow } from "date-fns";

const ForumCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: categories = [] } = useForumCategories();
  const category = categories.find((c) => c.slug === slug);
  const { data: threads = [], isLoading } = useForumThreadsByCategory(category?.id);

  if (!category && !isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <Button asChild><Link to="/forum">Back to Forum</Link></Button>
      </div>
    );
  }

  return (
    <>
      {category && (
        <>
          <SEO
            title={`${category.name} — Forum — The Interventionist Network`}
            description={category.description}
          />
          <SchemaMarkup
            type="WebPage"
            data={{
              "@type": "WebPage",
              name: `${category.name} — Forum`,
              description: category.description,
              url: `https://theinterventionistnetwork.com/forum/${category.slug}`,
              isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
            }}
          />
          <SchemaMarkup
            type="BreadcrumbList"
            data={{
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
                { "@type": "ListItem", position: 2, name: "Forum", item: "https://theinterventionistnetwork.com/forum" },
                { "@type": "ListItem", position: 3, name: category.name, item: `https://theinterventionistnetwork.com/forum/${category.slug}` },
              ],
            }}
          />
        </>
      )}

      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/50 mb-4">
            <Link to="/forum" className="hover:text-primary-foreground">Forum</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground">{category?.name ?? "Loading..."}</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                {category?.icon} {category?.name}
              </h1>
              <p className="text-primary-foreground/70 mt-1">{category?.description}</p>
            </div>
            <Button variant="gold" asChild>
              <Link to="/forum/new">New Thread</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {isLoading ? (
            <p className="text-muted-foreground text-center py-8">Loading threads...</p>
          ) : threads.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No threads in this category yet.</p>
              <Button variant="gold" asChild>
                <Link to="/forum/new">Start the First Thread</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {threads.map((thread) => (
                <Link
                  key={thread.id}
                  to={`/forum/thread/${thread.id}`}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-gold/40 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {thread.is_pinned && <Pin className="w-3.5 h-3.5 text-gold shrink-0" />}
                      {thread.is_locked && <Lock className="w-3.5 h-3.5 text-muted-foreground shrink-0" />}
                      <h3 className="font-semibold line-clamp-1">{thread.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <span>{thread.author_name}</span>
                      <span>·</span>
                      <span className="flex items-center gap-0.5">
                        <Clock className="w-3 h-3" />
                        {formatDistanceToNow(new Date(thread.last_reply_at), { addSuffix: true })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {thread.reply_count}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ForumCategory;
