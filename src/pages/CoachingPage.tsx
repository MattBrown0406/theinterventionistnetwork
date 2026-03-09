import { BarChart3, Target, Megaphone, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const CoachingPage = () => {
  return (
    <>
      <SEO
        title="Business Coaching — Grow Your Practice — The Interventionist Network"
        description="Quarterly business reviews, scorecards, and marketing support for interventionists. Grow your practice with expert guidance."
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          "@type": "WebPage",
          name: "Business Coaching",
          description: "Grow your intervention practice with expert business coaching.",
          url: "https://theinterventionistnetwork.com/coaching",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Business Coaching", item: "https://theinterventionistnetwork.com/coaching" },
          ],
        }}
      />

      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Grow Your Practice
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Most interventionists are great at helping families and terrible at running a business. We fix that.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {/* Quarterly Business Review */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold">Quarterly Business Review</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Partner members receive a quarterly 1-on-1 business review with network founder Matt Brown.
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Revenue and case volume analysis",
                "Marketing effectiveness review",
                "Goal setting for next quarter",
                "Strategy for scaling your practice",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="w-4 h-4" /> Partner members only
            </div>
          </div>

          {/* Business Scorecard */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold">Business Scorecard</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Track what matters. Our simple quarterly scorecard helps you measure:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                "Cases completed",
                "Revenue",
                "Inquiry sources",
                "Conversion rate",
                "Marketing activities completed",
                "Professional development hours",
              ].map((metric) => (
                <div key={metric} className="bg-muted/50 rounded-lg p-3 text-sm font-medium">
                  {metric}
                </div>
              ))}
            </div>
            <Button variant="outline" asChild>
              <Link to="/resources">Download Template in Member Resources</Link>
            </Button>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
              <Lock className="w-4 h-4" /> Partner members
            </div>
          </div>

          {/* Marketing Support */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Megaphone className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold">Marketing Support</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Featured and Partner members receive monthly marketing content drops:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "10 ready-to-post social media posts (customize and post)",
                "Email templates for family outreach and treatment center relationships",
                "Seasonal content calendar",
                "Website optimization tips",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium italic text-muted-foreground">
              Your expertise is intervention. Let us handle the marketing.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
              <Lock className="w-4 h-4" /> Featured & Partner members
            </div>
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground mb-4">Ready to Grow?</h2>
            <Button variant="gold" size="lg" asChild>
              <Link to="/join">View Membership Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoachingPage;
