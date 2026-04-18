import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Lock, ChevronRight, Pin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useForumThread, useForumReplies, type ForumCategory } from "@/hooks/useForum";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { format, formatDistanceToNow } from "date-fns";

const ForumThread = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const { data: thread, isLoading } = useForumThread(threadId);
  const { data: replies = [] } = useForumReplies(threadId);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [replyForm, setReplyForm] = useState({ name: "", email: "", body: "" });
  const [submitting, setSubmitting] = useState(false);

  const category = thread?.forum_categories as ForumCategory | undefined;

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!threadId) return;
    if (replyForm.body.trim().length < 10) {
      toast({ title: "Reply too short", description: "Please write at least 10 characters.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("forum_replies").insert({
        thread_id: threadId,
        author_name: replyForm.name.trim(),
        author_email: replyForm.email.trim(),
        body: replyForm.body.trim(),
      });
      if (error) throw error;

      setReplyForm({ name: "", email: "", body: "" });
      queryClient.invalidateQueries({ queryKey: ["forum-replies", threadId] });
      queryClient.invalidateQueries({ queryKey: ["forum-thread", threadId] });
      toast({ title: "Reply posted!" });
    } catch {
      toast({ title: "Error posting reply", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-16 text-center text-muted-foreground">Loading...</div>;
  }

  if (!thread) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Thread Not Found</h1>
        <Button asChild><Link to="/forum">Back to Forum</Link></Button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${thread.title} — Forum — The Interventionist Network`}
        description={thread.body.slice(0, 155)}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Forum", item: "https://theinterventionistnetwork.com/forum" },
            ...(category ? [{ "@type": "ListItem", position: 3, name: category.name, item: `https://theinterventionistnetwork.com/forum/${category.slug}` }] : []),
            { "@type": "ListItem", position: category ? 4 : 3, name: thread.title, item: `https://theinterventionistnetwork.com/forum/thread/${thread.id}` },
          ],
        }}
      />

      <section className="bg-navy py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/50 mb-4 flex-wrap">
            <Link to="/forum" className="hover:text-primary-foreground">Forum</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            {category && (
              <>
                <Link to={`/forum/${category.slug}`} className="hover:text-primary-foreground">
                  {category.name}
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
              </>
            )}
            <span className="text-primary-foreground line-clamp-1">{thread.title}</span>
          </nav>
          <div className="flex items-start gap-2 flex-wrap">
            {thread.is_pinned && <Pin className="w-4 h-4 text-gold mt-1.5" />}
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">{thread.title}</h1>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-primary-foreground/60">
            {category && <Badge variant="secondary" className="text-xs">{category.name}</Badge>}
            <span>by {thread.author_name}</span>
            <span>·</span>
            <span>{format(new Date(thread.created_at), "MMM d, yyyy")}</span>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          {/* Original Post */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">{thread.author_name}</span>
              <span className="text-xs text-muted-foreground">{format(new Date(thread.created_at), "MMM d, yyyy 'at' h:mm a")}</span>
            </div>
            <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{thread.body}</div>
          </div>

          {/* Replies */}
          {replies.map((reply, i) => (
            <div key={reply.id} className={`rounded-lg p-6 border border-border ${i % 2 === 0 ? "bg-muted/30" : "bg-card"}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold">{reply.author_name}</span>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(reply.created_at), { addSuffix: true })}
                </span>
              </div>
              <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{reply.body}</div>
            </div>
          ))}

          {/* Reply Form */}
          {thread.is_locked ? (
            <div className="flex items-center gap-2 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              This thread is locked and no longer accepting replies.
            </div>
          ) : (
            <form onSubmit={handleReply} className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Post a Reply</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="reply-name">Your Name</Label>
                  <Input
                    id="reply-name"
                    value={replyForm.name}
                    onChange={(e) => setReplyForm((p) => ({ ...p, name: e.target.value }))}
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <Label htmlFor="reply-email">Your Email</Label>
                  <Input
                    id="reply-email"
                    type="email"
                    value={replyForm.email}
                    onChange={(e) => setReplyForm((p) => ({ ...p, email: e.target.value }))}
                    required
                    maxLength={255}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Not displayed publicly, used for member verification.</p>
                </div>
              </div>
              <div>
                <Label htmlFor="reply-body">Your Reply</Label>
                <Textarea
                  id="reply-body"
                  rows={4}
                  value={replyForm.body}
                  onChange={(e) => setReplyForm((p) => ({ ...p, body: e.target.value }))}
                  required
                  minLength={10}
                  maxLength={5000}
                />
              </div>
              <Button variant="gold" type="submit" disabled={submitting}>
                {submitting ? "Posting..." : "Post Reply"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default ForumThread;
