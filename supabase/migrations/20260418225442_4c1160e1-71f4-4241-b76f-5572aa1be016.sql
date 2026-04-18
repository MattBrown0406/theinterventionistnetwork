CREATE TABLE IF NOT EXISTS public.interventionist_click_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  interventionist_id UUID NOT NULL REFERENCES public.interventionists(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  click_type TEXT NOT NULL CHECK (click_type IN ('card_profile', 'card_match', 'profile_match', 'profile_phone', 'profile_email', 'profile_website')),
  source_path TEXT,
  user_agent TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.interventionist_click_events ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Public can insert click events"
    ON public.interventionist_click_events FOR INSERT
    WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Authenticated can read click events"
    ON public.interventionist_click_events FOR SELECT
    USING (auth.role() = 'authenticated');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

REVOKE ALL ON TABLE public.interventionist_click_events FROM anon, PUBLIC;
GRANT INSERT ON TABLE public.interventionist_click_events TO anon;
GRANT SELECT ON TABLE public.interventionist_click_events TO authenticated;

CREATE INDEX IF NOT EXISTS idx_interventionist_click_events_interventionist_created
  ON public.interventionist_click_events(interventionist_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_interventionist_click_events_click_type_created
  ON public.interventionist_click_events(click_type, created_at DESC);

CREATE OR REPLACE VIEW public.interventionist_click_stats AS
SELECT
  i.id AS interventionist_id,
  i.name,
  i.slug,
  COUNT(e.id) AS total_clicks,
  COUNT(*) FILTER (WHERE e.click_type = 'card_profile') AS card_profile_clicks,
  COUNT(*) FILTER (WHERE e.click_type = 'card_match') AS card_match_clicks,
  COUNT(*) FILTER (WHERE e.click_type IN ('card_profile', 'card_match')) AS card_total_clicks,
  COUNT(*) FILTER (WHERE e.click_type = 'profile_match') AS profile_match_clicks,
  COUNT(*) FILTER (WHERE e.click_type = 'profile_phone') AS profile_phone_clicks,
  COUNT(*) FILTER (WHERE e.click_type = 'profile_email') AS profile_email_clicks,
  COUNT(*) FILTER (WHERE e.click_type = 'profile_website') AS profile_website_clicks,
  MAX(e.created_at) AS last_click_at
FROM public.interventionists i
LEFT JOIN public.interventionist_click_events e ON e.interventionist_id = i.id
GROUP BY i.id, i.name, i.slug;

CREATE OR REPLACE FUNCTION public.get_interventionist_monthly_click_summary(target_month DATE DEFAULT date_trunc('month', now())::date)
RETURNS TABLE (
  interventionist_id UUID,
  name TEXT,
  slug TEXT,
  email TEXT,
  month_start DATE,
  month_end DATE,
  total_clicks BIGINT,
  card_profile_clicks BIGINT,
  card_match_clicks BIGINT,
  card_total_clicks BIGINT,
  profile_match_clicks BIGINT,
  profile_phone_clicks BIGINT,
  profile_email_clicks BIGINT,
  profile_website_clicks BIGINT
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  WITH bounds AS (
    SELECT date_trunc('month', target_month)::date AS month_start,
           (date_trunc('month', target_month) + interval '1 month')::date AS next_month
  )
  SELECT
    i.id AS interventionist_id,
    i.name,
    i.slug,
    i.email,
    b.month_start,
    (b.next_month - interval '1 day')::date AS month_end,
    COUNT(e.id) AS total_clicks,
    COUNT(*) FILTER (WHERE e.click_type = 'card_profile') AS card_profile_clicks,
    COUNT(*) FILTER (WHERE e.click_type = 'card_match') AS card_match_clicks,
    COUNT(*) FILTER (WHERE e.click_type IN ('card_profile', 'card_match')) AS card_total_clicks,
    COUNT(*) FILTER (WHERE e.click_type = 'profile_match') AS profile_match_clicks,
    COUNT(*) FILTER (WHERE e.click_type = 'profile_phone') AS profile_phone_clicks,
    COUNT(*) FILTER (WHERE e.click_type = 'profile_email') AS profile_email_clicks,
    COUNT(*) FILTER (WHERE e.click_type = 'profile_website') AS profile_website_clicks
  FROM public.interventionists i
  CROSS JOIN bounds b
  LEFT JOIN public.interventionist_click_events e
    ON e.interventionist_id = i.id
   AND e.created_at >= b.month_start
   AND e.created_at < b.next_month
  GROUP BY i.id, i.name, i.slug, i.email, b.month_start, b.next_month
  ORDER BY card_total_clicks DESC, total_clicks DESC, i.name ASC;
$$;

REVOKE ALL ON FUNCTION public.get_interventionist_monthly_click_summary(DATE) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_interventionist_monthly_click_summary(DATE) TO service_role, authenticated;