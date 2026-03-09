import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useForumCategories } from "@/hooks/useForum";
import { supabase } from "@/integrations/supabase/client";

const ForumNewThread = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: categories = [] } = useForumCategories();

  const [form, setForm] = useState({
    categoryId: "",
    name: "",
    email: "",
    title: "",
    body: "",
    confirmed: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.confirmed) {
      toast({ title: "Please confirm no identifying client information", variant: "destructive" });
      return;
    }
    if (form.title.trim().length < 5) {
      toast({ title: "Title must be at least 5 characters", variant: "destructive" });
      return;
    }
    if (form.body.trim().length < 20) {
      toast({ title: "Body must be at least 20 characters", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await supabase.from("forum_threads").insert({
        category_id: form.categoryId,
        author_name: form.name.trim(),
        author_email: form.email.trim(),
        title: form.title.trim(),
        body: form.body.trim(),
      }).select("id").single();

      if (error) throw error;
      toast({ title: "Thread created!" });
      navigate(`/forum/thread/${data.id}`);
    } catch {
      toast({ title: "Error creating thread", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="New Thread — Forum — The Interventionist Network"
        description="Create a new discussion thread in The Interventionist Network forum."
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Forum", item: "https://theinterventionistnetwork.com/forum" },
            { "@type": "ListItem", position: 3, name: "New Thread", item: "https://theinterventionistnetwork.com/forum/new" },
          ],
        }}
      />

      <section className="bg-navy py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/50 mb-4">
            <Link to="/forum" className="hover:text-primary-foreground">Forum</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground">New Thread</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">New Thread</h1>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-5">
            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={form.categoryId} onValueChange={(v) => setForm((p) => ({ ...p, categoryId: v }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="thread-name">Your Name</Label>
                <Input
                  id="thread-name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <Label htmlFor="thread-email">Your Email</Label>
                <Input
                  id="thread-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  required
                  maxLength={255}
                />
                <p className="text-xs text-muted-foreground mt-1">Not displayed publicly.</p>
              </div>
            </div>

            <div>
              <Label htmlFor="thread-title">Thread Title</Label>
              <Input
                id="thread-title"
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                required
                minLength={5}
                maxLength={200}
              />
            </div>

            <div>
              <Label htmlFor="thread-body">Thread Body</Label>
              <Textarea
                id="thread-body"
                rows={8}
                value={form.body}
                onChange={(e) => setForm((p) => ({ ...p, body: e.target.value }))}
                required
                minLength={20}
                maxLength={10000}
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="confirm"
                checked={form.confirmed}
                onCheckedChange={(checked) => setForm((p) => ({ ...p, confirmed: checked === true }))}
              />
              <Label htmlFor="confirm" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                I confirm this post contains no identifying client information.
              </Label>
            </div>

            <Button variant="gold" type="submit" disabled={submitting || !form.categoryId}>
              {submitting ? "Posting..." : "Post Thread"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForumNewThread;
