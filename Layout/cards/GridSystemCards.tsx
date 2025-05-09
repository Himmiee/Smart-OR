"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { BsArrowLeft } from "react-icons/bs";

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
    <div className="max-w-sm w-full bg-white rounded-2xl  border overflow-hidden">
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
          <div
            onClick={onClick}
            className="bg-white text-[color:var(--green-brand)] shadow-none cursor-pointer hover:underline  py-2 text-sm flex items-center"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface NewsCardProps {
  img: StaticImageData;
  date: string;
  text: string;
  description: string;
  btnText: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  img,
  date,
  text,
  description,
  btnText,
}) => {
  return (
    <div className="rounded-xl overflow-hidden  transition flex flex-col h-[400px] cursor-pointer ">
      {/* Image */}
      <div className="w-full h-52 relative">
        <Image
          src={img}
          alt={text}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="px- flex flex-col justify-between flex-1 py-4">
        <div className="space-y-3">
          <p className="text-green-700 font-medium text-sm">{date}</p>

          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
              {text}
            </h3>
            <BsArrowLeft className="text-green-700 text-2xl rotate-[135deg] shrink-0" />
          </div>

          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>

        <button className="mt-4 inline-flex items-center gap-1 text-sm text-green-700 bg-[#F1F5F9] w-fit p-2 border py-1 rounded-md cursor-pointer font-medium hover:underline">
          {btnText}
          <BsArrowLeft className="text-base rotate-[180deg]" />
        </button>
      </div>
    </div>
  );
};
