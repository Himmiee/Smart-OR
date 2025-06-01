import Image from "next/image";
import img from "@/public/logo/grid-bg.png";
import heroimg from "@/public/logo/hero-image.png";
import { ContainerCard } from "@/layout/container";
import { WaitlistHeroSection } from "@/sections/waitlist/Hero";

const WaitlistPage = () => {
  return (
    <ContainerCard backgroundImg={img} alt="Grid background">
      <div className="flex flex-col md:flex-row w-full xl:mt-20 items-stretch min-h-screen overflow-hidden bg xl:min-h-auto max-w-[1600px] mx-auto">
        {/* Left side - Text content */}
        <div className="xl:pl-12 px-2 md:px-8 xl:px-12 xl:pr-0 flex-1 xl:flex-none">
          <WaitlistHeroSection />
        </div>

        {/* Right side - Hero image aligned to bottom */}
        <div className="hidden lg:flex items-end justify-center w-full xl:flex-1 ">
          <div className="relative w-full max-w-full">
            <Image
              src={heroimg}
              alt="SmartOR Hero"
              style={{ objectFit: "contain" }}
              className="drop-shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </ContainerCard>
  );
};

export default WaitlistPage;
