"use client";

import { Button } from "@/components/ui/button";
import HeroImg from "@/public/scale/Call to action.png";
import SecondHalfImg from "@/public/scale/info.png";
import Image from "next/image";

export const ScaleVendorSection: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row">
      {/* Left Half with content + background image */}
      <div className="relative w-full md:w-1/2 min-h-[500px] md:h-[550px]">
        <Image
          src={HeroImg}
          alt="SCALE Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />

        <div className="relative z-20 h-full flex flex-col justify-center space-y-4 py-10 md:py-0 ml-auto max-w-2xl px-6 lg:px-14">
          <p className="text-3xl md:text-[40px] lg:text-[50px] max-w-[430px] font-medium leading-tight">
            Apply for SCALE Fund as a Vendor
          </p>
          <p className="text-lg font-bold">
            Join Project S.C.A.L.E. and Grow Your Business
          </p>
          <p className="max-w-xl">
            Are you a vendor or manufacturer ready to tap into Nigeria's booming
            consumer credit market? CREDICORP's SCALE Fund initiative connects
            local enterprises like yours to millions of credit-backed consumers—
            driving demand and fueling growth in Nigerian industries.
          </p>
          <Button className="mt-4 bg-[#4369E4] text-white rounded-sm w-48 h-11 cursor-pointer hover:bg-[#4369E4]/90">
            Apply Now
          </Button>
        </div>
      </div>

      {/* Right Half with a different image */}
      <div className="relative w-full md:w-1/2 min-h-[550px] md:h-[550px]">
        <Image
          src={SecondHalfImg}
          alt="Info Side"
          fill
          className="object-cover object-center z-0"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10">
          <div className="relative z-20 h-full flex flex-col justify-center py-10 md:py-0 mr-auto max-w-2xl px-6 lg:px-24 text-white space-y-6 ">
            <h2 className="text-3xl md:text-4xl font-bold">How to Apply:</h2>

            <div className="space-y-2">
              <p className="text-xl font-semibold">
                Complete the Online Registration
              </p>
              <p>
                Fill in your business details, contact information, and relevant
                credentials.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold">
                Submit Your Expression of Interest (EOI)
              </p>
              <p>
                Provide supporting documentation that verifies your operations
                and outlines your capacity to meet increased consumer demand.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold">Meet the Deadline</p>
              <p>
                Submit your application by{" "}
                <strong>December 15, 2024 (Phase 1)</strong> to join this
                transformative initiative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
