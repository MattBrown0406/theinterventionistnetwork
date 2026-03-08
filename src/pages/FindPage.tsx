import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import InterventionistCard from "@/components/InterventionistCard";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useInterventionists } from "@/hooks/useInterventionists";
import { specialtyOptions, stateOptions } from "@/data/interventionists";

const FindPage = () => {
  const [stateFilter, setStateFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [urgencyFilter, setUrgencyFilter] = useState("");
  const { data: interventionists = [], isLoading } = useInterventionists();

  const filtered = useMemo(() => {
    return interventionists.filter((i) => {
      if (stateFilter && !i.states_served.includes(stateFilter) && !i.states_served.includes("National")) return false;
      if (specialtyFilter && !i.specialties.includes(specialtyFilter)) return false;
      return true;
    });
  }, [stateFilter, specialtyFilter, interventionists]);

  return (
    <>
      <SEO
        title="Find a Vetted Interventionist Near You"
        description="Search our network of personally vetted addiction interventionists by location, specialty, and urgency. No referral fees. Serving all 50 states."
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
            <div className="flex-1">
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Urgency</label>
              <select value={urgencyFilter} onChange={(e) => setUrgencyFilter(e.target.value)} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                <option value="">Any Urgency</option>
                <option value="crisis">Immediate / Crisis</option>
                <option value="week">Within a Week</option>
                <option value="planning">Planning Ahead</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" size="default" onClick={() => { setStateFilter(""); setSpecialtyFilter(""); setUrgencyFilter(""); }}>Clear</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
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
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">Tell us about your situation and we'll personally connect you with a vetted interventionist.</p>
              <Button variant="gold" asChild><Link to="/help">Tell Us Your Situation</Link></Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FindPage;
