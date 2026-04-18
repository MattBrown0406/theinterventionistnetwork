import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createInitialSubmitMeta, markProtectedSubmission, validateProtectedSubmission } from "@/lib/formProtection";
import { Button } from "@/components/ui/button";
import { CheckCircle, PhoneCall, ShieldCheck, Clock3, BadgeCheck } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { stateOptions } from "@/data/interventionists";
import { useInterventionist } from "@/hooks/useInterventionists";

const relationshipOptions = ["Parent", "Spouse/Partner", "Sibling", "Child", "Friend", "Employer", "Other"];
const ageOptions = ["Under 18", "18-25", "26-40", "41-60", "60+"];
const concernOptions = [
  "Alcohol", "Opioids/Fentanyl", "Methamphetamine", "Cocaine", "Marijuana",
  "Prescription Drugs", "Eating Disorder", "Process Addiction/Gambling",
  "Multiple Substances", "Not Sure",
];
const urgencyOptions = [
  { value: "crisis", label: "Immediate Crisis" },
  { value: "week", label: "Within the Next Week" },
  { value: "month", label: "Within the Next Month" },
  { value: "exploring", label: "Exploring Options" },
];

const HelpPage = () => {
  const [searchParams] = useSearchParams();
  const interventionistSlug = searchParams.get("interventionist")?.trim() || undefined;
  const requestedState = searchParams.get("state")?.trim() || "";
  const { data: selectedInterventionist } = useInterventionist(interventionistSlug);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitMeta, setSubmitMeta] = useState(createInitialSubmitMeta);
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    relationship: "",
    age: "",
    concern: "",
    yourState: requestedState,
    theirState: "",
    urgency: "",
    description: "",
    understand: false,
  });

  const selectedInterventionistLabel = useMemo(() => {
    if (!selectedInterventionist) return null;
    return `${selectedInterventionist.name}, ${selectedInterventionist.credentials}`;
  }, [selectedInterventionist]);

  const selectedInterventionistContext = useMemo(() => {
    if (!selectedInterventionist) return null;
    return [
      `Requested interventionist: ${selectedInterventionist.name}`,
      `Region: ${selectedInterventionist.region}`,
      `Specialties: ${selectedInterventionist.specialties.join(", ")}`,
    ].join("\n");
  }, [selectedInterventionist]);

  const preferredStateLabel = requestedState ? `Requested state: ${requestedState}` : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const guard = validateProtectedSubmission("help", submitMeta.website, submitMeta.startedAt);
    if (!guard.ok) {
      toast.error(guard.reason || "Unable to submit right now.");
      return;
    }

    setLoading(true);
    try {
      const composedDescription = [selectedInterventionistContext, preferredStateLabel, form.description.trim() || null]
        .filter(Boolean)
        .join("\n\n");

      const { error } = await supabase.from("family_intakes").insert({
        first_name: form.firstName,
        email: form.email,
        phone: form.phone,
        relationship: form.relationship,
        approximate_age: form.age,
        primary_concern: form.concern,
        your_state: form.yourState,
        their_state: form.theirState || null,
        urgency: form.urgency,
        description: composedDescription || null,
      });
      if (error) throw error;
      markProtectedSubmission("help");
      setSubmitted(true);
      setSubmitMeta(createInitialSubmitMeta());
      window.scrollTo(0, 0);
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <SEO title="Request Received" description="We've received your information and will be in touch soon." />
        <div className="container mx-auto px-4 py-24 text-center max-w-lg">
          <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Thank You</h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A member of our team will reach out within 24 hours, and faster for crisis situations.
          </p>
          {selectedInterventionistLabel ? (
            <p className="text-sm text-muted-foreground mb-4">
              We noted your request for <strong>{selectedInterventionistLabel}</strong> and will use that when reviewing fit.
            </p>
          ) : null}
          <p className="text-sm text-muted-foreground">
            If this is a medical emergency, please call <strong>911</strong>.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Get Help — Connect With a Vetted Interventionist"
        description="Tell us about your situation and we'll connect you with a vetted interventionist. Free, confidential, no obligation. Crisis situations prioritized."
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Get Help", item: "https://theinterventionistnetwork.com/help" },
          ],
        }}
      />

      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Tell Us About Your <span className="text-gold">Situation</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl">
            Share a few details and we will connect you with a vetted interventionist who fits your situation. This is free, confidential, and there is no obligation.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
            <div className="space-y-6">
              {selectedInterventionistLabel ? (
                <div className="rounded-xl border border-gold/30 bg-gold-light/40 p-4">
                  <p className="text-sm font-semibold text-foreground">Preferred interventionist selected</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We will prioritize your request for <strong>{selectedInterventionistLabel}</strong> when we review your intake.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
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
                <label className="block text-sm font-medium mb-1.5">Your First Name *</label>
                <input required type="text" minLength={2} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Your Email *</label>
                <input required type="email" maxLength={180} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Your Phone Number *</label>
              <input required type="tel" minLength={7} maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Your Relationship *</label>
                <select required value={form.relationship} onChange={(e) => setForm({ ...form, relationship: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                  <option value="">Select</option>
                  {relationshipOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Their Approximate Age *</label>
                <select required value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                  <option value="">Select</option>
                  {ageOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Primary Substance/Behavior Concern *</label>
              <select required value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                <option value="">Select</option>
                {concernOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Your State *</label>
                <select required value={form.yourState} onChange={(e) => setForm({ ...form, yourState: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                  <option value="">Select your state</option>
                  {stateOptions.filter((state) => state !== "National").map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Their State (if different)</label>
                <select value={form.theirState} onChange={(e) => setForm({ ...form, theirState: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                  <option value="">Same as mine / not sure</option>
                  {stateOptions.filter((state) => state !== "National").map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">How Urgent Is This? *</label>
              <div className="space-y-2">
                {urgencyOptions.map((o) => (
                  <label key={o.value} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="urgency" required value={o.value} checked={form.urgency === o.value} onChange={(e) => setForm({ ...form, urgency: e.target.value })} />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Brief Description (optional)</label>
              <textarea rows={4} maxLength={3000} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us anything that might help us match you with the right professional..." />
            </div>

            <label className="flex items-start gap-3 text-sm cursor-pointer p-4 rounded-lg bg-warm-gray">
              <input type="checkbox" required checked={form.understand} onChange={(e) => setForm({ ...form, understand: e.target.checked })} className="rounded border-input mt-0.5" />
              <span>I understand this is a free matching service with no obligation and that someone may contact me to clarify fit.</span>
            </label>

            <div className="rounded-xl border border-border bg-warm-gray p-4 text-sm text-muted-foreground">
              After you submit, we review your situation, prioritize urgency, and connect you with the best-fit interventionist, often the same day for crisis cases.
            </div>

            <Button variant="gold" size="lg" type="submit" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Get Matched"}
            </Button>
          </form>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-bold">What happens next</h2>
                <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p>We review your intake and look at urgency, location, and fit, not just who happens to be nearby.</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p>Crisis situations are prioritized. Most families hear back within 24 hours, often sooner.</p>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p>No referral fees, no kickbacks, and no obligation. The goal is a trustworthy match, not a sale.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-bold">Need help fast?</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  If this is urgent, do not wait on the form alone.
                </p>
                <Button variant="gold" size="lg" asChild className="mt-4 w-full">
                  <a href="tel:5418386009">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Call (541) 838-6009
                  </a>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  If this is a medical emergency, call 911.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpPage;
