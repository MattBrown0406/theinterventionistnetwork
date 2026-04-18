import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, MapPin, CheckCircle, ArrowRight, BadgeCheck, PhoneCall } from "lucide-react";
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
        ogImage="https://theinterventionistnetwork.com/logo.png"
        ogImageAlt="The Interventionist Network logo"
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
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-primary-foreground/70">
              <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Free and confidential</span>
              <span className="rounded-full border border-primary-foreground/15 px-3 py-1">No referral fees</span>
              <span className="rounded-full border border-primary-foreground/15 px-3 py-1">Crisis situations prioritized</span>
            </div>
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
              { icon: Shield, title: "Zero Referral Fees", desc: "We believe families in crisis shouldn't be a revenue source for referral brokers. Our interventionists pay a membership fee to be part of the network. That's it. No fees change hands when your family gets help. If you decide to hire an interventionist, that agreement is strictly between you and the interventionist you choose." },
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

      <section className="py-16 lg:py-24 bg-warm-gray/60">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-border bg-card p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold">Founded by Matt Brown</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Built by an interventionist who knows the stakes</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Matt Brown has more than 20 years of intervention experience and more than two decades in personal recovery. Every interventionist in the network is reviewed against the standard he would trust with his own family.
              </p>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>Personally vetted professionals, not call-center referrals.</p>
                </div>
                <div className="flex gap-3">
                  <Shield className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>No referral fees, no kickbacks, and no pay-to-play family matching.</p>
                </div>
                <div className="flex gap-3">
                  <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>If the situation is urgent, families can call directly instead of waiting on a generic lead form.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="lg" asChild><Link to="/about">Why Matt Built This</Link></Button>
                <Button variant="outline" size="lg" asChild><Link to="/help">Start Your Intake</Link></Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { stat: '20+ years', label: 'intervention experience' },
                { stat: '22+ years', label: 'personal recovery' },
                { stat: '50 states', label: 'national reach' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-warm-gray p-5">
                  <p className="text-2xl font-bold text-foreground">{item.stat}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-warm-gray/60 p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-gold">Explore by location or question</p>
                <h2 className="mt-2 text-3xl font-bold">Popular starting points for families</h2>
                <p className="mt-3 text-muted-foreground">
                  Some families need a vetted professional near them. Others need straight answers first. These pages help both discovery and SEO without making people dig.
                </p>
              </div>
              <Button variant="outline" asChild><Link to="/faq">Read intervention FAQs</Link></Button>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { title: 'California interventionists', to: '/states/california', desc: 'High-demand state page with location-specific help and substance context.' },
                { title: 'Florida interventionists', to: '/states/florida', desc: 'Strong search intent and frequent family urgency.' },
                { title: 'Texas interventionists', to: '/states/texas', desc: 'Large market with broad geography and high family search volume.' },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  <p className="mt-4 text-sm font-medium text-gold">Open page</p>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link to="/find" className="font-medium text-gold hover:underline">Browse all interventionists</Link>
              <Link to="/help" className="font-medium text-gold hover:underline">Start a confidential intake</Link>
              <Link to="/about" className="font-medium text-gold hover:underline">See how the network is vetted</Link>
            </div>
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
