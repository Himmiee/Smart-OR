"use client";

import SectionWrapper from "@/Layout/cards/SectionWrapper";
import ServiceCard from "@/Layout/cards/ServiceCard";
import { KeyFeatures } from "@/Providers/data/data";
import topRightImg from "@/public/hero/bottom-lef.png";
import bottomLeftImg from "@/public/hero/bottom-lef.png";
import car from "@/public/calm/key/car.png";
import Image from "next/image";
import React from "react";

const KeyFeaturesSection = () => {
  return (
    <SectionWrapper
      topRightImage={topRightImg}
      bottomLeftImage={bottomLeftImg}
      showCorners
      backgroundColor="bg-[#FFFFE7]"
    >
      <h3 className="lg:hidden text-center text-4xl md:text-5xl font-semibold mb-6">
        Key Features <br /> of the CALM Fund
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
        <div className="lg:col-span-1 hidden lg:flex flex-col justify-between rounded-xl bg-yellow-100 py-6 h-full">
          <h3 className="md:text-4xl font-semibold text-gray-900 mb-4 px-6 ">
            Key Features <br /> of the CALM Fund
          </h3>
          <div className="mt-auto  pl-6">
            <Image src={car} alt="Blue Truck" className="w-full h-auto" />
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {KeyFeatures.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              bgColor={item.bgColor}
              borderColor={item.borderColor}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default KeyFeaturesSection;
