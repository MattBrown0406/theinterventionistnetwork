import { Shield } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const BadgePage = () => {
  return (
    <>
      <SEO
        title="Verified Member Badge — The Interventionist Network"
        description="Show families you're vetted and trusted. Every member receives a verification badge for their website."
      />
      <SchemaMarkup
        type="WebPage"
        data={{
          "@type": "WebPage",
          name: "Verified Member Badge",
          description: "Show families you're vetted and trusted with the Verified Member badge.",
          url: "https://theinterventionistnetwork.com/badge",
          isPartOf: { "@id": "https://theinterventionistnetwork.com/#website" },
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://theinterventionistnetwork.com" },
            { "@type": "ListItem", position: 2, name: "Verified Member Badge", item: "https://theinterventionistnetwork.com/badge" },
          ],
        }}
      />

      <section className="bg-navy py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Verified Member Badge
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Show families you're vetted and trusted.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground mb-8">
              Every member of The Interventionist Network receives a verification badge for their website. When families see this badge, they know you've been personally vetted for credentials, experience, and ethical standards.
            </p>

            {/* Badge SVG */}
            <div className="flex justify-center mb-8">
              <svg width="200" height="240" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shield shape */}
                <path d="M100 10 L185 45 L185 130 C185 175 150 210 100 230 C50 210 15 175 15 130 L15 45 Z" fill="hsl(215, 50%, 20%)" stroke="hsl(32, 88%, 52%)" strokeWidth="4" />
                {/* Inner shield */}
                <path d="M100 30 L170 58 L170 128 C170 165 142 195 100 212 C58 195 30 165 30 128 L30 58 Z" fill="hsl(215, 55%, 14%)" />
                {/* Shield icon */}
                <g transform="translate(75, 60)">
                  <path d="M25 2 L45 12 L45 28 C45 40 37 50 25 55 C13 50 5 40 5 28 L5 12 Z" fill="none" stroke="hsl(32, 88%, 52%)" strokeWidth="2.5" />
                  <path d="M18 28 L23 33 L33 23" fill="none" stroke="hsl(32, 88%, 52%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                {/* Text */}
                <text x="100" y="148" textAnchor="middle" fill="hsl(32, 88%, 52%)" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">VERIFIED MEMBER</text>
                <text x="100" y="168" textAnchor="middle" fill="hsl(0, 0%, 100%)" fontSize="7.5" fontWeight="500" fontFamily="Inter, sans-serif">THE INTERVENTIONIST</text>
                <text x="100" y="180" textAnchor="middle" fill="hsl(0, 0%, 100%)" fontSize="7.5" fontWeight="500" fontFamily="Inter, sans-serif">NETWORK</text>
                {/* Stars */}
                <circle cx="60" cy="195" r="2" fill="hsl(32, 88%, 52%)" />
                <circle cx="100" cy="200" r="2" fill="hsl(32, 88%, 52%)" />
                <circle cx="140" cy="195" r="2" fill="hsl(32, 88%, 52%)" />
              </svg>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">How to Add the Badge to Your Website</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-3">
                  Copy and paste the following HTML snippet into your website's sidebar, footer, or about page:
                </p>
                <pre className="bg-card border border-border rounded p-4 text-xs overflow-x-auto">
{`<a href="https://theinterventionistnetwork.com/verify"
   target="_blank" rel="noopener">
  <img src="https://theinterventionistnetwork.com/badge.png"
       alt="Verified Member — The Interventionist Network"
       width="150" />
</a>`}
                </pre>
                <p className="text-xs text-muted-foreground mt-3">
                  Badge image and detailed instructions will be provided upon membership approval.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Badge Verification</h2>
              <p className="text-muted-foreground">
                Families can verify your membership at{" "}
                <span className="font-medium text-foreground">theinterventionistnetwork.com/verify</span>.
                Your verification page confirms your name, credentials, and active membership status.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BadgePage;
