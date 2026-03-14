import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface TrainingMaterial {
  id: string;
  title: string;
  description: string;
  tag: string;
  access_tier: string;
  status: string;
  video_url: string | null;
  file_url: string | null;
  content: string;
  category: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export const useTrainingMaterials = (category?: string) => {
  return useQuery({
    queryKey: ["training_materials", category],
    queryFn: async () => {
      let query = supabase
        .from("training_materials")
        .select("*")
        .order("sort_order", { ascending: true });
      if (category) {
        query = query.eq("category", category);
      }
      const { data, error } = await query;
      if (error) throw error;
      return data as TrainingMaterial[];
    },
  });
};
