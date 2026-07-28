
-- Revoke column-level SELECT on author_email from anon and authenticated so
-- public reads of forum threads/replies cannot expose email addresses.
REVOKE SELECT ON public.forum_threads FROM anon, authenticated;
REVOKE SELECT ON public.forum_replies FROM anon, authenticated;

GRANT SELECT (
  id, category_id, author_name, title, body,
  is_pinned, is_locked, reply_count, last_reply_at,
  created_at, updated_at
) ON public.forum_threads TO anon, authenticated;

GRANT SELECT (
  id, thread_id, author_name, body, created_at
) ON public.forum_replies TO anon, authenticated;

-- Service role and admin RLS policies continue to work; ensure service_role keeps full access.
GRANT ALL ON public.forum_threads TO service_role;
GRANT ALL ON public.forum_replies TO service_role;
