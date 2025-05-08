import { StaticImageData } from "next/image";

interface PersonCardProps {
  imageUrl: string | StaticImageData;
  name: string;
  profession: string;
}

export const PersonCard = ({ imageUrl, name, profession }: PersonCardProps) => {
  return (
    <div
      className="relative w-full h-[550px] overflow-hidden bg-center bg-cover shadow"
      style={{
        backgroundImage: `url(${
          typeof imageUrl === "string" ? imageUrl : imageUrl.src
        })`,
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute bottom-3 left-3 text-white z-10">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm">{profession}</p>
      </div>
    </div>
  );
};
