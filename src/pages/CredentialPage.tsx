import { Link, useParams } from "react-router-dom";
import { Award, ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { getCredentialBySlug } from "@/data/credentials";

const CredentialPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const credential = slug ? getCredentialBySlug(slug) : undefined;

  if (!credential) {
    return (
      <>
        <SEO title="Credential not found" description="The requested credential page could not be found." noindex />
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h1 className="text-2xl font-bold mb-3">Credential not found</h1>
            <p className="text-muted-foreground mb-6">We don't have a page for that credential yet.</p>
            <Button asChild variant="gold"><Link to="/credentials">See all credentials</Link></Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${credential.code} — ${credential.name}`}
        description={credential.shortDescription}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Credentials", item: "https://theinterventionistnetwork.com/credentials" },
            { "@type": "ListItem", position: 3, name: credential.code, item: `https://theinterventionistnetwork.com/credentials/${credential.slug}` },
          ],
        }}
      />

      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/credentials" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" /> All credentials
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Award className="h-7 w-7 text-gold" />
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              {credential.code} <span className="text-gold">— {credential.name}</span>
            </h1>
          </div>
          <p className="text-primary-foreground/70 max-w-3xl">{credential.shortDescription}</p>
          <p className="text-xs uppercase tracking-wide text-primary-foreground/50 mt-4">
            Issued by {credential.issuingBody}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">
          <div>
            <h2 className="text-xl font-bold mb-3">What it is</h2>
            <p className="text-muted-foreground leading-relaxed">{credential.whatItIs}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">What's required to earn it</h2>
            <ul className="space-y-2">
              {credential.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Why it matters</h2>
            <p className="text-muted-foreground leading-relaxed">{credential.whyItMatters}</p>
          </div>

          {credential.learnMoreUrl && (
            <div>
              <a
                href={credential.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
              >
                Learn more from the issuing body
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}

          <div className="rounded-2xl border border-border bg-warm-gray p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold">Looking for an interventionist with this credential?</p>
              <p className="text-sm text-muted-foreground mt-1">Browse our vetted national network.</p>
            </div>
            <Button asChild variant="gold"><Link to="/find">Browse Interventionists</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CredentialPage;