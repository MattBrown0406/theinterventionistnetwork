GRANT INSERT ON TABLE public.family_intakes TO anon, authenticated;
GRANT INSERT ON TABLE public.contact_submissions TO anon, authenticated;
GRANT INSERT ON TABLE public.membership_applications TO anon, authenticated;

REVOKE SELECT, UPDATE, DELETE ON TABLE public.family_intakes FROM anon, authenticated, PUBLIC;
REVOKE SELECT, UPDATE, DELETE ON TABLE public.contact_submissions FROM anon, authenticated, PUBLIC;
REVOKE SELECT, UPDATE, DELETE ON TABLE public.membership_applications FROM anon, authenticated, PUBLIC;