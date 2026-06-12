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
      const rows = (data ?? []) as TrainingMaterial[];
      // Resolve signed URLs for files stored in the private member-materials bucket.
      await Promise.all(
        rows.map(async (row) => {
          if (!row.file_url) return;
          // Already a signed/public URL from an external source — leave as-is.
          if (/^https?:\/\//i.test(row.file_url) && !row.file_url.includes("/member-materials/")) return;
          let path = row.file_url;
          const marker = "/member-materials/";
          const idx = path.indexOf(marker);
          if (idx >= 0) path = path.slice(idx + marker.length);
          const { data: signed } = await supabase.storage
            .from("member-materials")
            .createSignedUrl(path, 3600);
          if (signed?.signedUrl) row.file_url = signed.signedUrl;
        }),
      );
      return rows;
    },
  });
};
