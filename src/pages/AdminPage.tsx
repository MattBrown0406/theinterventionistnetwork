import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useInterventionists, type Interventionist } from "@/hooks/useInterventionists";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, LogOut, X, Users, GraduationCap, Briefcase } from "lucide-react";
import SEO from "@/components/SEO";
import { specialtyOptions, stateOptions } from "@/data/interventionists";
import AdminMaterialsTab from "@/components/admin/AdminTrainingTab";

const emptyForm = {
  name: "",
  slug: "",
  credentials: "",
  region: "",
  states_served: [] as string[],
  specialties: [] as string[],
  years_experience: 0,
  bio: "",
  full_bio: "",
  approach: "",
  certifications: [] as string[],
  quote: "",
  phone: "",
  email: "",
  website: "",
  featured: false,
  photo_url: "",
  offers_hourly_coaching: false,
};

type FormData = typeof emptyForm;

const AdminPage = () => {
  const [session, setSession] = useState<Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"] | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data: interventionists = [], isLoading } = useInterventionists();

  const [editing, setEditing] = useState<string | null>(null); // id or "new"
  const [form, setForm] = useState<FormData>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
      if (!session) navigate("/auth");
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session) navigate("/auth");
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const startEdit = (person: Interventionist) => {
    setEditing(person.id);
    setForm({
      name: person.name,
      slug: person.slug,
      credentials: person.credentials,
      region: person.region,
      states_served: person.states_served || [],
      specialties: person.specialties || [],
      years_experience: person.years_experience,
      bio: person.bio,
      full_bio: person.full_bio,
      approach: person.approach,
      certifications: person.certifications || [],
      quote: person.quote,
      phone: person.phone || "",
      email: person.email || "",
      website: person.website || "",
      featured: person.featured,
      photo_url: person.photo_url || "",
      offers_hourly_coaching: person.offers_hourly_coaching ?? false,
    });
    setPhotoFile(null);
  };

  const startNew = () => {
    setEditing("new");
    setForm(emptyForm);
    setPhotoFile(null);
  };

  const cancel = () => {
    setEditing(null);
    setForm(emptyForm);
    setPhotoFile(null);
  };

  const generateSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleSave = async () => {
    setSaving(true);
    let photoUrl = form.photo_url;

    // Upload photo if new file selected
    if (photoFile) {
      const ext = photoFile.name.split(".").pop();
      const path = `${form.slug || generateSlug(form.name)}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("photos").upload(path, photoFile, { upsert: true });
      if (uploadError) {
        toast({ title: "Photo upload failed", description: uploadError.message, variant: "destructive" });
        setSaving(false);
        return;
      }
      const { data: { publicUrl } } = supabase.storage.from("photos").getPublicUrl(path);
      photoUrl = publicUrl;
    }

    const slug = form.slug || generateSlug(form.name);
    const payload = {
      name: form.name,
      slug,
      credentials: form.credentials,
      region: form.region,
      states_served: form.states_served,
      specialties: form.specialties,
      years_experience: form.years_experience,
      bio: form.bio,
      full_bio: form.full_bio,
      approach: form.approach,
      certifications: form.certifications,
      quote: form.quote,
      phone: form.phone || null,
      email: form.email || null,
      website: form.website || null,
      featured: form.featured,
      photo_url: photoUrl || null,
      offers_hourly_coaching: form.offers_hourly_coaching,
    };

    let error;
    if (editing === "new") {
      ({ error } = await supabase.from("interventionists").insert(payload));
    } else {
      ({ error } = await supabase.from("interventionists").update(payload).eq("id", editing!));
    }

    setSaving(false);
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: editing === "new" ? "Interventionist added" : "Interventionist updated" });
      queryClient.invalidateQueries({ queryKey: ["interventionists"] });
      cancel();
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete ${name}? This cannot be undone.`)) return;
    const { error } = await supabase.from("interventionists").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: `${name} deleted` });
      queryClient.invalidateQueries({ queryKey: ["interventionists"] });
    }
  };

  const toggleArrayItem = (field: "states_served" | "specialties" | "certifications", value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((v) => v !== value) : [...prev[field], value],
    }));
  };

  if (loading || !session) return null;

  return (
    <>
      <SEO title="Admin — The Interventionist Network" description="Manage interventionist profiles." noindex />
      <section className="bg-navy py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-foreground">Admin Dashboard</h1>
          <Button variant="hero-outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-1" /> Sign Out
          </Button>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="interventionists">
            <TabsList className="mb-6">
              <TabsTrigger value="interventionists" className="gap-1.5">
                <Users className="w-4 h-4" /> Interventionists
              </TabsTrigger>
              <TabsTrigger value="training" className="gap-1.5">
                <GraduationCap className="w-4 h-4" /> Training Materials
              </TabsTrigger>
              <TabsTrigger value="business" className="gap-1.5">
                <Briefcase className="w-4 h-4" /> Business Development
              </TabsTrigger>
            </TabsList>

            <TabsContent value="interventionists">
              {/* Editor */}
              {editing !== null && (
                <div className="bg-card border border-border rounded-lg p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">{editing === "new" ? "Add Interventionist" : "Edit Interventionist"}</h2>
                    <Button variant="ghost" size="sm" onClick={cancel}><X className="w-4 h-4" /></Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Name *</Label>
                      <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <Label>Slug (auto-generated if empty)</Label>
                      <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="e.g. matt-brown" />
                    </div>
                    <div>
                      <Label>Credentials</Label>
                      <Input value={form.credentials} onChange={(e) => setForm({ ...form, credentials: e.target.value })} placeholder="CCMI, CADC" />
                    </div>
                    <div>
                      <Label>Region</Label>
                      <Input value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} placeholder="Oregon / National" />
                    </div>
                    <div>
                      <Label>Years Experience</Label>
                      <Input type="number" value={form.years_experience} onChange={(e) => setForm({ ...form, years_experience: parseInt(e.target.value) || 0 })} />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <Label>Website</Label>
                      <Input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
                    </div>
                    <div>
                      <Label>Photo</Label>
                      <Input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files?.[0] || null)} />
                      {form.photo_url && <img src={form.photo_url} alt="Current" className="w-16 h-16 rounded-full mt-2 object-cover" />}
                    </div>
                    <div className="flex items-center gap-2 pt-6">
                      <Switch checked={form.featured} onCheckedChange={(v) => setForm({ ...form, featured: v })} />
                      <Label>Featured on homepage</Label>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Switch checked={form.offers_hourly_coaching} onCheckedChange={(v) => setForm({ ...form, offers_hourly_coaching: v })} />
                      <Label>Offers hourly coaching</Label>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label>Quote</Label>
                    <Input value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} />
                  </div>

                  <div className="mt-4">
                    <Label>Short Bio</Label>
                    <Textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} rows={3} />
                  </div>

                  <div className="mt-4">
                    <Label>Full Bio (paragraphs separated by blank lines)</Label>
                    <Textarea value={form.full_bio} onChange={(e) => setForm({ ...form, full_bio: e.target.value })} rows={6} />
                  </div>

                  <div className="mt-4">
                    <Label>Approach / Philosophy</Label>
                    <Textarea value={form.approach} onChange={(e) => setForm({ ...form, approach: e.target.value })} rows={3} />
                  </div>

                  {/* Specialties */}
                  <div className="mt-4">
                    <Label>Specialties</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {specialtyOptions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleArrayItem("specialties", s)}
                          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                            form.specialties.includes(s) ? "bg-gold text-primary-foreground border-gold" : "bg-background border-input"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* States */}
                  <div className="mt-4">
                    <Label>States Served</Label>
                    <div className="flex flex-wrap gap-1.5 mt-1 max-h-32 overflow-y-auto">
                      {stateOptions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleArrayItem("states_served", s)}
                          className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
                            form.states_served.includes(s) ? "bg-gold text-primary-foreground border-gold" : "bg-background border-input"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mt-4">
                    <Label>Certifications (comma-separated)</Label>
                    <Input
                      value={form.certifications.join(", ")}
                      onChange={(e) => setForm({ ...form, certifications: e.target.value.split(",").map((c) => c.trim()).filter(Boolean) })}
                      placeholder="CCMI, CADC, ARISE Trained"
                    />
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button variant="gold" onClick={handleSave} disabled={saving || !form.name}>
                      {saving ? "Saving..." : "Save"}
                    </Button>
                    <Button variant="outline" onClick={cancel}>Cancel</Button>
                  </div>
                </div>
              )}

              {/* List */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">{interventionists.length} Interventionist{interventionists.length !== 1 ? "s" : ""}</h2>
                {editing === null && (
                  <Button variant="gold" size="sm" onClick={startNew}>
                    <Plus className="w-4 h-4 mr-1" /> Add New
                  </Button>
                )}
              </div>

              {isLoading ? (
                <p className="text-muted-foreground">Loading...</p>
              ) : (
                <div className="space-y-3">
                  {interventionists.map((person) => (
                    <div key={person.id} className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
                      {person.photo_url ? (
                        <img src={person.photo_url} alt={person.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-sm font-bold shrink-0">
                          {person.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-bold">{person.name} <span className="text-sm text-muted-foreground font-normal">{person.credentials}</span></div>
                        <div className="text-xs text-muted-foreground">{person.region} · {person.years_experience}+ years {person.featured && "· ⭐ Featured"}</div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Button variant="outline" size="sm" onClick={() => startEdit(person)}>
                          <Pencil className="w-3.5 h-3.5" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDelete(person.id, person.name)}>
                          <Trash2 className="w-3.5 h-3.5 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="training">
              <AdminMaterialsTab category="training" categoryLabel="Training Material" />
            </TabsContent>

            <TabsContent value="business">
              <AdminMaterialsTab category="business" categoryLabel="Business Development Resource" />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
