import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, AlertTriangle, Users, Phone, ExternalLink, Check, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { stateData } from "@/data/stateData";
import NotFound from "./NotFound";

const StateLandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const state = slug ? stateData[slug] : undefined;

  if (!state) return <NotFound />;

  const faqItems = [
    {
      question: `How do I find an interventionist in ${state.name}?`,
      answer: `The Interventionist Network connects ${state.name} families with vetted, certified addiction interventionists. Use our free matching service — tell us about your situation and we'll connect you with a professional who serves ${state.name}. No referral fees, no kickbacks.`,
    },
    {
      question: `What does addiction intervention cost in ${state.name}?`,
      answer: `Intervention costs vary based on complexity, travel, and duration. Most professional interventions range from $2,500 to $15,000+. The Interventionist Network connects you directly with interventionists — we never charge referral fees, and our members are committed to transparent pricing.`,
    },
    {
      question: `What are the most commonly abused substances in ${state.name}?`,
      answer: `The primary substances of concern in ${state.name} include ${state.primarySubstances.join(", ")}. ${state.substanceDetails.split(". ").slice(0, 2).join(". ")}.`,
    },
    {
      question: `How many people die from overdoses in ${state.name} each year?`,
      answer: `${state.name} experiences approximately ${state.overdoseDeathsAnnual} overdose deaths annually, a rate of ${state.overdoseRatePer100k} per 100,000 residents. ${state.keyStats[0]}.`,
    },
  ];

  return (
    <>
      <SEO
        title={`Find an Interventionist in ${state.name} — Addiction Help`}
        description={`Find vetted addiction interventionists in ${state.name}. ${state.overdoseDeathsAnnual} overdose deaths annually. Free family matching — no referral fees. Get help today.`}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: `${state.name} Interventionists`, item: `https://theinterventionistnetwork.com/states/${state.slug}` },
          ],
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />

      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-gold mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">{state.name} ({state.abbreviation})</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Find an Interventionist in{" "}
            <span className="text-gold">{state.name}</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-3xl mb-8">
            {state.overview.split(". ").slice(0, 2).join(". ")}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to={`/help?state=${encodeURIComponent(state.name)}`}>Get Matched With an Interventionist</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to={`/find?state=${encodeURIComponent(state.name)}`}>Browse Our Directory</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-warm-gray border-b border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">{state.overdoseDeathsAnnual}</div>
              <div className="text-xs text-muted-foreground mt-1">Annual Overdose Deaths</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">{state.overdoseRatePer100k}</div>
              <div className="text-xs text-muted-foreground mt-1">Deaths per 100K</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">{state.sudPrevalence}</div>
              <div className="text-xs text-muted-foreground mt-1">SUD Prevalence</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">{state.population}</div>
              <div className="text-xs text-muted-foreground mt-1">Population</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            The Addiction Crisis in {state.name}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{state.overview}</p>

          <div className="bg-warm-gray rounded-lg p-6 mb-8">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-gold" />
              Key Statistics
            </h3>
            <ul className="space-y-3">
              {state.keyStats.map((stat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-muted-foreground text-sm">{stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Substances */}
      <section className="py-16 lg:py-20 bg-warm-gray">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Primary Substances of Concern in {state.name}
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {state.primarySubstances.map((s) => (
              <span key={s} className="bg-navy text-primary-foreground text-sm px-4 py-1.5 rounded-full font-medium">{s}</span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">{state.substanceDetails}</p>
          <div className="bg-card rounded-lg p-6 border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Treatment Gap:</strong> {state.treatmentGap}.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong className="text-foreground">Naloxone Access:</strong> {state.naloxoneAccess}.
            </p>
          </div>
        </div>
      </section>

      {/* Family Guidance */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Guidance for {state.name} Families
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{state.familyGuidance}</p>
          <p className="text-muted-foreground leading-relaxed mb-8">{state.interventionContext}</p>
          <Button variant="gold" size="lg" asChild>
            <Link to={`/help?state=${encodeURIComponent(state.name)}`} className="inline-flex items-center gap-2">
              Tell Us Your Situation <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-warm-gray">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Questions — {state.name}
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold mb-2">{item.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {state.name} Addiction Resources
          </h2>
          <div className="grid gap-4">
            {state.resources.map((r, i) => (
              <div key={i} className="bg-warm-gray rounded-lg p-5 flex items-start gap-4">
                <ExternalLink className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm">{r.name}</h3>
                  <p className="text-sm text-muted-foreground">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-3">
            Need Help in {state.name}?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-6">
            We'll connect you with a vetted, certified interventionist who serves {state.name}. No referral fees. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to={`/help?state=${encodeURIComponent(state.name)}`}>Get Free Family Matching</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:5418386009" className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> (541) 838-6009
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StateLandingPage;
