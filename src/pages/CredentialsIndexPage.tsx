import { Link } from "react-router-dom";
import { Award, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { credentials } from "@/data/credentials";

const CredentialsIndexPage = () => {
  return (
    <>
      <SEO
        title="Interventionist Credentials Explained"
        description="What CCMI, ARISE, CIP, CADC, LCDC, LPC, LCSW, and PhD mean — and why they matter when choosing an interventionist for your family."
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Credentials", item: "https://theinterventionistnetwork.com/credentials" },
          ],
        }}
      />

      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Interventionist <span className="text-gold">Credentials Explained</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl">
            The letters after an interventionist's name aren't just decoration. They tell you what they studied, who holds them accountable, and what they're qualified to do. Here's what each credential on our network actually means.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {credentials.map((c) => (
              <Link
                key={c.slug}
                to={`/credentials/${c.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-gold/50 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-gold shrink-0" />
                    <div>
                      <h2 className="text-lg font-bold text-primary">{c.code}</h2>
                      <p className="text-sm text-muted-foreground">{c.name}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors mt-1" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{c.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CredentialsIndexPage;