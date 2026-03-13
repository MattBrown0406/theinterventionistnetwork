import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const faqs = [
  {
    question: "What is a professional intervention?",
    answer: "A professional intervention is a structured, compassionate conversation guided by a trained interventionist. It's designed to help someone struggling with addiction recognize their situation and accept help. Unlike what you see on TV, most modern interventions are calm, caring, and carefully planned — not confrontational."
  },
  {
    question: "How do I know if my loved one needs an intervention?",
    answer: "If your loved one's substance use is causing harm to themselves or others, if they've refused treatment, if conversations about their addiction lead to conflict or denial, or if you're afraid for their safety — these are all strong signs an intervention may be needed. You don't need to wait for a crisis. In fact, earlier is often better."
  },
  {
    question: "What does an interventionist actually do?",
    answer: "An interventionist guides the entire process: they assess the situation, coach the family on what to say, research treatment options, coordinate logistics (flights, insurance, bed availability), facilitate the intervention itself, and often escort the person to treatment. They serve as a calm, experienced neutral party in a highly emotional situation."
  },
  {
    question: "How much does an intervention cost?",
    answer: "Professional interventions typically range from $3,000 to $15,000 depending on complexity, travel requirements, and the interventionist's experience. Some interventionists offer payment plans. While it's a significant investment, families often find it far less costly than the ongoing consequences of untreated addiction — both financially and emotionally."
  },
  {
    question: "Does insurance cover interventions?",
    answer: "Most health insurance plans do not directly cover the cost of an intervention. However, the treatment that follows an intervention is often covered. Some interventionists can help you navigate insurance options and find treatment facilities that work with your plan."
  },
  {
    question: "What if my loved one says no?",
    answer: "A well-planned intervention succeeds more often than most families expect — roughly 80–90% of the time when led by an experienced professional. Even when someone initially resists, the seeds planted during an intervention often lead them to accept help in the days or weeks that follow. It's also important to know that most interventionists don't simply walk away after the intervention day. Many continue working under contract with the family until the client has entered treatment, and some will remain engaged through the entire treatment process — providing ongoing support if the client leaves treatment early, resists a step-down recommendation, or needs to be re-engaged. This means your family isn't left without guidance at the most critical moments."
  },
  {
    question: "Do we need to keep the intervention a secret?",
    answer: "Yes, in most cases the person struggling with addiction is not told about the intervention in advance. This isn't about deception — it's about creating a moment where they can hear from their loved ones without having time to build defenses or leave. Your interventionist will guide you on exactly how to handle the logistics."
  },
  {
    question: "What credentials should I look for in an interventionist?",
    answer: "Look for certifications such as BRI (Board Registered Interventionist), CIP (Certified Intervention Professional), or ARISE-trained professionals. Experience matters enormously — ask how many interventions they've conducted, their success rate, and whether they carry liability insurance. Be cautious of anyone who also accepts referral fees from treatment centers, as this creates a conflict of interest."
  },
  {
    question: "What is a referral fee, and why should I care?",
    answer: "A referral fee is a payment — sometimes thousands of dollars — that a treatment center pays to the person who sends them a patient. When an interventionist accepts referral fees, their treatment recommendations may be influenced by who pays them the most rather than what's best for your loved one. Every interventionist in The Interventionist Network has pledged to never accept referral fees."
  },
  {
    question: "How long does the intervention process take?",
    answer: "The entire process typically takes 3–7 days from initial contact to the day of the intervention. This includes family coaching sessions (often done by phone or video), treatment planning, logistical coordination, and the intervention itself. In urgent situations, an experienced interventionist can sometimes mobilize within 24–48 hours."
  },
  {
    question: "What's the difference between an intervention and just talking to them?",
    answer: "Most families have already tried talking — many times. An intervention is different because it's structured, involves multiple people who matter to the individual, is guided by a trained professional, and presents a clear path to treatment with consequences for refusing. It replaces scattered, emotional pleas with a unified, loving, and strategic approach."
  },
  {
    question: "Can an intervention make things worse?",
    answer: "When conducted by an experienced professional, interventions are safe and effective. Poorly planned or confrontational approaches — often attempted without professional guidance — can backfire. That's why hiring a qualified, experienced interventionist is critical. They know how to de-escalate, manage emotions, and keep everyone safe."
  },
  {
    question: "What happens after the intervention?",
    answer: "If your loved one accepts help, the interventionist typically escorts them directly to a pre-arranged treatment facility — often the same day. Many interventionists also provide follow-up support for the family, including guidance on boundaries, family recovery resources, and ongoing communication with the treatment team."
  },
  {
    question: "My loved one is using fentanyl. Is an intervention safe?",
    answer: "Fentanyl situations are extremely dangerous, which makes professional intervention even more urgent. Experienced interventionists understand the risks, carry or ensure access to Narcan (naloxone), and coordinate closely with medical professionals. Waiting is often riskier than acting. If your loved one is using fentanyl, reach out to an interventionist as soon as possible."
  },
  {
    question: "What if my loved one has a mental health condition too?",
    answer: "Many people struggling with addiction also have co-occurring mental health conditions like depression, anxiety, PTSD, or bipolar disorder. Experienced interventionists are trained to recognize these complexities and will recommend dual-diagnosis treatment programs that address both issues simultaneously."
  },
  {
    question: "Does The Interventionist Network charge families?",
    answer: "No. The Interventionist Network is completely free for families to use. We exist to connect you with vetted, trusted interventionists. Our members pay a membership fee to be listed — families never pay us anything. We also never accept referral fees, so our recommendations are always unbiased."
  },
  {
    question: "How do I choose between different interventionists?",
    answer: "Consider their experience, certifications, approach style, geographic availability, and whether you feel comfortable with them. Many interventionists offer a free initial consultation. We recommend speaking with at least one or two before deciding. Every interventionist in our network has been vetted for credentials, experience, and ethical standards."
  },
  {
    question: "Can an intervention be done remotely or by phone?",
    answer: "While in-person interventions are generally most effective, remote or virtual interventions have become more common and can work well in certain situations — especially when family members are spread across different states. Discuss your specific circumstances with an interventionist to determine the best approach."
  },
  {
    question: "What should I do right now if I think we need an intervention?",
    answer: "Start by reaching out. You can browse our network to find a vetted interventionist in your area, or submit a confidential help request and we'll guide you to the right professional. You don't need to have all the answers — that's what the interventionist is for. The most important step is the first one."
  },
];

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQPage = () => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions About Interventions"
        description="Get answers to common questions families ask about professional interventions, costs, what to expect, and how to find a trusted interventionist for your loved one."
      />
      <SchemaMarkup type="WebPage" data={faqSchema} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Honest answers to the questions families ask most when considering an intervention for a loved one.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/50"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Every family's situation is unique. Reach out for confidential, no-obligation guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/help">Get Help Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/find">Find an Interventionist</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
