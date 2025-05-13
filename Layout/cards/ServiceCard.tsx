import Image, { StaticImageData } from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: StaticImageData;
  bgColor?: string;
  borderColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  bgColor,
  borderColor,
}) => {
  const hasStyleWrapper = !!borderColor;

  return (
    <div className="rounded-xl  h-full">
      <div className="mb-4">
        {hasStyleWrapper ? (
          <div
            className={`w-16 h-16 flex items-center justify-center border rounded-full ${bgColor} border-${borderColor}`}
          >
            <Image src={icon} alt={title} className="w-8 h-8 object-contain" />
          </div>
        ) : (
          <Image src={icon} alt={title} className="w-12 h-12 object-contain" />
        )}
      </div>

        <h3 className="text-xl text-[#2D2F31] font-semibold mb-2 ">{title}</h3>
      <p className="text-[#2D2F31]  leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
