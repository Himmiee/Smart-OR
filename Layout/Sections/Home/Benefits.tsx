import { CardComponent } from "@/Layout/cards/GridSystemCards";
import { BenefitSubComponent } from "@/Layout/comp/benefit/benefitSubComp";
import { FormHeader } from "@/Layout/typo/formheader";
import { BenefitData } from "@/Providers/data/data";

export const BenefitsPage = () => {
  return (
    <section className="py-12 ">
      <div className="space-y-12 lg:space-y-24">
        <div className="flex justify-center items-center">
          <FormHeader
            pillText="BENEFITS"
            title="Grow With CREDICORP"
            description="Get access to the tools you need to succeed, one credit step at a time."
            isDarkPill={false}
          />
        </div>

        <div className="flex lg:mt-24 bg-amber-300">
          <BenefitSubComponent />
        </div>
        <div className=" flex justify-center items-center px-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
            {BenefitData.map((item, index) => (
              <CardComponent
                key={index}
                imageSrc={item.img}
                name={item.text}
                description={item.description}
                buttonText={item.btnText}
                //   onClick={() => console.log(`${item.text} clicked`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
