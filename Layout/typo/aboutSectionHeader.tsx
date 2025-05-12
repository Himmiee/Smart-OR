import { AboutGovImg } from "@/Providers/data/data";
import Image from "next/image";

export const AboutSecHeader = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center gap-4 p-6">
      <div className="text-xl font-semibold mb-4 md:mb-0">
        Our Shareholders <br /> & Partners
      </div>

      <div className="w-full md:w-auto">
        <div className="flex overflow-x-auto md:flex-wrap md:justify-end items-center gap-4 pb-2 md:pb-0">
          {AboutGovImg.map((img, index) => (
            <div key={index} className="flex-shrink-0 md:flex-shrink">
              <Image
                src={img}
                alt={`Partner ${index + 1}`}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
