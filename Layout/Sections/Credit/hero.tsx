"use client";

import { CardContainer } from "@/Layout/cards/CardContainer";
import HeroImg from "@/public/credit/credit.png";

export const CreditHero: React.FC = () => {
  return (
    <div className="relative h-[55vh] md:h-[650px]  w-full overflow-hidden">
      <CardContainer bgImage={HeroImg}>
        <div className="flex flex-row items-end justify-between h-full w-full px-4 md:pl-12 ">
          {/* Text Content */}
          <div className="w-full max-w-4xl text-left space-y-4 md:space-y-6">
            <p className="text-2xl font-medium md:text-6xl leading-[1.2]">
              How To Apply For Credit
            </p>
            <p className="md:text-3xl leading-relaxed">
              Apply now via our growing list of Financial Institutions, with up
              to 50% reduction in interest rates.
            </p>
          </div>

          {/* Optionally leave the right side empty for now */}
          <div className="hidden lg:block " />
        </div>
      </CardContainer>
    </div>
  );
};
