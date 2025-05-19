"use client";

import { AnimatedSection } from "@/Layout/Sections/Animation";
import { BenefitsPage } from "@/Layout/Sections/Home/Benefits";
import { HomeHero } from "@/Layout/Sections/Home/Hero";
import { HowItWorksPage } from "@/Layout/Sections/Home/HowItWorks";
import MissionPage from "@/Layout/Sections/Home/Mission";
import { NewsPage } from "@/Layout/Sections/Home/News";
import { PartnersPage } from "@/Layout/Sections/Home/Partners";
import { OurServicePage } from "@/Layout/Sections/Home/Server";
import { OffersPage } from "@/Layout/Sections/Home/Offers";
import { ImpactGrid } from "@/Layout/Sections/Impact/ImpactGrid";
import { ImpactSection } from "@/Layout/Sections/About/Impact";
import { ThematicsFocus } from "@/Layout/Sections/Home/Thematics";

export default function HomePage() {
  const animations = {
    heroAnimation: {
      initial: { opacity: 0, scale: 0.9, rotateX: 15 },
      animate: { opacity: 1, scale: 1, rotateX: 0 },
      transition: { duration: 1.2, ease: "easeOut" },
    },
    missionAnimation: {
      initial: { opacity: 0, y: 50, rotateY: -30 },
      animate: { opacity: 1, y: 0, rotateY: 0 },
      transition: { duration: 1, ease: "easeOut" },
    },
    serviceAnimation: {
      initial: { opacity: 0, rotateY: 180 },
      animate: { opacity: 1, rotateY: 0 },
      transition: { duration: 1.2, ease: "easeOut" },
    },
    benefitsAnimation: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.3 },
    },
    howItWorksAnimation: {
      initial: { opacity: 0, scale: 0.8, x: 50 },
      animate: { opacity: 1, scale: 1, x: 0 },
      transition: { duration: 1.2, ease: "easeOut" },
    },
    partnersAnimation: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1.2, ease: "easeOut" },
    },
    newsAnimation: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section>
      <section>
        <HomeHero />
      </section>
      {/* <section>
        <OffersPage />
      </section> */}
      <AnimatedSection animation={animations.missionAnimation}>
        <MissionPage />
      </AnimatedSection>
      <AnimatedSection animation={animations.serviceAnimation}>
        <OurServicePage />
      </AnimatedSection>
      <AnimatedSection animation={animations.newsAnimation}>
        <ImpactSection />
      </AnimatedSection>
      <AnimatedSection animation={animations.newsAnimation}>
        <ThematicsFocus />
      </AnimatedSection>
      <AnimatedSection animation={animations.howItWorksAnimation}>
        <HowItWorksPage />
      </AnimatedSection>
      <AnimatedSection animation={animations.partnersAnimation}>
        <PartnersPage />
      </AnimatedSection>
      <AnimatedSection animation={animations.newsAnimation}>
        <BenefitsPage />
      </AnimatedSection>
      {/* <AnimatedSection animation={animations.newsAnimation}>
        <NewsPage />
      </AnimatedSection> */}
    </section>
  );
}
