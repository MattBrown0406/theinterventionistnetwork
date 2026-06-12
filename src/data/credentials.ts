export type Credential = {
  slug: string;
  code: string;
  name: string;
  shortDescription: string;
  whatItIs: string;
  requirements: string[];
  whyItMatters: string;
  issuingBody: string;
  learnMoreUrl?: string;
};

export const credentials: Credential[] = [
  {
    slug: "ccmi",
    code: "CCMI",
    name: "Certified Clinical Medical Interventionist",
    shortDescription:
      "A clinical intervention credential focused on the medical and behavioral health dimensions of substance use crises.",
    whatItIs:
      "The Certified Clinical Medical Interventionist (CCMI) credential identifies professionals trained to facilitate interventions that account for the medical, psychiatric, and addiction-related needs of the identified person and their family. It blends clinical case conceptualization with structured intervention models.",
    requirements: [
      "Documented clinical training in addiction and/or mental health",
      "Completion of an approved CCMI training curriculum",
      "Supervised intervention experience and case review",
      "Adherence to a published code of ethics",
      "Ongoing continuing education to maintain the credential",
    ],
    whyItMatters:
      "Families in crisis are often navigating overdose risk, withdrawal, co-occurring mental illness, or medical instability. A CCMI-trained interventionist is prepared to coordinate with treatment providers, anticipate medical risk, and design an intervention that supports a clinically appropriate next step.",
    issuingBody: "Clinical intervention credentialing bodies",
  },
  {
    slug: "arise",
    code: "ARISE",
    name: "ARISE Interventionist",
    shortDescription:
      "An invitational, family-centered intervention model that engages the entire support network from the first call.",
    whatItIs:
      "ARISE (A Relational Intervention Sequence for Engagement) is a non-confrontational, evidence-based intervention model. It works in graduated levels of intensity, beginning with an inclusive 'First Call' and escalating only as needed. ARISE Interventionists are trained and certified in the model's structured approach.",
    requirements: [
      "Completion of the multi-level ARISE training program",
      "Supervised case practice using the ARISE method",
      "Demonstrated competency in family systems facilitation",
      "Continuing education and recertification through the ARISE Network",
    ],
    whyItMatters:
      "ARISE has published outcomes data showing high engagement rates into treatment and recovery support. For families who fear confrontation or surprise interventions, an ARISE-trained professional offers a transparent, collaborative path forward.",
    issuingBody: "The ARISE Network",
    learnMoreUrl: "https://www.arise-network.com/",
  },
  {
    slug: "cip",
    code: "CIP",
    name: "Certified Intervention Professional",
    shortDescription:
      "A nationally recognized intervention-specific credential issued by the Pennsylvania Certification Board.",
    whatItIs:
      "The Certified Intervention Professional (CIP) is a credential for professionals whose primary role is facilitation and participation in substance use disorder interventions. CIPs guide families, friends, and others through an intervention process where the individual is encouraged to enter treatment. A CIP is not a marketer or recruiter for a treatment facility — they are a front-line professional directly engaging the individual and family to help guide them to treatment, and they remain part of the recovery team.",
    requirements: [
      "Formal education: minimum high school diploma or GED.",
      "Work experience (scaled by degree, providing direct substance use services at least 50% of the time): 3 years full-time / 6,000 hours part-time with HS/GED; 2.5 years / 5,000 hours with an Associates; 2 years / 4,000 hours with a Bachelors; 1 year / 2,000 hours with a Masters or higher.",
      "Current interventionist job description from the applicant's employer, signed by both the applicant and their immediate supervisor.",
      "100 hours of on-the-job supervision of qualifying work experience, including at least 10 hours in each intervention domain.",
      "150 hours of relevant education and training, with set minimums in each area: 20 hours intervention theory and practice; 20 hours substance use disorders; 20 hours mental health disorders; 12 hours family systems; 12 hours motivational interviewing; 12 hours process addictions; 12 hours case management; 12 hours behavioral health ethics; 9 hours screening, assessment, and level-of-care selection; 6 hours cultural competency; 6 hours crisis intervention; 3 hours harm reduction; 3 hours overdose prevention; and 3 hours safety and self-care.",
      "Facilitation or co-facilitation of 10 interventions within the last three years, with a written summary of at least 500 words for each one — describing intervention style, work with the family, assessment and referral to treatment (and why), and intervention aftercare. No identifying client information is included.",
      "Adherence to the PCB Code of Ethical Conduct.",
      "Passing the CIP written examination (based on the published CIP Content Outline).",
      "Ongoing continuing education for credential renewal.",
    ],
    whyItMatters:
      "The CIP is one of the few credentials in the United States that is specific to the practice of intervention itself, rather than to addiction counseling or therapy broadly. It signals that the professional's core training is in moving a family from crisis to a treatment decision.",
    issuingBody: "Pennsylvania Certification Board (PCB)",
  },
  {
    slug: "cadc",
    code: "CADC",
    name: "Certified Alcohol and Drug Counselor",
    shortDescription:
      "A state-issued credential for substance use disorder counselors who meet standardized training and supervision requirements.",
    whatItIs:
      "CADC is a counseling credential issued by state certification boards. It identifies practitioners qualified to assess, treat, and support individuals with substance use disorders. Specific scope of practice varies by state.",
    requirements: [
      "Documented education in addiction counseling",
      "Supervised clinical hours in substance use treatment",
      "Passing the IC&RC Alcohol and Drug Counselor exam (in most states)",
      "Adherence to a state code of ethics",
      "Continuing education for renewal",
    ],
    whyItMatters:
      "A CADC-credentialed interventionist has formal training in substance use disorders, motivational interviewing, and the continuum of care — so the intervention plan reflects what actually works in treatment, not guesswork.",
    issuingBody: "State certification boards (IC&RC affiliated)",
    learnMoreUrl: "https://internationalcredentialing.org/",
  },
  {
    slug: "lcdc",
    code: "LCDC",
    name: "Licensed Chemical Dependency Counselor",
    shortDescription:
      "A state license to practice chemical dependency counseling, most commonly issued in Texas.",
    whatItIs:
      "The LCDC is a state-issued license authorizing the holder to practice chemical dependency counseling. It is the primary substance use counseling license in several U.S. states and carries scope-of-practice protections under state law.",
    requirements: [
      "An associate's degree or higher with chemical dependency coursework",
      "Several thousand hours of supervised clinical experience",
      "Passing the state and national licensing examinations",
      "Adherence to state statutes and the LCDC code of ethics",
      "Continuing education for license renewal",
    ],
    whyItMatters:
      "Because the LCDC is a license — not just a certification — the holder is accountable to a state board. That accountability matters when a family is trusting a professional with one of the highest-stakes decisions they will ever make.",
    issuingBody: "State licensing boards (e.g., Texas HHSC)",
  },
  {
    slug: "lpc",
    code: "LPC",
    name: "Licensed Professional Counselor",
    shortDescription:
      "A state-issued mental health counseling license held by master's-level clinicians.",
    whatItIs:
      "Licensed Professional Counselors are master's-level mental health clinicians licensed by their state to diagnose and treat mental health and behavioral conditions. Many interventionists hold an LPC alongside addiction-specific credentials.",
    requirements: [
      "Master's degree in counseling or a closely related field",
      "Two or more years of supervised post-graduate clinical experience",
      "Passing the National Counselor Examination or equivalent",
      "Adherence to the state board's code of ethics",
      "Continuing education for license renewal",
    ],
    whyItMatters:
      "An LPC-credentialed interventionist can recognize and account for co-occurring conditions — trauma, depression, anxiety, personality disorders — that often drive substance use and shape what a successful intervention looks like.",
    issuingBody: "State counseling licensure boards",
  },
  {
    slug: "lcsw",
    code: "LCSW",
    name: "Licensed Clinical Social Worker",
    shortDescription:
      "A clinical-level state license for social workers providing mental health and addiction services.",
    whatItIs:
      "An LCSW is a clinically licensed social worker authorized to diagnose and treat mental health and substance use conditions. The credential reflects training in both clinical practice and the social systems surrounding a client — family, employer, school, and community.",
    requirements: [
      "Master of Social Work (MSW) from an accredited program",
      "Typically 3,000+ hours of supervised post-MSW clinical experience",
      "Passing the ASWB clinical-level examination",
      "Adherence to the NASW Code of Ethics",
      "Continuing education for license renewal",
    ],
    whyItMatters:
      "Interventions are fundamentally about systems — the family, workplace, and community around the identified person. LCSWs are trained from day one to assess and mobilize those systems, which is exactly what good intervention work requires.",
    issuingBody: "State social work licensing boards",
  },
  {
    slug: "phd",
    code: "PHD",
    name: "Doctor of Philosophy (PhD)",
    shortDescription:
      "A doctoral research and clinical degree, typically in psychology or a related behavioral health field.",
    whatItIs:
      "A PhD is a research doctorate. In intervention work, PhD-credentialed professionals are typically clinical psychologists or behavioral scientists with deep expertise in addiction, family systems, or behavioral change.",
    requirements: [
      "Doctoral-level coursework and original research",
      "A defended doctoral dissertation",
      "For clinical practice, an additional state license (e.g., licensed psychologist)",
      "Adherence to the relevant professional code of ethics",
    ],
    whyItMatters:
      "A doctoral-level interventionist brings deep diagnostic skill and the ability to integrate research evidence into a family's plan. That depth matters when cases involve complex psychiatric, neurological, or behavioral factors.",
    issuingBody: "Accredited universities; state licensing boards for clinical practice",
  },
];

const credentialByCode = new Map<string, Credential>(
  credentials.flatMap((c) => [
    [c.code.toUpperCase(), c],
    [c.name.toUpperCase(), c],
  ]),
);

export function findCredential(token: string): Credential | undefined {
  if (!token) return undefined;
  return credentialByCode.get(token.trim().toUpperCase());
}

export function getCredentialBySlug(slug: string): Credential | undefined {
  return credentials.find((c) => c.slug === slug);
}