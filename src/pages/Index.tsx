import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import InterventionistCard from "@/components/InterventionistCard";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { interventionists } from "@/data/interventionists";

const Index = () => {
  const featured = interventionists.filter((i) => i.featured);

  return (
    <>
      <SEO
        title="Find a Trusted Interventionist — The Interventionist Network"
        description="The Interventionist Network connects families with vetted addiction interventionists across all 50 states. Zero referral fees. Zero kickbacks. Just trusted professionals who can help."
      />
      <SchemaMarkup
        type="Organization"
        data={{
          name: "The Interventionist Network",
          url: "https://theinterventionistnetwork.com",
          description: "A vetted national network of addiction interventionists with zero referral fees.",
          founder: { "@type": "Person", name: "Matt Brown" },
          telephone: "(541) 838-6009",
          email: "matt@theinterventionnetwork.com",
        }}
      />
      <SchemaMarkup
        type="WebSite"
        data={{
          name: "The Interventionist Network",
          url: "https://theinterventionistnetwork.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://theinterventionistnetwork.com/find?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Find a Trusted<br />
              <span className="text-gold">Interventionist</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl leading-relaxed">
              Every interventionist in our network is personally vetted. No referral fees. No kickbacks. Just families connected with professionals who can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/find">Find an Interventionist</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/join">Join the Network</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three simple steps to connect your family with a vetted professional.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Tell Us About Your Situation",
                desc: "A brief intake form captures your location, the substance or behavior involved, and how urgent the situation is.",
              },
              {
                step: "02",
                title: "We Match You With Vetted Professionals",
                desc: "We review your needs and connect you with 1-2 interventionists based on geography, specialty, and fit.",
              },
              {
                step: "03",
                title: "Your Family Gets Help",
                desc: "Direct connection with your matched interventionist. No middleman fees. No commissions. Just help.",
              },
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
            <Button variant="gold" size="lg" asChild>
              <Link to="/help">
                Get Matched Now <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why TIN */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why The Interventionist Network</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Zero Referral Fees",
                desc: "We believe families in crisis shouldn't be a revenue source for referral brokers. Our interventionists pay a membership fee to be part of the network. That's it. No fees change hands when your family gets help.",
              },
              {
                icon: CheckCircle,
                title: "Personally Vetted",
                desc: "Every interventionist is reviewed by our founder, a 20+ year veteran of the field. We check credentials, interview them, verify experience, and confirm ethical standards.",
              },
              {
                icon: MapPin,
                title: "National Coverage",
                desc: "Interventionists across all 50 states, with specialties ranging from substance use to process addictions, adolescents to executives.",
              },
              {
                icon: Users,
                title: "The Ethical Standard",
                desc: "In an industry plagued by patient brokering and kickback culture, we operate differently. Our model is simple: professionals pay for visibility, families pay nothing to be matched.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
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
      <section className="py-16 lg:py-24 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Interventionists</h2>
            <p className="text-muted-foreground text-lg">Trusted professionals ready to help your family.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featured.map((person) => (
              <InterventionistCard key={person.slug} {...person} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/find">View Full Network</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Families Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "We were desperate and didn't know where to turn. The Interventionist Network connected us with someone who truly understood our situation. Our son is now 18 months sober.",
                name: "Jennifer M.",
                state: "Florida",
              },
              {
                quote: "No one tried to sell us anything. No hidden fees. Just a compassionate professional who helped our family take the hardest step we've ever had to take.",
                name: "Robert T.",
                state: "California",
              },
              {
                quote: "After calling three other services that all felt like sales calls, we found The Intervention Network. The difference was immediate. They actually listened.",
                name: "Susan K.",
                state: "Ohio",
              },
            ].map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-lg p-6">
                <div className="text-gold text-3xl mb-3">"</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.quote}</p>
                <div className="text-sm font-semibold">
                  {t.name} <span className="text-muted-foreground font-normal">— {t.state}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Are You a Certified Interventionist?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Join the only professional network with zero referral fees. Membership starts at $199/month.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/apply">Apply for Membership</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
