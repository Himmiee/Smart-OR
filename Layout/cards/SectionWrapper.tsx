"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import topRightDefault from "@/public/hero/bottom-lef.png";
import bottomLeftDefault from "@/public/hero/bottom-lef.png";

interface SectionWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string; 
  showCorners?: boolean;
  topRightImage?: StaticImageData;
  bottomLeftImage?: StaticImageData;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  backgroundColor = "bg-white",
  showCorners = true,
  topRightImage = topRightDefault,
  bottomLeftImage = bottomLeftDefault,
  className = "",
}) => {
  return (
    <section className={`${backgroundColor} relative py-12 ${className}`}>
      {showCorners && (
        <>
          <div className="absolute top-0 right-0 w-48 h-48 z-10 hidden lg:block rotate-90 pointer-events-none">
            <Image
              src={topRightImage}
              alt="Top Right Decoration"
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-48 h-48 z-10 hidden lg:block -rotate-90 pointer-events-none">
            <Image
              src={bottomLeftImage}
              alt="Bottom Left Decoration"
              className="object-contain"
            />
          </div>
        </>
      )}

      <div className="max-w-screen-xl mx-auto px-6 ">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
