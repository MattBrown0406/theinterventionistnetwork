-- Ensure RLS is enabled
ALTER TABLE public.family_intakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.membership_applications ENABLE ROW LEVEL SECURITY;

-- Revoke any SELECT/UPDATE/DELETE that may have leaked to public roles
REVOKE ALL ON TABLE public.family_intakes FROM anon, authenticated, PUBLIC;
REVOKE ALL ON TABLE public.contact_submissions FROM anon, authenticated, PUBLIC;
REVOKE ALL ON TABLE public.membership_applications FROM anon, authenticated, PUBLIC;

-- Grant ONLY INSERT to anon and authenticated
GRANT INSERT ON TABLE public.family_intakes TO anon, authenticated;
GRANT INSERT ON TABLE public.contact_submissions TO anon, authenticated;
GRANT INSERT ON TABLE public.membership_applications TO anon, authenticated;

-- Recreate INSERT policies
DROP POLICY IF EXISTS "Anyone can submit family intake" ON public.family_intakes;
CREATE POLICY "Anyone can submit family intake"
ON public.family_intakes FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can submit membership application" ON public.membership_applications;
CREATE POLICY "Anyone can submit membership application"
ON public.membership_applications FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Remove any permissive SELECT policies on these tables to ensure no public read
DROP POLICY IF EXISTS "Submitter can read own application" ON public.membership_applications;