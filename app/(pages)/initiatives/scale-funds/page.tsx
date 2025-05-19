"use client";

// import { BeneficiaryComponent } from "@/Layout/Sections/Initiatives/Calm/Beneficiaries";
import { ScaleBenefits } from "@/Layout/Sections/Initiatives/scale/Benefits";
import { ScaleHero } from "@/Layout/Sections/Initiatives/scale/Hero";
import { ProjectScaleComponent } from "@/Layout/Sections/Initiatives/scale/ProjectScale";
// import { ScaleVendorSection } from "@/Layout/Sections/Initiatives/scale/ScaleVendor";

export default function ScaleInitiativesPage() {
  return (
    <>
      <ScaleHero />
      <ProjectScaleComponent />
      <ScaleBenefits />
      {/* <BeneficiaryComponent /> */}
      {/* <ScaleVendorSection /> */}
    </>
  );
}
