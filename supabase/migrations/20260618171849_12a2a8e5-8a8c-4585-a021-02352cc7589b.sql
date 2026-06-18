
-- Tighten interventionist_click_events SELECT to admins
DROP POLICY IF EXISTS "Authenticated can read click events" ON public.interventionist_click_events;
CREATE POLICY "Admins can read click events"
ON public.interventionist_click_events
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Tighten member-materials storage bucket writes to admins
DROP POLICY IF EXISTS "Authenticated users can upload member materials" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete member materials" ON storage.objects;

CREATE POLICY "Admins can upload member materials"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'member-materials' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete member materials"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'member-materials' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update member materials"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'member-materials' AND public.has_role(auth.uid(), 'admin'));

-- Tighten photos storage bucket writes to admins
DROP POLICY IF EXISTS "Authenticated can upload photos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can update photos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can delete photos" ON storage.objects;

CREATE POLICY "Admins can upload photos"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update photos"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete photos"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'photos' AND public.has_role(auth.uid(), 'admin'));
