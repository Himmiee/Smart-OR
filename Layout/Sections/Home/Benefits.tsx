import { CardComponent } from "@/Layout/cards/GridSystemCards";
import { BenefitSubComponent } from "@/Layout/comp/benefit/benefitSubComp";
import { FormHeader } from "@/Layout/typo/formheader";
import { BenefitData } from "@/Providers/data/data";
import Image from "next/image";
import topRightImg from "@/public/hero/bottom-lef.png";
import bottomLeftImg from "@/public/hero/bottom-lef.png";

export const BenefitsPage = () => {
  return (
    <section className="py-12 relative">
      {/* Absolute positioned images */}
      <div className="absolute top-0 right-0 w-32 h-32 z-10 hidden lg:block rotate-90">
        <Image
          src={topRightImg}
          alt="Top Right"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 z-10 hidden lg:block -rotate-90">
        <Image
          src={bottomLeftImg}
          alt="Bottom Left"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="space-y-12 lg:space-y-16">
        <div className="flex justify-center items-center">
          <FormHeader
            pillText="BENEFITS"
            title="Grow With CREDICORP"
            description="Get access to the tools you need to succeed, one credit step at a time."
            isDarkPill={false}
          />
        </div>

        <div className="flex bg-amber-300">
          <BenefitSubComponent />
        </div>
        <div className="flex justify-center items-center px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
            {BenefitData.map((item, index) => (
              <CardComponent
                key={index}
                imageSrc={item.img}
                name={item.text}
                description={item.description}
                buttonText={item.btnText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
