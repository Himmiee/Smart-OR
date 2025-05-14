import Image from "next/image";
import bottomLeftImage from "@/public/about/hero/bg-left.png";
import impactLogoImage from "@/public/about/hero/mini-logo.png";

export const ImpactSection = ({ showLogo = true }: { showLogo?: boolean }) => {
  return (
    <section className="px-6 py-16 relative overflow-hidden bg-black">
      {showLogo && (
        <>
          <Image
            src={bottomLeftImage}
            alt="Background Pattern"
            className="absolute -top-8 -left-6 z-0 rotate-180 opacity-60"
            width={250}
            height={250}
          />
          <Image
            src={bottomLeftImage}
            alt="Background Pattern"
            className="absolute bottom-0 right-0 z-0"
            width={250}
            height={250}
          />
        </>
      )}
      <div className="relative z-10 text-white max-w-screen-xl mx-auto lg:px-12">
        <div className="relative mb-12">
          <Image
            src={impactLogoImage}
            alt="Impact Logo"
            width={30}
            height={30}
            className="absolute -left-9 hidden lg:flex top-2"
          />

          <h2 className="text-5xl font-bold">Impact</h2>
          <p className="mt-4 max-w-2xl text-lg opacity-80">
            At CREDICORP, our mission is backed by bold, measurable goals that
            reflect our ambition to transform Nigeria's consumer credit
            landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-start">
          <div>
            <h3 className="text-5xl font-bold border-t-[1px] border-white/30 pt-12 md:pt-24 text-white">
              1M+
            </h3>
            <p className="mt-2 opacity-80 max-w-[250px]">
              Credit-backed consumers empowered to access essential goods and
              services
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold border-t-[1px] border-white/30 pt-12 md:pt-24 text-white">
              500K+
            </h3>
            <p className="mt-2 opacity-80 max-w-[250px]">
              Small businesses supported through expanded market access
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold border-t-[1px] border-white/30 pt-12 md:pt-24 text-white">
              ₦200B+
            </h3>
            <p className="mt-2 opacity-80 max-w-[250px]">
              In facilitated consumer credit across key sectors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
