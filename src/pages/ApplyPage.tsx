import { useState } from "react";
import { createInitialSubmitMeta, markProtectedSubmission, validateProtectedSubmission } from "@/lib/formProtection";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CreditCard, BadgeCheck } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { specialtyOptions, stateOptions } from "@/data/interventionists";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const certOptions = ["ARISE", "CIP", "CADC", "CCMI", "LCDC", "LPC", "LCSW", "PHD", "Other"];
const hearAboutOptions = ["Referral", "Podcast", "Social Media", "Search", "Conference", "Other"];

const TIER_LABELS: Record<string, string> = {
  listed: "Listed — $49 initial membership payment",
  featured: "Featured — $199 initial membership payment",
  partner: "Partner — $299 initial membership payment",
};

const fieldDefinitions = [
  { label: "Full Name *", key: "fullName", type: "text", required: true },
  { label: "Email *", key: "email", type: "email", required: true },
  { label: "Phone *", key: "phone", type: "tel", required: true },
  { label: "Business Name", key: "businessName", type: "text", required: false },
  { label: "Website URL", key: "websiteUrl", type: "url", required: false },
  { label: "Years of Intervention Experience *", key: "yearsExperience", type: "number", required: true },
] as const;

const ApplyPage = () => {
  const [loading, setLoading] = useState(false);
  const [submitMeta, setSubmitMeta] = useState(createInitialSubmitMeta);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    websiteUrl: "",
    yearsExperience: "",
    certifications: [] as string[],
    certOther: "",
    statesServed: [] as string[],
    specialties: [] as string[],
    practiceDescription: "",
    hearAbout: "",
    tierInterest: "",
    noReferralFees: false,
    offersHourlyCoaching: false,
  });

  const handleCheckboxArray = (field: "certifications" | "specialties", value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const guard = validateProtectedSubmission("apply", submitMeta.website, submitMeta.startedAt);
    if (!guard.ok) {
      toast.error(guard.reason || "Unable to submit right now.");
      return;
    }

    setLoading(true);
    try {
      // 1. Save application to database
      const { data: appData, error } = await supabase.from("membership_applications").insert({
        full_name: form.fullName,
        email: form.email,
        phone: form.phone,
        business_name: form.businessName || null,
        website_url: form.websiteUrl || null,
        years_experience: parseInt(form.yearsExperience),
        certifications: form.certifications,
        cert_other: form.certifications.includes("Other") ? form.certOther : null,
        states_served: form.statesServed,
        specialties: form.specialties,
        practice_description: form.practiceDescription,
        hear_about: form.hearAbout || null,
        tier_interest: form.tierInterest,
        no_referral_fees: form.noReferralFees,
        offers_hourly_coaching: form.offersHourlyCoaching,
      }).select("id").single();

      if (error) throw error;

      // 2. Create Square checkout
      const redirectUrl = `${window.location.origin}/payment-confirmation`;
      const { data: checkoutData, error: fnError } = await supabase.functions.invoke("create-square-checkout", {
        body: {
          tier: form.tierInterest,
          applicationId: appData?.id,
          redirectUrl,
        },
      });

      if (fnError) throw fnError;
      if (checkoutData?.error) throw new Error(checkoutData.error);

      // 3. Redirect to Square checkout
      if (checkoutData?.checkoutUrl) {
        markProtectedSubmission("apply");
        setSubmitMeta(createInitialSubmitMeta());
        window.location.href = checkoutData.checkoutUrl;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err) {
      console.error("Application error:", err);
      toast.error("Something went wrong. Please try again or contact us directly.");
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Apply for Membership"
        description="Apply to join The Interventionist Network. We vet every member for credentials, experience, and ethical standards."
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Apply", item: "https://theinterventionistnetwork.com/apply" },
          ],
        }}
      />

      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Apply for <span className="text-gold">Membership</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl">
            Complete the form below to apply. Your initial membership payment will be collected via Square after submission. Ongoing billing details are finalized during onboarding.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-primary-foreground/75">
            <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Application reviewed by a human</span>
            <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Initial payment only</span>
            <span className="rounded-full border border-primary-foreground/15 px-3 py-1">No referral fees required</span>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
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
            {fieldDefinitions.map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  required={field.required}
                  value={form[field.key]}
                  minLength={field.key === "yearsExperience" ? undefined : 2}
                  maxLength={field.key === "yearsExperience" ? undefined : 180}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-2">Certifications Held *</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {certOptions.map((cert) => (
                  <label key={cert} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={form.certifications.includes(cert)} onChange={() => handleCheckboxArray("certifications", cert)} className="rounded border-input" />
                    {cert}
                  </label>
                ))}
              </div>
              {form.certifications.includes("Other") && (
                <input type="text" placeholder="Please specify" maxLength={180} value={form.certOther} onChange={(e) => setForm({ ...form, certOther: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm mt-2 focus:outline-none focus:ring-2 focus:ring-ring" />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Specialties *</label>
              <div className="grid grid-cols-2 gap-2">
                {specialtyOptions.map((spec) => (
                  <label key={spec} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={form.specialties.includes(spec)} onChange={() => handleCheckboxArray("specialties", spec)} className="rounded border-input" />
                    {spec}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">States/Regions You Serve *</label>
              <select
                multiple
                value={form.statesServed}
                onChange={(e) => setForm({ ...form, statesServed: Array.from(e.target.selectedOptions, (o) => o.value) })}
                className="w-full h-32 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {stateOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <p className="text-xs text-muted-foreground mt-1">Hold Ctrl/Cmd to select multiple</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Brief Description of Your Practice *</label>
              <textarea required rows={4} minLength={30} maxLength={4000} value={form.practiceDescription} onChange={(e) => setForm({ ...form, practiceDescription: e.target.value })} className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">How Did You Hear About Us?</label>
              <select value={form.hearAbout} onChange={(e) => setForm({ ...form, hearAbout: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                <option value="">Select one</option>
                {hearAboutOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Membership Tier Interest *</label>
              <select required value={form.tierInterest} onChange={(e) => setForm({ ...form, tierInterest: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                <option value="">Select a tier</option>
                {Object.entries(TIER_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
              <p className="text-xs text-muted-foreground mt-1">This checkout collects the initial payment only. Recurring billing is handled during approved member onboarding.</p>
            </div>

            <label className="flex items-start gap-3 text-sm cursor-pointer p-4 rounded-lg bg-warm-gray">
              <input type="checkbox" checked={form.offersHourlyCoaching} onChange={(e) => setForm({ ...form, offersHourlyCoaching: e.target.checked })} className="rounded border-input mt-0.5" />
              <span>I provide hourly coaching services</span>
            </label>

            <label className="flex items-start gap-3 text-sm cursor-pointer p-4 rounded-lg bg-warm-gray">
              <input type="checkbox" required checked={form.noReferralFees} onChange={(e) => setForm({ ...form, noReferralFees: e.target.checked })} className="rounded border-input mt-0.5" />
              <span>I confirm that I do not pay or accept referral fees for client placements and that I am not employed by a treatment center. <span className="text-muted-foreground">*</span></span>
            </label>

            <div className="rounded-xl border border-border bg-warm-gray p-4 text-sm text-muted-foreground">
              After you submit, we save your application, generate your Square checkout for the initial membership payment, and redirect you securely to complete payment.
            </div>

            <Button variant="gold" size="lg" type="submit" className="w-full" disabled={loading}>
              {loading ? "Processing..." : "Submit Application & Pay"}
            </Button>
          </form>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-bold">What happens next</h2>
                <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p>Your application is reviewed for experience, fit, and ethical alignment with the network.</p>
                  </div>
                  <div className="flex gap-3">
                    <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p>The checkout collected here is for the initial payment only. Ongoing billing is finalized during onboarding.</p>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p>You are confirming a no-referral-fee, non-brokering standard that protects families and your reputation.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-bold">Before you apply</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>Have your certifications and regions served ready.</li>
                  <li>Use a practice description that explains how you work with families.</li>
                  <li>Choose the tier you actually want to start with. You can revisit fit during onboarding.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyPage;
