-- First revoke everything to start clean
REVOKE ALL ON TABLE public.family_intakes FROM anon, authenticated, PUBLIC;
REVOKE ALL ON TABLE public.contact_submissions FROM anon, authenticated, PUBLIC;
REVOKE ALL ON TABLE public.membership_applications FROM anon, authenticated, PUBLIC;

-- Then grant ONLY insert
GRANT INSERT ON TABLE public.family_intakes TO anon;
GRANT INSERT ON TABLE public.family_intakes TO authenticated;
GRANT INSERT ON TABLE public.contact_submissions TO anon;
GRANT INSERT ON TABLE public.contact_submissions TO authenticated;
GRANT INSERT ON TABLE public.membership_applications TO anon;
GRANT INSERT ON TABLE public.membership_applications TO authenticated;