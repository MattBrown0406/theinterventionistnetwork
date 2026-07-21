ALTER TABLE public.interventionists
  ADD COLUMN IF NOT EXISTS accepting_cases boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS video_url text,
  ADD COLUMN IF NOT EXISTS endorsements text[] NOT NULL DEFAULT '{}';