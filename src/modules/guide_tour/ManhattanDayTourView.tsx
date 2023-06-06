import { ProductCard } from "../../shared/components/ProductCard";
import { useGetTickets } from "../../shared/hooks";

export const ManhattanDayTourView = () => {
  const { tickets } = useGetTickets({
    category: 2,
    subCategoryId: 2,
  });
  return (
    <div className="flex w-full gap-x-3 justify-center">
      <div className="flex flex-col gap-y-4 w-full max-w-[700px]">
        {tickets?.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};
