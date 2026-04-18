GRANT INSERT ON TABLE public.interventionist_click_events TO anon;
GRANT INSERT, SELECT ON TABLE public.interventionist_click_events TO authenticated;
GRANT ALL ON TABLE public.interventionist_click_events TO service_role;
GRANT SELECT ON public.interventionist_click_stats TO authenticated, service_role;