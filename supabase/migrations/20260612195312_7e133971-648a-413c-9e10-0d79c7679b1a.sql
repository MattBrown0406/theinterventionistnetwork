
DROP POLICY IF EXISTS "Anyone can update forum threads" ON public.forum_threads;

REVOKE SELECT ON public.forum_threads FROM anon, authenticated;
GRANT SELECT (id, category_id, author_name, title, body, is_pinned, is_locked,
              reply_count, last_reply_at, created_at, updated_at)
  ON public.forum_threads TO anon, authenticated;

REVOKE SELECT ON public.forum_replies FROM anon, authenticated;
GRANT SELECT (id, thread_id, author_name, body, created_at)
  ON public.forum_replies TO anon, authenticated;

GRANT ALL ON public.forum_threads TO service_role;
GRANT ALL ON public.forum_replies TO service_role;

CREATE POLICY "Service role can read contact submissions"
  ON public.contact_submissions FOR SELECT
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role can read family intakes"
  ON public.family_intakes FOR SELECT
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role can read membership applications"
  ON public.membership_applications FOR SELECT
  USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Anyone can read training materials" ON public.training_materials;
CREATE POLICY "Authenticated users can read training materials"
  ON public.training_materials FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Anyone can read member materials" ON storage.objects;
CREATE POLICY "Authenticated users can read member materials"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'member-materials');

ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public, pgmq;
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public, pgmq;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public, pgmq;

REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.get_interventionist_monthly_click_summary(date) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.get_interventionist_monthly_click_summary(date) TO service_role;
