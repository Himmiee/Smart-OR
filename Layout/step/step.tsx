export const StepItem = ({
  id,
  text,
  description,
  isLast,
}: {
  id: string | undefined;
  text: string;
  description: string;
  isLast: boolean;
}) => (
  <div className="flex items-start space-x-6">
    {/* Number and line */}
    <div className="flex flex-col items-center">
      <span className="text-[#1EA7FF] font-bold text-3xl">{id}</span>
      {!isLast && <div className="w-px h-12 mt-2 bg-[#1EA7FF]" />}
    </div>

    {/* Text and description */}
    <div className="pt-1">
      <h3 className="font-bold text-xl mb-1">{text}</h3>
      <p className="text-base text-gray-700">{description}</p>
    </div>
  </div>
);
