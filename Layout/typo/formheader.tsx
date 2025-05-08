interface FormHeaderProps {
  pillText: string;
  title: string;
  description: string;
  isDarkPill?: boolean;
  alignStart?: boolean; // NEW prop
}

export const FormHeader = ({
  pillText,
  title,
  description,
  isDarkPill = true,
  alignStart = false, 
}: FormHeaderProps) => {
  const alignment = alignStart
    ? "items-start text-left max-w-3xl"
    : "items-center text-center max-w-xl";

  return (
    <section className={`flex flex-col justify-center ${alignment}`}>
      <div
        className={`${
          isDarkPill
            ? "bg-[#F1F5F933] text-white border-white/90"
            : "bg-white text-black border-[#CBD5E1]"
        } border-[1px] inline-block px-4 py-1 rounded-full text-sm font-medium`}
      >
        {pillText}
      </div>

      <p className="text-4xl md:text-[50px] font-bold mt-4">{title}</p>

      <p className={`mt-2 ${isDarkPill ? "text-white/80" : "text-black/80"}`}>
        {description}
      </p>
    </section>
  );
};
