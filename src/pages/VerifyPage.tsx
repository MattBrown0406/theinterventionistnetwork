import { Link } from "react-router-dom";
import { ShieldCheck, Search, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const VerifyPage = () => {
  return (
    <>
      <SEO
        title="Verify a Member"
        description="Verify whether an interventionist is an active member of The Interventionist Network and understand what our verification badge means."
        canonical="https://theinterventionistnetwork.com/verify"
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          name: "Verify a Member",
          description: "Verify whether an interventionist is an active member of The Interventionist Network.",
          url: "https://theinterventionistnetwork.com/verify",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Verify a Member", item: "https://theinterventionistnetwork.com/verify" },
          ],
        }}
      />

      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/15 mb-6">
            <ShieldCheck className="w-7 h-7 text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Verify a Member
          </h1>
          <p className="text-lg text-primary-foreground/70">
            This page explains what our verification badge means and how membership verification is handled.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Search className="w-5 h-5 text-gold" /> What verification means
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A verified badge means the interventionist has been reviewed for credentials, experience, and alignment with The Interventionist Network&apos;s no-referral-fee standards. Verification is intended to help families distinguish vetted members from generic directory listings or call-center style lead sellers.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-gold" /> Current verification process
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Public self-serve name lookup is not live yet. Until the searchable verification directory is released, families should use the network directory or contact us directly to confirm whether an interventionist is currently active and in good standing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" asChild>
                <Link to="/find">Browse Verified Members</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us to Verify</Link>
              </Button>
            </div>
          </div>

          <div className="bg-warm-gray rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3">What families should look for</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clear credentials and years of experience</li>
              <li>• No referral-fee or patient-brokering conflicts</li>
              <li>• Transparent service area and specialties</li>
              <li>• A direct path to ask questions before hiring</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifyPage;
