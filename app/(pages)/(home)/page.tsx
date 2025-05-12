"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/Layout/Sections/Animation";
import { BenefitsPage } from "@/Layout/Sections/Home/Benefits";
import { HomeHero } from "@/Layout/Sections/Home/Hero";
import { HowItWorksPage } from "@/Layout/Sections/Home/HowItWorks";
import MissionPage from "@/Layout/Sections/Home/Mission";
import { NewsPage } from "@/Layout/Sections/Home/News";
import { PartnersPage } from "@/Layout/Sections/Home/Partners";
import { OurServicePage } from "@/Layout/Sections/Home/Server";
import { AvatarCircle } from "@/Layout/Sections/Home/Story";
import { TestimonialPage } from "@/Layout/Sections/Home/Testimonial";
import Loader from "@/Layout/Sections/Home/Loader";
import { OffersPage } from "@/Layout/Sections/Home/Offers";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

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
    avatarAnimation: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1.2, ease: "easeOut" },
    },
    partnersAnimation: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1.2, ease: "easeOut" },
    },
    testimonialAnimation: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.3 },
    },
    newsAnimation: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <section>
          <section>
            <HomeHero />
          </section>
          <section>
            <OffersPage />
          </section>
          <AnimatedSection animation={animations.missionAnimation}>
            <MissionPage />
          </AnimatedSection>
          <AnimatedSection animation={animations.serviceAnimation}>
            <OurServicePage />
          </AnimatedSection>
          <section>
            <BenefitsPage />
          </section>
          <AnimatedSection animation={animations.howItWorksAnimation}>
            <HowItWorksPage />
          </AnimatedSection>
          <AnimatedSection animation={animations.avatarAnimation}>
            <AvatarCircle />
          </AnimatedSection>
          <AnimatedSection animation={animations.partnersAnimation}>
            <PartnersPage />
          </AnimatedSection>
          <AnimatedSection animation={animations.testimonialAnimation}>
            <TestimonialPage />
          </AnimatedSection>
          <AnimatedSection animation={animations.newsAnimation}>
            <NewsPage />
          </AnimatedSection>
        </section>
      )}
    </>
  );
}
