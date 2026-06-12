ALTER TABLE public.membership_applications
  ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS welcome_email_sent_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS admin_notes TEXT;

GRANT SELECT, UPDATE ON public.membership_applications TO authenticated;

DROP POLICY IF EXISTS "Authenticated admins can read applications" ON public.membership_applications;
CREATE POLICY "Authenticated admins can read applications"
  ON public.membership_applications FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Authenticated admins can update applications" ON public.membership_applications;
CREATE POLICY "Authenticated admins can update applications"
  ON public.membership_applications FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);