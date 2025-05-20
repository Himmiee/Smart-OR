interface FormHeaderProps {
  pillText: string;
  title: string;
  description: string;
  isDarkPill?: boolean;
  alignStart?: boolean;
  showPill?: boolean;
  isGradient?: boolean;
  isWhiteTitle?: boolean;
}

export const FormHeader = ({
  pillText,
  title,
  description,
  isDarkPill = true,
  alignStart = false,
  showPill = true,
  isGradient = false,
  isWhiteTitle = false, 
}: FormHeaderProps) => {
  const alignment = alignStart
    ? "items-start text-left max-w-3xl"
    : "items-center text-center max-w-xl";

  let titleClasses = "text-[30px] md:text-[50px] font-bold mt-4";

  if (isGradient) {
    titleClasses +=
      " bg-gradient-to-r from-white to-[#108359] bg-clip-text text-transparent";
  } else if (isWhiteTitle) {
    titleClasses += " text-white";
  }

  return (
    <section
      className={`flex flex-col justify-center px-6 md:px-0 ${alignment}`}
    >
      {showPill && (
        <div
          className={`${
            isDarkPill
              ? "bg-[#F1F5F933] text-white border-white/90"
              : "bg-white text-black border-[#CBD5E1]"
          } border-[1px] inline-block px-4 py-1 rounded-full text-sm font-medium`}
        >
          {pillText}
        </div>
      )}

      <p className={titleClasses}>{title}</p>

      <p className={`mt-2 ${isDarkPill ? "text-white/80" : "text-black/80"}`}>
        {description}
      </p>
    </section>
  );
};
