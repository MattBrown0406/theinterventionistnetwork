
CREATE TABLE public.training_materials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  tag text NOT NULL DEFAULT 'Core Curriculum',
  access_tier text NOT NULL DEFAULT 'Featured & Partner',
  status text NOT NULL DEFAULT 'available',
  video_url text,
  content text DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.training_materials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read training materials"
  ON public.training_materials FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert training materials"
  ON public.training_materials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update training materials"
  ON public.training_materials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete training materials"
  ON public.training_materials FOR DELETE
  TO authenticated
  USING (true);
