import { PUBLIC_URL } from "../../shared";
import {
  ProductCard,
  ProductCardProps,
} from "../../shared/components/ProductCard";
import { useGetCityAttractions } from "../../shared/hooks";

export const RidesAndCruisesView = () => {
  const { cityAttractions } = useGetCityAttractions({
    category: 4,
    subCategoryId: 102,
  });
  return (
    <div className="flex w-full gap-x-3 justify-center">
      <div className="flex flex-col gap-y-4 w-full max-w-[700px]">
        {cityAttractions?.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};
