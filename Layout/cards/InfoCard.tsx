import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";

type InfoCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  bgColor?: string; 
  reverse?: boolean;
  rounded?: boolean;
};

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  image,
  bgColor = "bg-white",
  reverse = false,
  rounded = true,
}) => {
  return (
    <section
      className={clsx(
        "w-full flex flex-col md:flex-row items-center justify-between gap-6 p-6",
        bgColor,
        rounded && "rounded-2xl",
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Image Section */}
      <div className="">
        <Image
          src={image}
          alt={title}
          className="h-auto object-contain"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};
