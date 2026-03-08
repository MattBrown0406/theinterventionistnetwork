import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import mattBrownPhoto from "@/assets/matt-brown.jpg";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About The Interventionist Network — Our Mission"
        description="Founded by Matt Brown, a 20+ year veteran interventionist. Learn why The Interventionist Network operates without referral fees and how we vet every professional."
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://theinterventionistnetwork.com/about" },
          ],
        }}
      />

      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About <span className="text-gold">The Network</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            Built by an interventionist, for interventionists — and for the families who need them.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden">
                <img src={mattBrownPhoto} alt="Matt Brown — Founder of The Interventionist Network" className="w-full object-cover" />
              </div>
              <div className="text-center mt-4">
                <p className="font-bold text-lg">Matt Brown</p>
                <p className="text-sm text-muted-foreground">Founder, CIP</p>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">The Story Behind the Network</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>I started The Interventionist Network because I was tired of watching families fall through the cracks.</p>
                <p>After 20+ years as an addiction interventionist and 22 years of personal recovery, I've seen everything this industry has to offer — the good and the bad. I can only take so many cases myself. But I know dozens of interventionists across the country who are just as dedicated as I am.</p>
                <p>The problem? Families can't find them. They call hotlines that route to whoever pays the highest referral fee. They Google "interventionist near me" and find SEO farms. They get shuffled through call centers where the "counselor" is actually a commission-based salesperson.</p>
                <p>This network fixes that — without the referral fees and kickbacks that plague our industry.</p>
                <p>Every interventionist in our network is someone I'd trust with my own family. That's the standard. That's the only standard that matters.</p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline font-medium">Freedom Interventions →</a>
                <a href="https://soberhelpline.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline font-medium">Sober Helpline →</a>
                <span className="text-sm text-gold font-medium">Party Wreckers Podcast →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-warm-gray">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Standards</h2>
          <div className="space-y-6 text-left">
            {[
              { title: "Personal Vetting", desc: "Every interventionist is interviewed by our founder. We verify credentials, check references, confirm experience, and assess ethical standards. No shortcuts." },
              { title: "Zero Referral Fees", desc: "Our members pay a flat monthly membership. When a family is matched with an interventionist, no fees change hands. Period. This eliminates the financial conflicts that corrupt the referral process." },
              { title: "Ongoing Accountability", desc: "Membership is not forever. We monitor feedback, review outcomes, and hold members to the ethical standards they agreed to. If someone doesn't meet our standards, they're removed." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Need Help?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild><Link to="/help">Find an Interventionist</Link></Button>
            <Button variant="hero-outline" size="lg" asChild><Link to="/join">Join the Network</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
