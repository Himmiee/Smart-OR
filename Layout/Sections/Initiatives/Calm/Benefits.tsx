import { FormHeader } from "@/Layout/typo/formheader";
import cngCar from "@/public/calm/carr.png";
import solarPanel from "@/public/calm/solar.png";
import { Button } from "@/components/ui/button";
import { WrapCard } from "@/Layout/cards/WrapCard";

export const CalmBenefits = () => {
  return (
    <section className="py-12 pb-16 px-4 md:px-6 bg-[#fff] max-w-screen-xl  mx-auto">
      <div className="space-y-14 text-center">
        <div className="flex justify-center items-center">
          <FormHeader
            pillText="Benefits"
            title="What you can access with the C.A.L.M Fund"
            description=""
            isDarkPill={false}
          />
        </div>
        <div className="grid md:grid-cols-2 w-full  gap-8 max-w-3xl mx-auto">
          <WrapCard
            image={cngCar}
            title="CNG Conversions"
            description="Convert your petrol vehicle to CNG."
          />
          <WrapCard
            image={solarPanel}
            title="Solar Home Systems"
            description="Install solar panels and inverters."
          />
        </div>
        <Button
          className="rounded-full hidden w-32 mx-auto bg-[#108359]"
          variant="default"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};
