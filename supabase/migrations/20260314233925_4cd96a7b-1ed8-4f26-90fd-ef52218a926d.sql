
ALTER TABLE public.training_materials
  ADD COLUMN category text NOT NULL DEFAULT 'training',
  ADD COLUMN file_url text;

-- Create storage bucket for member material uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('member-materials', 'member-materials', true);

-- Allow authenticated users to upload to member-materials bucket
CREATE POLICY "Authenticated users can upload member materials"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'member-materials');

CREATE POLICY "Anyone can read member materials"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'member-materials');

CREATE POLICY "Authenticated users can delete member materials"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'member-materials');
