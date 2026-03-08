
INSERT INTO storage.buckets (id, name, public) VALUES ('photos', 'photos', true);

CREATE POLICY "Anyone can read photos" ON storage.objects FOR SELECT USING (bucket_id = 'photos');
CREATE POLICY "Authenticated can upload photos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'photos');
CREATE POLICY "Authenticated can update photos" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'photos');
CREATE POLICY "Authenticated can delete photos" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'photos');
