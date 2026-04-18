import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Interventionist {
  id: string;
  slug: string;
  name: string;
  credentials: string;
  region: string;
  states_served: string[];
  specialties: string[];
  years_experience: number;
  bio: string;
  full_bio: string;
  approach: string;
  certifications: string[];
  quote: string;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  featured: boolean;
  photo_url?: string | null;
  offers_hourly_coaching: boolean;
  no_referral_fees?: boolean | null;
}

export function useInterventionists() {
  return useQuery({
    queryKey: ["interventionists"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("interventionists")
        .select("*")
        .order("featured", { ascending: false })
        .order("name");
      if (error) throw error;
      return data as Interventionist[];
    },
  });
}

export function useInterventionist(slug: string | undefined) {
  return useQuery({
    queryKey: ["interventionist", slug],
    enabled: !!slug,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("interventionists")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data as Interventionist;
    },
  });
}
