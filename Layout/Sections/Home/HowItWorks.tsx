import Image from "next/image";
import { FormHeader } from "@/Layout/typo/formheader";
import howitworksImg from "@/public/sub/howitworks.png";
import { HIWData } from "@/Providers/data/data";
import { StepItem } from "@/Layout/step/step";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HowItWorksPage = ({
  bgColor = "bg-[#F6F2DA] py-12 pb-16",
}: {
  bgColor?: string;
}) => {
  return (
    <section className={`${bgColor} px-4 md:px-6`}>
      <div className="space-y-14  mx-auto max-w-screen-xl ">
        <div className="flex justify-center items-center">
          <FormHeader
            pillText="HOW IT WORKS"
            title="Getting the support to Live Better, Now!"
            description=""
            isDarkPill={false}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`${
              bgColor ? " lg:w-[100%]  " : " lg:w-[100%]  "
            } flex justify-center w-full px-2 md:px-0`}
          >
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
        <div className="flex justify-center">
          <div className="bg-[#FFD600] rounded-lg  p-8 max-w-screen-xl mx-auto w-full flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-start">
              <p className="text-left text-xl font-semibold">
                Ready to begin your responsible Credit journey?
              </p>
              <div className="flex justify-between items-center w-full">
                <p className="text-left text-sm font-light">
                  Start by filling our Credit interest form.
                </p>
              </div>
            </div>
            <a
              href="https://credicorp-register.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black text-white  px-4 rounded-md flex items-center cursor-pointer w-fit gap-2 h-12 mt-2 md:mt-0">
                Get Started
                <ArrowRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
