import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Award, ArrowLeft, Phone, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useInterventionist } from "@/hooks/useInterventionists";

const InterventionistProfile = () => {
  const { slug } = useParams();
  const { data: person, isLoading } = useInterventionist(slug);
  const helpHref = useMemo(() => {
    if (!person) return "/help";
    return `/help?interventionist=${encodeURIComponent(person.slug)}`;
  }, [person]);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-24 text-center"><p className="text-muted-foreground">Loading...</p></div>;
  }

  if (!person) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Interventionist Not Found</h1>
        <Button variant="outline" asChild><Link to="/find">Back to Network</Link></Button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${person.name}, ${person.credentials}`}
        description={`${person.name} is a vetted member of The Interventionist Network serving ${person.region}. ${person.years_experience} years of experience specializing in ${person.specialties.slice(0, 3).join(", ")}.`}
        ogType="profile"
      />
      <SchemaMarkup type="ProfessionalService" data={{
        name: person.name,
        description: person.bio,
        url: `https://theinterventionistnetwork.com/interventionist/${person.slug}`,
        areaServed: person.states_served,
        hasCredential: person.certifications,
        memberOf: { "@type": "Organization", name: "The Interventionist Network" },
      }} />
      <SchemaMarkup type="BreadcrumbList" data={{ itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
        { "@type": "ListItem", position: 2, name: "Find an Interventionist", item: "https://theinterventionistnetwork.com/find" },
        { "@type": "ListItem", position: 3, name: person.name, item: `https://theinterventionistnetwork.com/interventionist/${person.slug}` },
      ] }} />

      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <Link to="/find" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Network
          </Link>
          <div className="flex items-start gap-6">
            {person.photo_url ? (
              <img src={person.photo_url} alt={person.name} className="w-24 h-24 rounded-full object-cover shrink-0 border-2 border-gold/30" />
            ) : (
              <div className="w-24 h-24 rounded-full bg-navy-light flex items-center justify-center text-primary-foreground text-2xl font-bold shrink-0 border-2 border-gold/30">
                {person.name.split(" ").map((n) => n[0]).join("")}
              </div>
            )}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">{person.name}</h1>
              <p className="text-gold text-lg font-medium mt-1">{person.credentials}</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-primary-foreground/60">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{person.region}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{person.years_experience}+ years</span>
                <span className="flex items-center gap-1"><Award className="w-4 h-4" />Vetted Member</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-3">About</h2>
                {person.full_bio.split("\n\n").map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
                ))}
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">Approach & Philosophy</h2>
                <p className="text-muted-foreground leading-relaxed">{person.approach}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">Certifications & Training</h2>
                <ul className="space-y-2">
                  {person.certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-muted-foreground">
                      <Award className="w-4 h-4 text-gold shrink-0" />{cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-warm-gray rounded-lg p-6">
                <h3 className="font-bold mb-2">Request a Match With {person.name.split(" ")[0]}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Prefer this interventionist? We will carry that preference into your intake so we can review fit faster.
                </p>
                <div className="space-y-3 mb-6">
                  {person.phone && <a href={`tel:${person.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"><Phone className="w-4 h-4" />{person.phone}</a>}
                  {person.email && <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"><Mail className="w-4 h-4" />{person.email}</a>}
                  {person.website && <a href={person.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"><Globe className="w-4 h-4" />Website</a>}
                </div>
                <Button variant="gold" className="w-full" asChild><Link to={helpHref}>Request a Match</Link></Button>
              </div>
              <div className="bg-warm-gray rounded-lg p-6">
                <h3 className="font-bold mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {person.specialties.map((s) => <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-gold-light text-gold-foreground font-medium">{s}</span>)}
                </div>
              </div>
              <div className="bg-warm-gray rounded-lg p-6">
                <h3 className="font-bold mb-3">States Served</h3>
                <p className="text-sm text-muted-foreground">{person.states_served.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterventionistProfile;
