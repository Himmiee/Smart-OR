import Image from "next/image";
import CrediImg from "@/public/about/hero/credi.png";
import PresidentImg from "@/public/about/hero/tbabs.png";

export const PartnersSubComponent = () => {
  return (
    <main className="space-y-12 p-6 max-w-screen-xl mx-auto">
      {/* About Us Section */}
      <section className="grid lg:grid-cols-2 lg:gap-8">
        <div className="flex md:justify-center md:items-center -ml-12 md:-ml-24 lg:-ml-0 rounded-lg w-4/5 md:w-3/5 lg:w-full">
          <Image
            src={CrediImg}
            alt="CrediCorp Logo"
            className="lg:max-w-full "
          />
        </div>

        <div className="bg-white lg:p-8">
          <h2 className="text-4xl font-semibold text-[#090914] mb-4">
            About Us
          </h2>
          <p className="text-[#090914] mb-4">
            At CREDICORP, we believe access to credit is access to opportunity.
            As Nigeria's Consumer Credit Corporation, we are committed to
            bending down financial barriers and empowering everyday Nigerians -
            students, artisans, salaried workers, small business owners - to
            build the lives they desire.
          </p>
          <p className="text-[#090914]">
            We are a Federal Government-backed Development Finance Institution
            with a clear mission: to democratize consumer credit and make it
            work for the people. Through innovative systems, strategic
            partnerships, and a people-first approach, we're reshaping Nigeria's
            credit landscape, one person at a time.
          </p>
        </div>
      </section>

      {/* Our Mandate Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 bg-[#DAF9F9] pt-8 md:pt-0 rounded-xl ">
        <div className="px-6 lg:px-12 ">
          <h2 className="text-4xl font-semibold text-[#090914] mb-4">
            Our Mandate
          </h2>
          <p className="text-[#090914]">
            At CrediCorp, our mandate is to unlock economic potential by making
            credit accessible, inclusive, and growth-driven. We want to catalyze
            financial empowerment—connecting individuals, small businesses, and
            industries to the credit they need to thrive.
          </p>
        </div>

        <div className="flex md:justify-end md:items-end w-full rounded-xl pt-2 md:pt-0">
          <Image
            src={PresidentImg}
            alt="CrediCorp President"
            width={300}
            height={300}
            className="max-w-full rounded-r-xl hidden md:block"
          />
          <Image
            src={PresidentImg}
            alt="CrediCorp President"
            width={400}
            height={400}
            className="max-w-full rounded-r-xl md:hidden"
          />
        </div>
      </section>
    </main>
  );
};
