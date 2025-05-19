"use client";

import { AboutHero } from "@/Layout/Sections/About/Hero";
import { AboutIdentificationSection } from "@/Layout/Sections/About/Identification";
import { ImpactSection } from "@/Layout/Sections/About/Impact";
import { PartnersandShareholders } from "@/Layout/Sections/About/PartnersandShareholders";
// import { NewsPage } from "@/Layout/Sections/Home/News";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <PartnersandShareholders />
      <AboutIdentificationSection />
      <ImpactSection />
      {/* <NewsPage /> */}
    </>
  );
}
