"use client";
import { AnimatedSection } from "@/Layout/Sections/Animation";
import { BenefitsPage } from "@/Layout/Sections/Home/Benefits";
import { HomeHero } from "@/Layout/Sections/Home/Hero";
import { HowItWorksPage } from "@/Layout/Sections/Home/HowItWorks";
import MissionPage from "@/Layout/Sections/Home/Mission";
import { PartnersPage } from "@/Layout/Sections/Home/Partners";
import { OurServicePage } from "@/Layout/Sections/Home/Server";
import { ImpactSection } from "@/Layout/Sections/About/Impact";
import { ThematicsFocus } from "@/Layout/Sections/Home/Thematics";

export default function HomePage() {
  const animations = {
    heroAnimation: {
      initial: { opacity: 0, scale: 0.9, rotateX: 15 },
      animate: { opacity: 1, scale: 1, rotateX: 0 },
      transition: { duration: 0.8, ease: "easeOut" }, 
    },
    missionAnimation: {
      initial: { opacity: 0, y: 30 }, 
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
    },
    serviceAnimation: {
      initial: { opacity: 0, y: 20 }, 
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
    },
    benefitsAnimation: {
      initial: { opacity: 0, x: -30 }, 
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
    howItWorksAnimation: {
      initial: { opacity: 0, scale: 0.95, y: 20 }, 
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
    },
    partnersAnimation: {
      initial: { opacity: 0, y: 30 }, 
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
    },
    fadeInAnimation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {" "}
      <section>
        <HomeHero />
      </section>
      <AnimatedSection animation={animations.missionAnimation}>
        <MissionPage />
      </AnimatedSection>
      <AnimatedSection animation={animations.serviceAnimation}>
        <OurServicePage />
      </AnimatedSection>
      <AnimatedSection animation={animations.fadeInAnimation}>
        <ImpactSection />
      </AnimatedSection>
      <AnimatedSection animation={animations.fadeInAnimation}>
        <ThematicsFocus />
      </AnimatedSection>
      <AnimatedSection animation={animations.howItWorksAnimation}>
        <HowItWorksPage />
      </AnimatedSection>
      <AnimatedSection animation={animations.partnersAnimation}>
        <PartnersPage />
      </AnimatedSection>
      <AnimatedSection animation={animations.benefitsAnimation}>
        <BenefitsPage />
      </AnimatedSection>
    </main>
  );
}
