ALTER VIEW public.interventionist_click_stats SET (security_invoker = true);
REVOKE ALL ON public.interventionist_click_stats FROM PUBLIC, anon;
GRANT SELECT ON public.interventionist_click_stats TO authenticated, service_role;