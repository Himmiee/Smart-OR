"use client";

// import { BeneficiaryComponent } from "@/Layout/Sections/Initiatives/Calm/Beneficiaries";
import { CalmBenefits } from "@/Layout/Sections/Initiatives/Calm/Benefits";
import { CalmHero } from "@/Layout/Sections/Initiatives/Calm/Hero";
import KeyFeaturesSection from "@/Layout/Sections/Initiatives/Calm/KeyFeatures";
import { ProjectCalmComponent } from "@/Layout/Sections/Initiatives/Calm/ProjectCalm";

export default function CalmInitiativesPage() {
  return (
    <>
      <CalmHero />
      <ProjectCalmComponent />
      <KeyFeaturesSection />
      <CalmBenefits />
      {/* <BeneficiaryComponent /> */}
    </>
  );
}
