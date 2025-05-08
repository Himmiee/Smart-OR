import { BenefitsPage } from "@/Layout/Sections/Home/Benefits";
import { HomeHero } from "@/Layout/Sections/Home/Hero";
import MissionPage from "@/Layout/Sections/Home/Mission";
import { OurServicePage } from "@/Layout/Sections/Home/Server";

export default function HomePage() {
  return (
    <section>
      <HomeHero />
      <MissionPage />
      <OurServicePage />
      <BenefitsPage />
    </section>
  );
}
