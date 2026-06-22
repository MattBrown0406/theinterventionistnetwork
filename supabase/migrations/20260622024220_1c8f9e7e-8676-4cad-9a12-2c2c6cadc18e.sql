DROP POLICY IF EXISTS "Authenticated users can read member materials" ON storage.objects;

CREATE POLICY "Assigned members and admins can read member materials"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'member-materials'
  AND EXISTS (
    SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid()
  )
);