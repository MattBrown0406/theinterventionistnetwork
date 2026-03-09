import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const tiers = [
  {
    name: "Listed",
    price: "$49",
    popular: false,
    features: [
      "Professional profile on TheInterventionistNetwork.com",
      "Included in family matching based on location and specialty",
      "Network member badge/seal for your website",
      "Listed in our national directory",
      "Access to member resources",
    ],
  },
  {
    name: "Featured",
    price: "$199",
    popular: true,
    features: [
      "Everything in Listed, plus:",
      "Priority placement in family matching",
      "Featured profile on homepage rotation",
      "Monthly spotlight in email newsletters (150+ families)",
      "Enhanced profile with video introduction",
      "Quarterly analytics report on profile views and inquiries",
    ],
  },
  {
    name: "Partner",
    price: "$299",
    popular: false,
    features: [
      "Everything in Featured, plus:",
      "Co-branded content opportunities",
      "Quarterly podcast guest appearance on Party Wreckers",
      "Access to lead flow dashboard",
      "Training resource library",
      "Priority support and consultation with founder",
    ],
  },
];

const JoinPage = () => {
  return (
    <>
      <SEO
        title="Join the Network — Membership for Interventionists"
        description="Join The Interventionist Network. Grow your practice with ethical, referral-fee-free membership. Tiered plans starting at $99/month."
      />
      <SchemaMarkup
        type="WebSite"
        data={{
          "@type": "WebPage",
          name: "Join The Interventionist Network",
          description: "Membership plans for certified interventionists. Grow your practice with ethical, referral-fee-free membership.",
          url: "https://theinterventionistnetwork.com/join",
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Join the Network", item: "https://theinterventionistnetwork.com/join" },
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Grow Your Practice.<br />
            <span className="text-gold">Join the Network.</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            The Interventionist Network connects you with families who need your help — through ethical, transparent, referral-fee-free membership.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Problem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most interventionists are great at helping families but terrible at marketing. You're competing against Google Ads, SEO farms, and call centers with million-dollar budgets. Meanwhile, the families who need <em>you</em> can't find you.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-warm-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Membership Includes</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-card rounded-lg p-8 border-2 relative ${
                  tier.popular ? "border-gold shadow-lg scale-[1.02]" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "gold" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Who We're Looking For</h2>
          <ul className="space-y-4 mb-8">
            {[
              "Minimum 2 years of active intervention experience (less than 2 years accepted under mentorship/endorsement of a current member)",
              "Cannot be a W-2 employee of any program or agency that would refer clients to an interventionist",
              "Personal or professional references",
              "Commitment to ethical, referral-fee-free practice",
              "Willingness to participate in vetting interview",
            ].map((req) => (
              <li key={req} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{req}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground italic text-center border-t border-border pt-6">
            We don't accept everyone. This is a curated network, not an open directory.
          </p>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            More Than Referrals — A Complete Professional Home
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            The Interventionist Network isn't just a directory. It's everything you need to grow your practice, sharpen your skills, and serve families better.
          </p>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold">Benefit</th>
                  <th className="text-center py-3 px-4 font-semibold">Listed ($49/mo)</th>
                  <th className="text-center py-3 px-4 font-semibold text-gold">Featured ($199/mo)</th>
                  <th className="text-center py-3 px-4 font-semibold">Partner ($299/mo)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Network profile & family matching", "✅", "✅ Priority", "✅ Priority"],
                  ["Verified member badge for your website", "✅", "✅", "✅"],
                  ["Private community access", "✅", "✅", "✅"],
                  ["Monthly case consultation calls", "Listen only", "Full participation", "Priority + private follow-up"],
                  ["Training library", "3 core modules", "Full library", "Full + early access"],
                  ["Marketing templates & content drops", "—", "✅ Monthly", "✅ Monthly + custom"],
                  ["Family resource library (white-label)", "—", "✅", "✅"],
                  ["Legal & insurance resources", "—", "✅", "✅"],
                  ["Peer mentorship program", "—", "—", "✅"],
                  ["Quarterly podcast guest spot", "—", "—", "✅"],
                  ["1-on-1 business coaching & scorecard", "—", "—", "✅"],
                  ["Annual Summit registration", "Pay separately", "Pay separately", "Complimentary"],
                ].map(([benefit, listed, featured, partner], i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">{benefit}</td>
                    <td className="py-3 px-4 text-center">{listed}</td>
                    <td className="py-3 px-4 text-center">{featured}</td>
                    <td className="py-3 px-4 text-center">{partner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>




      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Join?</h2>
          <Button variant="gold" size="xl" asChild>
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default JoinPage;
