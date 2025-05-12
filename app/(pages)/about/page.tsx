"use client";

import { AboutHero } from "@/Layout/Sections/About/Hero";
import { AboutIdentificationSection } from "@/Layout/Sections/About/Identification";
import { PartnersandShareholders } from "@/Layout/Sections/About/PartnersandShareholders";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <PartnersandShareholders />
      <AboutIdentificationSection />
    </>
  );
}
