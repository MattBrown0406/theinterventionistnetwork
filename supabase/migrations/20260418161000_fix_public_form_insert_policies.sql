-- Restore public insert policies for website forms.
-- Live project is currently rejecting anon inserts to family_intakes and contact_submissions
-- even though the original schema intended public form submissions.

ALTER TABLE public.family_intakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

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
