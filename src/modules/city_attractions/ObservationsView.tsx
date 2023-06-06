import { ProductCard } from "../../shared/components/ProductCard";
import { useGetTickets } from "../../shared/hooks";

export const ObservationsView = () => {
  const { tickets } = useGetTickets({
    category: 4,
    subCategoryId: 4,
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
