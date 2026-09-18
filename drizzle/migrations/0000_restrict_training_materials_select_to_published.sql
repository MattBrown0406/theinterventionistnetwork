DROP POLICY IF EXISTS "Authenticated users can read training materials" ON public.training_materials;

CREATE POLICY "Members can read published training materials"
ON public.training_materials
FOR SELECT
TO authenticated
USING (coalesce(status, 'published') = 'published' OR public.has_role(auth.uid(), 'admin'));