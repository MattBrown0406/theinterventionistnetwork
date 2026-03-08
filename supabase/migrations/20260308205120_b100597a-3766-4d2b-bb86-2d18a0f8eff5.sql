
CREATE TABLE public.interventionists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  credentials text NOT NULL DEFAULT '',
  region text NOT NULL DEFAULT '',
  states_served text[] NOT NULL DEFAULT '{}',
  specialties text[] NOT NULL DEFAULT '{}',
  years_experience integer NOT NULL DEFAULT 0,
  bio text NOT NULL DEFAULT '',
  full_bio text NOT NULL DEFAULT '',
  approach text NOT NULL DEFAULT '',
  certifications text[] NOT NULL DEFAULT '{}',
  quote text NOT NULL DEFAULT '',
  phone text,
  email text,
  website text,
  featured boolean NOT NULL DEFAULT false,
  photo_url text
);

ALTER TABLE public.interventionists ENABLE ROW LEVEL SECURITY;

-- Anyone can read interventionists (public directory)
CREATE POLICY "Anyone can read interventionists" ON public.interventionists FOR SELECT USING (true);

-- Only authenticated users can insert/update/delete (admin)
CREATE POLICY "Authenticated users can insert interventionists" ON public.interventionists FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update interventionists" ON public.interventionists FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users can delete interventionists" ON public.interventionists FOR DELETE TO authenticated USING (true);

-- Insert Matt Brown as seed data
INSERT INTO public.interventionists (slug, name, credentials, region, states_served, specialties, years_experience, bio, full_bio, approach, certifications, quote, phone, email, website, featured)
VALUES (
  'matt-brown',
  'Matt Brown',
  'BRI-II, CADC',
  'Oregon / National',
  ARRAY['Oregon', 'Washington', 'California', 'National'],
  ARRAY['Substance Use', 'Adolescent', 'Executive/Professional'],
  20,
  'Founder of The Interventionist Network and Freedom Interventions. 20+ years of frontline experience helping families navigate addiction crises.',
  'Matt Brown has dedicated over two decades to helping families in crisis. As the founder of Freedom Interventions and The Interventionist Network, he has personally conducted hundreds of interventions across the country. His approach combines the clinical rigor of evidence-based methods with the compassion that comes from his own 22 years of personal recovery.

Matt is also the founder of the Sober Helpline and host of the Party Wreckers podcast, where he discusses the realities of addiction intervention with fellow professionals and families. His mission is simple: connect every family in crisis with a trusted professional who can help.

Beyond his direct work with families, Matt has become a leading voice in the fight against patient brokering and referral fee culture in the addiction treatment industry. The Interventionist Network was born from his belief that families deserve better — better access, better ethics, and better outcomes.',
  'I believe every family deserves honesty, compassion, and a clear path forward. My approach is direct but never aggressive. I meet families where they are, help them understand the disease of addiction, and guide them through a structured process that puts their loved one''s recovery first.',
  ARRAY['BRI-II Certified', 'CADC', 'ARISE Trained', '20+ Years Field Experience'],
  'Every family deserves a fighting chance. That''s why I built this network.',
  '(541) 838-6009',
  'matt@theinterventionistnetwork.com',
  'https://freedominterventions.com',
  true
);
