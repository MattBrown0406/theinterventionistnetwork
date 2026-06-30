DROP POLICY IF EXISTS "Assigned members and admins can read member materials" ON storage.objects;

CREATE POLICY "Admins can read member materials"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'member-materials'
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
);