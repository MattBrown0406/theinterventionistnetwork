import { useEffect, useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import InterventionistCard from "@/components/InterventionistCard";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useInterventionists } from "@/hooks/useInterventionists";
import { specialtyOptions, stateOptions } from "@/data/interventionists";

const FindPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");

  const { data: interventionists = [], isLoading } = useInterventionists();

  useEffect(() => {
    const requestedState = searchParams.get("state")?.trim();
    const requestedSpecialty = searchParams.get("specialty")?.trim();
    const requestedQuery = searchParams.get("q")?.trim();

    if (requestedState) setStateFilter(requestedState);
    if (requestedSpecialty) setSpecialtyFilter(requestedSpecialty);
    if (requestedQuery) setSearchQuery(requestedQuery);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return interventionists
      .filter((i) => {
        const stateMatch = !stateFilter || i.states_served.includes(stateFilter) || i.states_served.includes("National");
        const specialtyMatch = !specialtyFilter || i.specialties.includes(specialtyFilter);
        const queryMatch = !normalizedQuery || [
          i.name,
          i.region,
          i.credentials,
          i.bio,
          ...i.specialties,
          ...i.states_served,
        ].join(" ").toLowerCase().includes(normalizedQuery);

        return stateMatch && specialtyMatch && queryMatch;
      })
      .sort((a, b) => {
        const score = (person: typeof a) => {
          let value = 0;
          if (person.featured) value += 4;
          if (stateFilter && (person.states_served.includes(stateFilter) || person.states_served.includes("National"))) value += 3;
          if (specialtyFilter && person.specialties.includes(specialtyFilter)) value += 3;
          if (normalizedQuery) {
            const haystack = [person.name, person.region, ...person.specialties].join(" ").toLowerCase();
            if (haystack.includes(normalizedQuery)) value += 2;
          }
          if (person.offers_hourly_coaching) value += 1;
          return value;
        };

        return score(b) - score(a) || a.name.localeCompare(b.name);
      });
  }, [searchQuery, stateFilter, specialtyFilter, interventionists]);

  return (
    <>
      <SEO
        title="Find a Trusted Interventionist Near You"
        description="Search our network of vetted, certified addiction interventionists by location, specialty, and urgency. Free matching for families — no referral fees ever."
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          name: "Find a Trusted Interventionist",
          description: "Search our network of vetted addiction interventionists by location and specialty.",
          url: "https://theinterventionistnetwork.com/find",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Find an Interventionist", item: "https://theinterventionistnetwork.com/find" },
          ],
        }}
      />

      <section className="bg-navy py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Find an <span className="text-gold">Interventionist</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl">
            Search our vetted network by location, specialty, or urgency. Every professional listed has been personally reviewed.
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-[1.2]">
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Search by name, state, region, or specialty</label>
              <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Example: California, executive, adolescent, Dallas" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">State</label>
              <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                <option value="">All States</option>
                {stateOptions.filter(s => s !== "National").map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Specialty</label>
              <select value={specialtyFilter} onChange={(e) => setSpecialtyFilter(e.target.value)} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                <option value="">All Specialties</option>
                {specialtyOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" size="default" onClick={() => { setSearchQuery(""); setStateFilter(""); setSpecialtyFilter(""); }}>Clear</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Need help choosing?</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  If you are not sure who is the right fit, tell us about your situation and we will help you narrow it down based on urgency, specialty, and geography.
                </p>
              </div>
              <Button variant="gold" asChild>
                <Link to={`/help${stateFilter ? `?state=${encodeURIComponent(stateFilter)}` : ""}`}>Get Matched Now</Link>
              </Button>
            </div>
          </div>

          {(stateFilter || specialtyFilter || searchQuery) && filtered.length > 0 ? (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-gold/20 bg-gold-light/30 p-4 text-sm text-muted-foreground">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <p>
                Showing the strongest matches first based on your filters{stateFilter ? ` in ${stateFilter}` : ""}{specialtyFilter ? ` for ${specialtyFilter}` : ""}.
              </p>
            </div>
          ) : null}

          {isLoading ? (
            <p className="text-muted-foreground">Loading interventionists...</p>
          ) : filtered.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-6">{filtered.length} interventionist{filtered.length !== 1 ? "s" : ""} found</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((person) => (
                  <InterventionistCard key={person.slug} {...person} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Exact Matches Found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">Tell us about your situation and we will personally connect you with a vetted interventionist who fits your location, urgency, and needs.</p>
              <Button variant="gold" asChild><Link to={`/help${stateFilter ? `?state=${encodeURIComponent(stateFilter)}` : ""}`}>Tell Us Your Situation</Link></Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FindPage;
