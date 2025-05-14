import { ImpactSection } from "@/Layout/Sections/About/Impact";
import { ImpactGrid } from "@/Layout/Sections/Impact/ImpactGrid";
import { ImpactHero } from "@/Layout/Sections/Impact/hero";

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <ImpactSection showLogo={false} />
      <ImpactGrid />
    </>
  );
}
