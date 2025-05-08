import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div>
      <div className="mb-4">
        <Image src={icon} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
