"use client";

import { CardContainer } from "@/Layout/cards/CardContainer";
import HeroImg from "@/public/impact/bg-grad.png";

export const ImpactHero: React.FC = () => {
  return (
    <div className="relative h-[35vh] md:h-[250px]  w-full overflow-hidden">
      <CardContainer bgImage={HeroImg}>
        <div className="flex flex-row items-end justify-between h-full w-full px-4 md:px-12 ">
          {/* Text Content */}
          <div className="w-full lg:w-3/4 text-left space-y-4 md:space-y-6">
            <p className="text-3xl font-medium md:text-6xl leading-[1.2]">
              Humans of CREDICORP
            </p>
            <p>Real lives. Real dreams. Real impact.</p>
          </div>

          {/* Optionally leave the right side empty for now */}
          <div className="hidden lg:block w-1/2" />
        </div>
      </CardContainer>
    </div>
  );
};
