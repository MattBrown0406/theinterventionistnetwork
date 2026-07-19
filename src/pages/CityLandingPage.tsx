import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, ShieldCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import InterventionistCard from "@/components/InterventionistCard";
import { cityData } from "@/data/cityData";
import { useInterventionists } from "@/hooks/useInterventionists";

const CityLandingPage = () => {
  const { slug } = useParams();
  const city = slug ? cityData[slug] : undefined;
  const { data: interventionists = [] } = useInterventionists();

  if (!city) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <Link to="/find" className="text-gold hover:underline">Browse the directory</Link>
      </div>
    );
  }

  const localMembers = interventionists
    .filter((p) => p.states_served?.includes(city.stateAbbr) || p.states_served?.includes(city.state))
    .slice(0, 3);

  const canonical = `https://theinterventionistnetwork.com/cities/${city.slug}`;

  return (
    <>
      <SEO
        title={`${city.name} Addiction Interventionists — Vetted, Zero Referral Fees`}
        description={city.metaDescription}
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          "@type": "WebPage",
          name: `${city.name} Addiction Interventionists`,
          description: city.metaDescription,
          url: canonical,
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: city.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: city.state, item: `https://theinterventionistnetwork.com/states/${city.stateSlug}` },
            { "@type": "ListItem", position: 3, name: city.name, item: canonical },
          ],
        }}
      />

      <section className="bg-navy py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <Link to={`/states/${city.stateSlug}`} className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> {city.state} intervention resources
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-5 max-w-3xl">
            Addiction Interventionists Serving <span className="text-gold">{city.name}</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">{city.intro}</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" asChild><Link to="/help">Get Matched Now</Link></Button>
            <Button variant="hero-outline" size="lg" asChild><Link to="/find">Browse the Directory</Link></Button>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-primary-foreground/70">
            <span className="rounded-full border border-primary-foreground/15 px-3 py-1 flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-gold" />No referral fees</span>
            <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Free, confidential matching</span>
            <span className="rounded-full border border-primary-foreground/15 px-3 py-1 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gold" />{city.name} &amp; surrounding communities</span>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold">What families in {city.name} are facing</h2>
            {city.context.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Local considerations for your planning</h2>
            <div className="space-y-4">
              {city.localConsiderations.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold mb-2">A word to {city.name} families</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{city.familyGuidance}</p>
            </div>
          </div>
        </div>
      </section>

      {localMembers.length > 0 && (
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Vetted professionals serving {city.state}</h2>
              <p className="text-muted-foreground">Every member signs our <Link to="/pledge" className="text-gold hover:underline">no-referral-fee pledge</Link>.</p>
            </div>
            <div className={`grid gap-6 max-w-5xl mx-auto ${localMembers.length === 1 ? "max-w-md" : localMembers.length === 2 ? "md:grid-cols-2 max-w-3xl" : "md:grid-cols-3"}`}>
              {localMembers.map((person) => (
                <InterventionistCard key={person.slug} {...person} compact />
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild><Link to="/find">See the full directory <ArrowRight className="w-4 h-4 ml-1" /></Link></Button>
            </div>
          </div>
        </section>
      )}

      <section className="py-14 lg:py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Questions {city.name} families ask</h2>
            <div className="space-y-6">
              {city.faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-bold mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl bg-navy p-8 text-center text-primary-foreground">
              <h3 className="text-2xl font-bold mb-3">Ready to talk it through?</h3>
              <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto">
                Start a free, confidential intake and we'll match your family with a vetted professional serving the {city.name} area.
              </p>
              <Button variant="gold" size="lg" asChild><Link to="/help">Start Your Intake</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityLandingPage;
