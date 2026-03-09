import { Video, MessageSquare, Users, Calendar, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const CommunityPage = () => {
  return (
    <>
      <SEO
        title="The Network Community — The Interventionist Network"
        description="Connect with fellow interventionists through monthly case consultations, a private forum, peer mentorship, and our annual summit."
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          "@type": "WebPage",
          name: "The Network Community",
          description: "Connect with fellow interventionists. Share insights. Get support.",
          url: "https://theinterventionistnetwork.com/community",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Community", item: "https://theinterventionistnetwork.com/community" },
          ],
        }}
      />

      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            The Network Community
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Connect with fellow interventionists. Share insights. Get support. You don't have to do this work alone.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {/* Case Consultation Calls */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold">Monthly Case Consultation Calls</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Join our live monthly Zoom calls where members bring challenging cases and get input from peers and network leadership. Presented by Matt Brown with guest clinicians and experienced interventionists.
            </p>
            <p className="text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 inline mr-1" /> First Wednesday of every month, 12:00 PM PT
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { tier: "Listed", detail: "Listen-only access" },
                { tier: "Featured", detail: "Full participation — ask questions and present cases" },
                { tier: "Partner", detail: "Priority case presentation + private follow-up" },
              ].map((t) => (
                <div key={t.tier} className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="font-semibold text-sm">{t.tier}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                </div>
              ))}
            </div>
            <Button variant="gold">Register for Next Call</Button>
          </div>

          {/* Private Forum */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold">Private Community Forum</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Our private community space for async discussion, case questions, and peer support. Got a tough case? Need advice on a treatment center? Looking for coverage in another state? Post it here.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Case discussion threads",
                "Treatment center reviews and recommendations",
                "Regional coverage requests",
                "Industry news and regulatory updates",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Badge variant="secondary" className="mb-4">All Members</Badge>
            <div className="mt-2">
              <Button variant="outline">Join the Community</Button>
              <p className="text-xs text-muted-foreground mt-2">Community launches Q2 2026</p>
            </div>
          </div>

          {/* Peer Mentorship */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold">Peer Mentorship Program</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Experienced members paired with newer interventionists for structured guidance and support.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Monthly check-in calls between mentor and mentee",
                "Shadow opportunities on cases (when appropriate)",
                "Structured 6-month program",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Partner members only</span>
            </div>
            <Button variant="gold">Apply for Mentorship</Button>
          </div>

          {/* Annual Summit */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold">Annual Network Summit</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Our annual gathering of network members — training, networking, case sharing, and community building.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="font-semibold">2026 Summit: Virtual — Date TBA</p>
              <p className="text-sm text-muted-foreground mt-1">Details coming soon. Partner members receive complimentary registration.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityPage;
