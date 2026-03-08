import { useState } from "react";
import { Phone, Mail, CheckCircle } from "lucide-react";
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      setSubmitted(true);
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
        <SEO title="Message Sent — The Interventionist Network" description="Thank you for reaching out." />
        <div className="container mx-auto px-4 py-24 text-center max-w-lg">
          <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Message Sent</h1>
          <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact The Interventionist Network"
        description="Get in touch with The Interventionist Network. Call (541) 838-6009 or send us a message. We're here to help families and professionals."
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
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-primary-foreground/70">We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name *</label>
                    <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
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
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring" />
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
                  <a href="tel:5418386009" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
                    <Phone className="w-4 h-4" />(541) 838-6009
                  </a>
                  <a href="mailto:matt@theinterventionnetwork.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
                    <Mail className="w-4 h-4" />matt@theinterventionnetwork.com
                  </a>
                </div>
              </div>
              <div className="bg-warm-gray rounded-lg p-6">
                <h3 className="font-bold mb-2">Crisis?</h3>
                <p className="text-sm text-muted-foreground mb-3">If this is urgent, don't wait for a form response.</p>
                <Button variant="gold" size="sm" asChild>
                  <a href="tel:5418386009">Call Now</a>
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
