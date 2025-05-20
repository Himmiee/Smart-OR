import Image from "next/image";
import CrediImg from "@/public/logo-asset/credicorb.png";
import PresidentImg from "@/public/about/hero/tbabs.png";

export const PartnersSubComponent = () => {
  return (
    <main className="space-y-12 p-6 max-w-screen-xl mx-auto">
      {/* About Us Section */}
      <section className="grid md:grid-cols-2 lg:gap-8 place-items-center  px-4">
        <div className="flex justify-center items-center w-4/5 lg:w-[70%]">
          <Image
            src={CrediImg}
            alt="CrediCorp Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className=" lg:p-8 text- max-w-xl">
          <h2 className="text-4xl font-semibold text-[#090914] mb-4">
            About Us
          </h2>
          <p className="text-[#090914] text-lg">
            The Nigerian Consumer Credit Corporation (CREDICORP) is a
            Development Finance Institution (DFI) of the Federal Government of
            Nigeria, established with one mandate: to democratise access to
            consumer credit for Nigeria’s working population.
          </p>
        </div>
      </section>

      {/* Our Mandate Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 bg-[#DAF9F9] pt-8 md:pt-0 rounded-xl ">
        <div className="px-6 lg:px-12 ">
          <h2 className="text-4xl font-semibold text-[#090914] mb-4">
            Our Mandate
          </h2>
          <p className="text-[#090914] text-lg">
            To remove structural, market and policy barriers, and accelerate
            access to consumer credit to 50% of all working Nigerians, by 2030.
          </p>
        </div>

        <div className="flex md:justify-end md:items-end w-full rounded-xl pt-2 md:pt-0">
          <Image
            src={PresidentImg}
            alt="CrediCorp President"
            width={350}
            height={350}
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
