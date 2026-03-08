import { useState } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { specialtyOptions, stateOptions } from "@/data/interventionists";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const certOptions = ["ARISE", "CIP", "CADC", "CCMI", "LCDC", "LPC", "LCSW", "PHD", "Other"];
const hearAboutOptions = ["Referral", "Podcast", "Social Media", "Search", "Conference", "Other"];

const TIER_LABELS: Record<string, string> = {
  listed: "Listed — $49/month",
  featured: "Featured — $199/month",
  partner: "Partner — $299/month",
};

const ApplyPage = () => {
  const [loading, setLoading] = useState(false);
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
          <p className="text-primary-foreground/70 max-w-xl">
            Complete the form below to apply. Payment will be collected via Square after submission.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Full Name *", key: "fullName", type: "text", required: true },
              { label: "Email *", key: "email", type: "email", required: true },
              { label: "Phone *", key: "phone", type: "tel", required: true },
              { label: "Business Name", key: "businessName", type: "text", required: false },
              { label: "Website URL", key: "websiteUrl", type: "url", required: false },
              { label: "Years of Intervention Experience *", key: "yearsExperience", type: "number", required: true },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  required={field.required}
                  value={(form as any)[field.key]}
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
                <input type="text" placeholder="Please specify" value={form.certOther} onChange={(e) => setForm({ ...form, certOther: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm mt-2 focus:outline-none focus:ring-2 focus:ring-ring" />
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
              <textarea required rows={4} value={form.practiceDescription} onChange={(e) => setForm({ ...form, practiceDescription: e.target.value })} className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring" />
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
            </div>

            <label className="flex items-start gap-3 text-sm cursor-pointer p-4 rounded-lg bg-warm-gray">
              <input type="checkbox" checked={form.offersHourlyCoaching} onChange={(e) => setForm({ ...form, offersHourlyCoaching: e.target.checked })} className="rounded border-input mt-0.5" />
              <span>I provide hourly coaching services</span>
            </label>

            <label className="flex items-start gap-3 text-sm cursor-pointer p-4 rounded-lg bg-warm-gray">
              <input type="checkbox" required checked={form.noReferralFees} onChange={(e) => setForm({ ...form, noReferralFees: e.target.checked })} className="rounded border-input mt-0.5" />
              <span>I confirm that I do not pay or accept referral fees for client placements and that I am not employed by a treatment center. <span className="text-muted-foreground">*</span></span>
            </label>

            <Button variant="gold" size="lg" type="submit" className="w-full" disabled={loading}>
              {loading ? "Processing..." : "Submit Application & Pay"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ApplyPage;
