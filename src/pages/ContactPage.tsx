import { useState } from "react";
import { Link } from "react-router-dom";
import { createInitialSubmitMeta, markProtectedSubmission, validateProtectedSubmission } from "@/lib/formProtection";
import { trackEvent } from "@/lib/analytics";
import { Phone, Mail, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const inquiryTypes = [
  "I'm a family seeking help",
  "I'm an interventionist interested in joining",
  "Media inquiry",
  "Other",
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitMeta, setSubmitMeta] = useState(createInitialSubmitMeta);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("contact_form_submit_attempt", {
      inquiry_type: form.type || "unknown",
      has_phone: Boolean(form.phone),
    });

    const guard = validateProtectedSubmission("contact", submitMeta.website, submitMeta.startedAt);
    if (!guard.ok) {
      trackEvent("contact_form_submit_blocked", { reason: guard.reason || "unknown" });
      toast.error(guard.reason || "Unable to submit right now.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        inquiry_type: form.type,
        message: form.message,
      });
      if (error) throw error;
      markProtectedSubmission("contact");
      trackEvent("contact_form_submit_success", {
        inquiry_type: form.type || "unknown",
        has_phone: Boolean(form.phone),
      });
      setSubmitted(true);
      setSubmitMeta(createInitialSubmitMeta());
      window.scrollTo(0, 0);
    } catch {
      trackEvent("contact_form_submit_error", {
        inquiry_type: form.type || "unknown",
      });
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <SEO title="Message Sent — The Interventionist Network" description="Thank you for reaching out." />
        <div className="container mx-auto px-4 py-24 max-w-2xl">
          <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
            <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Message sent</h1>
            <p className="text-muted-foreground leading-relaxed">
              Thanks for reaching out. We received your message and will follow up as soon as possible.
            </p>
            <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-border bg-warm-gray p-5 text-left">
              <p className="text-sm font-semibold text-foreground">If your situation is urgent</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Calling is faster than waiting on email, especially for families in crisis.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button variant="gold" size="lg" asChild>
                <a href="tel:5418386009" onClick={() => trackEvent("contact_success_call_click", { inquiry_type: form.type || "unknown" })}>
                  Call (541) 838-6009
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/help" onClick={() => trackEvent("contact_success_help_click", { inquiry_type: form.type || "unknown" })}>
                  Start family intake <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact The Interventionist Network. Families seeking help, interventionists interested in joining, or media inquiries."
        ogImage="https://theinterventionistnetwork.com/logo.png"
        ogImageAlt="The Interventionist Network logo"
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://theinterventionistnetwork.com/contact" },
          ],
        }}
      />

      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            <span className="text-gold">Contact</span> Us
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl">Families seeking help, interventionists interested in joining, and media inquiries can reach us here. If the situation is urgent, call instead of waiting on email.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-2">
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
                  <label className="block text-sm font-medium mb-1.5">I am... *</label>
                  <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                    <option value="">Select one</option>
                    {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message *</label>
                  <textarea required rows={5} minLength={10} maxLength={3000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div className="rounded-xl border border-border bg-warm-gray p-4 text-sm text-muted-foreground">
                  For urgent family situations, calling is faster than email. We can review general contact requests here, but crisis situations should not wait on a form response.
                </div>
                <Button variant="gold" size="lg" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-warm-gray rounded-lg p-6">
                <h3 className="font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <a href="tel:5418386009" onClick={() => trackEvent("contact_page_call_click", { placement: "direct_contact" })} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
                    <Phone className="w-4 h-4" />(541) 838-6009
                  </a>
                  <a href="mailto:matt@theinterventionnetwork.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
                    <Mail className="w-4 h-4" />matt@theinterventionistnetwork.com
                  </a>
                </div>
              </div>
              <div className="bg-warm-gray rounded-lg p-6">
                <h3 className="font-bold mb-2">Crisis?</h3>
                <p className="text-sm text-muted-foreground mb-3">If this is urgent, don't wait for a form response.</p>
                <Button variant="gold" size="sm" asChild>
                  <a href="tel:5418386009" onClick={() => trackEvent("contact_page_call_click", { placement: "crisis_box" })}>Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
