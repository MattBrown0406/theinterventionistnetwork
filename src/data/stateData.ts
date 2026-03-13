export interface StateData {
  slug: string;
  name: string;
  abbreviation: string;
  population: string;
  overdoseDeathsAnnual: string;
  overdoseRatePer100k: string;
  sudPrevalence: string;
  primarySubstances: string[];
  treatmentGap: string;
  naloxoneAccess: string;
  keyStats: string[];
  overview: string;
  substanceDetails: string;
  familyGuidance: string;
  interventionContext: string;
  resources: { name: string; description: string }[];
}

export const stateData: Record<string, StateData> = {
  alabama: {
    slug: "alabama",
    name: "Alabama",
    abbreviation: "AL",
    population: "5.1 million",
    overdoseDeathsAnnual: "1,072",
    overdoseRatePer100k: "21.0",
    sudPrevalence: "7.5% of adults",
    primarySubstances: ["Methamphetamine", "Fentanyl", "Prescription Opioids", "Alcohol"],
    treatmentGap: "Over 80% of Alabamians needing treatment do not receive it",
    naloxoneAccess: "Standing order allows pharmacies to dispense naloxone without a prescription",
    keyStats: [
      "Alabama ranks among the top 15 states for opioid prescribing rates",
      "Methamphetamine seizures have increased over 300% in the past decade",
      "Rural counties face severe shortages of addiction treatment providers",
      "Fentanyl-related deaths have surged over 200% since 2019"
    ],
    overview: "Alabama faces a complex addiction crisis driven by its rural geography, limited treatment infrastructure, and historically high opioid prescribing rates. The state has seen a dramatic shift from prescription opioids to illicit fentanyl and methamphetamine, particularly in rural and underserved communities. Families often struggle to find qualified addiction professionals, making professional intervention services critical for connecting loved ones with appropriate care.",
    substanceDetails: "Methamphetamine has become the most commonly seized drug in Alabama, surpassing all other substances. Fentanyl has infiltrated the drug supply, contributing to a sharp rise in overdose deaths. Prescription opioid misuse remains prevalent, particularly in counties with limited healthcare access. Alcohol use disorder affects hundreds of thousands of residents and is often co-occurring with other substance use.",
    familyGuidance: "If your family member is struggling with addiction in Alabama, early intervention is critical. Many families wait until a crisis moment — an overdose, an arrest, a medical emergency — before seeking help. A professional interventionist can help your family take action before that crisis occurs. Look for interventionists experienced with the specific substances and cultural dynamics present in Alabama communities.",
    interventionContext: "Interventions in Alabama often involve navigating limited local treatment options, which is why working with a professional who has relationships with quality treatment centers both in-state and nationally is essential. Many Alabama families benefit from interventionists who understand the unique cultural and socioeconomic factors of the region, including strong family and faith-based values that can be leveraged during the intervention process.",
    resources: [
      { name: "Alabama Department of Mental Health", description: "State agency overseeing substance abuse prevention and treatment services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" },
      { name: "Alabama Crisis Services", description: "Statewide crisis intervention and referral services" }
    ]
  },
  alaska: {
    slug: "alaska",
    name: "Alaska",
    abbreviation: "AK",
    population: "733,000",
    overdoseDeathsAnnual: "218",
    overdoseRatePer100k: "29.8",
    sudPrevalence: "9.8% of adults",
    primarySubstances: ["Alcohol", "Methamphetamine", "Fentanyl", "Heroin"],
    treatmentGap: "Only 1 in 8 Alaskans needing treatment receives it",
    naloxoneAccess: "Standing order for naloxone distribution statewide",
    keyStats: [
      "Alaska has one of the highest per-capita alcohol consumption rates in the U.S.",
      "Suicide rates linked to substance use are nearly double the national average",
      "Remote communities face extreme barriers to treatment access",
      "Fentanyl has become the leading cause of overdose deaths"
    ],
    overview: "Alaska's vast geography and remote communities create unique challenges in addressing addiction. The state consistently ranks among the highest for alcohol consumption, binge drinking, and alcohol-related deaths. In recent years, fentanyl and methamphetamine have increasingly penetrated even remote areas, compounding the crisis. The isolation many Alaskans experience can accelerate substance use and make family intervention even more important.",
    substanceDetails: "Alcohol remains the dominant substance of concern in Alaska, with rates of binge drinking and alcohol use disorder significantly above the national average. Methamphetamine use has surged across the state, while fentanyl has become the primary driver of overdose deaths. The limited road system means drugs flow primarily through Anchorage and Fairbanks before reaching rural communities.",
    familyGuidance: "Families in Alaska face the added challenge of geographic isolation when seeking help for a loved one. A professional interventionist experienced with remote and rural logistics can make the difference between a successful intervention and a missed opportunity. Many Alaska families find that connecting with an interventionist who can coordinate travel and treatment placement is essential.",
    interventionContext: "Interventions in Alaska require careful logistical planning due to the state's geography. Many families are separated by hundreds of miles. Interventionists working in Alaska need cultural competency with Alaska Native communities and an understanding of how isolation, seasonal darkness, and limited infrastructure affect both addiction and recovery.",
    resources: [
      { name: "Alaska Division of Behavioral Health", description: "State substance abuse and mental health services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" },
      { name: "Alaska 2-1-1", description: "Statewide resource and referral helpline" }
    ]
  },
  arizona: {
    slug: "arizona",
    name: "Arizona",
    abbreviation: "AZ",
    population: "7.4 million",
    overdoseDeathsAnnual: "4,250",
    overdoseRatePer100k: "57.5",
    sudPrevalence: "8.2% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Heroin", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Naloxone available without a prescription at pharmacies statewide",
    keyStats: [
      "Arizona has one of the highest overdose death rates in the western U.S.",
      "Fentanyl is involved in over 70% of overdose deaths",
      "Proximity to the southern border contributes to drug trafficking volume",
      "Phoenix metro area accounts for the majority of overdose deaths statewide"
    ],
    overview: "Arizona is one of the hardest-hit states in the nation's fentanyl crisis. Its proximity to the southern border creates high-volume trafficking corridors, flooding communities with cheap, potent fentanyl and methamphetamine. The state declared a public health emergency for opioids and has invested in expanded treatment capacity, but demand far outpaces supply. Families across Arizona are losing loved ones at an alarming rate, making professional intervention more urgent than ever.",
    substanceDetails: "Fentanyl dominates Arizona's overdose crisis, with counterfeit pills (often disguised as prescription medications) driving youth and young adult deaths. Methamphetamine remains the most commonly used illicit stimulant. Heroin use persists in urban areas, while alcohol use disorder affects all demographics. Prescription opioid misuse, though declining from its peak, continues in many communities.",
    familyGuidance: "If you're searching for an interventionist in Arizona, timing matters. The potency of fentanyl means every day of delay increases the risk of a fatal overdose. Professional interventionists can mobilize quickly, coordinate with treatment centers across the state or nationally, and guide your family through the process with compassion and structure.",
    interventionContext: "Arizona's treatment landscape includes a mix of high-quality residential programs and lower-quality facilities. An experienced interventionist can help families navigate this landscape, avoiding 'patient brokering' operations and connecting loved ones with evidence-based care. Cultural sensitivity to Arizona's diverse population — including Hispanic, Native American, and veteran communities — is essential.",
    resources: [
      { name: "Arizona Health Care Cost Containment System (AHCCCS)", description: "State Medicaid agency with substance use treatment coverage" },
      { name: "Arizona Opioid Emergency Response", description: "State opioid crisis resources and data" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  arkansas: {
    slug: "arkansas",
    name: "Arkansas",
    abbreviation: "AR",
    population: "3.0 million",
    overdoseDeathsAnnual: "673",
    overdoseRatePer100k: "22.3",
    sudPrevalence: "7.1% of adults",
    primarySubstances: ["Methamphetamine", "Fentanyl", "Prescription Opioids", "Alcohol"],
    treatmentGap: "Over 85% of those needing treatment do not receive it",
    naloxoneAccess: "Collaborative practice agreements allow pharmacy-based naloxone access",
    keyStats: [
      "Arkansas has one of the highest methamphetamine usage rates in the country",
      "Rural treatment deserts affect the majority of counties",
      "Prescription opioid rates remain above the national average",
      "Fentanyl deaths have increased over 150% since 2019"
    ],
    overview: "Arkansas faces a severe addiction crisis compounded by rural poverty, limited healthcare infrastructure, and one of the nation's highest methamphetamine use rates. The state's treatment system is underfunded, leaving most people who need help without access to care. Fentanyl is an emerging and growing threat, transforming what was historically a prescription opioid and meth problem into something far more lethal.",
    substanceDetails: "Methamphetamine is the primary drug of concern in Arkansas, with manufacturing and use prevalent across rural counties. Fentanyl has increasingly been found mixed into other drugs, contributing to a spike in unexpected overdose deaths. Prescription opioid misuse remains common given the state's historically high prescribing rates. Alcohol use disorder is widespread but often undertreated.",
    familyGuidance: "Families in Arkansas often have limited local options for intervention and treatment. Working with a professional interventionist who has national treatment center relationships can dramatically expand your loved one's options. Don't wait for the situation to become life-threatening — early intervention saves lives.",
    interventionContext: "Interventions in Arkansas require sensitivity to the state's rural culture, close-knit family dynamics, and economic challenges. Many families benefit from interventionists who can arrange travel for treatment, as the best facility for a particular case may be out of state. Faith-based values are often important in Arkansas families and can be integrated into the intervention approach.",
    resources: [
      { name: "Arkansas Department of Human Services – DBHS", description: "State behavioral health services and treatment resources" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  california: {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    population: "39.0 million",
    overdoseDeathsAnnual: "12,500",
    overdoseRatePer100k: "32.0",
    sudPrevalence: "8.5% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Heroin", "Alcohol", "Cannabis", "Prescription Opioids"],
    treatmentGap: "Over 70% of Californians needing treatment do not receive it",
    naloxoneAccess: "Naloxone available without a prescription statewide",
    keyStats: [
      "California has the highest total number of overdose deaths in the U.S.",
      "Fentanyl deaths increased over 1,000% between 2016 and 2023",
      "Homelessness and addiction are deeply intertwined in major cities",
      "The state has more treatment facilities than any other state but still faces access gaps"
    ],
    overview: "California's sheer size means its addiction crisis is the largest in raw numbers of any state. From the streets of San Francisco and Los Angeles to Central Valley farming communities and affluent suburbs, addiction touches every demographic. Fentanyl has transformed the landscape, with counterfeit pills and powder flooding the state. Despite having the most treatment facilities in the country, geographic and socioeconomic barriers prevent millions from accessing care.",
    substanceDetails: "Fentanyl is now the leading cause of overdose death in California, often pressed into counterfeit pills that users believe are legitimate prescriptions. Methamphetamine remains pervasive, particularly in the Central Valley and inland regions. Heroin use persists in urban centers. Alcohol use disorder affects the largest number of Californians overall. Cannabis, while legal, contributes to substance use disorders in some populations.",
    familyGuidance: "California families have access to some of the nation's best treatment programs but also face a crowded, confusing landscape of providers. A professional interventionist can cut through the noise, help your family avoid predatory marketing, and connect your loved one with a program that genuinely fits their needs. Whether you're in a major city or a rural area, professional guidance is invaluable.",
    interventionContext: "Interventions in California span an enormous range of situations — from high-net-worth professionals in Silicon Valley to families dealing with homelessness in Los Angeles. California's diversity requires cultural competency and familiarity with Medi-Cal, private insurance, and the state's regulatory landscape for treatment facilities. An experienced interventionist can navigate these complexities.",
    resources: [
      { name: "California DHCS – Substance Use Disorder Services", description: "State department overseeing addiction treatment" },
      { name: "California Bridge Program", description: "Emergency department-based addiction treatment initiation" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  colorado: {
    slug: "colorado",
    name: "Colorado",
    abbreviation: "CO",
    population: "5.9 million",
    overdoseDeathsAnnual: "2,400",
    overdoseRatePer100k: "40.7",
    sudPrevalence: "9.0% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Alcohol", "Heroin", "Cocaine"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Naloxone available without a prescription at pharmacies",
    keyStats: [
      "Colorado's overdose death rate has more than doubled since 2019",
      "Fentanyl is now the leading cause of death for adults aged 18–45",
      "The Denver metro area accounts for over half of all overdose deaths",
      "Methamphetamine and fentanyl are increasingly used together (speedballing)"
    ],
    overview: "Colorado is experiencing a rapidly escalating overdose crisis driven primarily by illicit fentanyl. The state has seen its overdose death rate more than double in recent years, with fentanyl now killing more young adults than car accidents. Colorado's outdoor recreation culture and progressive attitudes can sometimes mask the severity of substance use disorders until they become critical. Professional intervention is often the catalyst that moves families from paralysis to action.",
    substanceDetails: "Fentanyl has become the deadliest substance in Colorado, often disguised as counterfeit prescription pills or mixed into other drugs. Methamphetamine use is widespread across both urban and mountain communities. Alcohol abuse remains the most prevalent substance use disorder. Cocaine use has resurfaced as a significant concern, with fentanyl contamination making it increasingly lethal.",
    familyGuidance: "Colorado families often notice warning signs during ski season, outdoor activities, or social gatherings where substance use is normalized. If you're seeing escalating use, isolation, or personality changes in your loved one, don't wait. A professional interventionist can help you have the conversation that saves their life.",
    interventionContext: "Colorado's treatment landscape is robust in the Front Range but sparse in mountain and western slope communities. Interventionists working in Colorado need to understand the state's unique demographics — from affluent ski communities to working-class Denver neighborhoods — and have relationships with quality programs both in-state and nationally.",
    resources: [
      { name: "Colorado Crisis Services", description: "24/7 crisis support: 1-844-493-8255 or text TALK to 38255" },
      { name: "Colorado Office of Behavioral Health", description: "State behavioral health services and resources" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  connecticut: {
    slug: "connecticut",
    name: "Connecticut",
    abbreviation: "CT",
    population: "3.6 million",
    overdoseDeathsAnnual: "1,700",
    overdoseRatePer100k: "47.2",
    sudPrevalence: "8.0% of adults",
    primarySubstances: ["Fentanyl", "Heroin", "Cocaine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 65% of those needing treatment do not receive it",
    naloxoneAccess: "Naloxone available at pharmacies without a prescription",
    keyStats: [
      "Connecticut has one of the highest per-capita overdose death rates in the U.S.",
      "Fentanyl is present in over 85% of overdose deaths",
      "The opioid crisis disproportionately affects Black and Hispanic communities",
      "Connecticut has invested heavily in harm reduction and treatment access"
    ],
    overview: "Connecticut, despite its wealth and proximity to major healthcare systems, has one of the highest overdose death rates in the country. The state's opioid crisis began with prescription pills and evolved through heroin to the current fentanyl epidemic. Disparities in overdose deaths along racial lines are stark, with Black residents dying at significantly higher rates. Connecticut has been a leader in harm reduction policies but continues to lose residents at an alarming rate.",
    substanceDetails: "Fentanyl dominates Connecticut's overdose crisis, present in the vast majority of deaths. Cocaine mixed with fentanyl is a particularly lethal combination that has driven deaths in urban areas like Hartford, Bridgeport, and New Haven. Heroin use persists but is increasingly replaced by fentanyl. Alcohol use disorder remains the most common substance use disorder by total numbers.",
    familyGuidance: "Connecticut families often have access to excellent treatment resources but struggle with knowing when and how to intervene. The stigma of addiction in affluent communities can delay action. A professional interventionist helps families overcome shame, denial, and enabling patterns to get their loved one into treatment.",
    interventionContext: "Interventions in Connecticut benefit from the state's concentration of quality treatment programs and proximity to top facilities in the Northeast. However, the state's stark economic disparities mean approaches must be tailored to widely varying family situations, from Greenwich to Waterbury.",
    resources: [
      { name: "Connecticut DMHAS", description: "Department of Mental Health and Addiction Services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  delaware: {
    slug: "delaware",
    name: "Delaware",
    abbreviation: "DE",
    population: "1.0 million",
    overdoseDeathsAnnual: "515",
    overdoseRatePer100k: "51.5",
    sudPrevalence: "8.3% of adults",
    primarySubstances: ["Fentanyl", "Heroin", "Alcohol", "Cocaine", "Prescription Opioids"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Standing order allows pharmacy-dispensed naloxone",
    keyStats: [
      "Delaware consistently ranks in the top 5 for per-capita overdose deaths",
      "Fentanyl is involved in over 80% of overdose deaths",
      "Small state size means limited treatment facility options",
      "Wilmington has been particularly hard-hit by the opioid crisis"
    ],
    overview: "Despite its small size, Delaware has one of the highest per-capita overdose death rates in the nation. The I-95 corridor brings a steady supply of illicit drugs from Philadelphia and Baltimore, and the state's limited size means fewer treatment options. Wilmington and New Castle County bear the brunt of the crisis, but no part of the state is untouched.",
    substanceDetails: "Fentanyl is the primary driver of overdose deaths in Delaware, frequently mixed with heroin and cocaine. The state's proximity to major drug markets in Philadelphia and Baltimore ensures a constant supply. Alcohol use disorder is widespread, and prescription opioid misuse, while declining, contributed to the current crisis.",
    familyGuidance: "Delaware's small size can be both a blessing and a challenge — community connections are strong, but treatment options are limited. Many Delaware families benefit from interventionists who can coordinate out-of-state treatment placement while maintaining family involvement in the recovery process.",
    interventionContext: "Interventions in Delaware benefit from the state's tight-knit communities but must account for limited in-state treatment capacity. Experienced interventionists often recommend facilities in neighboring states for the best clinical match.",
    resources: [
      { name: "Delaware Division of Substance Abuse and Mental Health", description: "State behavioral health services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  florida: {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    population: "22.6 million",
    overdoseDeathsAnnual: "8,900",
    overdoseRatePer100k: "39.4",
    sudPrevalence: "7.8% of adults",
    primarySubstances: ["Fentanyl", "Cocaine", "Methamphetamine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Standing order for naloxone at all pharmacies",
    keyStats: [
      "Florida has the second-highest total overdose deaths in the U.S.",
      "The state has aggressively cracked down on 'pill mills' since 2012",
      "South Florida's treatment industry has faced scrutiny for patient brokering",
      "Fentanyl has replaced heroin as the primary opioid threat"
    ],
    overview: "Florida's addiction landscape has evolved dramatically over the past two decades. Once the epicenter of the 'pill mill' crisis, aggressive regulation shut down rogue pain clinics but left many patients turning to illicit alternatives. Today, fentanyl and cocaine drive the majority of overdose deaths. Florida is also home to one of the largest treatment industries in the country, which brings both opportunity and risk — families must navigate a landscape that includes excellent programs alongside predatory operations.",
    substanceDetails: "Fentanyl is the leading cause of overdose death in Florida, surpassing prescription opioids, cocaine, and heroin. Cocaine use remains high, particularly in South Florida, and is increasingly contaminated with fentanyl. Methamphetamine has emerged as a growing threat statewide. Alcohol use disorder is prevalent across all demographics, exacerbated by the state's tourism and hospitality culture.",
    familyGuidance: "Florida families must be cautious when choosing treatment — the state's large treatment industry includes both world-class programs and facilities engaged in patient brokering and insurance fraud. A professional interventionist with integrity can help you avoid these pitfalls and find genuinely effective care. Never respond to an unsolicited call from a treatment center.",
    interventionContext: "Florida's treatment industry is the largest in the Southeast, making it a common destination for out-of-state treatment placement. However, this also means families need guidance to avoid predatory practices. An ethical interventionist will never accept referral fees or steer families toward specific facilities for financial gain — this is a core principle of The Interventionist Network.",
    resources: [
      { name: "Florida DCF – Substance Abuse Program", description: "State substance abuse treatment resources" },
      { name: "Florida 211", description: "Statewide information and referral service" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  georgia: {
    slug: "georgia",
    name: "Georgia",
    abbreviation: "GA",
    population: "11.0 million",
    overdoseDeathsAnnual: "3,200",
    overdoseRatePer100k: "29.1",
    sudPrevalence: "7.2% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Cocaine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Standing order allows pharmacy-dispensed naloxone",
    keyStats: [
      "Georgia has seen overdose deaths more than double since 2019",
      "Atlanta is a major drug distribution hub for the Southeast",
      "Rural Georgia faces extreme treatment access challenges",
      "Fentanyl and methamphetamine are often used in combination"
    ],
    overview: "Georgia's addiction crisis spans from Atlanta's urban core to deeply rural communities across the state. Atlanta serves as a major distribution point for drugs entering the Southeast, meaning Georgia families are exposed to high-purity, low-cost fentanyl and methamphetamine. The state's treatment infrastructure is concentrated in metro Atlanta, leaving most of Georgia's 159 counties underserved.",
    substanceDetails: "Fentanyl has driven a massive increase in overdose deaths across Georgia. Methamphetamine remains the most commonly used stimulant, particularly outside metro Atlanta. Cocaine use is prevalent in urban areas. Alcohol use disorder affects the most Georgians overall but receives less attention than the opioid crisis. Prescription opioid misuse has declined but remains a gateway for many.",
    familyGuidance: "Georgia families, particularly those in rural areas, often feel they have nowhere to turn. A professional interventionist can bridge the gap between your family and quality treatment, whether that means a facility in Atlanta, elsewhere in the Southeast, or nationally. The key is acting before tragedy strikes.",
    interventionContext: "Interventions in Georgia require understanding the state's significant urban-rural divide. Metro Atlanta families may have different needs and resources than families in south Georgia or the mountains. Cultural sensitivity and understanding of Southern family dynamics are important for interventionists working in the state.",
    resources: [
      { name: "Georgia DBHDD", description: "Department of Behavioral Health and Developmental Disabilities" },
      { name: "Georgia Crisis & Access Line", description: "24/7 crisis support: 1-800-715-4225" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  hawaii: {
    slug: "hawaii",
    name: "Hawaii",
    abbreviation: "HI",
    population: "1.4 million",
    overdoseDeathsAnnual: "340",
    overdoseRatePer100k: "24.3",
    sudPrevalence: "7.8% of adults",
    primarySubstances: ["Methamphetamine", "Alcohol", "Fentanyl", "Prescription Opioids"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Available through pharmacies and community organizations",
    keyStats: [
      "Hawaii has the highest methamphetamine use rate per capita in the U.S.",
      "Crystal meth ('ice') has devastated communities for decades",
      "Island geography creates unique barriers to treatment access",
      "Fentanyl is emerging as a growing threat"
    ],
    overview: "Hawaii's addiction crisis is uniquely shaped by its island geography. Methamphetamine, particularly crystal meth (locally known as 'ice'), has been the dominant drug of concern for decades, devastating families across all islands. The isolation of island life can both fuel addiction and make treatment access extremely difficult. In recent years, fentanyl has begun appearing in Hawaii's drug supply, adding a new lethal dimension to the crisis.",
    substanceDetails: "Crystal methamphetamine remains Hawaii's primary drug threat, with use rates far exceeding the national average. The drug has deeply impacted Native Hawaiian communities and is linked to significant domestic violence, child abuse, and homelessness. Alcohol misuse is widespread. Fentanyl is an emerging concern, though its presence is still smaller than on the mainland.",
    familyGuidance: "Hawaii families often need to consider mainland treatment options due to limited in-state capacity, particularly on neighbor islands. A professional interventionist experienced with Hawaii's unique logistics can coordinate travel, treatment placement, and family involvement across the Pacific.",
    interventionContext: "Interventions in Hawaii require cultural competency with Native Hawaiian and Pacific Islander communities, as well as logistical expertise in coordinating travel between islands and to the mainland. Understanding 'ohana (family) values and how they intersect with addiction and recovery is essential.",
    resources: [
      { name: "Hawaii ADAD", description: "Alcohol and Drug Abuse Division" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  idaho: {
    slug: "idaho",
    name: "Idaho",
    abbreviation: "ID",
    population: "2.0 million",
    overdoseDeathsAnnual: "450",
    overdoseRatePer100k: "22.5",
    sudPrevalence: "7.5% of adults",
    primarySubstances: ["Methamphetamine", "Fentanyl", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies with a collaborative practice agreement",
    keyStats: [
      "Idaho's overdose deaths have increased over 100% since 2019",
      "Methamphetamine is the most commonly seized drug",
      "Rural communities face severe treatment access gaps",
      "Fentanyl is driving the increase in opioid deaths"
    ],
    overview: "Idaho's growing population has been accompanied by a growing addiction crisis. Methamphetamine remains the dominant drug threat, particularly in rural areas, while fentanyl has arrived with devastating consequences. The state's limited treatment infrastructure and vast geography create significant barriers for families seeking help. Idaho's strong community and family values can be powerful assets when channeled through professional intervention.",
    substanceDetails: "Methamphetamine is the primary illicit drug in Idaho, with use concentrated in rural areas. Fentanyl is increasingly present, often mixed into counterfeit pills or other drugs. Alcohol abuse is widespread but often normalized in rural communities. Prescription opioid misuse, while declining nationally, persists in areas with limited healthcare oversight.",
    familyGuidance: "If your loved one is struggling with addiction in Idaho, know that help exists even if local options seem limited. A professional interventionist can connect you with quality treatment programs regionally or nationally and guide your family through the process of getting your loved one to accept help.",
    interventionContext: "Idaho's conservative culture and strong family bonds can be effectively leveraged during interventions. Interventionists working in Idaho should understand the state's rural character and be prepared for travel logistics across a large geographic area with limited infrastructure.",
    resources: [
      { name: "Idaho Department of Health and Welfare – Behavioral Health", description: "State behavioral health resources" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  illinois: {
    slug: "illinois",
    name: "Illinois",
    abbreviation: "IL",
    population: "12.6 million",
    overdoseDeathsAnnual: "3,800",
    overdoseRatePer100k: "30.2",
    sudPrevalence: "7.9% of adults",
    primarySubstances: ["Fentanyl", "Heroin", "Cocaine", "Alcohol", "Methamphetamine"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Standing order allows naloxone without a prescription",
    keyStats: [
      "Cook County (Chicago) accounts for the majority of overdose deaths",
      "Heroin-fentanyl mixtures are the primary driver of deaths",
      "Racial disparities in overdose deaths are among the worst in the nation",
      "Southern Illinois has a distinct methamphetamine problem"
    ],
    overview: "Illinois faces a dual addiction crisis — the fentanyl/heroin epidemic devastating Chicago and its suburbs, and the methamphetamine crisis affecting downstate communities. Chicago's West and South sides bear a disproportionate burden of overdose deaths, with Black residents dying at significantly higher rates. The state has invested in expanding treatment access but continues to lose thousands of residents annually.",
    substanceDetails: "Fentanyl, often mixed with heroin, is the primary cause of overdose death in Illinois, concentrated in the Chicago metro area. Cocaine mixed with fentanyl is an increasing threat. In southern Illinois, methamphetamine is the dominant concern. Alcohol use disorder is the most prevalent substance use disorder statewide.",
    familyGuidance: "Illinois families have access to a wide range of treatment options, particularly in the Chicago area, but navigating the system can be overwhelming during a crisis. A professional interventionist can help you act decisively, choosing the right approach and the right facility for your specific situation.",
    interventionContext: "Interventions in Illinois must account for the state's enormous diversity — from Chicago's urban neighborhoods to rural farming communities. Cultural competency across racial and ethnic lines is critical, particularly given the disparate impact of the crisis on Black and Brown communities.",
    resources: [
      { name: "Illinois SUPR", description: "Division of Substance Use Prevention and Recovery" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  indiana: {
    slug: "indiana",
    name: "Indiana",
    abbreviation: "IN",
    population: "6.8 million",
    overdoseDeathsAnnual: "3,100",
    overdoseRatePer100k: "45.6",
    sudPrevalence: "7.8% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Heroin", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available without a prescription at pharmacies",
    keyStats: [
      "Indiana ranks in the top 10 nationally for overdose death rates",
      "Fentanyl is involved in over 75% of overdose deaths",
      "Methamphetamine use has surged across rural counties",
      "Indianapolis is a major drug distribution hub"
    ],
    overview: "Indiana has been devastated by the opioid epidemic, with overdose death rates consistently exceeding the national average. Indianapolis serves as a distribution hub for fentanyl and other drugs flowing into the Midwest. Rural Indiana faces compounding challenges — high methamphetamine use, limited treatment access, and economic distress. The state has expanded treatment capacity but remains far from meeting demand.",
    substanceDetails: "Fentanyl is the leading cause of overdose death in Indiana, often mixed with heroin or pressed into counterfeit pills. Methamphetamine is the most commonly used illicit stimulant, with rural areas particularly affected. Alcohol abuse is widespread across all demographics. Prescription opioid misuse, though declining, remains above national averages in some counties.",
    familyGuidance: "Indiana families often find themselves caught between recognizing a problem and knowing what to do about it. A professional interventionist provides the structure, expertise, and compassion needed to bridge that gap. Don't try to handle an intervention on your own — the stakes are too high.",
    interventionContext: "Interventions in Indiana benefit from the state's family-oriented culture and strong community ties. Interventionists should understand the Midwest's unique dynamics, including the role of faith communities and the economic pressures that can both drive and complicate addiction.",
    resources: [
      { name: "Indiana DMHA", description: "Division of Mental Health and Addiction" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  iowa: {
    slug: "iowa",
    name: "Iowa",
    abbreviation: "IA",
    population: "3.2 million",
    overdoseDeathsAnnual: "560",
    overdoseRatePer100k: "17.5",
    sudPrevalence: "7.0% of adults",
    primarySubstances: ["Methamphetamine", "Alcohol", "Fentanyl", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under a statewide protocol",
    keyStats: [
      "Methamphetamine is the most significant drug threat in Iowa",
      "Fentanyl deaths have increased dramatically in recent years",
      "Iowa has some of the lowest access to addiction treatment in the nation",
      "Rural isolation compounds addiction challenges"
    ],
    overview: "Iowa's addiction crisis is defined by methamphetamine, alcohol, and an emerging fentanyl threat. The state's agricultural character, sparse population, and limited urban centers mean that treatment access is a major barrier for most residents. Iowa's culture of self-reliance can delay help-seeking, making professional intervention a critical tool for families trying to reach a loved one before it's too late.",
    substanceDetails: "Methamphetamine remains Iowa's primary drug threat, with the state consistently ranking among the highest for meth seizures and use. Alcohol misuse is deeply embedded in Iowa's culture and often goes unaddressed. Fentanyl is a growing and deadly presence, particularly in eastern Iowa. Prescription opioid misuse has decreased but contributed to current patterns.",
    familyGuidance: "Iowa families often wait too long to seek help, hoping the problem will resolve on its own. In a state with limited treatment infrastructure, having a professional interventionist who can quickly identify and secure appropriate treatment placement is invaluable.",
    interventionContext: "Interventions in Iowa work well with the state's strong family values and community orientation. The key challenge is treatment access — most counties lack local options, so interventionists must have strong relationships with regional and national programs.",
    resources: [
      { name: "Iowa HHS – Behavioral Health", description: "State behavioral health services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  kansas: {
    slug: "kansas",
    name: "Kansas",
    abbreviation: "KS",
    population: "2.9 million",
    overdoseDeathsAnnual: "680",
    overdoseRatePer100k: "23.4",
    sudPrevalence: "7.2% of adults",
    primarySubstances: ["Methamphetamine", "Fentanyl", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under a standing order",
    keyStats: [
      "Methamphetamine is the top drug threat in Kansas",
      "Fentanyl deaths have tripled in recent years",
      "Kansas City metro area is the primary distribution hub",
      "Rural Kansas has extremely limited treatment options"
    ],
    overview: "Kansas faces a steadily growing addiction crisis driven by methamphetamine and an increasingly lethal fentanyl supply. The Kansas City metro area on the eastern border serves as the primary entry point for drugs, but the impact is felt across the entire state. Rural Kansas communities face particularly acute challenges with limited treatment access and strong cultural barriers to seeking help.",
    substanceDetails: "Methamphetamine dominates Kansas's drug landscape, with high purity and low cost making it widely accessible. Fentanyl is increasingly present, driving a sharp rise in opioid deaths. Alcohol misuse is widespread and often normalized in agricultural communities. Prescription opioid use, while declining, continues to affect many families.",
    familyGuidance: "Kansas families dealing with addiction often feel isolated and uncertain about next steps. A professional interventionist can provide the structure and expertise your family needs, from planning the intervention to securing a treatment bed and coordinating travel logistics.",
    interventionContext: "Kansas interventions benefit from strong family and community bonds. The state's central location also means good access to quality treatment programs in neighboring states. Interventionists should be prepared for the cultural nuances of both urban Kansas City and deeply rural western Kansas.",
    resources: [
      { name: "Kansas AAPS", description: "Addiction and Prevention Services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  kentucky: {
    slug: "kentucky",
    name: "Kentucky",
    abbreviation: "KY",
    population: "4.5 million",
    overdoseDeathsAnnual: "2,250",
    overdoseRatePer100k: "50.0",
    sudPrevalence: "8.5% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Heroin", "Prescription Opioids", "Alcohol"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Standing order allows naloxone access at all pharmacies",
    keyStats: [
      "Kentucky consistently ranks in the top 5 for overdose death rates",
      "Eastern Kentucky was ground zero for the prescription opioid epidemic",
      "Fentanyl has replaced prescription pills and heroin as the primary killer",
      "The state has invested heavily in naloxone distribution and MAT expansion"
    ],
    overview: "Kentucky has been at the epicenter of the American addiction crisis for over two decades. Eastern Kentucky's coal country was among the first regions devastated by OxyContin and prescription opioid overprescribing. As pills became harder to obtain, users turned to heroin and now fentanyl, which has driven death rates to staggering levels. The state has responded with significant policy changes and treatment expansion, but the crisis continues to claim lives at an alarming rate.",
    substanceDetails: "Fentanyl is now the leading cause of overdose death in Kentucky, far surpassing prescription opioids and heroin. Methamphetamine has surged across the state, often used in combination with opioids. Prescription opioid misuse, while reduced from its peak, remains higher than the national average. Alcohol use disorder is prevalent but overshadowed by the opioid crisis in public discourse.",
    familyGuidance: "Kentucky families have been fighting addiction for generations in some communities. If your loved one is caught in the cycle of addiction, professional intervention can provide the structured, compassionate push they need to accept help. Many excellent treatment options are available both in-state and regionally.",
    interventionContext: "Kentucky's deep Appalachian culture, strong family bonds, and history with addiction create a unique intervention environment. Interventionists must understand the intergenerational nature of addiction in many Kentucky families and the economic challenges that affect treatment access and long-term recovery support.",
    resources: [
      { name: "Kentucky DBHDID", description: "Department for Behavioral Health, Developmental and Intellectual Disabilities" },
      { name: "Kentucky 988 Suicide & Crisis Lifeline", description: "24/7 crisis support" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  louisiana: {
    slug: "louisiana",
    name: "Louisiana",
    abbreviation: "LA",
    population: "4.6 million",
    overdoseDeathsAnnual: "2,600",
    overdoseRatePer100k: "56.5",
    sudPrevalence: "7.8% of adults",
    primarySubstances: ["Fentanyl", "Cocaine", "Methamphetamine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under a standing order",
    keyStats: [
      "Louisiana has one of the highest overdose death rates in the nation",
      "Fentanyl-cocaine combinations drive a significant portion of deaths",
      "New Orleans and Baton Rouge are the most affected metro areas",
      "The state has one of the highest incarceration rates, often for drug offenses"
    ],
    overview: "Louisiana faces one of the most severe addiction crises in the nation, with overdose death rates consistently among the highest nationally. The state's unique cultural relationship with alcohol, combined with entrenched poverty and a punitive criminal justice approach to drug use, creates enormous barriers to recovery. Fentanyl has devastated communities across the state, and the mixture of fentanyl with cocaine has created a particularly lethal combination in urban areas.",
    substanceDetails: "Fentanyl is the primary driver of overdose deaths in Louisiana. Cocaine mixed with fentanyl is a distinctive feature of the state's crisis, particularly in New Orleans and Baton Rouge. Methamphetamine use is prevalent in northern and rural Louisiana. Alcohol is deeply woven into Louisiana's culture, and alcohol use disorder is widespread but often unaddressed.",
    familyGuidance: "Louisiana families face unique challenges including a culture that normalizes heavy drinking, limited treatment infrastructure, and a criminal justice system that often criminalizes addiction rather than treating it. A professional interventionist can help your family navigate these challenges and find effective treatment.",
    interventionContext: "Interventions in Louisiana must be culturally sensitive to the state's diverse population and unique cultural norms around alcohol and celebration. Understanding the intersection of addiction, poverty, and the criminal justice system is critical for interventionists working in the state.",
    resources: [
      { name: "Louisiana OBH", description: "Office of Behavioral Health" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  maine: {
    slug: "maine",
    name: "Maine",
    abbreviation: "ME",
    population: "1.4 million",
    overdoseDeathsAnnual: "716",
    overdoseRatePer100k: "51.1",
    sudPrevalence: "8.5% of adults",
    primarySubstances: ["Fentanyl", "Heroin", "Alcohol", "Methamphetamine", "Cocaine"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Available without a prescription",
    keyStats: [
      "Maine has one of the highest per-capita overdose death rates",
      "Fentanyl accounts for the vast majority of overdose deaths",
      "Rural geography creates severe treatment access barriers",
      "The state has expanded MAT access significantly in recent years"
    ],
    overview: "Maine's rugged beauty masks a devastating addiction crisis. The state's rural character, aging population, and economic challenges create fertile ground for substance use disorders. Fentanyl has transformed what was already a serious opioid problem into a mass-casualty crisis. Despite significant investments in medication-assisted treatment and harm reduction, Maine continues to lose residents at alarming rates.",
    substanceDetails: "Fentanyl dominates Maine's overdose crisis. Heroin use has largely been supplanted by fentanyl. Alcohol misuse is deeply prevalent, particularly in rural and coastal communities. Methamphetamine and cocaine use are growing concerns.",
    familyGuidance: "Maine families often face long wait times for treatment and limited local options. A professional interventionist can expedite the process, securing treatment placement and coordinating logistics so your loved one moves from intervention to treatment without delay.",
    interventionContext: "Maine's tight-knit communities and strong family values support the intervention process, but geographic isolation and winter weather can complicate logistics. Interventionists should have experience with rural settings and be prepared for travel challenges.",
    resources: [
      { name: "Maine OBH", description: "Office of Behavioral Health" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  maryland: {
    slug: "maryland",
    name: "Maryland",
    abbreviation: "MD",
    population: "6.2 million",
    overdoseDeathsAnnual: "2,800",
    overdoseRatePer100k: "45.2",
    sudPrevalence: "8.0% of adults",
    primarySubstances: ["Fentanyl", "Heroin", "Cocaine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Available without a prescription at all pharmacies",
    keyStats: [
      "Maryland ranks among the top 10 for overdose death rates nationally",
      "Baltimore is one of the most affected cities in the country",
      "Fentanyl is present in over 90% of opioid-related deaths",
      "Racial disparities in overdose deaths are significant"
    ],
    overview: "Maryland's addiction crisis is deeply concentrated in Baltimore, which has among the highest overdose death rates of any major city. However, the crisis extends throughout the state — from rural Western Maryland to suburban counties surrounding D.C. Fentanyl has made an already deadly heroin epidemic exponentially worse, and racial disparities in both addiction outcomes and treatment access remain stark.",
    substanceDetails: "Fentanyl is the dominant cause of overdose death in Maryland, present in the vast majority of fatal overdoses. Heroin use persists in Baltimore and surrounding areas. Cocaine mixed with fentanyl is a growing killer. Alcohol use disorder is the most common substance use disorder by total numbers.",
    familyGuidance: "Maryland families benefit from proximity to some of the nation's best healthcare and treatment resources, but knowing where to turn during a crisis is still overwhelming. A professional interventionist can cut through the complexity and connect your family with the right care.",
    interventionContext: "Maryland's diversity — from Baltimore's urban core to the Eastern Shore's rural communities — requires versatile intervention approaches. Cultural competency and understanding of the state's complex healthcare systems are important.",
    resources: [
      { name: "Maryland BHA", description: "Behavioral Health Administration" },
      { name: "Maryland Crisis Hotline", description: "24/7 crisis support: 211, press 1" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  massachusetts: {
    slug: "massachusetts",
    name: "Massachusetts",
    abbreviation: "MA",
    population: "7.0 million",
    overdoseDeathsAnnual: "2,350",
    overdoseRatePer100k: "33.6",
    sudPrevalence: "8.8% of adults",
    primarySubstances: ["Fentanyl", "Heroin", "Cocaine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 65% of those needing treatment do not receive it",
    naloxoneAccess: "Widely available without a prescription; nation-leading distribution programs",
    keyStats: [
      "Massachusetts was one of the first states to declare an opioid emergency",
      "Fentanyl is present in nearly all opioid overdose deaths",
      "The state has pioneered harm reduction and MAT access programs",
      "Overdose deaths have plateaued but remain at historically high levels"
    ],
    overview: "Massachusetts was among the first states to recognize and respond to the opioid epidemic, declaring a public health emergency in 2014. Despite aggressive policy action — including expanded naloxone distribution, MAT access, and harm reduction — the state continues to lose thousands of residents annually. The crisis has evolved from prescription pills to heroin to fentanyl, which now dominates the drug supply.",
    substanceDetails: "Fentanyl is the overwhelmingly dominant cause of overdose death in Massachusetts. Cocaine mixed with fentanyl is a significant contributor to deaths. Heroin use has declined as fentanyl has replaced it. Alcohol use disorder is the most common substance use disorder. The state has strong treatment infrastructure but still faces access and capacity challenges.",
    familyGuidance: "Massachusetts has some of the best addiction treatment programs and most progressive policies in the nation, but families still need guidance navigating the system. A professional interventionist can help your family take the critical step from awareness to action.",
    interventionContext: "Massachusetts' strong treatment infrastructure and progressive policies create a favorable environment for interventions. However, the state's high cost of living and competitive treatment landscape mean families benefit from professional guidance in selecting the right program.",
    resources: [
      { name: "Massachusetts BSAS", description: "Bureau of Substance Addiction Services" },
      { name: "Massachusetts Helpline", description: "1-800-327-5050" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  michigan: {
    slug: "michigan",
    name: "Michigan",
    abbreviation: "MI",
    population: "10.0 million",
    overdoseDeathsAnnual: "3,400",
    overdoseRatePer100k: "34.0",
    sudPrevalence: "7.8% of adults",
    primarySubstances: ["Fentanyl", "Cocaine", "Methamphetamine", "Heroin", "Alcohol"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Available without a prescription at pharmacies",
    keyStats: [
      "Detroit accounts for a disproportionate share of overdose deaths",
      "Fentanyl-cocaine mixtures are a leading cause of death",
      "Upper Peninsula and rural areas face severe treatment gaps",
      "The state has expanded Medicaid coverage for addiction treatment"
    ],
    overview: "Michigan's addiction crisis is shaped by economic hardship, deindustrialization, and the flooding of communities with cheap fentanyl. Detroit and surrounding Wayne County are the most affected areas, but the crisis extends from urban centers to the Upper Peninsula. The state has responded with Medicaid expansion and treatment access initiatives but continues to lose thousands of residents annually.",
    substanceDetails: "Fentanyl is the primary cause of overdose death in Michigan, often mixed with cocaine or heroin. Methamphetamine use is growing, particularly in rural areas and the Upper Peninsula. Cocaine use remains prevalent in urban centers. Alcohol misuse is widespread across all demographics.",
    familyGuidance: "Michigan families have options for treatment both in-state and regionally. The key is acting quickly and decisively with professional support. A professional interventionist ensures the process is handled with care, from the family meeting to treatment admission.",
    interventionContext: "Michigan's diverse geography and demographics — from Detroit to Traverse City to the Upper Peninsula — require adaptable intervention approaches. Economic factors are often significant, and interventionists should be familiar with insurance and Medicaid-funded treatment options.",
    resources: [
      { name: "Michigan DHHS – Behavioral Health", description: "State behavioral health resources" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  minnesota: {
    slug: "minnesota",
    name: "Minnesota",
    abbreviation: "MN",
    population: "5.7 million",
    overdoseDeathsAnnual: "1,350",
    overdoseRatePer100k: "23.7",
    sudPrevalence: "8.2% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Alcohol", "Heroin", "Cocaine"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription",
    keyStats: [
      "Minnesota's overdose deaths have tripled since 2019",
      "Fentanyl is the leading cause of overdose death",
      "Native American communities are disproportionately affected",
      "Minnesota has a strong but strained treatment infrastructure"
    ],
    overview: "Minnesota has historically been known for strong healthcare and social services, but the state's addiction crisis has outpaced its infrastructure. Overdose deaths have tripled in recent years, driven primarily by fentanyl. Native American communities in Minnesota face overdose death rates multiple times higher than the state average. The Twin Cities serve as the primary distribution hub, but rural Minnesota and tribal communities are heavily impacted.",
    substanceDetails: "Fentanyl is driving the sharp increase in overdose deaths across Minnesota. Methamphetamine is widely used in rural areas and smaller cities. Alcohol misuse is deeply embedded in the state's culture. Heroin and cocaine are present but increasingly being replaced by or contaminated with fentanyl.",
    familyGuidance: "Minnesota families benefit from the state's strong healthcare tradition, but the rapid escalation of fentanyl deaths means time is critical. Don't wait for your loved one to 'hit bottom' — professional intervention can save their life.",
    interventionContext: "Minnesota's treatment landscape includes some nationally recognized programs. Interventionists should be culturally competent with diverse populations, including significant Somali, Hmong, and Native American communities. Understanding the intersection of cultural identity and addiction is important.",
    resources: [
      { name: "Minnesota DHS – Behavioral Health", description: "State behavioral health resources" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  mississippi: {
    slug: "mississippi",
    name: "Mississippi",
    abbreviation: "MS",
    population: "2.9 million",
    overdoseDeathsAnnual: "790",
    overdoseRatePer100k: "27.2",
    sudPrevalence: "7.0% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Prescription Opioids", "Alcohol", "Cocaine"],
    treatmentGap: "Over 85% of those needing treatment do not receive it",
    naloxoneAccess: "Available through pharmacies under standing order",
    keyStats: [
      "Mississippi has one of the largest treatment gaps in the nation",
      "Fentanyl deaths have increased dramatically",
      "Methamphetamine is the most commonly used illicit drug",
      "Rural poverty compounds treatment access challenges"
    ],
    overview: "Mississippi's addiction crisis is compounded by deep poverty, rural isolation, and one of the most limited treatment infrastructures in the nation. Methamphetamine and fentanyl are the primary drug threats, and the state's treatment gap — the percentage of people needing treatment who don't receive it — is among the worst in the country. Families often have nowhere local to turn, making professional intervention services essential for connecting loved ones with quality care.",
    substanceDetails: "Methamphetamine is the most widely used illicit substance in Mississippi. Fentanyl is increasingly present and driving a rise in overdose deaths. Prescription opioid misuse persists due to historically high prescribing rates. Alcohol misuse is widespread but culturally normalized in many communities. Cocaine use is present in urban areas.",
    familyGuidance: "Mississippi families face enormous barriers to getting help — limited local treatment options, poverty, and stigma. A professional interventionist who knows Mississippi's landscape and has national treatment relationships can make the critical difference for your family.",
    interventionContext: "Interventions in Mississippi require deep cultural sensitivity and understanding of the state's economic realities. Many families will need financial guidance and support navigating insurance or public assistance programs for treatment. Faith-based approaches often resonate strongly.",
    resources: [
      { name: "Mississippi DMH", description: "Department of Mental Health" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  missouri: {
    slug: "missouri",
    name: "Missouri",
    abbreviation: "MO",
    population: "6.2 million",
    overdoseDeathsAnnual: "2,300",
    overdoseRatePer100k: "37.1",
    sudPrevalence: "7.8% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Heroin", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under a standing order",
    keyStats: [
      "Missouri is one of the few states without a prescription drug monitoring program database until recently",
      "St. Louis has one of the highest overdose death rates of any U.S. city",
      "Methamphetamine labs and use persist across rural areas",
      "Fentanyl has become the dominant opioid threat"
    ],
    overview: "Missouri's addiction crisis is driven by fentanyl and methamphetamine, with the St. Louis metro area bearing a disproportionate burden. The state was historically slow to implement prescription drug monitoring, which allowed pill mills to flourish and contributed to the current crisis. Today, fentanyl flooding in through major highways makes Missouri a high-risk state for overdose death.",
    substanceDetails: "Fentanyl is the leading cause of overdose death in Missouri, concentrated in St. Louis and Kansas City. Methamphetamine remains the most commonly used stimulant, particularly in the Ozarks and rural areas. Heroin use persists in urban centers. Alcohol misuse is prevalent across all demographics.",
    familyGuidance: "Missouri families need to act quickly given the lethality of the current drug supply. A professional interventionist can help your family plan and execute an intervention that leads directly to treatment, with beds secured before the conversation begins.",
    interventionContext: "Missouri's central location provides access to treatment programs across multiple regions. Interventionists should understand the state's diverse landscape — from urban St. Louis to rural Ozark communities — and adapt their approach accordingly.",
    resources: [
      { name: "Missouri DBH", description: "Division of Behavioral Health" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  montana: {
    slug: "montana",
    name: "Montana",
    abbreviation: "MT",
    population: "1.1 million",
    overdoseDeathsAnnual: "240",
    overdoseRatePer100k: "21.8",
    sudPrevalence: "8.5% of adults",
    primarySubstances: ["Methamphetamine", "Alcohol", "Fentanyl", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under collaborative agreements",
    keyStats: [
      "Montana has one of the highest alcohol-related death rates in the U.S.",
      "Methamphetamine is the primary drug threat",
      "Native American communities face disproportionate addiction impacts",
      "Vast geography creates severe treatment access challenges"
    ],
    overview: "Montana's rugged, sparsely populated landscape creates enormous challenges for addiction treatment access. The state has historically high rates of alcohol misuse and binge drinking, and methamphetamine has become the dominant illicit drug. Fentanyl is increasingly present. Native American communities, particularly on reservations, face devastating addiction rates with extremely limited local resources.",
    substanceDetails: "Methamphetamine is the most significant drug threat in Montana. Alcohol misuse is deeply prevalent and contributes to some of the highest alcohol-related death rates nationally. Fentanyl is an emerging and growing concern. Prescription opioid misuse persists in some communities.",
    familyGuidance: "Montana families often face hundreds of miles between home and the nearest treatment facility. A professional interventionist experienced with rural logistics can coordinate the entire process, from the intervention conversation to travel and treatment admission.",
    interventionContext: "Montana interventions require understanding of rural culture, outdoor lifestyles, and the unique challenges of Native American communities. Interventionists must be comfortable with significant travel and logistical planning.",
    resources: [
      { name: "Montana AMDD", description: "Addictive and Mental Disorders Division" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  nebraska: {
    slug: "nebraska",
    name: "Nebraska",
    abbreviation: "NE",
    population: "2.0 million",
    overdoseDeathsAnnual: "320",
    overdoseRatePer100k: "16.0",
    sudPrevalence: "7.0% of adults",
    primarySubstances: ["Methamphetamine", "Alcohol", "Fentanyl", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under collaborative agreements",
    keyStats: [
      "Methamphetamine is the primary drug threat in Nebraska",
      "Fentanyl is emerging as a growing concern, particularly in Omaha",
      "Rural western Nebraska faces extreme treatment access challenges",
      "Alcohol misuse rates exceed the national average"
    ],
    overview: "Nebraska's addiction landscape is dominated by methamphetamine and alcohol, with fentanyl emerging as a growing threat. The state's vast rural areas face severe treatment deserts, with most facilities concentrated in Omaha and Lincoln. Nebraska's strong work ethic and self-reliant culture can both delay help-seeking and provide powerful motivation during the recovery process.",
    substanceDetails: "Methamphetamine is the most commonly seized and used illicit drug in Nebraska. Alcohol misuse is deeply prevalent, particularly in rural communities. Fentanyl is increasingly present, especially in the Omaha metro area. Prescription opioid misuse occurs but at lower rates than many other states.",
    familyGuidance: "Nebraska families often need out-of-state treatment options due to limited local capacity. A professional interventionist can help you find the right program and handle logistics, so your loved one transitions smoothly from intervention to care.",
    interventionContext: "Nebraska's Midwestern values, strong work ethic, and family orientation support effective interventions. The challenge is access — interventionists must have relationships with treatment programs across the region and nationally.",
    resources: [
      { name: "Nebraska DHHS – Behavioral Health", description: "State behavioral health services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  nevada: {
    slug: "nevada",
    name: "Nevada",
    abbreviation: "NV",
    population: "3.2 million",
    overdoseDeathsAnnual: "1,200",
    overdoseRatePer100k: "37.5",
    sudPrevalence: "8.5% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Alcohol", "Cocaine", "Heroin"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription",
    keyStats: [
      "Las Vegas accounts for the majority of overdose deaths",
      "The hospitality industry contributes to high rates of substance use",
      "Fentanyl deaths have surged dramatically",
      "Nevada ranks near the bottom nationally for treatment access"
    ],
    overview: "Nevada's addiction crisis is shaped by Las Vegas's hospitality industry, 24/7 culture, and easy access to substances. The state ranks among the worst nationally for treatment access, with long wait times and limited capacity. Fentanyl has transformed the overdose landscape, while methamphetamine and alcohol remain pervasive concerns. Outside of Las Vegas, rural Nevada faces extreme treatment deserts.",
    substanceDetails: "Fentanyl is the leading cause of overdose death in Nevada. Methamphetamine is widely used across the state. The Las Vegas hospitality industry contributes to high rates of alcohol misuse and cocaine use. The 24/7 culture makes substance use particularly accessible.",
    familyGuidance: "Nevada families often find themselves in a state with limited treatment options and a culture that normalizes excess. A professional interventionist can help your family cut through the noise and connect your loved one with appropriate, evidence-based care — whether in Nevada or elsewhere.",
    interventionContext: "Nevada interventions often involve individuals working in the hospitality, entertainment, or service industries where substance use is normalized. Interventionists should understand these dynamics and be prepared for resistance rooted in industry culture.",
    resources: [
      { name: "Nevada DPBH", description: "Division of Public and Behavioral Health" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "new-hampshire": {
    slug: "new-hampshire",
    name: "New Hampshire",
    abbreviation: "NH",
    population: "1.4 million",
    overdoseDeathsAnnual: "490",
    overdoseRatePer100k: "35.0",
    sudPrevalence: "8.5% of adults",
    primarySubstances: ["Fentanyl", "Alcohol", "Cocaine", "Methamphetamine"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription",
    keyStats: [
      "New Hampshire was one of the first states devastated by fentanyl",
      "The state has significantly expanded treatment capacity",
      "Manchester and Nashua are the most affected cities",
      "Overdose rates have decreased from their peak but remain high"
    ],
    overview: "New Hampshire was one of the earliest states to experience the fentanyl wave that swept the Northeast and has been fighting it ever since. The state's proximity to drug supply routes from Massachusetts and its demographics created a perfect storm. While New Hampshire has made significant investments in treatment and harm reduction, overdose death rates remain well above the national average.",
    substanceDetails: "Fentanyl is the dominant cause of overdose death in New Hampshire. Alcohol misuse is widespread and often co-occurring with other substance use. Cocaine mixed with fentanyl is a growing concern. Methamphetamine has emerged as a newer threat.",
    familyGuidance: "New Hampshire families benefit from strong community connections and a state that has taken the addiction crisis seriously. A professional interventionist can complement these resources by providing the structured approach your family needs to get your loved one into treatment.",
    interventionContext: "New Hampshire's small size and tight-knit communities support effective interventions. The state's proximity to excellent treatment programs throughout New England is an advantage.",
    resources: [
      { name: "NH BDAS", description: "Bureau of Drug and Alcohol Services" },
      { name: "NH Doorways", description: "Single point of access for treatment services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "new-jersey": {
    slug: "new-jersey",
    name: "New Jersey",
    abbreviation: "NJ",
    population: "9.3 million",
    overdoseDeathsAnnual: "3,100",
    overdoseRatePer100k: "33.3",
    sudPrevalence: "7.8% of adults",
    primarySubstances: ["Fentanyl", "Heroin", "Cocaine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription; state-funded distribution",
    keyStats: [
      "New Jersey has invested over $100 million annually in addiction services",
      "Fentanyl has replaced heroin as the primary opioid threat",
      "The state has nation-leading insurance parity laws for addiction treatment",
      "Camden, Newark, and Paterson are the most affected cities"
    ],
    overview: "New Jersey has been one of the states most aggressively fighting the addiction crisis through policy, funding, and treatment expansion. Despite these efforts, thousands of residents continue to die from overdoses annually. The state's density and proximity to major drug markets in New York and Philadelphia contribute to a persistent supply of lethal substances.",
    substanceDetails: "Fentanyl is the leading cause of overdose death in New Jersey. Heroin use has declined as fentanyl has replaced it. Cocaine mixed with fentanyl is a significant and growing cause of death. Alcohol use disorder is the most common substance use disorder by prevalence.",
    familyGuidance: "New Jersey has strong insurance protections for addiction treatment, which means your loved one likely has more coverage than you think. A professional interventionist can help you navigate insurance, select the right program, and guide the intervention process.",
    interventionContext: "New Jersey's density and location provide excellent access to treatment programs throughout the tri-state area. The state's strong insurance parity laws mean families often have more options than they realize. Interventionists should be familiar with these protections.",
    resources: [
      { name: "NJ Division of Mental Health and Addiction Services", description: "State addiction services" },
      { name: "ReachNJ Helpline", description: "24/7 support: 1-844-ReachNJ" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "new-mexico": {
    slug: "new-mexico",
    name: "New Mexico",
    abbreviation: "NM",
    population: "2.1 million",
    overdoseDeathsAnnual: "1,050",
    overdoseRatePer100k: "50.0",
    sudPrevalence: "9.2% of adults",
    primarySubstances: ["Fentanyl", "Heroin", "Methamphetamine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription",
    keyStats: [
      "New Mexico consistently has one of the highest overdose death rates in the U.S.",
      "Heroin use rates are among the highest nationally",
      "Native American communities face devastating addiction impacts",
      "The state has a long history with substance use challenges"
    ],
    overview: "New Mexico has struggled with substance use disorders for decades, consistently ranking among the worst states for overdose deaths, alcohol-related deaths, and drug use prevalence. The state's diverse cultural landscape — including Hispanic, Native American, and rural Anglo communities — each face unique addiction challenges. Fentanyl has recently compounded what was already a severe heroin and methamphetamine crisis.",
    substanceDetails: "Fentanyl and heroin are the primary drivers of overdose death in New Mexico. The state has historically high heroin use rates. Methamphetamine is widely used, particularly in rural areas. Alcohol-related deaths are among the highest per capita in the nation. The intersection of poverty, isolation, and limited healthcare drives the crisis.",
    familyGuidance: "New Mexico families face a particularly challenging landscape — high rates of addiction, limited treatment capacity, and vast distances between communities. A professional interventionist can be the bridge between your family's crisis and quality treatment, wherever it may be located.",
    interventionContext: "Interventions in New Mexico require cultural competency across the state's diverse populations, including Hispanic, Native American, and rural communities. Understanding the role of family, faith, and cultural identity in the recovery process is essential.",
    resources: [
      { name: "NM BHSD", description: "Behavioral Health Services Division" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "new-york": {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    population: "19.6 million",
    overdoseDeathsAnnual: "5,800",
    overdoseRatePer100k: "29.6",
    sudPrevalence: "8.0% of adults",
    primarySubstances: ["Fentanyl", "Cocaine", "Heroin", "Alcohol", "Methamphetamine"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription; extensive community distribution",
    keyStats: [
      "New York City accounts for the majority of overdose deaths",
      "Fentanyl-cocaine combinations are a leading cause of death",
      "The Bronx has the highest overdose death rate of any borough",
      "New York has some of the strongest addiction treatment protections in the nation"
    ],
    overview: "New York's addiction crisis is concentrated in New York City — particularly the Bronx, Brooklyn, and Manhattan — but extends to every corner of the state, from Long Island's suburbs to Buffalo's rust belt neighborhoods and the Adirondack region. The state has invested heavily in treatment, harm reduction, and overdose prevention, yet thousands continue to die annually.",
    substanceDetails: "Fentanyl is the leading cause of overdose death in New York, often combined with cocaine or heroin. The Bronx has been particularly devastated. Cocaine use remains high, and the contamination of cocaine with fentanyl has created a deadly combination for users who don't consider themselves opioid users. Alcohol use disorder is the most prevalent SUD statewide.",
    familyGuidance: "New York families have access to one of the most robust treatment systems in the nation, but navigating it during a crisis is overwhelming. A professional interventionist provides the clarity, structure, and urgent action your family needs.",
    interventionContext: "New York's extreme diversity requires interventionists to be highly adaptable — from Upper East Side professionals to upstate farming communities. Understanding New York's extensive treatment regulations, insurance requirements, and cultural dynamics is essential.",
    resources: [
      { name: "NY OASAS", description: "Office of Addiction Services and Supports" },
      { name: "NYC Health – Mental Health & Substance Use", description: "City resources for addiction" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "north-carolina": {
    slug: "north-carolina",
    name: "North Carolina",
    abbreviation: "NC",
    population: "10.7 million",
    overdoseDeathsAnnual: "4,400",
    overdoseRatePer100k: "41.1",
    sudPrevalence: "7.8% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Cocaine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under a statewide standing order",
    keyStats: [
      "North Carolina's overdose deaths have increased over 200% since 2015",
      "Fentanyl is involved in over 80% of opioid deaths",
      "The I-95 and I-85 corridors are major drug trafficking routes",
      "Rural mountain communities face severe treatment gaps"
    ],
    overview: "North Carolina has experienced one of the most dramatic increases in overdose deaths of any state, driven by the influx of illicit fentanyl along major highway corridors. The crisis affects both urban centers like Charlotte and Raleigh and deeply rural communities in the mountains and coastal plains. The state's patchwork of treatment resources leaves many families without accessible care.",
    substanceDetails: "Fentanyl dominates North Carolina's overdose landscape. Methamphetamine is the primary stimulant threat, particularly in western NC. Cocaine use is prevalent in urban areas and increasingly contaminated with fentanyl. Alcohol misuse is widespread. Prescription opioid rates have declined but contributed to current patterns.",
    familyGuidance: "North Carolina families across the state are affected by the addiction crisis. Whether you're in a major city or a mountain community, a professional interventionist can connect you with appropriate care and guide your family through the intervention process.",
    interventionContext: "North Carolina's diverse geography — mountains, piedmont, and coast — each present unique challenges. Interventionists should understand the state's regional cultures and treatment landscape.",
    resources: [
      { name: "NC DHHS – Division of Mental Health", description: "State behavioral health services" },
      { name: "Hope4NC Helpline", description: "1-855-587-3463" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "north-dakota": {
    slug: "north-dakota",
    name: "North Dakota",
    abbreviation: "ND",
    population: "780,000",
    overdoseDeathsAnnual: "130",
    overdoseRatePer100k: "16.7",
    sudPrevalence: "8.8% of adults",
    primarySubstances: ["Alcohol", "Methamphetamine", "Fentanyl", "Prescription Opioids"],
    treatmentGap: "Over 85% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under standing order",
    keyStats: [
      "North Dakota has one of the highest binge drinking rates in the U.S.",
      "Methamphetamine is the primary illicit drug threat",
      "Native American reservations face devastating addiction rates",
      "The oil boom created unique substance use challenges in western ND"
    ],
    overview: "North Dakota's addiction challenges are shaped by extreme weather, rural isolation, and cultural factors. The state has one of the highest binge drinking rates nationally, and alcohol-related problems are deeply entrenched. Methamphetamine is the primary illicit drug concern, with fentanyl emerging as a growing threat. Native American communities face addiction rates far exceeding the state average.",
    substanceDetails: "Alcohol is the most significant substance of concern in North Dakota, with binge drinking rates among the nation's highest. Methamphetamine is the dominant illicit drug. Fentanyl is increasingly present, particularly in Fargo and other eastern communities. The oil boom in the Bakken region brought increased substance use among transient workers.",
    familyGuidance: "North Dakota families often struggle with cultural normalization of heavy drinking and limited local treatment options. A professional interventionist can help your family recognize the severity of the problem and connect you with effective treatment, even if it means traveling out of state.",
    interventionContext: "North Dakota's extreme climate, vast distances, and small population require interventionists to be resourceful and prepared for challenging logistics. Cultural competency with Native American communities is important for those serving tribal areas.",
    resources: [
      { name: "ND DHHS – Behavioral Health", description: "State behavioral health services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  ohio: {
    slug: "ohio",
    name: "Ohio",
    abbreviation: "OH",
    population: "11.8 million",
    overdoseDeathsAnnual: "5,100",
    overdoseRatePer100k: "43.2",
    sudPrevalence: "8.0% of adults",
    primarySubstances: ["Fentanyl", "Cocaine", "Methamphetamine", "Heroin", "Alcohol"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription",
    keyStats: [
      "Ohio has consistently been among the top 5 states for overdose deaths",
      "Fentanyl is the overwhelming driver of overdose fatalities",
      "Cleveland, Columbus, and Cincinnati are the most affected metro areas",
      "The state has received major opioid settlement funds for treatment expansion"
    ],
    overview: "Ohio has been at the center of the American overdose crisis for years, consistently ranking among the worst states for drug overdose deaths. The state's manufacturing decline, poverty, and location along major drug trafficking routes have contributed to a devastating epidemic. Fentanyl has replaced heroin as the dominant opioid, and Ohio's three major metro areas — Cleveland, Columbus, and Cincinnati — each face severe crises.",
    substanceDetails: "Fentanyl is the overwhelming cause of overdose death in Ohio. Cocaine mixed with fentanyl is a major and growing contributor. Methamphetamine use is increasing across rural areas. Heroin use has declined as fentanyl has replaced it. Alcohol use disorder remains the most common SUD by prevalence.",
    familyGuidance: "Ohio families have seen the devastation of addiction firsthand, often across generations. If your loved one is struggling, don't wait — the lethality of today's drug supply means every day matters. A professional interventionist can help your family take decisive, life-saving action.",
    interventionContext: "Ohio's location and demographics make it a critical state for intervention services. The state's opioid settlement funds are expanding treatment access, and interventionists should be aware of new programs and resources. Understanding Ohio's working-class culture and economic pressures is important.",
    resources: [
      { name: "Ohio MHAS", description: "Mental Health and Addiction Services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  oklahoma: {
    slug: "oklahoma",
    name: "Oklahoma",
    abbreviation: "OK",
    population: "4.0 million",
    overdoseDeathsAnnual: "1,200",
    overdoseRatePer100k: "30.0",
    sudPrevalence: "8.0% of adults",
    primarySubstances: ["Methamphetamine", "Fentanyl", "Prescription Opioids", "Alcohol"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under standing order",
    keyStats: [
      "Oklahoma has historically high prescription opioid rates",
      "Methamphetamine is the most commonly used illicit drug",
      "Fentanyl deaths are increasing rapidly",
      "Native American communities face disproportionate impacts"
    ],
    overview: "Oklahoma has long struggled with high rates of prescription opioid misuse and methamphetamine use. The state's large Native American population faces particularly severe addiction challenges. Fentanyl is now adding a new layer of lethality to the crisis. Oklahoma's landmark legal victory against pharmaceutical companies highlighted the state's commitment to fighting the epidemic, but the ground-level impact continues to devastate families.",
    substanceDetails: "Methamphetamine is Oklahoma's most prevalent illicit drug. Prescription opioid misuse remains higher than the national average. Fentanyl is rapidly increasing in prevalence and lethality. Alcohol misuse is widespread, particularly in rural communities.",
    familyGuidance: "Oklahoma families dealing with addiction have a state that understands the crisis — but understanding isn't enough. Professional intervention puts your family's specific situation at the center and creates a clear path from crisis to treatment.",
    interventionContext: "Oklahoma interventions benefit from strong family and community values. Interventionists should have cultural competency with Native American populations and understand the state's treatment landscape, which includes tribal healthcare systems.",
    resources: [
      { name: "Oklahoma DMHSAS", description: "Department of Mental Health and Substance Abuse Services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  oregon: {
    slug: "oregon",
    name: "Oregon",
    abbreviation: "OR",
    population: "4.2 million",
    overdoseDeathsAnnual: "1,300",
    overdoseRatePer100k: "31.0",
    sudPrevalence: "9.5% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Heroin", "Alcohol", "Cocaine"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription",
    keyStats: [
      "Oregon has one of the highest substance use disorder rates in the U.S.",
      "Portland's fentanyl and homeless crisis has gained national attention",
      "Measure 110 decriminalized small amounts of drugs in 2020 (partially reversed in 2024)",
      "Methamphetamine use is widespread statewide"
    ],
    overview: "Oregon's addiction crisis has gained national attention due to Portland's visible drug use, homelessness, and the state's controversial decriminalization experiment under Measure 110. The state has among the highest substance use disorder rates in the nation but ranks near the bottom for treatment access. Fentanyl has devastated Portland and increasingly affects communities statewide, while methamphetamine remains pervasive across rural Oregon.",
    substanceDetails: "Fentanyl has transformed Oregon's drug landscape, particularly in Portland where open-air drug markets have proliferated. Methamphetamine is the most widely used illicit stimulant statewide. Heroin use persists but is increasingly replaced by fentanyl. Alcohol misuse is deeply prevalent. Oregon's high cannabis use occasionally masks other substance use patterns.",
    familyGuidance: "Oregon families are watching the addiction crisis play out in their communities daily. If your loved one is caught in the cycle, professional intervention can provide the structured, compassionate push they need. Oregon's treatment system, while improving, benefits from the guidance of an interventionist who can navigate its complexities.",
    interventionContext: "Oregon's progressive culture and harm reduction orientation create a unique intervention environment. Interventionists should understand the state's policy landscape and be prepared to work within a framework that may differ from more traditional approaches.",
    resources: [
      { name: "Oregon OHA – Behavioral Health", description: "State behavioral health services" },
      { name: "Oregon Alcohol & Drug Helpline", description: "1-800-923-4357" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  pennsylvania: {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbreviation: "PA",
    population: "13.0 million",
    overdoseDeathsAnnual: "5,400",
    overdoseRatePer100k: "41.5",
    sudPrevalence: "8.0% of adults",
    primarySubstances: ["Fentanyl", "Heroin", "Cocaine", "Methamphetamine", "Alcohol"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription; extensive naloxone programs",
    keyStats: [
      "Pennsylvania ranks in the top 5 for total overdose deaths nationally",
      "Philadelphia's Kensington neighborhood is one of the largest open-air drug markets in the U.S.",
      "Fentanyl has replaced heroin as the dominant opioid",
      "Rural western Pennsylvania faces significant treatment gaps"
    ],
    overview: "Pennsylvania has been devastated by the opioid epidemic, with Philadelphia's Kensington neighborhood becoming a national symbol of the crisis. Pittsburgh and smaller cities across the state have also been severely impacted. The state has invested heavily in treatment expansion and naloxone distribution but continues to experience among the highest overdose death tolls in the nation.",
    substanceDetails: "Fentanyl is the dominant cause of overdose death in Pennsylvania. Philadelphia's drug market distributes fentanyl, heroin, and a veterinary tranquilizer called xylazine throughout the region. Cocaine mixed with fentanyl is a significant killer. Methamphetamine is emerging in central and western PA. Alcohol use disorder is the most prevalent SUD statewide.",
    familyGuidance: "Pennsylvania families have access to strong treatment infrastructure, particularly in the Philadelphia and Pittsburgh regions. A professional interventionist can help you act before tragedy strikes, navigating the treatment landscape and securing appropriate care.",
    interventionContext: "Pennsylvania's diverse regions — from Philadelphia to Pittsburgh to central PA farm country — require different approaches. The presence of xylazine in Philadelphia's drug supply creates additional medical complications that interventionists should understand.",
    resources: [
      { name: "PA DDAP", description: "Department of Drug and Alcohol Programs" },
      { name: "PA Get Help Now Helpline", description: "1-800-662-4357" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "rhode-island": {
    slug: "rhode-island",
    name: "Rhode Island",
    abbreviation: "RI",
    population: "1.1 million",
    overdoseDeathsAnnual: "420",
    overdoseRatePer100k: "38.2",
    sudPrevalence: "8.5% of adults",
    primarySubstances: ["Fentanyl", "Cocaine", "Heroin", "Alcohol", "Methamphetamine"],
    treatmentGap: "Over 65% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription; strong distribution programs",
    keyStats: [
      "Rhode Island has one of the highest per-capita overdose death rates",
      "The state has been a leader in harm reduction innovation",
      "Fentanyl is present in the majority of overdose deaths",
      "Providence bears the highest concentration of overdose deaths"
    ],
    overview: "Rhode Island's small size belies the severity of its addiction crisis. The state has one of the highest per-capita overdose death rates and has been both devastated by and innovative in response to the epidemic. Rhode Island was the first state to adopt universal naloxone distribution in correctional facilities and has been a leader in medication-assisted treatment. Despite these efforts, fentanyl continues to claim lives.",
    substanceDetails: "Fentanyl is the primary driver of overdose death in Rhode Island. Cocaine mixed with fentanyl is a significant contributor. Heroin use has declined as fentanyl has replaced it. Alcohol use disorder is prevalent. The state's small size means drug supply changes can rapidly affect the entire state.",
    familyGuidance: "Rhode Island's small size means your family likely knows others who have been affected by addiction. Use that connection — and professional intervention support — to take action for your loved one. Treatment resources are available locally and throughout New England.",
    interventionContext: "Rhode Island's compact size allows interventionists to work efficiently, but the state's limited treatment capacity may require out-of-state placements. The state's progressive approach to addiction treatment aligns well with evidence-based intervention practices.",
    resources: [
      { name: "Rhode Island BHDDH", description: "Behavioral Healthcare, Developmental Disabilities & Hospitals" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "south-carolina": {
    slug: "south-carolina",
    name: "South Carolina",
    abbreviation: "SC",
    population: "5.3 million",
    overdoseDeathsAnnual: "2,600",
    overdoseRatePer100k: "49.1",
    sudPrevalence: "7.5% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Cocaine", "Alcohol", "Prescription Opioids"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under collaborative practice agreements",
    keyStats: [
      "South Carolina's overdose death rate has more than doubled since 2019",
      "Fentanyl is the leading cause of overdose death",
      "Rural counties face severe treatment gaps",
      "The I-95 corridor is a major drug trafficking route through the state"
    ],
    overview: "South Carolina has experienced a dramatic escalation in overdose deaths, with fentanyl transforming what was already a serious prescription opioid and methamphetamine problem. The I-95 corridor brings a steady flow of drugs through the state, while rural communities lack treatment infrastructure. The state's treatment gap is among the largest in the nation.",
    substanceDetails: "Fentanyl is the leading cause of overdose death in South Carolina. Methamphetamine is widely used across rural areas. Cocaine use is prevalent in urban centers like Charleston, Columbia, and Greenville. Alcohol misuse is common but often overshadowed by the opioid crisis. Prescription opioid rates remain above the national average.",
    familyGuidance: "South Carolina families deserve access to quality addiction treatment, but the state's infrastructure often falls short. A professional interventionist can ensure your loved one gets connected with effective care, whether in-state or elsewhere in the Southeast.",
    interventionContext: "South Carolina's strong family values and faith-based culture can be powerful assets during the intervention process. Interventionists should understand Southern cultural dynamics and be prepared for situations where local treatment options are limited.",
    resources: [
      { name: "SC DAODAS", description: "Department of Alcohol and Other Drug Abuse Services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "south-dakota": {
    slug: "south-dakota",
    name: "South Dakota",
    abbreviation: "SD",
    population: "910,000",
    overdoseDeathsAnnual: "130",
    overdoseRatePer100k: "14.3",
    sudPrevalence: "8.0% of adults",
    primarySubstances: ["Alcohol", "Methamphetamine", "Fentanyl", "Prescription Opioids"],
    treatmentGap: "Over 85% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under prescriber authority",
    keyStats: [
      "South Dakota has one of the highest binge drinking rates in the U.S.",
      "Methamphetamine is the most significant illicit drug threat",
      "Native American reservations face devastating addiction and poverty",
      "Treatment access is extremely limited outside of Sioux Falls and Rapid City"
    ],
    overview: "South Dakota's addiction crisis is defined by alcohol, methamphetamine, and extreme treatment access challenges. The state's sparse population and vast geography mean most residents are hours from the nearest treatment facility. Native American communities on the Pine Ridge, Rosebud, and other reservations face some of the most severe addiction and poverty challenges in the nation.",
    substanceDetails: "Alcohol is the most devastating substance in South Dakota, with binge drinking rates and alcohol-related deaths far exceeding national averages. Methamphetamine is the primary illicit drug. Fentanyl is emerging but less prevalent than in many states. Prescription opioid misuse occurs at moderate levels.",
    familyGuidance: "South Dakota families often feel there's nowhere to turn locally. A professional interventionist can bridge the gap, arranging treatment placement at quality programs regionally or nationally and handling the logistics of getting your loved one there.",
    interventionContext: "South Dakota interventions require comfort with extreme rural settings, long travel distances, and cultural competency with Native American communities. Understanding the deep role of community and tradition is important.",
    resources: [
      { name: "SD DSS – Division of Behavioral Health", description: "State behavioral health services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  tennessee: {
    slug: "tennessee",
    name: "Tennessee",
    abbreviation: "TN",
    population: "7.1 million",
    overdoseDeathsAnnual: "3,800",
    overdoseRatePer100k: "53.5",
    sudPrevalence: "7.8% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Prescription Opioids", "Cocaine", "Alcohol"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under standing order",
    keyStats: [
      "Tennessee has one of the highest overdose death rates in the nation",
      "Fentanyl is involved in over 75% of overdose deaths",
      "East Tennessee was heavily impacted by prescription opioid overprescribing",
      "Memphis and Nashville are major distribution hubs"
    ],
    overview: "Tennessee has been devastated by every wave of the opioid epidemic — from prescription pills to heroin to fentanyl. East Tennessee's Appalachian communities were among the hardest hit by the initial pill crisis, and fentanyl has now compounded the problem statewide. Memphis and Nashville serve as major drug distribution hubs. The state's treatment gap remains enormous despite investments in expansion.",
    substanceDetails: "Fentanyl is the primary cause of overdose death in Tennessee. Methamphetamine is widely used, particularly in rural areas and East Tennessee. Prescription opioid rates have declined from their peak but remain above the national average. Cocaine use is prevalent in Memphis and Nashville. Alcohol misuse is widespread.",
    familyGuidance: "Tennessee families are losing loved ones at an alarming rate. If addiction is affecting your family, a professional interventionist can help you take action today. With the lethality of fentanyl, there may not be a tomorrow to wait for.",
    interventionContext: "Tennessee's strong family and faith-based culture supports the intervention process. The state's location in the Southeast provides good access to treatment programs in multiple states. Interventionists should understand Appalachian culture in the east and urban dynamics in Memphis and Nashville.",
    resources: [
      { name: "Tennessee DMHSAS", description: "Department of Mental Health and Substance Abuse Services" },
      { name: "TN REDLINE", description: "1-800-889-9789" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  texas: {
    slug: "texas",
    name: "Texas",
    abbreviation: "TX",
    population: "30.5 million",
    overdoseDeathsAnnual: "5,800",
    overdoseRatePer100k: "19.0",
    sudPrevalence: "7.2% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Cocaine", "Alcohol", "Prescription Opioids", "Heroin"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription",
    keyStats: [
      "Texas has the third-highest total overdose deaths in the U.S. by volume",
      "The state's southern border is a primary entry point for fentanyl",
      "Despite low per-capita rates, the raw numbers are staggering",
      "Rural West Texas and the Rio Grande Valley face extreme treatment gaps"
    ],
    overview: "Texas's vast size and large population mean the addiction crisis is enormous in scale even though per-capita rates are below the national average. The state's long border with Mexico makes it a primary entry point for fentanyl and methamphetamine. Texas's limited Medicaid coverage and vast rural treatment deserts create massive barriers to care. From Houston's diverse urban sprawl to the oil fields of West Texas, addiction affects every corner of the state.",
    substanceDetails: "Fentanyl, much of it entering through the southern border, is the fastest-growing cause of overdose death in Texas. Methamphetamine is widely used across rural and suburban areas. Cocaine use is prevalent in border and urban communities. Alcohol misuse is widespread, and prescription opioid rates, while lower than many states, still affect millions.",
    familyGuidance: "Texas families face a challenging landscape — vast distances, limited Medicaid expansion, and a treatment system that doesn't reach many communities. A professional interventionist with Texas experience can navigate these obstacles and ensure your loved one gets to quality treatment, wherever it's located.",
    interventionContext: "Texas interventions must account for the state's enormous size, diverse cultures (Anglo, Hispanic, Black, and other communities), and varying access to treatment. The state's conservative culture and strong family values can be effectively leveraged during the intervention process. Bilingual capability is important for interventionists serving many Texas communities.",
    resources: [
      { name: "Texas HHSC – Behavioral Health", description: "State behavioral health services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  utah: {
    slug: "utah",
    name: "Utah",
    abbreviation: "UT",
    population: "3.4 million",
    overdoseDeathsAnnual: "830",
    overdoseRatePer100k: "24.4",
    sudPrevalence: "7.5% of adults",
    primarySubstances: ["Fentanyl", "Prescription Opioids", "Methamphetamine", "Alcohol", "Heroin"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under a standing order",
    keyStats: [
      "Utah has historically had one of the highest prescription opioid death rates",
      "Fentanyl is now the leading cause of overdose death",
      "The LDS culture creates unique stigma around addiction and help-seeking",
      "Utah has invested in prescription drug monitoring and treatment expansion"
    ],
    overview: "Utah's addiction crisis has unique dimensions shaped by its cultural landscape. The state has historically high prescription opioid use rates, partly driven by cultural factors that discouraged alcohol use but normalized prescription medication. Fentanyl has now become the leading cause of overdose death. The stigma around addiction in Utah's predominantly LDS (Latter-day Saints) communities can delay help-seeking, making professional intervention particularly important.",
    substanceDetails: "Fentanyl has surpassed prescription opioids as the leading cause of overdose death in Utah. Prescription opioid misuse remains significant, particularly among adults who became dependent through legitimate prescriptions. Methamphetamine is a growing concern. Alcohol use disorder, though less prevalent than nationally, carries heavy stigma that can prevent treatment seeking. Heroin use persists in urban areas.",
    familyGuidance: "Utah families may face unique cultural pressures that make acknowledging addiction difficult. A professional interventionist can help your family navigate these dynamics with sensitivity and compassion, creating a safe space for your loved one to accept help without shame.",
    interventionContext: "Interventions in Utah require understanding of LDS culture and the specific stigma dynamics around addiction in that community. Many Utah families are large and close-knit, which can be leveraged effectively during the intervention process. The state's treatment landscape includes both traditional and faith-compatible programs.",
    resources: [
      { name: "Utah DSAMH", description: "Division of Substance Abuse and Mental Health" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  vermont: {
    slug: "vermont",
    name: "Vermont",
    abbreviation: "VT",
    population: "647,000",
    overdoseDeathsAnnual: "234",
    overdoseRatePer100k: "36.2",
    sudPrevalence: "9.0% of adults",
    primarySubstances: ["Fentanyl", "Alcohol", "Cocaine", "Heroin", "Methamphetamine"],
    treatmentGap: "Over 70% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription",
    keyStats: [
      "Vermont has one of the highest per-capita substance use disorder rates",
      "The state's Hub and Spoke MAT model has been nationally recognized",
      "Fentanyl has replaced heroin as the primary opioid threat",
      "Rural geography complicates treatment access"
    ],
    overview: "Vermont, despite being one of the smallest states, has been deeply affected by the addiction crisis. The state has been a national leader in innovative treatment approaches, including its Hub and Spoke model for medication-assisted treatment. However, fentanyl has driven death rates to alarming levels for a state of its size. Vermont's rural character creates significant treatment access challenges.",
    substanceDetails: "Fentanyl is the primary cause of overdose death in Vermont. Alcohol misuse is deeply prevalent, particularly during the long winter months. Cocaine use is significant. Heroin use has declined as fentanyl has replaced it. Methamphetamine is emerging as a concern.",
    familyGuidance: "Vermont's small size means your family's story is not unique — many others in your community have faced the same crisis. A professional interventionist can help you take action, connecting your loved one with treatment locally or throughout New England.",
    interventionContext: "Vermont's tight-knit, rural communities support close family connections that are valuable during interventions. The state's progressive treatment policies and innovative models are assets. Interventionists should be prepared for winter logistics and rural travel challenges.",
    resources: [
      { name: "Vermont ADAP", description: "Alcohol and Drug Abuse Programs" },
      { name: "VT Helplink", description: "802-565-LINK" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  virginia: {
    slug: "virginia",
    name: "Virginia",
    abbreviation: "VA",
    population: "8.7 million",
    overdoseDeathsAnnual: "2,900",
    overdoseRatePer100k: "33.3",
    sudPrevalence: "7.5% of adults",
    primarySubstances: ["Fentanyl", "Cocaine", "Heroin", "Methamphetamine", "Alcohol"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under a statewide standing order",
    keyStats: [
      "Virginia's overdose deaths have more than doubled since 2019",
      "Fentanyl is involved in over 80% of overdose deaths",
      "Southwest Virginia's coalfield region was ground zero for the opioid crisis",
      "The state has significantly expanded MAT and harm reduction services"
    ],
    overview: "Virginia's addiction crisis spans from the coalfields of Southwest Virginia, which were devastated by early prescription opioid overprescribing, to the urban corridors of Northern Virginia, Richmond, and Hampton Roads. Fentanyl has driven a sharp increase in deaths across the state. Virginia has responded with expanded treatment access and harm reduction, but the crisis continues to grow.",
    substanceDetails: "Fentanyl is the dominant cause of overdose death in Virginia. Cocaine mixed with fentanyl is a growing cause of death, particularly in urban areas. Methamphetamine is prevalent in Southwest Virginia and rural areas. Heroin use persists in larger cities. Alcohol misuse is widespread across all demographics.",
    familyGuidance: "Virginia families have access to a growing treatment infrastructure, but the rapid escalation of fentanyl deaths means acting quickly is essential. A professional interventionist can help you navigate Virginia's treatment system and take action before it's too late.",
    interventionContext: "Virginia's extreme regional diversity — from Northern Virginia's affluent suburbs to Southwest Virginia's Appalachian communities — requires adaptable intervention approaches. Cultural sensitivity across racial, economic, and regional lines is important.",
    resources: [
      { name: "Virginia DBHDS", description: "Department of Behavioral Health and Developmental Services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  washington: {
    slug: "washington",
    name: "Washington",
    abbreviation: "WA",
    population: "7.8 million",
    overdoseDeathsAnnual: "2,800",
    overdoseRatePer100k: "35.9",
    sudPrevalence: "9.0% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Heroin", "Alcohol", "Cocaine"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies without a prescription",
    keyStats: [
      "Washington's overdose deaths have more than doubled since 2019",
      "Fentanyl has rapidly become the leading cause of overdose death",
      "Seattle's fentanyl crisis has drawn national attention",
      "Eastern Washington faces distinct methamphetamine challenges"
    ],
    overview: "Washington state faces a rapidly escalating overdose crisis, with fentanyl driving a dramatic increase in deaths. Seattle and the Puget Sound region have been particularly affected, with open-air drug use and homelessness highlighting the crisis. Eastern Washington faces different but equally serious challenges with methamphetamine and limited treatment access. The state has expanded harm reduction but struggles to meet the scale of the crisis.",
    substanceDetails: "Fentanyl has become the leading cause of overdose death in Washington, with deaths increasing sharply. Methamphetamine is widely used statewide, particularly in eastern Washington. Heroin use persists in urban areas. Alcohol misuse is deeply prevalent. Cocaine use is present but less dominant than in eastern states.",
    familyGuidance: "Washington families are watching the fentanyl crisis unfold in real-time. If your loved one is using, the risk has never been higher. A professional interventionist can help your family take immediate, structured action.",
    interventionContext: "Washington's progressive culture and harm reduction orientation should inform the intervention approach. The state's geographic diversity — from Seattle's urban density to the rural eastern side — requires adaptable strategies. Interventionists should be familiar with Washington's evolving drug policy landscape.",
    resources: [
      { name: "Washington DBHR", description: "Division of Behavioral Health and Recovery" },
      { name: "Washington Recovery Helpline", description: "1-866-789-1511" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  "west-virginia": {
    slug: "west-virginia",
    name: "West Virginia",
    abbreviation: "WV",
    population: "1.8 million",
    overdoseDeathsAnnual: "1,200",
    overdoseRatePer100k: "66.7",
    sudPrevalence: "9.5% of adults",
    primarySubstances: ["Fentanyl", "Methamphetamine", "Prescription Opioids", "Heroin", "Alcohol"],
    treatmentGap: "Over 80% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under standing order",
    keyStats: [
      "West Virginia has the highest per-capita overdose death rate in the nation",
      "The state was ground zero for the prescription opioid epidemic",
      "Pharmaceutical companies shipped millions of pills to tiny communities",
      "Fentanyl and methamphetamine have compounded the crisis"
    ],
    overview: "West Virginia has the tragic distinction of leading the nation in per-capita overdose deaths — a position it has held for years. The state was ground zero for pharmaceutical company exploitation, with distributors shipping millions of opioid pills to communities with populations of a few hundred. The legacy of that devastation continues as fentanyl and methamphetamine compound the crisis. Limited economic opportunity, geographic isolation, and inadequate treatment infrastructure create enormous barriers to recovery.",
    substanceDetails: "Fentanyl has become the leading cause of overdose death in West Virginia, surpassing the prescription opioids that started the crisis. Methamphetamine use has surged dramatically. Prescription opioid misuse, though reduced, remains higher than the national average. Heroin use persists. Alcohol misuse is widespread and often co-occurring with other substance use.",
    familyGuidance: "West Virginia families have been fighting addiction longer than most. If your loved one is still using, there is still hope — but time is critical. A professional interventionist can connect your family with effective treatment, including programs that understand the unique challenges West Virginians face.",
    interventionContext: "Interventions in West Virginia carry the weight of generational addiction trauma. Interventionists must be sensitive to this history while remaining focused on the individual's path to recovery. Many families have lost multiple members to addiction, which can complicate dynamics but also create powerful motivation for change.",
    resources: [
      { name: "WV DHHR – Bureau for Behavioral Health", description: "State behavioral health services" },
      { name: "West Virginia Help4WV", description: "1-844-HELP4WV" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  wisconsin: {
    slug: "wisconsin",
    name: "Wisconsin",
    abbreviation: "WI",
    population: "5.9 million",
    overdoseDeathsAnnual: "2,100",
    overdoseRatePer100k: "35.6",
    sudPrevalence: "8.5% of adults",
    primarySubstances: ["Fentanyl", "Cocaine", "Methamphetamine", "Alcohol", "Heroin"],
    treatmentGap: "Over 75% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under a statewide standing order",
    keyStats: [
      "Wisconsin has one of the highest binge drinking rates in the nation",
      "Fentanyl has driven a dramatic increase in overdose deaths",
      "Milwaukee accounts for a disproportionate share of deaths",
      "Racial disparities in overdose deaths are significant"
    ],
    overview: "Wisconsin's addiction crisis is shaped by two dominant forces: a deeply embedded drinking culture and the influx of illicit fentanyl. The state consistently ranks among the highest for binge drinking and alcohol-related problems, while fentanyl has driven overdose deaths to record levels. Milwaukee bears a disproportionate burden, with significant racial disparities in outcomes. Northern Wisconsin's rural communities face additional challenges with methamphetamine and limited treatment access.",
    substanceDetails: "Fentanyl is the leading cause of overdose death in Wisconsin. Alcohol misuse is deeply embedded in the state's culture, with Wisconsin consistently ranking among the top states for binge drinking. Cocaine mixed with fentanyl is a significant cause of death in Milwaukee. Methamphetamine is prevalent in rural areas. Heroin use has declined as fentanyl has replaced it.",
    familyGuidance: "Wisconsin families often normalize heavy drinking until addiction becomes undeniable. If you're seeing signs that your loved one's substance use has crossed from problematic to dangerous, a professional interventionist can help you take action. Wisconsin's drinking culture makes it especially important to have expert guidance.",
    interventionContext: "Wisconsin's strong family and community values are assets during the intervention process. Interventionists should understand the state's drinking culture and its role in enabling behavior. Addressing alcohol as a primary concern (not just 'hard drugs') is often important in Wisconsin interventions.",
    resources: [
      { name: "Wisconsin DHS – Behavioral Health", description: "State behavioral health services" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  },
  wyoming: {
    slug: "wyoming",
    name: "Wyoming",
    abbreviation: "WY",
    population: "577,000",
    overdoseDeathsAnnual: "120",
    overdoseRatePer100k: "20.8",
    sudPrevalence: "8.5% of adults",
    primarySubstances: ["Alcohol", "Methamphetamine", "Fentanyl", "Prescription Opioids"],
    treatmentGap: "Over 85% of those needing treatment do not receive it",
    naloxoneAccess: "Available at pharmacies under prescriber-based arrangements",
    keyStats: [
      "Wyoming has one of the highest alcohol consumption rates in the U.S.",
      "Methamphetamine is the primary illicit drug threat",
      "The state has extremely limited treatment infrastructure",
      "Wyoming's sparse population means most counties have no treatment facilities"
    ],
    overview: "Wyoming, the nation's least populous state, faces an addiction crisis characterized by alcohol misuse, methamphetamine, and extremely limited treatment access. The state's vast geography, sparse population, and rugged individualist culture create unique barriers to seeking and receiving help. Most Wyoming counties have no local treatment facilities, meaning families must often travel hundreds of miles for care.",
    substanceDetails: "Alcohol is the most significant substance of concern in Wyoming, with consumption rates among the highest nationally. Methamphetamine is the dominant illicit drug. Fentanyl is emerging but less prevalent than in more populated states. Prescription opioid misuse persists, particularly in communities with limited healthcare access.",
    familyGuidance: "Wyoming families face perhaps the most significant treatment access challenges in the nation. A professional interventionist who understands remote rural logistics is essential — they can identify appropriate treatment, arrange travel, and ensure your loved one gets from Wyoming to effective care without the process falling apart.",
    interventionContext: "Wyoming interventions require an interventionist comfortable with extreme rural settings, long travel distances, and a culture of independence and self-reliance. Understanding how to work within that cultural framework — rather than against it — is key to successful outcomes.",
    resources: [
      { name: "Wyoming DOH – Behavioral Health", description: "State behavioral health resources" },
      { name: "SAMHSA National Helpline", description: "Free, confidential, 24/7 treatment referral service: 1-800-662-4357" }
    ]
  }
};

export const allStateSlugs = Object.keys(stateData);
