-- Ensure RLS is enabled
ALTER TABLE public.family_intakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Recreate INSERT policies (idempotent)
DROP POLICY IF EXISTS "Anyone can submit family intake" ON public.family_intakes;
CREATE POLICY "Anyone can submit family intake"
ON public.family_intakes
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Ensure table-level grants exist for PostgREST (anon/authenticated)
GRANT INSERT ON public.family_intakes TO anon, authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;

-- Preserve membership_applications working state (no changes to its policies, just ensure grant)
GRANT INSERT ON public.membership_applications TO anon, authenticated;