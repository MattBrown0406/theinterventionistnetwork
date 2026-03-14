import { BookOpen, Lock, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useTrainingMaterials } from "@/hooks/useTrainingMaterials";

const hardcodedModules = [
  {
    title: "Foundations of Professional Intervention",
    description: "3-day comprehensive course (20 hours). Covers intervention models, family dynamics, enabling, trauma, ethics, communication, and treatment navigation.",
    tag: "Core Curriculum",
    status: "available" as const,
    access: "Featured & Partner",
  },
  {
    title: "Understanding & Addressing Enabling",
    description: "Deep dive into financial, emotional, and silence-based enabling. How to help families recognize and change enabling patterns.",
    tag: "Family Dynamics",
    status: "available" as const,
    access: "All Members",
  },
  {
    title: "Ethical Standards & Patient Brokering Laws",
    description: "State and federal patient brokering regulations, professional boundary guidelines, and ethical decision-making framework.",
    tag: "Ethics & Compliance",
    status: "available" as const,
    access: "All Members",
  },
  {
    title: "Intervention Models: Choosing the Right Approach",
    description: "Johnson, Love First, ARISE, CRAFT, CCMI comparison. When to use surprise vs. invitational models. Matching models to family dynamics.",
    tag: "Core Curriculum",
    status: "available" as const,
    access: "Featured & Partner",
  },
  {
    title: "Navigating Fentanyl & High-Acuity Cases",
    description: "The changing drug landscape, safety considerations for fentanyl-involved interventions, and working with families facing life-or-death urgency.",
    tag: "Advanced",
    status: "coming-soon" as const,
    access: "Featured & Partner",
  },
  {
    title: "Adolescent Intervention Strategies",
    description: "Unique considerations for minors, working with parents in conflict, and legal and ethical considerations for adolescents.",
    tag: "Specialty",
    status: "coming-soon" as const,
    access: "Featured & Partner",
  },
  {
    title: "Executive & Professional Interventions",
    description: "Confidentiality and reputation management, high-functioning denial patterns, and navigating corporate dynamics.",
    tag: "Specialty",
    status: "coming-soon" as const,
    access: "Partner (Early Access)",
  },
  {
    title: "Co-Occurring Disorders: When Mental Health Complicates Addiction",
    description: "Dual diagnosis considerations, treatment matching for complex cases, and when intervention is NOT appropriate.",
    tag: "Advanced",
    status: "coming-soon" as const,
    access: "Partner (Early Access)",
  },
];

const tagColors: Record<string, string> = {
  "Core Curriculum": "bg-primary text-primary-foreground",
  "Family Dynamics": "bg-accent/20 text-accent-foreground",
  "Ethics & Compliance": "bg-gold/20 text-gold-foreground",
  Advanced: "bg-destructive/10 text-destructive",
  Specialty: "bg-secondary text-secondary-foreground",
};

const TrainingPage = () => {
  const { data: dbMaterials = [] } = useTrainingMaterials();

  // Use DB materials if any exist, otherwise fall back to hardcoded
  const modules = dbMaterials.length > 0
    ? dbMaterials.map((m) => ({
        title: m.title,
        description: m.description,
        tag: m.tag,
        status: m.status as "available" | "coming-soon",
        access: m.access_tier,
      }))
    : hardcodedModules;

  return (
    <>
      <SEO
        title="Professional Training Library — The Interventionist Network"
        description="On-demand training modules for addiction interventionists. Courses on intervention models, ethics, family dynamics, and advanced clinical topics."
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          "@type": "WebPage",
          name: "Professional Training Library",
          description: "On-demand training modules for addiction interventionists.",
          url: "https://theinterventionistnetwork.com/training",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Training Library", item: "https://theinterventionistnetwork.com/training" },
          ],
        }}
      />

      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Professional Training Library
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            On-demand training modules built from 20+ years of intervention experience. New content added monthly.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((mod, i) => (
              <div
                key={i}
                className={`bg-card rounded-lg border border-border p-6 flex flex-col ${
                  mod.status === "coming-soon" ? "opacity-80" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColors[mod.tag] || "bg-muted text-muted-foreground"}`}>
                    {mod.tag}
                  </span>
                  {mod.status === "coming-soon" && (
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" /> Coming Soon
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2">{mod.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{mod.description}</p>
                <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                  {mod.access === "All Members" ? (
                    <BookOpen className="w-3.5 h-3.5 text-gold" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                  )}
                  <span>{mod.access}</span>
                </div>
                {mod.status === "available" ? (
                  <Button variant={mod.access === "All Members" ? "gold" : "outline"} size="sm" className="w-full">
                    <Play className="w-4 h-4 mr-1" /> Watch Now
                  </Button>
                ) : (
                  <Button variant="secondary" size="sm" className="w-full" disabled>
                    Coming Soon
                  </Button>
                )}
                {mod.access !== "All Members" && (
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    <Lock className="w-3 h-3 inline mr-1" /> Upgrade to unlock
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingPage;
