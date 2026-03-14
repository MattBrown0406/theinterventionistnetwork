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
  content: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export const useTrainingMaterials = () => {
  return useQuery({
    queryKey: ["training_materials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("training_materials")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data as TrainingMaterial[];
    },
  });
};
