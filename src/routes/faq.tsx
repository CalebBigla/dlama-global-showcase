import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { IMAGES } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Dlama Global Homes" },
      {
        name: "description",
        content:
          "Get answers to common questions about buying land, payment plans, Certificate of Occupancy, site visits, and more.",
      },
      { property: "og:title", content: "FAQ | Dlama Global Homes" },
      { property: "og:description", content: "Common questions about land purchase and documentation" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  {
    category: "Payment & Pricing",
    questions: [
      {
        q: "How do your flexible payment plans work?",
        a: "Our payment plans allow you to spread the cost of your plot over 3-6 months depending on the estate. There are no hidden fees or interest charges. Simply pay an initial deposit (typically 30-40% of the plot price), then complete the balance in equal monthly installments. Once fully paid, all documentation is processed immediately.",
      },
      {
        q: "Can I negotiate the price?",
        a: "Our prices are already discounted from the original rates as shown on each listing. However, we occasionally have special promotions or early-bird offers for new estates. Contact our team to learn about current deals and bulk-purchase discounts if you're buying multiple plots.",
      },
      {
        q: "What happens if I can't complete my payment plan?",
        a: "We understand that circumstances can change. If you're facing difficulty, contact us immediately. We can discuss payment plan extensions or restructuring options. Our refund policy is clearly outlined in your purchase agreement and varies by estate and payment stage.",
      },
      {
        q: "Are there any additional fees besides the plot price?",
        a: "The advertised price covers the plot itself. Additional costs may include survey fees, documentation processing, and land registration, which we'll clearly explain before purchase. We maintain full transparency—no surprise charges.",
      },
    ],
  },
  {
    category: "Documentation & Titles",
    questions: [
      {
        q: "What is a Certificate of Occupancy (C of O)?",
        a: "A Certificate of Occupancy is a legal document issued by the government that confirms your right to occupy and use the land. It's the strongest form of land title in Nigeria and provides maximum security for your investment. All our Hossana Estate plots come with C of O.",
      },
      {
        q: "What documents will I receive when I buy?",
        a: "You'll receive: Deed of Assignment or Contract of Sale, Receipt of Payment, Survey Plan, Allocation Letter, and (where applicable) Certificate of Occupancy. We guide you through the entire documentation process and ensure everything is properly registered.",
      },
      {
        q: "How long does the documentation process take?",
        a: "Once your payment is complete, basic documentation (Deed of Assignment, Receipt, Survey Plan) is ready within 2-4 weeks. C of O processing (where applicable) can take 3-6 months as it involves government agencies, but we handle all the paperwork and follow-ups on your behalf.",
      },
      {
        q: "How do I verify that the land is genuine?",
        a: "We encourage due diligence! We provide survey plans that you can verify at the Adamawa State Ministry of Lands. You can also conduct an independent land search. We welcome prospective buyers to visit the estates with our team to physically inspect the plots and surrounding infrastructure.",
      },
    ],
  },
  {
    category: "Site Visits & Inspection",
    questions: [
      {
        q: "Can I visit the estate before buying?",
        a: "Absolutely! We strongly encourage site visits. Contact us to schedule a free guided tour of any estate. Our team will show you the available plots, explain the layout, point out infrastructure developments, and answer all your questions on-site.",
      },
      {
        q: "Where is your office located?",
        a: "Our office is at No 43 Atiku Abubakar Way, opposite Sabru House, Jimeta, Yola, Adamawa State. We're open Monday to Saturday, 8:00 AM - 6:00 PM. You can also reach us on WhatsApp (08060774472) to schedule appointments.",
      },
      {
        q: "What should I bring for a site visit?",
        a: "Just bring yourself and your questions! We recommend comfortable shoes for walking the estate and a notepad if you want to take notes. If you're ready to purchase, bring a valid ID and initial payment (cash, bank transfer, or bank draft are accepted).",
      },
    ],
  },
  {
    category: "Plot Selection & Development",
    questions: [
      {
        q: "Can I choose my specific plot location within the estate?",
        a: "Yes! During your site visit, we'll show you all available plots and you can choose based on your preferences—corner plots, plots near the gate, those with better elevation, etc. Popular locations go fast, so we recommend visiting early.",
      },
      {
        q: "What is the difference between 50×100 and 100×100 plots?",
        a: "50×100 feet plots (approximately 465 square meters) are ideal for standard family homes with 2-4 bedrooms. 100×100 feet plots (approximately 929 square meters) offer more space for larger homes, extensive gardens, or future expansion. Your choice depends on your building plans and budget.",
      },
      {
        q: "When can I start building on my plot?",
        a: "You can begin construction as soon as your documentation is complete and you've obtained a building permit from the Yola Municipal Council. We can connect you with reliable architects, builders, and surveyors in the area if needed.",
      },
      {
        q: "Are there building restrictions or estate guidelines?",
        a: "Yes, each estate has development guidelines to maintain property values and aesthetic consistency. These typically include minimum building setbacks, fence specifications, and architectural approval processes. We'll provide these guidelines during your purchase.",
      },
    ],
  },
  {
    category: "Investment & Resale",
    questions: [
      {
        q: "Is buying land in Yola a good investment?",
        a: "Adamawa State, particularly Yola and Jimeta, is experiencing steady growth in residential development. Land values in our estates have appreciated 15-30% over the past 3-5 years. While past performance doesn't guarantee future results, strategic location, verified titles, and infrastructure development make these plots attractive long-term investments.",
      },
      {
        q: "Can I resell my plot before completing payment?",
        a: "Yes, but you must notify us in writing. You can transfer your payment agreement to another buyer with our approval. The new buyer will complete the remaining balance. A small administrative fee may apply for the transfer process.",
      },
      {
        q: "Do you offer a buyback guarantee?",
        a: "We don't offer formal buyback guarantees, but we can connect sellers with our network of prospective buyers if you wish to resell. Many of our clients successfully resell their plots as land values appreciate.",
      },
    ],
  },
];

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Everything You Need to Know About Buying Land"
        body="Clear answers to the most common questions about our estates, payment plans, documentation, and investment process."
        image={IMAGES.villa}
      />

      <section className="py-24">
        <div className="container-lux max-w-4xl">
          {faqs.map((section, sectionIndex) => (
            <Reveal key={section.category} delay={sectionIndex * 100} className="mb-16">
              <h2 className="text-2xl text-primary md:text-3xl">{section.category}</h2>
              <div className="gold-rule mt-4 w-16" />
              <Accordion type="single" collapsible className="mt-8">
                {section.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`}>
                    <AccordionTrigger className="text-left text-base font-semibold text-primary hover:text-accent md:text-lg">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        {faq.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}

          <Reveal delay={600}>
            <div className="mt-16 border-t border-border pt-16 text-center">
              <h3 className="text-2xl text-primary">Still Have Questions?</h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
                Our team is here to help. Contact us via phone, WhatsApp, or visit our office in Jimeta for personalized assistance with your land purchase.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/2348060774472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1fb855]"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:08060774472"
                  className="inline-flex items-center gap-2 border border-border bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                >
                  Call 08060774472
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
