import { ScaleCard } from "@/Layout/cards/ScaleCard";
import { FormHeader } from "@/Layout/typo/formheader";
import { scaleData } from "@/Providers/data/scaledata";

export const ScaleBenefits = () => {
  return (
    <section className="py-12 pb-16  bg-white max-w-screen-xl mx-auto">
      <div className="space-y-14 text-center">
        <div className="flex justify-center items-center">
          <FormHeader
            pillText="BENEFITS"
            title="What You Can Access with S.C.A.L.E."
            description="From energy to electronics, the S.C.A.L.E. initiative connects you to essential goods and services through verified vendors—boosting local industries while improving everyday lives."
            isDarkPill={false}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* First column - Mobility (top) and Electronics (bottom) */}
          <div className="flex flex-col gap-6">
            <ScaleCard {...scaleData[0]} /> {/* Mobility */}
            <ScaleCard {...scaleData[4]} /> {/* Electronics */}
          </div>

          {/* Second column - Home Improvement (full height) */}
          <div className="h-full">
            <ScaleCard {...scaleData[2]} className="h-full" />{" "}
            {/* Home Improvement */}
          </div>

          {/* Third column - Life Essentials (top) and Energy Solutions (bottom) */}
          <div className="flex flex-col gap-6">
            <ScaleCard {...scaleData[3]} /> {/* Life Essentials */}
            <ScaleCard {...scaleData[1]} /> {/* Energy Solutions */}
          </div>
        </div>
      </div>
    </section>
  );
};
