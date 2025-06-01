import Image, { StaticImageData } from "next/image";


interface ScaleCardProps {
  title: string;
  tag: string;
  btnText: string;
  img: StaticImageData;
  className?: string;
}

export const ScaleCard = ({
  title,
  tag,
  // btnText,
  img,
  className = "",
}: ScaleCardProps) => {
  return (
    <div
      className={`rounded-xl overflow-hidden bg-cover bg-center relative min-h-[200px] ${className}`}
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-4 left-4 text-white z-10 space-y-1">
        <h3 className="text-lg font-semibold w-fit">{title}</h3>
        <p className="text-sm w-fit">{tag}</p>
        {/* <button className="text-sm mt-1 underline underline-offset-4 font-medium flex items-center gap-1">
          {btnText}{
          <span>
            <ArrowRight />
          </span>
        </button> */}
      </div>
    </div>
  );
};
