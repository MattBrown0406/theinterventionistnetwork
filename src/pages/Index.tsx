import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import InterventionistCard from "@/components/InterventionistCard";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useInterventionists } from "@/hooks/useInterventionists";

const Index = () => {
  const { data: interventionists = [] } = useInterventionists();
  const featured = interventionists.filter((i) => i.featured);

  return (
    <>
      <SEO
        title="The Interventionist Network — Trusted Interventionists. Zero Referral Fees."
        description="Find a vetted addiction interventionist near you. The Interventionist Network connects families with trusted professionals across all 50 states. No referral fees."
        ogImage="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/57ed7768-0c2d-41b5-8041-faa8e7f53e1e/id-preview-f2d64247--0aadcb95-54e1-425c-844a-1c75de9e4f26.lovable.app-1773007231761.png"
      />
      <SchemaMarkup type="Organization" data={{
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://theinterventionistnetwork.com/#organization",
            name: "The Interventionist Network",
            url: "https://theinterventionistnetwork.com",
            logo: "https://theinterventionistnetwork.com/logo.png",
            description: "A curated national network of vetted addiction interventionists. Zero referral fees.",
            founder: { "@type": "Person", name: "Matt Brown" },
            contactPoint: { "@type": "ContactPoint", telephone: "+1-541-838-6009", contactType: "customer service" },
            sameAs: [],
          },
          {
            "@type": "WebSite",
            "@id": "https://theinterventionistnetwork.com/#website",
            name: "The Interventionist Network",
            url: "https://theinterventionistnetwork.com",
            publisher: { "@id": "https://theinterventionistnetwork.com/#organization" },
            potentialAction: { "@type": "SearchAction", target: "https://theinterventionistnetwork.com/find?q={search_term_string}", "query-input": "required name=search_term_string" },
          },
        ],
      }} />

      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Find a Trusted<br /><span className="text-gold">Interventionist</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every interventionist in our network is personally vetted. No referral fees. No kickbacks. Just families connected with professionals who can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild><Link to="/help">Get Matched Now</Link></Button>
              <Button variant="hero-outline" size="xl" asChild><Link to="/find">Browse Vetted Interventionists</Link></Button>
            </div>
+            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-primary-foreground/70">
+              <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Free and confidential</span>
+              <span className="rounded-full border border-primary-foreground/15 px-3 py-1">No referral fees</span>
+              <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Crisis situations prioritized</span>
+            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Three simple steps to connect your family with a vetted professional.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Tell Us About Your Situation", desc: "A brief intake form captures your location, the substance or behavior involved, and how urgent the situation is." },
              { step: "02", title: "We Match You With Vetted Professionals", desc: "We review your needs and connect you with 1-2 interventionists based on geography, specialty, urgency, and fit." },
              { step: "03", title: "Your Family Gets Help", desc: "Direct connection with your matched interventionist. No middleman fees. No commissions. Just practical help." },
            ].map((item) => (
              <div key={item.step} className="bg-card rounded-lg p-8 text-center relative">
                <div className="text-5xl font-black text-gold/20 absolute top-4 right-4">{item.step}</div>
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="gold" size="lg" asChild><Link to="/help">Start Your Confidential Intake <ArrowRight className="w-4 h-4 ml-1" /></Link></Button>
          </div>
        </div>
      </section>

      {/* Why TIN */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why The Interventionist Network</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Zero Referral Fees", desc: "We believe families in crisis shouldn't be a revenue source for referral brokers. Our interventionists pay a membership fee to be part of the network. That's it. No fees change hands when your family gets help." },
              { icon: CheckCircle, title: "Personally Vetted", desc: "Every interventionist is reviewed by our founder, a 20+ year veteran of the field. We check credentials, interview them, verify experience, and confirm ethical standards." },
              { icon: MapPin, title: "National Coverage", desc: "Interventionists across all 50 states, with specialties ranging from substance use to process addictions, adolescents to executives." },
              { icon: Users, title: "The Ethical Standard", desc: "In an industry plagued by patient brokering and kickback culture, we operate differently. Our model is simple: professionals pay for visibility, families pay nothing to be matched." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0"><item.icon className="w-6 h-6 text-gold" /></div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Interventionists */}
      {featured.length > 0 && (
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Interventionists</h2>
              <p className="text-muted-foreground text-lg">Trusted professionals ready to help your family.</p>
            </div>
            <div className={`grid gap-6 max-w-6xl mx-auto ${featured.length === 1 ? "max-w-md" : featured.length === 2 ? "md:grid-cols-2 max-w-3xl" : featured.length === 3 ? "md:grid-cols-3 max-w-5xl" : "md:grid-cols-2 lg:grid-cols-4"}`}>
              {featured.map((person) => (
                <InterventionistCard key={person.slug} {...person} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" size="lg" asChild><Link to="/find">View Full Network</Link></Button>
            </div>
          </div>
        </section>
      )}


      {/* CTA Banner */}
      <section className="bg-warm-gray py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold">Families first</p>
              <h2 className="mt-2 text-3xl font-bold">Not sure where to start?</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Start with the intake. We will review urgency, geography, and specialty fit, then help your family get to the right interventionist fast.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="lg" asChild><Link to="/help">Get Matched Now</Link></Button>
                <Button variant="outline" size="lg" asChild><Link to="/find">Browse the Network</Link></Button>
              </div>
            </div>
            <div className="rounded-2xl bg-navy p-6 text-left text-primary-foreground">
              <h3 className="text-xl font-bold">Are you an interventionist?</h3>
              <p className="mt-3 text-primary-foreground/70">
                Join the only professional network with zero referral fees. Membership starts at $49/month.
              </p>
              <Button variant="gold" size="lg" asChild className="mt-6"><Link to="/apply">Apply for Membership</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
