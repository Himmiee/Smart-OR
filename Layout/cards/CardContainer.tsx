import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
  bgImage: string | StaticImageData;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  bgImage,
}) => {
  const imageUrl = typeof bgImage === "string" ? bgImage : bgImage.src;

  return (
    <div
      className="relative bg-cover bg-center text-white h-full"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container max-w-screen-xl mx-auto h-full px-2 py-20">
        {children}
      </div>
    </div>
  );
};
