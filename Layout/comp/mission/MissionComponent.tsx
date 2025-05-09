import ServiceCard from "@/Layout/cards/ServiceCard";
import { defaultServiceItems } from "@/Providers/data/data";

export const MissionSubComponent = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        {" "}
        <p className="p-2 bg-[#E0F8DE] text-[#004642] rounded-full w-36 text-center font-medium">
          OUR MISSION
        </p>
        <div className="text-[#2D2F31] max-w-2xl">
          <p className="text-4xl md:text-[50px] font-bold leading-snug">
            Leading the Charge for Financial Inclusion
          </p>
          <p className="mt-4 text-lg">
            We are transforming the way Nigerians access credit through
            innovative technology, strategic partnerships, and policy advocacy.
            Through our work, we empower Nigerians to access the financial
            opportunities they deserve.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {defaultServiceItems.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </section>
  );
};
