import Image from "next/image";
import { FormHeader } from "@/Layout/typo/formheader";
import howitworksImg from "@/public/sub/howitworks.png";
import { HIWData } from "@/Providers/data/data";
import { StepItem } from "@/Layout/step/step";

export const HowItWorksPage = () => {
  return (
    <section className="py-12 pb-16 px-4 md:px-6  bg-[#F6F2DA]">
      <div className="space-y-14  mx-auto max-w-screen-xl ">
        <div className="flex justify-center items-center">
          <FormHeader
            pillText="HOW IT WORKS"
            title="Getting the financial support you need "
            description=""
            isDarkPill={false}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center w-full px-2 md:px-0 lg:w-[90%]  ">
            <Image
              src={howitworksImg}
              alt="How it works"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6 relative px-4 md:px-6 lg:px-6">
            {HIWData.map((step, index) => (
              <StepItem
                key={step.id}
                id={step.id}
                text={step.text}
                description={step.description}
                isLast={index === HIWData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
