export type Credential = {
  slug: string;
  code: string;
  name: string;
  shortDescription: string;
  whatItIs: string;
  requirements: string[];
  whyItMatters: string;
  issuingBody: string;
  issuingStates?: { state: string; note?: string }[];
  issuingStatesNote?: string;
  comparisons?: { title: string; body: string; bullets?: string[] }[];
  disclaimer?: string;
  learnMoreUrl?: string;
};

export const credentials: Credential[] = [
  {
    slug: "ccmi",
    code: "CCMI",
    name: "Certified Case Manager Interventionist",
    shortDescription:
      "A Breining Institute credential demonstrating advanced knowledge and skills in both intervention and ongoing case management for long-term recovery.",
    whatItIs:
      "The Certified Case Manager Interventionist (CCMI) is a credential issued by Breining Institute that recognizes health care professionals trained to initiate the recovery process through intervention and to support that recovery through long-term case management. The credential is offered at multiple levels — CCMI-Intern (CCMI-i), CCMI-Associate (CCMI-A), full CCMI, and CCMI – Masters Level (CCMI-M) — reflecting increasing experience and education.",
    requirements: [
      "Hold a qualifying health care professional credential or license (such as a substance use disorders counselor, registered nurse, marriage and family therapist, or licensed clinical social worker) plus at least 2,080 hours (about one year full-time) of credentialed experience — OR a minimum two-year (Associates) degree plus at least 4,160 hours (about two years full-time) of health care professional experience.",
      "Complete the five required training Modules (at least 125–150 hours total) from a Breining Institute Accredited (BIA) Program: (1) Introduction to Intervention and Case Management, (2) Family Systems, (3) Business Ethics / Professionalism / Self Care, (4) Cultural Sensitivity, and (5) Addictions and Co-occurring Disorders.",
      "Begin as a CCMI-Intern (CCMI-i) after completing at least Module 1 (25 hours) of specified coursework from a BIA Program.",
      "Pass the Certified Case Manager Interventionist Examination (CCMIE) — a 75-question multiple-choice exam administered online by Breining Institute (a 25-question Practice Exam is required first).",
      "CCMI-Associate (CCMI-A) holders may apply for the full CCMI Credential after completing 3,000 hours of supervised experience over at least 2 years (hours count from registration as a CCMI-Intern).",
      "CCMI – Masters Level (CCMI-M) requires the full CCMI plus one of: 5 years health care professional clinical experience; 2 years clinical experience after earning the CCMI; or a Masters or Doctorate Degree in the healing arts.",
      "Ongoing renewal through Breining Institute's online credential renewal process.",
    ],
    whyItMatters:
      "Intervention is only the first step toward recovery — continuing case management dramatically increases the chance of long-term wellness. The CCMI signals that a professional is trained not just to facilitate the intervention itself, but to coordinate family systems, ethics, cultural considerations, and co-occurring disorders across the full arc of a family's recovery.",
    issuingBody: "Breining Institute",
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
    issuingStatesNote:
      "States that issue a credential under the exact \"CADC\" (Certified Alcohol and Drug Counselor) title — typically through an IC&RC member board or an affiliated state body. Many additional states issue equivalent credentials under different acronyms (CADCII, LADC, CAC, CSAC, etc.).",
    issuingStates: [
      { state: "California", note: "Issued by CCAPP / CADTP / CAADE" },
      { state: "Connecticut", note: "CT Certification Board" },
      { state: "Georgia", note: "Georgia Addiction Counselors Association" },
      { state: "Illinois", note: "IAODAPCA" },
      { state: "Indiana", note: "Indiana Counselors Association on Alcohol and Drug Abuse" },
      { state: "Kentucky", note: "Kentucky Board of Alcohol and Drug Counselors" },
      { state: "Maryland", note: "MD Board of Professional Counselors & Therapists" },
      { state: "Nevada", note: "Nevada Board of Examiners for Alcohol, Drug & Gambling Counselors" },
      { state: "New Jersey", note: "Addiction Professionals Certification Board of New Jersey" },
      { state: "Ohio", note: "Ohio Chemical Dependency Professionals Board" },
      { state: "Oregon", note: "Mental Health & Addiction Certification Board of Oregon (MHACBO)" },
      { state: "Pennsylvania", note: "Pennsylvania Certification Board" },
      { state: "Tennessee", note: "Tennessee Certification Board" },
      { state: "Virginia", note: "Substance Abuse Certification Alliance of Virginia" },
      { state: "Washington", note: "Washington State Certification Board (also uses SUDP license)" },
    ],
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
    issuingStatesNote:
      "States that issue a license under the exact \"LCDC\" (Licensed Chemical Dependency Counselor) title. Several other states license substance use counselors under different titles (e.g., LADC, LCADC, LADAC, SUDP).",
    issuingStates: [
      { state: "Texas", note: "Texas Health and Human Services Commission (HHSC) — primary LCDC license" },
      { state: "Ohio", note: "Ohio Chemical Dependency Professionals Board — LCDC I, II, and III levels" },
      { state: "Iowa", note: "Iowa Board of Certification — historical LCDC designation" },
    ],
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
    comparisons: [
      {
        title: "How an LPC differs from an LCSW",
        body:
          "LPCs and LCSWs are both master's-level, independently licensed clinicians who can diagnose and treat mental health and substance use conditions — and in many clinical settings their day-to-day work overlaps significantly. The core difference is the lens of their training.",
        bullets: [
          "Training focus: LPCs are trained primarily in counseling theory, psychopathology, assessment, and individual and group psychotherapy. LCSWs are trained in clinical practice and in the social systems around a client — family, workplace, school, housing, and community resources.",
          "Graduate degree: LPCs hold a Master's in Counseling (MA/MS, MEd) from a program typically accredited by CACREP. LCSWs hold a Master of Social Work (MSW) from a CSWE-accredited program.",
          "Licensing exam: LPCs sit for the National Counselor Examination (NCE) or National Clinical Mental Health Counseling Examination (NCMHCE). LCSWs sit for the ASWB Clinical exam.",
          "Ethics codes: LPCs follow the ACA Code of Ethics; LCSWs follow the NASW Code of Ethics, which places explicit emphasis on social justice and systems-level advocacy.",
          "Typical strengths in intervention work: an LPC often brings deeper formal training in diagnosis, psychotherapy modalities, and treatment planning, while an LCSW typically brings stronger training in mobilizing family systems, coordinating community resources, and case management across the continuum of care.",
        ],
      },
    ],
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
    comparisons: [
      {
        title: "How an LCSW differs from an LPC",
        body:
          "LCSWs and LPCs are both master's-level, independently licensed clinicians who can diagnose and treat mental health and substance use conditions, and they often work side by side in the same settings. The difference is rooted in how each profession is trained to view the client.",
        bullets: [
          "Training focus: LCSWs are trained in the 'person-in-environment' model — assessing and mobilizing the family, workplace, school, and community systems around a client. LPCs are trained primarily in counseling theory, psychopathology, and individual and group psychotherapy.",
          "Graduate degree: LCSWs hold a Master of Social Work (MSW) from a CSWE-accredited program. LPCs hold a Master's in Counseling (MA/MS, MEd), typically from a CACREP-accredited program.",
          "Licensing exam: LCSWs sit for the ASWB Clinical exam. LPCs sit for the National Counselor Examination (NCE) or National Clinical Mental Health Counseling Examination (NCMHCE).",
          "Ethics codes: LCSWs follow the NASW Code of Ethics, with explicit attention to social justice, advocacy, and systems-level practice. LPCs follow the ACA Code of Ethics.",
          "Typical strengths in intervention work: an LCSW often brings stronger training in family systems, case management, and connecting families to community and aftercare resources, while an LPC typically brings deeper training in diagnostic assessment and structured psychotherapy modalities.",
        ],
      },
    ],
  },
  {
    slug: "msw",
    code: "MSW",
    name: "Master of Social Work",
    shortDescription:
      "A graduate degree in social work — the foundational training behind clinical social work practice, case management, and systems-based intervention.",
    whatItIs:
      "The Master of Social Work (MSW) is a two-year graduate degree from a program accredited by the Council on Social Work Education (CSWE). MSW-trained professionals are educated in clinical assessment, mental health and substance use treatment, family systems, case management, and the 'person-in-environment' framework — looking at the client alongside their family, workplace, community, and access to resources. An MSW is also the required degree to pursue clinical licensure as an LCSW.",
    requirements: [
      "Bachelor's degree (a BSW can shorten the MSW to advanced standing, typically one year)",
      "Completion of an MSW from a CSWE-accredited program — coursework in clinical practice, human behavior, policy, research, and ethics",
      "Two supervised field practicum placements (typically 900+ hours total) in clinical or community settings",
      "Adherence to the NASW Code of Ethics",
      "For independent clinical practice, additional state licensure (LMSW, then LCSW after post-graduate supervised hours and the ASWB clinical exam)",
    ],
    whyItMatters:
      "An MSW-trained interventionist brings clinical and systems thinking from day one — trained to assess the identified person and the full environment around them: family roles, finances, housing, employment, legal exposure, and community supports. That broader lens often determines whether an intervention actually 'sticks' once the person enters treatment. Many interventionists begin their clinical career with an MSW and later add the LCSW for full independent clinical scope.",
    issuingBody: "CSWE-accredited graduate schools of social work",
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
  {
    slug: "md",
    code: "MD",
    name: "Doctor of Medicine",
    shortDescription:
      "A licensed physician — a medical doctor authorized to diagnose illness, prescribe medication, and direct medical care.",
    whatItIs:
      "An MD is a physician who has completed medical school and a residency, and who holds an active state medical license to practice medicine. In intervention work, MD-credentialed professionals are typically addiction medicine physicians, psychiatrists, or other physicians who can evaluate medical risk, manage withdrawal, prescribe medications for substance use disorders (such as buprenorphine or naltrexone), and coordinate directly with hospitals and treatment programs.",
    requirements: [
      "Doctor of Medicine (MD) or Doctor of Osteopathic Medicine (DO) degree from an accredited medical school",
      "Completion of an accredited residency (commonly internal medicine, family medicine, psychiatry, or emergency medicine)",
      "Passing all steps of the USMLE (or COMLEX for DOs)",
      "An active, unrestricted state medical license",
      "For prescribing controlled medications used in addiction treatment, an active DEA registration",
      "Board certification or additional fellowship training in Addiction Medicine or Addiction Psychiatry is common, though not required to practice",
      "Adherence to state medical board rules and the AMA / AOA code of ethics",
      "Ongoing continuing medical education (CME) for license and board renewal",
    ],
    whyItMatters:
      "When an intervention involves overdose risk, complex withdrawal, serious psychiatric symptoms, or chronic medical illness, a physician on the team can evaluate medical safety in real time, recommend the right level of care, and bridge a family directly to medication-assisted treatment or hospital-based services. An MD interventionist combines clinical authority with intervention expertise.",
    issuingBody: "State medical boards",
  },
  {
    slug: "jd",
    code: "JD",
    name: "Juris Doctor (Attorney)",
    shortDescription:
      "A licensed attorney — a Juris Doctor admitted to a state bar and authorized to practice law.",
    whatItIs:
      "A JD is the professional doctorate required to practice law in the United States. An attorney working in or alongside intervention is licensed by a state bar and can advise on the legal dimensions of a case — guardianship and conservatorship, mental health holds and civil commitment, family and custody matters, employment and licensing issues for impaired professionals, criminal matters tied to substance use, estate planning, and the legal protection of the family and the identified person.",
    requirements: [
      "Bachelor's degree, followed by a Juris Doctor (JD) degree from an ABA-accredited law school",
      "Passing the bar examination in at least one U.S. state (or the Uniform Bar Examination)",
      "Passing the Multistate Professional Responsibility Examination (MPRE) in most jurisdictions",
      "A character and fitness review by the state bar",
      "An active license in good standing with the state bar",
      "Adherence to the ABA Model Rules of Professional Conduct as adopted by the licensing state",
      "Ongoing Continuing Legal Education (CLE) for license renewal",
    ],
    whyItMatters:
      "Many interventions carry real legal stakes — a pending arrest or DUI, a professional licensing board complaint, a custody dispute, an emergency guardianship or conservatorship, a civil commitment, or pressure from an employer with a 'last chance' agreement. Pairing a JD with a clinical or intervention credential is uniquely powerful: a JD + CIP, CADC, LCSW, LPC, or MD interventionist can speak the language of the courts, prosecutors, licensing boards, and HR departments while still leading the clinical intervention itself. That combination lets the team negotiate treatment in lieu of prosecution, protect a professional's license while they get help, structure a legally enforceable family agreement, coordinate with criminal defense or family law counsel, and make sure nothing said in the intervention puts the identified person or family at unnecessary legal risk. For high-stakes cases — physicians, attorneys, pilots, executives, or anyone already entangled with the legal system — a JD-credentialed interventionist can keep the legal and clinical strategies aligned instead of working against each other.",
    issuingBody: "State bar associations",
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