import { Download, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

interface Resource {
  title: string;
  description: string;
}

const sections = [
  {
    id: "marketing",
    title: "Marketing Templates",
    access: "Featured & Partner",
    resources: [
      { title: "10 Social Media Posts for Interventionists", description: "Ready-to-customize social content for your platforms." },
      { title: "Email Template: Introducing Yourself to Treatment Centers", description: "Professional outreach template for building referral relationships." },
      { title: "Email Template: Follow-Up After Initial Family Call", description: "Nurture leads with a professional follow-up." },
      { title: "One-Page Brochure Template: Your Intervention Services", description: "Print-ready brochure template to customize with your info." },
      { title: "Website Copy Template: About Page for Interventionists", description: "Proven copy framework for your website's about page." },
    ] as Resource[],
  },
  {
    id: "legal",
    title: "Legal & Insurance Resources",
    access: "Featured & Partner",
    resources: [
      { title: "State-by-State Patient Brokering Laws Reference Guide", description: "Comprehensive guide to patient brokering regulations." },
      { title: "Liability Insurance Recommendations for Interventionists", description: "Vetted insurance providers and coverage recommendations." },
      { title: "Client Service Agreement Template", description: "Professional service agreement for your practice." },
      { title: "Family Intake Form Template", description: "Streamline your intake process with this proven template." },
      { title: "Informed Consent Template", description: "Protect yourself and your clients with proper consent documentation." },
      { title: "HIPAA Compliance Checklist for Interventionists", description: "Ensure your practice meets HIPAA requirements." },
    ] as Resource[],
  },
  {
    id: "family",
    title: "Family Resources (White-Label)",
    access: "Featured & Partner",
    note: "Share these with your clients' families. Branded by The Interventionist Network.",
    resources: [
      { title: "Understanding Addiction: A Guide for Families", description: "Share with your clients' families to help them understand addiction." },
      { title: "Setting Boundaries: A Family Workbook", description: "Practical workbook for families learning to set healthy boundaries." },
      { title: "What to Expect During an Intervention", description: "Prepare families for the intervention process." },
      { title: "Treatment Center Evaluation Checklist", description: "Help families evaluate and compare treatment options." },
      { title: "Post-Intervention Family Support Plan", description: "Guide families through the post-intervention period." },
      { title: "The 8 Stages of Family Recovery", description: "From the Recovery Roadmap — a framework for family healing." },
    ] as Resource[],
  },
  {
    id: "business",
    title: "Business Tools",
    access: "Partner Only",
    resources: [
      { title: "Quarterly Business Scorecard Template", description: "Track cases, revenue, inquiries, and conversion rates." },
      { title: "Fee Setting Guide: Know Your Worth", description: "Data-driven guide to setting competitive, fair fees." },
      { title: "Referral Relationship Builder (Non-Kickback)", description: "Ethical referral tracking and relationship management tool." },
    ] as Resource[],
  },
];

const ResourcesPage = () => {
  return (
    <>
      <SEO
        title="Member Resources — The Interventionist Network"
        description="Tools, templates, and resources to grow your intervention practice. Marketing templates, legal resources, family guides, and business tools."
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          "@type": "WebPage",
          name: "Member Resources",
          description: "Tools, templates, and resources for interventionists.",
          url: "https://theinterventionistnetwork.com/resources",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Resources", item: "https://theinterventionistnetwork.com/resources" },
          ],
        }}
      />

      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Member Resources
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Tools, templates, and resources to grow your practice and serve families better.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="multiple" className="space-y-4">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span>{section.title}</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gold/20 text-gold-foreground">
                      {section.access}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {section.note && (
                    <p className="text-sm text-muted-foreground italic mb-4">{section.note}</p>
                  )}
                  <div className="grid gap-3">
                    {section.resources.map((resource, i) => (
                      <div key={i} className="flex items-center justify-between gap-4 p-3 rounded-md bg-muted/50">
                        <div className="flex items-start gap-3 min-w-0">
                          <FileText className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <p className="font-medium text-sm">{resource.title}</p>
                            <p className="text-xs text-muted-foreground">{resource.description}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="shrink-0">
                          <Download className="w-3.5 h-3.5 mr-1" /> Download
                        </Button>
                      </div>
                    ))}
                  </div>
                  {section.access !== "All Members" && (
                    <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Upgrade to access these resources
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
