import { CarouselComponent } from "@/Layout/carousel";
import { FormHeader } from "@/Layout/typo/formheader";
import { TestimonialData } from "@/Providers/data/data";
import { ArrowRight } from "lucide-react";

export const TestimonialPage = () => {
  return (
    <section className="py-12 pb-16 bg-[#FFFFE7] px-6">
      <div className="space-y-12 ">
        <div className="flex justify-center items-center">
          <FormHeader
            pillText="TESTIMONIALS"
            title="Real Beneficiaries, Real Impact"
            description=""
            isDarkPill={false}
          />
        </div>

        <div className="flex justify-center">
          <CarouselComponent testimonials={TestimonialData} />
        </div>

        <div className="flex justify-center">
          <div className="bg-[#FFD600] rounded-lg shadow-lg p-8 max-w-screen-xl mx-auto w-full flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-start">
              <p className="text-left text-xl font-semibold">
                Are you a beneficiary?
              </p>
              <div className="flex justify-between items-center w-full">
                <p className="text-left text-sm font-light">
                  We’d love to hear your story and inspire others.
                </p>
              </div>
            </div>
            <div className="bg-black text-white  px-4 rounded-md flex items-center cursor-pointer w-fit gap-2 h-12 mt-2 md:mt-0">
              Share your journey
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
