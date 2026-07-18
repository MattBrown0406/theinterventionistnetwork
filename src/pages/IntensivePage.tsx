import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BadgeCheck, Shield, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { supabase } from "@/integrations/supabase/client";
import { createInitialSubmitMeta, markProtectedSubmission, validateProtectedSubmission } from "@/lib/formProtection";
import { trackEvent } from "@/lib/analytics";
import { toast } from "sonner";

const experienceLevels = [
  "New to the field — exploring intervention work",
  "0–2 years of intervention experience",
  "2+ years of intervention experience",
  "Clinical or adjacent professional (counselor, social worker, peer support, etc.)",
];

const curriculum = [
  { title: "Foundations of Professional Intervention", desc: "Intervention models, family systems, enabling, trauma, communication, and treatment navigation — the 20-hour core." },
  { title: "Intervention Models in Practice", desc: "Johnson, Love First, ARISE, CRAFT, CCMI — when to use surprise vs. invitational approaches, and how to match the model to the family." },
  { title: "Ethics & Patient Brokering Laws", desc: "State and federal regulations, professional boundaries, and the ethical framework this network is built on: nobody pays you but the family." },
  { title: "The Family Craft", desc: "Letters, boundaries, rehearsal, and day-of facilitation — the practical skills that decide outcomes." },
  { title: "High-Acuity & Specialty Cases", desc: "Fentanyl-era safety, co-occurring disorders, adolescents, executives — and when NOT to take the case." },
  { title: "Building an Ethical Practice", desc: "Setting fees, talking money with families, finding referral sources without kickbacks, and running a sustainable practice." },
];

const included = [
  "Three-day live virtual intensive (20 hours) taught by Matt Brown",
  "90-day mentorship tail: group case-consultation calls while you work your first cases",
  "Full access to the on-demand Training Library during the program",
  "Directory listing on TheInterventionistNetwork.com through the network's mentorship pathway",
  "Certificate of completion and the TIN-Trained badge for your website",
  "Founding cohort capped at 12 students",
];

const IntensivePage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitMeta, setSubmitMeta] = useState(createInitialSubmitMeta);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    background: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("intensive_waitlist_submit_attempt", {
      experience: form.experience || "unknown",
      has_phone: Boolean(form.phone),
    });

    const guard = validateProtectedSubmission("intensive", submitMeta.website, submitMeta.startedAt);
    if (!guard.ok) {
      trackEvent("intensive_waitlist_submit_blocked", { reason: guard.reason || "unknown" });
      toast.error(guard.reason || "Unable to submit right now.");
      return;
    }

    setLoading(true);
    try {
      const message = `Experience level: ${form.experience}\n\n${form.background}`;
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        inquiry_type: "Interventionist Intensive Waitlist",
        message,
      });
      if (error) throw error;
      markProtectedSubmission("intensive");
      // Fire-and-forget email notifications (don't block UX on failure)
      void supabase.functions.invoke("send-email", {
        body: {
          to: "matt@theinterventionistnetwork.com",
          subject: `New Intensive waitlist signup: ${form.name}`,
          reply_to: form.email,
          html: `<h2>New Interventionist Intensive waitlist signup</h2>
<p><strong>Name:</strong> ${form.name}</p>
<p><strong>Email:</strong> ${form.email}</p>
<p><strong>Phone:</strong> ${form.phone || "—"}</p>
<p><strong>Experience:</strong> ${form.experience}</p>
<p><strong>Background:</strong></p>
<p>${form.background.replace(/\n/g, "<br/>")}</p>`,
        },
      });
      void supabase.functions.invoke("send-email", {
        body: {
          to: form.email,
          subject: "You're on the list — The Interventionist Intensive",
          html: `<p>Hi ${form.name},</p>
<p>You're on the waitlist for The Interventionist Intensive. The founding cohort is capped at 12 students, and waitlist members hear about dates, pricing, and enrollment before anyone else.</p>
<p>In the meantime, two good places to start: the <a href="https://theinterventionistnetwork.com/blog">blog</a> and our <a href="https://theinterventionistnetwork.com/credentials">guide to intervention credentials</a>.</p>
<p>— Matt Brown<br/>The Interventionist Network</p>`,
        },
      });
      trackEvent("intensive_waitlist_submit_success", { experience: form.experience });
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again, or email matt@theinterventionistnetwork.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="The Interventionist Intensive — Professional Training for New Interventionists"
        description="A cohort-based professional training program for new addiction interventionists: a 3-day live intensive, 90-day mentorship, and a directory listing to launch your practice ethically."
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          "@type": "WebPage",
          name: "The Interventionist Intensive",
          description: "Cohort-based professional training for new addiction interventionists.",
          url: "https://theinterventionistnetwork.com/intensive",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "The Intensive", item: "https://theinterventionistnetwork.com/intensive" },
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-4">Founding Cohort — Fall 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              The Interventionist <span className="text-gold">Intensive</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              A cohort-based professional training for the next generation of interventionists — taught by a 20+ year
              veteran, finished with mentorship on your real cases, and launched with a listing in the only national
              directory with zero referral fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild><a href="#waitlist">Join the Waitlist</a></Button>
              <Button variant="hero-outline" size="xl" asChild><Link to="/training">Browse the Training Library</Link></Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-primary-foreground/70">
              <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Capped at 12 students</span>
              <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Live, not pre-recorded</span>
              <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Mentorship included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why this program */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Training that ends with a practice, not just a certificate</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Most intervention training ends when the slides do. The Intensive is built differently: you learn the
              craft live, then spend 90 days working your first cases with mentorship behind you — and you finish with
              a public profile in the network's directory, where families are already looking. It is the only program
              we know of where graduation connects you to actual case flow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: GraduationCap, title: "Learn It Live", desc: "Three days of live teaching and drills — family systems, letters, boundaries, rehearsal, day-of facilitation — not a video library you'll never finish." },
              { icon: Users, title: "Mentored, Not Abandoned", desc: "90 days of group case consultation after the intensive. Bring your real cases; leave with real judgment. This also satisfies the network's under-2-years mentorship pathway." },
              { icon: BadgeCheck, title: "Launched, Not Just Trained", desc: "Graduates are listed in the national directory, receive the TIN-Trained badge, and step into a community of working professionals." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-8 text-center border border-border">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 lg:py-24 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built from 20+ years of living rooms, not lecture halls.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {curriculum.map((mod) => (
              <div key={mod.title} className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-2">{mod.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included + ethics note */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">What's Included</h2>
              <div className="space-y-4">
                {included.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-border bg-warm-gray p-5 text-sm text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground mb-1 flex items-center gap-2"><Shield className="h-4 w-4 text-gold" /> An honest note on credentials</p>
                The Intensive issues a certificate of completion — it is not a state license or a board certification,
                and any program that tells you otherwise is selling something. It is designed to complement the
                field's recognized credentials. See our <Link to="/credentials" className="text-gold hover:underline">credentials guide</Link> for
                how CIP, CCMI, ARISE, and clinical licenses fit together.
              </div>
            </div>
            <div className="rounded-2xl bg-navy p-8 text-primary-foreground">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-gold" />
                <h3 className="text-xl font-bold">Founding Cohort — Fall 2026</h3>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed mb-4">
                The first cohort is capped at 12 students so every participant gets direct feedback on their letters,
                rehearsals, and case work. Dates and founding-cohort pricing are announced to the waitlist first.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                Joining the waitlist costs nothing and commits you to nothing — it holds your place in line and gets
                you the enrollment details before they're public.
              </p>
              <Button variant="gold" size="lg" asChild className="w-full">
                <a href="#waitlist">Join the Waitlist <ArrowRight className="w-4 h-4 ml-1" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section id="waitlist" className="py-16 lg:py-24 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
              <p className="text-muted-foreground text-lg">
                Tell us a little about yourself. Waitlist members hear about dates, pricing, and enrollment first.
              </p>
            </div>
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
                <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">You're on the list</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll be in touch with founding-cohort details before they're announced anywhere else. In the
                  meantime, the <Link to="/blog" className="text-gold hover:underline">blog</Link> and the{" "}
                  <Link to="/credentials" className="text-gold hover:underline">credentials guide</Link> are the best
                  places to start.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  value={submitMeta.website}
                  onChange={(e) => setSubmitMeta((prev) => ({ ...prev, website: e.target.value }))}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name *</label>
                    <input required type="text" minLength={2} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input required type="email" maxLength={180} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input type="tel" minLength={7} maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Where are you starting from? *</label>
                  <select required value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                    <option value="">Select one</option>
                    {experienceLevels.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Tell us about your background and why intervention work *</label>
                  <textarea required rows={5} minLength={10} maxLength={3000} value={form.background} onChange={(e) => setForm({ ...form, background: e.target.value })} className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <Button variant="gold" size="lg" type="submit" disabled={loading} className="w-full">
                  {loading ? "Submitting..." : "Join the Waitlist"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No cost, no commitment — just first access to enrollment details.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default IntensivePage;
