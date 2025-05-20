"use client";

import Image from "next/image";
import bottomLeftImage from "@/public/about/hero/bg-left.png";
import impactLogoImage from "@/public/about/hero/mini-logo.png";
import { Counter } from "@/Layout/variants/counter";

export const ImpactSection = ({ showLogo = true }: { showLogo?: boolean }) => {
  return (
    <section className="px-6 py-20 relative overflow-hidden bg-[#1C1C1C]">
      {showLogo && (
        <>
          <Image
            src={bottomLeftImage}
            alt="Background Pattern"
            className="absolute -top-8 -left-6 z-0 rotate-180 opacity-60"
            width={250}
            height={250}
          />
          <Image
            src={bottomLeftImage}
            alt="Background Pattern"
            className="absolute bottom-0 right-0 z-0"
            width={250}
            height={250}
          />
        </>
      )}
      <div className="relative z-10 text-white max-w-screen-xl mx-auto lg:">
        <div className="relative mb-12">
          <Image
            src={impactLogoImage}
            alt="Impact Logo"
            width={30}
            height={30}
            className="absolute -left-9 hidden lg:flex top-2"
          />

          <h2 className="text-5xl font-bold">Impact</h2>
          <p className="mt-4 max-w-2xl text-lg opacity-80">
            At CREDICORP, our mission is backed by bold, measurable goals that
            reflect our ambition to transform Nigeria's consumer credit
            landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-start">
          <div>
            <h3 className="text-5xl font-bold border-t-[1px] border-white/30 pt-12 md:pt-24 text-white">
              <Counter to={50000} format="k+" />
            </h3>
            <p className="mt-2 opacity-80 max-w-[250px]">
              Number of beneficiaries accessing consumer credit
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold border-t-[1px] border-white/30 pt-12 md:pt-24 text-white">
              <Counter to={24} format="+" />
            </h3>
            <p className="mt-2 opacity-80 max-w-[250px]">
              Number of partnering financial institutions
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold border-t-[1px] border-white/30 pt-12 md:pt-24 text-white">
              <Counter to={15000000000} format="b+" />
            </h3>
            <p className="mt-2 opacity-80 max-w-[250px]">
              Total value of credit disbursed to beneficiaries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
