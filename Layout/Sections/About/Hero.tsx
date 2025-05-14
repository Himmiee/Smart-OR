"use client";

import { CardContainer } from "@/Layout/cards/CardContainer";
import HeroImg from "@/public/about/hero/about-hero.jpg";

export const AboutHero: React.FC = () => {
  return (
    <div className="relative h-[55vh] md:h-[550px]  w-full overflow-hidden">
      <CardContainer bgImage={HeroImg}>
        <div className="flex flex-row items-end justify-between h-full w-full px-4 md:px-12 ">
          {/* Text Content */}
          <div className="w-full lg:w-2/3 text-left space-y-4 md:space-y-6">
            <p className="text-lg">About CREDICORP</p>
            <p className="text-3xl font-medium md:text-6xl leading-[1.2]">Leading The charge for Financial Inclusion</p>
          </div>

          {/* Optionally leave the right side empty for now */}
          <div className="hidden lg:block w-1/2" />
        </div>
      </CardContainer>
    </div>
  );
};
