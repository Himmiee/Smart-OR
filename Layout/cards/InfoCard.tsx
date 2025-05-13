import Image, { StaticImageData } from "next/image";
import React from "react";

interface InformationCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt?: string;
  reverse?: boolean;
}

const InformationCard: React.FC<InformationCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "info image",
  reverse = false,
}) => {
  return (
    <section className="w-full py-10 text-[#040405]">
      <div
        className={`container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="md:w-1/2  md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-4">
            {title}
          </h2>
          <p className="text-base md:text-sm lg:text-lg leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InformationCard;
