export interface Interventionist {
  slug: string;
  name: string;
  credentials: string;
  region: string;
  statesServed: string[];
  specialties: string[];
  yearsExperience: number;
  bio: string;
  fullBio: string;
  approach: string;
  certifications: string[];
  quote: string;
  phone?: string;
  email?: string;
  website?: string;
  featured?: boolean;
}

export const interventionists: Interventionist[] = [
  {
    slug: "matt-brown",
    name: "Matt Brown",
    credentials: "BRI-II, CADC",
    region: "Oregon / National",
    statesServed: ["Oregon", "Washington", "California", "National"],
    specialties: ["Substance Use", "Adolescent", "Executive/Professional"],
    yearsExperience: 20,
    bio: "Founder of The Interventionist Network and Freedom Interventions. 20+ years of frontline experience helping families navigate addiction crises.",
    fullBio: "Matt Brown has dedicated over two decades to helping families in crisis. As the founder of Freedom Interventions and The Interventionist Network, he has personally conducted hundreds of interventions across the country. His approach combines the clinical rigor of evidence-based methods with the compassion that comes from his own 22 years of personal recovery.\n\nMatt is also the founder of the Sober Helpline and host of the Party Wreckers podcast, where he discusses the realities of addiction intervention with fellow professionals and families. His mission is simple: connect every family in crisis with a trusted professional who can help.\n\nBeyond his direct work with families, Matt has become a leading voice in the fight against patient brokering and referral fee culture in the addiction treatment industry. The Interventionist Network was born from his belief that families deserve better — better access, better ethics, and better outcomes.",
    approach: "I believe every family deserves honesty, compassion, and a clear path forward. My approach is direct but never aggressive. I meet families where they are, help them understand the disease of addiction, and guide them through a structured process that puts their loved one's recovery first.",
    certifications: ["BRI-II Certified", "CADC", "ARISE Trained", "20+ Years Field Experience"],
    quote: "Every family deserves a fighting chance. That's why I built this network.",
    phone: "(541) 838-6009",
    email: "matt@theinterventionistnetwork.com",
    website: "https://freedominterventions.com",
    featured: true,
  },
  {
    slug: "sarah-chen",
    name: "Sarah Chen",
    credentials: "BRI-I, LPC, CADC",
    region: "Northeast",
    statesServed: ["New York", "New Jersey", "Connecticut", "Pennsylvania", "Massachusetts"],
    specialties: ["Substance Use", "Mental Health Co-occurring", "Executive/Professional"],
    yearsExperience: 12,
    bio: "Licensed professional counselor specializing in dual-diagnosis interventions for professionals and executives in the Northeast.",
    fullBio: "Sarah Chen brings a unique combination of clinical expertise and real-world intervention experience to every case. With a background in psychology and over 12 years of specialized intervention work, she has developed a reputation for handling complex, high-stakes situations involving executives, attorneys, and medical professionals.\n\nHer approach integrates cognitive behavioral techniques with the ARISE model, creating a framework that respects the dignity of the individual while holding firm boundaries. Sarah has been instrumental in developing intervention protocols for corporate environments and has consulted with HR departments at Fortune 500 companies.\n\nSarah is passionate about breaking the stigma surrounding mental health and addiction in professional settings. She believes that early intervention is key and works tirelessly to help families recognize the signs before a crisis escalates.",
    approach: "I combine clinical expertise with genuine compassion. For professional and executive clients, I create discreet, structured interventions that protect careers while prioritizing recovery. Every situation is unique, and I tailor my approach accordingly.",
    certifications: ["BRI-I Certified", "Licensed Professional Counselor", "CADC", "ARISE Certified"],
    quote: "The hardest step is asking for help. I make the next steps easier.",
    featured: true,
  },
  {
    slug: "james-walker",
    name: "James Walker",
    credentials: "CIP, BRI-II",
    region: "Southeast",
    statesServed: ["Florida", "Georgia", "Alabama", "Tennessee", "South Carolina", "North Carolina"],
    specialties: ["Substance Use", "Adolescent", "Process Addiction/Gambling"],
    yearsExperience: 15,
    bio: "Veteran interventionist serving the Southeast with specialties in adolescent and young adult substance use disorders.",
    fullBio: "James Walker has been on the front lines of addiction intervention for 15 years, with a particular focus on adolescent and young adult populations. Based in the Southeast, he has developed deep connections with treatment centers and recovery resources throughout the region.\n\nBefore becoming an interventionist, James worked in youth outreach and criminal justice, giving him a unique perspective on the intersection of addiction, mental health, and the legal system. He is known for his ability to connect with resistant young people and their families in ways that feel authentic rather than confrontational.\n\nJames is a certified intervention professional and holds advanced training in adolescent brain development and process addictions. He frequently speaks at schools and community organizations about prevention and early intervention strategies.",
    approach: "I specialize in reaching young people who don't think they have a problem. My approach is firm but relatable — I meet them where they are, not where their parents wish they were. For families, I provide structure, hope, and a clear plan forward.",
    certifications: ["Certified Intervention Professional (CIP)", "BRI-II Certified", "Adolescent Specialist Training", "Process Addiction Certified"],
    quote: "Young people don't need a lecture. They need someone who gets it.",
    featured: true,
  },
  {
    slug: "maria-gonzalez",
    name: "Maria Gonzalez",
    credentials: "ARISE, CADC, LCSW",
    region: "Southwest / West",
    statesServed: ["Texas", "Arizona", "New Mexico", "Colorado", "Nevada"],
    specialties: ["Substance Use", "Eating Disorders", "Mental Health Co-occurring"],
    yearsExperience: 10,
    bio: "Bilingual interventionist (English/Spanish) specializing in eating disorders and co-occurring mental health conditions.",
    fullBio: "Maria Gonzalez is a licensed clinical social worker and certified addiction counselor who brings cultural competency and clinical depth to every intervention. Fluent in both English and Spanish, she serves diverse communities across the Southwest and has become a trusted resource for Hispanic and Latino families navigating addiction and eating disorders.\n\nWith over a decade of experience, Maria has developed a specialization in co-occurring disorders — particularly the intersection of eating disorders, substance use, and trauma. Her ARISE-based approach emphasizes family involvement and long-term recovery planning rather than short-term crisis management.\n\nMaria is a published author and frequent speaker at national addiction conferences. She advocates for culturally sensitive treatment approaches and has developed training materials used by treatment centers throughout the region.",
    approach: "I believe that cultural understanding is essential to effective intervention. I work with families holistically, addressing not just the addiction but the underlying trauma, family dynamics, and cultural factors that contribute to it. My goal is lasting recovery, not just a moment of change.",
    certifications: ["ARISE Certified", "CADC", "Licensed Clinical Social Worker (LCSW)", "Eating Disorder Specialist"],
    quote: "Recovery doesn't happen in isolation. It happens in the context of family and community.",
    featured: true,
  },
  {
    slug: "david-thompson",
    name: "David Thompson",
    credentials: "BRI-I, CIP",
    region: "Midwest",
    statesServed: ["Illinois", "Michigan", "Ohio", "Indiana", "Wisconsin", "Minnesota"],
    specialties: ["Substance Use", "Elderly/Senior", "Executive/Professional"],
    yearsExperience: 18,
    bio: "Experienced interventionist serving the Midwest with particular expertise in elderly substance abuse and prescription drug dependency.",
    fullBio: "David Thompson has spent 18 years helping families across the Midwest navigate the complexities of addiction intervention. His work with elderly and senior populations has made him a pioneer in addressing the growing crisis of prescription drug dependency and late-life alcoholism.\n\nDavid's career began in hospital social work, where he witnessed firsthand how often addiction in older adults goes unrecognized and untreated. He transitioned to intervention work to fill a critical gap, developing protocols specifically designed for situations involving elderly family members, where medical complications and family dynamics create unique challenges.\n\nIn addition to his work with seniors, David maintains a thriving practice serving professionals and executives. His measured, evidence-based approach has earned him the trust of families, physicians, and corporate HR departments throughout the Midwest.",
    approach: "My approach is grounded in respect and evidence. With elderly clients, I work closely with medical professionals to ensure safety. With executives, I provide discretion and structure. In all cases, I prioritize the dignity of every person in the room.",
    certifications: ["BRI-I Certified", "Certified Intervention Professional (CIP)", "Geriatric Addiction Specialist", "Corporate Intervention Training"],
    quote: "Age doesn't protect anyone from addiction. Neither does success. But help is always possible.",
  },
  {
    slug: "rachel-martinez",
    name: "Rachel Martinez",
    credentials: "BRI-II, CADC",
    region: "West Coast",
    statesServed: ["California", "Oregon", "Washington", "Hawaii"],
    specialties: ["Substance Use", "Adolescent", "Process Addiction/Gambling"],
    yearsExperience: 8,
    bio: "West Coast interventionist specializing in young adults, tech industry professionals, and process addictions.",
    fullBio: "Rachel Martinez brings energy, relatability, and clinical precision to her intervention work on the West Coast. With 8 years of experience, she has carved out a niche working with young adults and tech industry professionals dealing with substance use and process addictions.\n\nRachel's background includes extensive work in harm reduction and motivational interviewing, which informs her non-confrontational approach to intervention. She understands the unique pressures faced by young professionals in high-stress industries and creates intervention plans that acknowledge these realities while firmly advocating for change.\n\nHer expertise in process addictions — including gaming, social media, and gambling — has made her a sought-after resource for families dealing with behavioral addictions that don't involve substances but are equally destructive.",
    approach: "I don't believe in the 'tough love' approach for everyone. I meet people where they are with honesty and compassion. For young adults and tech professionals, I focus on building genuine connection first — because you can't help someone who doesn't trust you.",
    certifications: ["BRI-II Certified", "CADC", "Motivational Interviewing Certified", "Process Addiction Specialist"],
    quote: "Trust is the foundation of every successful intervention.",
  },
  {
    slug: "robert-kim",
    name: "Robert Kim",
    credentials: "CIP, ARISE, LMFT",
    region: "Mid-Atlantic",
    statesServed: ["Virginia", "Maryland", "Washington DC", "Delaware", "West Virginia"],
    specialties: ["Substance Use", "Mental Health Co-occurring", "Executive/Professional"],
    yearsExperience: 14,
    bio: "Licensed marriage and family therapist turned interventionist, specializing in family systems and dual-diagnosis cases.",
    fullBio: "Robert Kim's transition from licensed marriage and family therapist to addiction interventionist gives him a distinctive edge in understanding and addressing the complex family dynamics that surround addiction. With 14 years of combined clinical and intervention experience, he approaches every case through the lens of the family system.\n\nBased in the Mid-Atlantic region, Robert has developed particular expertise in dual-diagnosis cases where mental health conditions and substance use disorders intersect. His clinical training allows him to identify and address co-occurring issues that other interventionists might miss.\n\nRobert is known for his thorough preparation and follow-through. He works with families not just through the intervention itself but provides ongoing support during the critical transition to treatment, helping families establish healthy boundaries and communication patterns.",
    approach: "Addiction doesn't happen in a vacuum — it happens within a family system. I help families understand their role in both the problem and the solution. My interventions are thoroughly planned, clinically informed, and always focused on long-term family healing, not just getting someone into treatment.",
    certifications: ["Certified Intervention Professional (CIP)", "ARISE Certified", "Licensed Marriage & Family Therapist", "Dual Diagnosis Specialist"],
    quote: "Healing the individual requires healing the family. They go hand in hand.",
  },
  {
    slug: "lisa-campbell",
    name: "Lisa Campbell",
    credentials: "BRI-I, CADC, CIP",
    region: "Mountain West",
    statesServed: ["Montana", "Wyoming", "Idaho", "Utah", "Colorado"],
    specialties: ["Substance Use", "Adolescent", "Elderly/Senior"],
    yearsExperience: 11,
    bio: "Mountain West interventionist serving rural communities with compassion and expertise in both adolescent and senior populations.",
    fullBio: "Lisa Campbell has dedicated her career to serving families in the Mountain West — a region where access to addiction services and intervention professionals can be extremely limited. Over 11 years, she has built a practice that bridges the gap between rural communities and quality intervention services.\n\nLisa's work takes her to remote communities across five states, where she often serves as the first point of contact for families who have never encountered a professional interventionist. She is known for her patience, her warmth, and her ability to navigate the unique cultural dynamics of rural and frontier communities.\n\nHer dual specialization in adolescent and elderly populations addresses two critical and often underserved groups. Lisa has developed partnerships with treatment centers across the region and is an advocate for expanding addiction services in rural areas.",
    approach: "In rural communities, trust is everything. I take the time to understand each family's unique circumstances, their values, and their resources. My approach is gentle but clear — I help families see the reality of their situation while showing them a path to hope and recovery.",
    certifications: ["BRI-I Certified", "CADC", "Certified Intervention Professional (CIP)", "Rural Behavioral Health Specialist"],
    quote: "Distance shouldn't determine whether a family gets help. Everyone deserves access to quality intervention.",
  },
];

export const specialtyOptions = [
  "Substance Use",
  "Adolescent",
  "Executive/Professional",
  "Eating Disorders",
  "Process Addiction/Gambling",
  "Mental Health Co-occurring",
  "Elderly/Senior",
];

export const stateOptions = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming", "National",
];
