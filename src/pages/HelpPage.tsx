import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    relationship: "",
    age: "",
    concern: "",
    yourState: "",
    theirState: "",
    urgency: "",
    description: "",
    understand: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Family intake submitted:", form);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <>
        <SEO title="Request Received" description="We've received your information and will be in touch soon." />
        <div className="container mx-auto px-4 py-24 text-center max-w-lg">
          <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Thank You</h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A member of our team will reach out within 24 hours (same day for crisis situations).
          </p>
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
        title="Get Help — Free Interventionist Matching"
        description="Tell us about your situation and we'll connect you with a vetted interventionist. Free, confidential, and no obligation."
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
          <p className="text-primary-foreground/70 max-w-xl">
            Share some details and we'll connect you with a vetted interventionist who can help your family. This is free and confidential.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Your First Name *</label>
                <input required type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Your Email *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Your Phone Number *</label>
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
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
                <input required type="text" value={form.yourState} onChange={(e) => setForm({ ...form, yourState: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Their State (if different)</label>
                <input type="text" value={form.theirState} onChange={(e) => setForm({ ...form, theirState: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
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
              <textarea rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us anything that might help us match you with the right professional..." />
            </div>

            <label className="flex items-start gap-3 text-sm cursor-pointer p-4 rounded-lg bg-warm-gray">
              <input type="checkbox" required checked={form.understand} onChange={(e) => setForm({ ...form, understand: e.target.checked })} className="rounded border-input mt-0.5" />
              <span>I understand this is a free matching service with no obligation.</span>
            </label>

            <Button variant="gold" size="lg" type="submit" className="w-full">
              Get Matched
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HelpPage;
