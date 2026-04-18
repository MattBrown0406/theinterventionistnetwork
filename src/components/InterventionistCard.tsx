import { Link } from "react-router-dom";
import { MapPin, Award, Clock, ShieldCheck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InterventionistCardProps {
  slug: string;
  name: string;
  credentials: string;
  region: string;
  specialties: string[];
  years_experience: number;
  bio: string;
  quote?: string | null;
  photo_url?: string | null;
  compact?: boolean;
  offers_hourly_coaching?: boolean;
  featured?: boolean;
  no_referral_fees?: boolean | null;
}

const InterventionistCard = ({
  slug,
  name,
  credentials,
  region,
  specialties,
  years_experience,
  bio,
  quote,
  photo_url,
  compact = false,
  offers_hourly_coaching = false,
  featured = false,
  no_referral_fees = true,
}: InterventionistCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        {photo_url ? (
          <img src={photo_url} alt={name} className="w-16 h-16 rounded-full object-cover shrink-0" />
        ) : (
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-xl font-bold shrink-0">
            {name.split(" ").map((n) => n[0]).join("")}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="font-bold text-primary text-lg leading-tight">{name}</h3>
          <p className="text-sm text-gold font-medium">{credentials}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
        {featured && <span className="flex items-center gap-1 text-gold font-semibold"><BadgeCheck className="w-3.5 h-3.5" />Featured</span>}
        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{region}</span>
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{years_experience}+ years</span>
        <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5" />Vetted</span>
        {no_referral_fees !== false && <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" />No referral fees</span>}
        {offers_hourly_coaching && (
          <span className="flex items-center gap-1 text-gold font-medium"><Clock className="w-3.5 h-3.5" />Hourly Coaching</span>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {specialties.length > 3 && <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">+{specialties.length - 3} more</span>}
        {specialties.slice(0, 3).map((spec) => (
          <span key={spec} className="text-xs px-2 py-0.5 rounded-full bg-gold-light text-gold-foreground font-medium">{spec}</span>
        ))}
      </div>

      {!compact && (
        <>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{bio}</p>
          {quote && (
            <p className="text-xs italic text-muted-foreground mb-4 border-l-2 border-gold pl-3">"{quote}"</p>
          )}
        </>
      )}

      <div className="flex gap-2 mt-auto">
        <Button variant="outline" size="sm" asChild className="flex-1">
          <Link to={`/interventionist/${slug}`}>View Profile</Link>
        </Button>
        <Button variant="gold" size="sm" asChild className="flex-1">
          <Link to={`/help?interventionist=${slug}`}>Request Match</Link>
        </Button>
      </div>
    </div>
  );
};

export default InterventionistCard;
