import Image, { StaticImageData } from "next/image";
import React from "react";

interface WrapCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
}

export const WrapCard: React.FC<WrapCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-full h-64 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="px-6 py-6  bg-[#D6F1FF] flex flex-col items-start justify-start">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};
