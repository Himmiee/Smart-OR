import Image, { StaticImageData } from "next/image";

interface PersonCardProps {
  imageUrl: StaticImageData;
  name: string;
  profession: string;
  variant?: "tall" | "short";
}

export const SinglePersonCard = ({
  imageUrl,
  name,
  profession,
  variant = "tall",
}: PersonCardProps) => {
  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden flex flex-col">
      <div
        className="relative flex-grow"
        style={{ height: variant === "tall" ? "80%" : "50%" }}
      >
        <Image
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full"
          fill
          priority
        />
      </div>
      <div className="p-4 text-white">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-300">{profession}</p>
      </div>
    </div>
  );
};
