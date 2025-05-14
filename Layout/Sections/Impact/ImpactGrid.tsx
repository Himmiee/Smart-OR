import { SinglePersonCard } from "@/Layout/cards/SinglePersonCard";
import { People } from "@/Providers/data/scaledata";

export const ImpactGrid = () => {
  const getVariant = (columnIndex: number, rowIndex: number) => {
    const isOddColumn = columnIndex % 2 === 0;
    const isOddRow = rowIndex % 2 === 0;

    if (isOddColumn) {
      return isOddRow ? "tall" : "short";
    } else {
      return isOddRow ? "short" : "tall";
    }
  };

  return (
    <section className="bg-black py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6 max-w-screen-xl mx-auto">
        {People.map((person, index) => {
          const columnIndex = index % 5;
          const rowIndex = Math.floor(index / 5);
          const variant = getVariant(columnIndex, rowIndex);

          // On small screens: right column items in grid-cols-2 are at odd indexes (index % 2 === 1)
          const isRightColumnIn2ColGrid = index % 2 === 1;

          return (
            <div
              key={index}
              className={`${
                variant === "tall" ? "md:row-span-2" : "md:mt-0 md:row-span-1"
              } min-h-[400px] md:min-h-[250px] ${
                isRightColumnIn2ColGrid ? "mt-6 md:mt-0" : ""
              }`}
            >
              <SinglePersonCard {...person} variant={variant} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
