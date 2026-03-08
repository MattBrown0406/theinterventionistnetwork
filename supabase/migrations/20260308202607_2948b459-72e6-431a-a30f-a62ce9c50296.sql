-- Create table for family intake form submissions
CREATE TABLE public.family_intakes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  relationship TEXT NOT NULL,
  approximate_age TEXT NOT NULL,
  primary_concern TEXT NOT NULL,
  your_state TEXT NOT NULL,
  their_state TEXT,
  urgency TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.family_intakes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit family intake" ON public.family_intakes
  FOR INSERT WITH CHECK (true);

-- Create table for interventionist membership applications
CREATE TABLE public.membership_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_name TEXT,
  website_url TEXT,
  years_experience INTEGER NOT NULL,
  certifications TEXT[] NOT NULL DEFAULT '{}',
  cert_other TEXT,
  states_served TEXT[] NOT NULL DEFAULT '{}',
  specialties TEXT[] NOT NULL DEFAULT '{}',
  practice_description TEXT NOT NULL,
  hear_about TEXT,
  tier_interest TEXT NOT NULL,
  no_referral_fees BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.membership_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit membership application" ON public.membership_applications
  FOR INSERT WITH CHECK (true);

-- Create table for general contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  inquiry_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);