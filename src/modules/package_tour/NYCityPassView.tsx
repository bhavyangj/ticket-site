import { PackageBuyDetail } from "./components/PackageBuyDetail";
import { ProductCard } from "../../shared/components/ProductCard";
import { useState } from "react";
import { MainButton } from "../../shared/components/Buttons";
import { useGetTickets } from "../../shared/hooks";

export const NYCityPassView = () => {
  const [displayFilter, setDisplayFilter] = useState(false);
   const { tickets } = useGetTickets({
    category: 1,
    subCategoryId: 97,
    guideFilter:true
  });
  return (
    <div className="flex w-full gap-x-3">
      <div className="w-full md:w-2/3 flex flex-col gap-y-4">
        {displayFilter ? (
          <PackageBuyDetail tickets={tickets || []} />
        ) : (
          tickets?.map((item) => <ProductCard key={item.name} {...item} />)
        )}
        <MainButton
          text={"티켓구입"}
          containerClassName="w-full block md:hidden"
          onClick={() => setDisplayFilter((prev) => !prev)}
        />
      </div>
      <div className="w-1/3 hidden md:block font-poppins">
        <PackageBuyDetail tickets={tickets || []} />
      </div>
    </div>
  );
};
