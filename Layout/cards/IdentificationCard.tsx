import Image from "next/image";
import React from "react";

export interface IdentificationCardProps {
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
}

export const IdentitficationCard: React.FC<IdentificationCardProps> = ({
  name,
  title,
  quote,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-4 px-6 md:px-6 md:p-4 bg-white py-8 md:max-w-4xl mx-auto gap-x-4 ">
      <div className="relative flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${name} portrait`}
          width={400}
          height={400}
          className="rounded-3xl md:hidden object-cover"
        />
        <Image
          src={imageUrl}
          alt={`${name} portrait`}
          width={250}
          height={250}
          className="rounded-3xl hidden md:block object-cover"
        />
      </div>
      <div className="flex-grow">
        <blockquote className="text-[#090914] text-lg mb-6 mt-4 md:mt-0">
          "{quote}"
        </blockquote>

        <h3 className="text-sm font-semibold text-[#090914]  md:mt-0">
          {name}
        </h3>
        <p className="text-sm text-[#64748B]   my-1">{title}</p>
      </div>
    </div>
  );
};
