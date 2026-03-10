"use client";

import { PageLayout } from "@/components/layout/page-layout";
import HeroSection from "@/components/home/HeroSection";
import DemoSection from "@/components/home/DemoSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import PricingSectionHome from "@/components/home/PricingSectionHome";
import CookieConsent from "@/components/CookieConsent";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <PageLayout>
      {/* SEO: FAQPage & Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is there a setup fee or long-term contract?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No setup fees, no long-term contracts. Cancel anytime.",
                },
              },
              {
                "@type": "Question",
                name: "What support is included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All plans include unlimited UK-based support by phone, email, and live chat.",
                },
              },
              {
                "@type": "Question",
                name: "Can I migrate from another system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide free onboarding and migration assistance from your current provider.",
                },
              },
              {
                "@type": "Question",
                name: "Are all features really included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, every plan includes all core features. Add-ons are optional.",
                },
              },
              {
                "@type": "Question",
                name: "Is OmniWTMS secure and GDPR compliant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we are fully GDPR compliant and ISO 27001 certified.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OmniWTMS",
            url: "https://omniwtms.com",
            logo: "https://omniwtms.com/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: "info@omniwtms.com",
                contactType: "customer support",
                areaServed: "GB",
                availableLanguage: ["English"],
              },
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "GB",
            },
            sameAs: ["https://www.linkedin.com/company/omniwtms"],
            description:
              "OmniWTMS is the UK's all-in-one warehouse and transport management platform for logistics, 3PL, and courier firms.",
          }),
        }}
      />
      <main>
        <section id="home" aria-label="Hero">
          <HeroSection />
        </section>
        <Section id="solutions" className="bg-gradient-to-b from-white via-gray-50 to-white">
          <Container>
            <SolutionsSection />
          </Container>
        </Section>
        <Section id="case-studies" className="bg-white">
          <Container>
            <CaseStudiesSection />
          </Container>
        </Section>
        <Section id="pricing" className="bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <PricingSectionHome />
          </Container>
        </Section>
        <Section id="contact" className="bg-white">
          <Container>
            <DemoSection />
          </Container>
        </Section>
      </main>
      <CookieConsent />
    </PageLayout>
  );
}
