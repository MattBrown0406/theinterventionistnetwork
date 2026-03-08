CREATE POLICY "Submitter can read own application"
ON public.membership_applications
FOR SELECT
TO anon
USING (true);