
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read their own roles" ON public.user_roles;
CREATE POLICY "Users can read their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role FROM auth.users
ON CONFLICT (user_id, role) DO NOTHING;

-- interventionists: admin-only writes
DROP POLICY IF EXISTS "Authenticated users can insert interventionists" ON public.interventionists;
DROP POLICY IF EXISTS "Authenticated users can update interventionists" ON public.interventionists;
DROP POLICY IF EXISTS "Authenticated users can delete interventionists" ON public.interventionists;

CREATE POLICY "Admins can insert interventionists"
  ON public.interventionists FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update interventionists"
  ON public.interventionists FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete interventionists"
  ON public.interventionists FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- training_materials: admin-only writes
DROP POLICY IF EXISTS "Authenticated users can insert training materials" ON public.training_materials;
DROP POLICY IF EXISTS "Authenticated users can update training materials" ON public.training_materials;
DROP POLICY IF EXISTS "Authenticated users can delete training materials" ON public.training_materials;

CREATE POLICY "Admins can insert training materials"
  ON public.training_materials FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update training materials"
  ON public.training_materials FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete training materials"
  ON public.training_materials FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- membership_applications: admin-only read/update
DROP POLICY IF EXISTS "Authenticated admins can read applications" ON public.membership_applications;
DROP POLICY IF EXISTS "Authenticated admins can update applications" ON public.membership_applications;

CREATE POLICY "Admins can read applications"
  ON public.membership_applications FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update applications"
  ON public.membership_applications FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Hide author_email columns from public API
REVOKE SELECT (author_email) ON public.forum_threads FROM anon, authenticated;
REVOKE SELECT (author_email) ON public.forum_replies FROM anon, authenticated;

-- Lock SECURITY DEFINER helpers down to service_role only
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.get_interventionist_monthly_click_summary(date) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_thread_reply_stats() FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.get_interventionist_monthly_click_summary(date) TO service_role;
