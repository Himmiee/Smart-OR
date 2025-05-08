"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardProps {
  imageSrc: string | StaticImageData;
  name: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

export const CardComponent: React.FC<CardProps> = ({
  imageSrc,
  name,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md border overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-48 border-b">
        <Image
          src={imageSrc}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex items-center justify-start">
          <Button
            onClick={onClick}
            className="bg-white text-[color:var(--green-brand)] shadow-none cursor-pointer hover:bg-gray-100 px-4 py-2 text-sm flex items-center"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

