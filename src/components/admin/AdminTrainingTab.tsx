import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useTrainingMaterials, type TrainingMaterial } from "@/hooks/useTrainingMaterials";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, X, BookOpen, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tagOptions = ["Core Curriculum", "Family Dynamics", "Ethics & Compliance", "Advanced", "Specialty"];
const accessOptions = ["All Members", "Featured & Partner", "Partner (Early Access)"];
const statusOptions = ["available", "coming-soon"];

const emptyForm = {
  title: "",
  description: "",
  tag: "Core Curriculum",
  access_tier: "Featured & Partner",
  status: "available",
  video_url: "",
  content: "",
  sort_order: 0,
};

type FormData = typeof emptyForm;

const AdminTrainingTab = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data: materials = [], isLoading } = useTrainingMaterials();

  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [saving, setSaving] = useState(false);

  const startEdit = (item: TrainingMaterial) => {
    setEditing(item.id);
    setForm({
      title: item.title,
      description: item.description,
      tag: item.tag,
      access_tier: item.access_tier,
      status: item.status,
      video_url: item.video_url || "",
      content: item.content || "",
      sort_order: item.sort_order,
    });
  };

  const startNew = () => {
    setEditing("new");
    setForm({ ...emptyForm, sort_order: materials.length });
  };

  const cancel = () => {
    setEditing(null);
    setForm(emptyForm);
  };

  const handleSave = async () => {
    setSaving(true);
    const payload = {
      title: form.title,
      description: form.description,
      tag: form.tag,
      access_tier: form.access_tier,
      status: form.status,
      video_url: form.video_url || null,
      content: form.content,
      sort_order: form.sort_order,
      updated_at: new Date().toISOString(),
    };

    let error;
    if (editing === "new") {
      ({ error } = await supabase.from("training_materials").insert(payload));
    } else {
      ({ error } = await supabase.from("training_materials").update(payload).eq("id", editing!));
    }

    setSaving(false);
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: editing === "new" ? "Training material added" : "Training material updated" });
      queryClient.invalidateQueries({ queryKey: ["training_materials"] });
      cancel();
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    const { error } = await supabase.from("training_materials").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: `"${title}" deleted` });
      queryClient.invalidateQueries({ queryKey: ["training_materials"] });
    }
  };

  return (
    <div>
      {/* Editor */}
      {editing !== null && (
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{editing === "new" ? "Add Training Material" : "Edit Training Material"}</h2>
            <Button variant="ghost" size="sm" onClick={cancel}><X className="w-4 h-4" /></Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label>Title *</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div>
              <Label>Tag / Category</Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={form.tag}
                onChange={(e) => setForm({ ...form, tag: e.target.value })}
              >
                {tagOptions.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <Label>Access Tier</Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={form.access_tier}
                onChange={(e) => setForm({ ...form, access_tier: e.target.value })}
              >
                {accessOptions.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div>
              <Label>Status</Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <Label>Sort Order</Label>
              <Input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} />
            </div>
            <div className="md:col-span-2">
              <Label>Video URL (YouTube, Vimeo, etc.)</Label>
              <Input value={form.video_url} onChange={(e) => setForm({ ...form, video_url: e.target.value })} placeholder="https://..." />
            </div>
          </div>

          <div className="mt-4">
            <Label>Description</Label>
            <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} />
          </div>

          <div className="mt-4">
            <Label>Full Content / Notes</Label>
            <Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={6} />
          </div>

          <div className="mt-6 flex gap-3">
            <Button variant="gold" onClick={handleSave} disabled={saving || !form.title}>
              {saving ? "Saving..." : "Save"}
            </Button>
            <Button variant="outline" onClick={cancel}>Cancel</Button>
          </div>
        </div>
      )}

      {/* List */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">{materials.length} Training Material{materials.length !== 1 ? "s" : ""}</h2>
        {editing === null && (
          <Button variant="gold" size="sm" onClick={startNew}>
            <Plus className="w-4 h-4 mr-1" /> Add New
          </Button>
        )}
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : materials.length === 0 ? (
        <p className="text-muted-foreground">No training materials yet. Click "Add New" to create one.</p>
      ) : (
        <div className="space-y-3">
          {materials.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                {item.status === "coming-soon" ? (
                  <Clock className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <BookOpen className="w-5 h-5 text-gold" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold">{item.title}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs">{item.tag}</Badge>
                  <span>{item.access_tier}</span>
                  <span>·</span>
                  <span>{item.status === "coming-soon" ? "Coming Soon" : "Available"}</span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="sm" onClick={() => startEdit(item)}>
                  <Pencil className="w-3.5 h-3.5" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDelete(item.id, item.title)}>
                  <Trash2 className="w-3.5 h-3.5 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminTrainingTab;
