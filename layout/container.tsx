import Image from "next/image";
import { StaticImageData } from "next/image";
import heroimg from "@/public/logo/hero-image.png";

type ContainerCardProps = {
  backgroundImg: StaticImageData | string;
  children: React.ReactNode;
  alt?: string;
  className?: string;
};

export const ContainerCard = ({
  backgroundImg,
  children,
  alt = "Background image",
  className = "",
}: ContainerCardProps) => {
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center relative m-0 p-0 xl:overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <Image
        src={backgroundImg}
        alt={alt}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        className="absolute inset-0 z-0"
        priority
      />
      {/* Mobile-only Hero Image Overlay with gradient fade */}
      <div className="lg:hidden absolute top-12 md:top-48 left-6 md:left-72 right-0 h-96 z-10 pointer-events-none">
        {/* Hero Image */}
        <div
          className="w-full h-[550px] bg-no-repeat bg-contain bg-center opacity-30"
          style={{ backgroundImage: `url(${heroimg.src})` }}
        />
        {/* Gradient Fade at bottom */}
        <div className="absolute -bottom-32 left-0 right-0 bg-gradient-to-b h-12 from-[#030E1A]/30 to-[#030E1A]/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
