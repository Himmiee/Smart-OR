interface FormHeaderProps {
  pillText: string;
  title: string;
  description: string;
  isDarkPill?: boolean;
}

export const FormHeader = ({
  pillText,
  title,
  description,
  isDarkPill = true,
}: FormHeaderProps) => {
  return (
    <section className="max-w-xl flex flex-col justify-center items-center">
      <div
        className={`${
          isDarkPill
            ? "bg-[#F1F5F933] text-white border-white/90"
            : "bg-white text-black border-black/90"
        } border-[1px] inline-block px-4 py-1 rounded-full text-sm font-medium `}
      >
        {pillText}
      </div>
      <p className="text-4xl md:text-[50px] font-bold mt-4 text-center">{title}</p>
      <p
        className={`${
          isDarkPill
            ? "mt-2 text-white/80 text-center"
            : "mt-2 text-black/80 text-center"
        }`}
      >
        {description}
      </p>
    </section>
  );
};
