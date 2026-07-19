import { Link } from "react-router-dom";
import { Shield, CheckCircle, DollarSign, Eye, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const pledgeItems = [
  {
    title: "No referral fees, ever",
    body: "I do not accept referral fees, commissions, kickbacks, or any compensation from treatment centers, sober living operators, laboratories, or any party with a financial stake in where a client receives care.",
  },
  {
    title: "Recommendations based on clinical fit alone",
    body: "When I help a family evaluate treatment options, my guidance is driven by clinical appropriateness, geography, finances, and family circumstances — never by any relationship that benefits me.",
  },
  {
    title: "Transparent fees, stated in writing",
    body: "Families receive my fees in writing before engagement, with a clear description of what is included. No hidden charges, no surprise add-ons mid-crisis.",
  },
  {
    title: "Honesty about scope and fit",
    body: "I decline cases outside my competence and refer families to better-suited professionals when the case calls for it — including when the right answer is a clinician, not an interventionist.",
  },
  {
    title: "Compliance with patient-brokering laws",
    body: "I understand and comply with state and federal laws governing patient brokering and referral compensation, including the Eliminating Kickbacks in Recovery Act.",
  },
  {
    title: "Confidentiality and dignity",
    body: "I protect family and client information, and I treat the person at the center of every intervention with dignity — in the room and in every conversation about them.",
  },
  {
    title: "Accountability to this network",
    body: "I understand that verified violations of this pledge result in removal from The Interventionist Network, and I welcome that standard.",
  },
];

const PledgePage = () => {
  return (
    <>
      <SEO
        title="The Network Pledge — Our Ethical Standard"
        description="Every interventionist in The Interventionist Network signs this pledge: no referral fees, no kickbacks, recommendations based on clinical fit alone. Read the full standard and how we're funded."
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          "@type": "WebPage",
          name: "The Network Pledge",
          description: "The ethical standard every member of The Interventionist Network signs.",
          url: "https://theinterventionistnetwork.com/pledge",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "The Network Pledge", item: "https://theinterventionistnetwork.com/pledge" },
          ],
        }}
      />

      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-7 h-7 text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            The Network <span className="text-gold">Pledge</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            "Zero referral fees" isn't a slogan here — it's a signed commitment. This is the standard every
            interventionist agrees to before they appear in our directory, in full, so you can hold us to it.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">What every member signs</h2>
            <div className="space-y-6">
              {pledgeItems.map((item, i) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <span className="text-gold font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How we're funded — the whole picture</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Much of the addiction referral industry runs on commissions: a "free helpline" or placement service
                collects a fee — sometimes thousands of dollars — from the treatment center it steers your loved one
                to. The family never sees that transaction, but it shapes every recommendation they receive.
              </p>
              <p>
                Our model is deliberately different, and deliberately boring. Interventionists pay a flat monthly
                membership fee to be listed in this directory. That membership fee is the network's revenue —
                alongside professional training we sell to interventionists, never to families. When your family is
                matched with a member, <span className="font-semibold text-foreground">zero dollars change hands for
                the match</span>. You engage and pay your interventionist directly, exactly as if you had found them
                on your own.
              </p>
              <p>
                No treatment center pays us. No member pays us for family leads beyond their flat membership. No one
                can buy a recommendation.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: DollarSign, text: "Members pay flat membership — not per family" },
                { icon: Eye, text: "Families pay nothing to be matched" },
                { icon: CheckCircle, text: "Treatment centers pay us nothing at all" },
              ].map((item) => (
                <div key={item.text} className="rounded-2xl border border-border bg-card p-5 text-center">
                  <item.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <AlertTriangle className="w-6 h-6 text-gold mb-3" />
              <h3 className="text-xl font-bold mb-2">See something that doesn't match this pledge?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                If any member's conduct falls short of this standard, we want to know. Every report is reviewed
                personally, and verified violations end memberships.
              </p>
              <Button variant="outline" asChild><Link to="/contact">Report a concern</Link></Button>
            </div>
            <div className="rounded-2xl bg-navy p-8 text-primary-foreground">
              <Shield className="w-6 h-6 text-gold mb-3" />
              <h3 className="text-xl font-bold mb-2">Practice to this standard?</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5">
                If you're an interventionist who already works this way, you belong here. Membership starts at
                $25/month, and the pledge is part of the application.
              </p>
              <Button variant="gold" asChild><Link to="/join">Join the Network</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PledgePage;
