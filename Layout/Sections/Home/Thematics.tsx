import { ScaleCard } from "@/Layout/cards/ScaleCard";
import { FormHeader } from "@/Layout/typo/formheader";
import { thematicsData } from "@/Providers/data/scaledata";

export const ThematicsFocus = () => {
  return (
    <section className=" bg-black">
      <div className="py-12 pb-16  bg-black  max-w-screen-xl mx-auto">
        <div className="space-y-14 text-center">
          <div className="flex justify-center items-center">
            <FormHeader
              pillText=""
              title="Our Thematic Focus Areas"
              description=""
              isDarkPill={false}
              showPill={false}
              isWhiteTitle
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {/* First column - Mobility (top) and Electronics (bottom) */}
            <div className="flex flex-col gap-6">
              <ScaleCard {...thematicsData[0]} /> {/* Mobility */}
              <ScaleCard {...thematicsData[4]} /> {/* Electronics */}
            </div>

            {/* Second column - Home Improvement (full height) */}
            <div className="h-full">
              <ScaleCard {...thematicsData[2]} className="h-full" />{" "}
              {/* Home Improvement */}
            </div>

            {/* Third column - Life Essentials (top) and Energy Solutions (bottom) */}
            <div className="flex flex-col gap-6">
              <ScaleCard {...thematicsData[3]} /> {/* Life Essentials */}
              <ScaleCard {...thematicsData[1]} /> {/* Energy Solutions */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
