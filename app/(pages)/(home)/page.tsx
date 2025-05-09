import { BenefitsPage } from "@/Layout/Sections/Home/Benefits";
import { HomeHero } from "@/Layout/Sections/Home/Hero";
import { HowItWorksPage } from "@/Layout/Sections/Home/HowItWorks";
import MissionPage from "@/Layout/Sections/Home/Mission";
import { NewsPage } from "@/Layout/Sections/Home/News";
import { PartnersPage } from "@/Layout/Sections/Home/Partners";
import { OurServicePage } from "@/Layout/Sections/Home/Server";
import { AvatarCircle } from "@/Layout/Sections/Home/Story";
import { TestimonialPage } from "@/Layout/Sections/Home/Testimonial";

export default function HomePage() {
  return (
    <section>
      <HomeHero />
      <MissionPage />
      <OurServicePage />
      <BenefitsPage />
      <HowItWorksPage />
      <AvatarCircle/>
      <PartnersPage />
      <TestimonialPage />
      <NewsPage />
    </section>
  );
}
