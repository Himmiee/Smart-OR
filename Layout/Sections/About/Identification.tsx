import { IdentitficationCard } from "@/Layout/cards/IdentificationCard";
import { IdentificationData } from "@/Providers/data/data";

export const AboutIdentificationSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col  justify-center items-center space-y-10 py-12">
      <div className="max-w-lg  text-[#090914] flex flex-col justify-center items-center">
        <div className="text-4xl lg:text-6xl font-medium text-center">Our Leadership</div>
        <p className="text-center">
          We are led by a team of experienced and competent professionals with a
          passion for large-scale impact.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 space-y-4">
        {IdentificationData.map((leader, index) => (
          <IdentitficationCard
            key={index}
            name={leader.name}
            title={leader.title}
            quote={leader.quote}
            imageUrl={leader.imageUrl.src}
          />
        ))}
      </div>
    </div>
  );
};
