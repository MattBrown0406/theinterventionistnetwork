-- Profile trust upgrades: availability status, video intros, professional endorsements
ALTER TABLE public.interventionists
  ADD COLUMN IF NOT EXISTS accepting_cases boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS video_url text,
  ADD COLUMN IF NOT EXISTS endorsements text[] NOT NULL DEFAULT '{}';

COMMENT ON COLUMN public.interventionists.accepting_cases IS 'Whether this member is currently accepting new cases (shown as a badge on cards and profiles).';
COMMENT ON COLUMN public.interventionists.video_url IS 'Optional YouTube or Vimeo URL for a short video introduction embedded on the profile.';
COMMENT ON COLUMN public.interventionists.endorsements IS 'Professional endorsements, one per entry, e.g. "Quote text. — Jane Smith, LMFT, Portland OR".';
