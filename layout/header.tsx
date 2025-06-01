import Image from "next/image";
import logo from "@/public/logo/SmartOR.png";
import { Button } from "@/components/ui/button";

export const HeaderComponent = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1700px] mx-auto w-full">
        <div>
          <Image src={logo} alt="logo-img" className="w-40" />
        </div>
        <a href="mailto:invulnerableexile@gmail.com">
          <Button className="bg-black/30 border border-white text-white cursor-pointer w-[140px] h-11 hover:bg-black/50 transition-colors">
            Contact Us
          </Button>
        </a>
      </div>
    </header>
  );
};
