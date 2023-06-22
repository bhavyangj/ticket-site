import { useState } from "react";
import { fetcher, staticFiles } from "../../../shared";
import {
  MainButton,
  SecondaryButton,
} from "../../../shared/components/Buttons";
import { SelectInput } from "../../../shared/components/Inputs";
import { SpaceY } from "../../../shared/components/Utils";
import { useQuery } from "@tanstack/react-query";
import { ProductCardProps } from "../../../shared/components/ProductCard";
import { CartItem, cartState } from "../../../App";

type IncludesInfoProps = {
  isIncluded: boolean;
  hasGoldStar?: boolean;
  hasDate?: boolean;
  name: string;
  onClick: () => void;
};

const IncludesInfo: React.FC<IncludesInfoProps> = ({
  hasDate,
  isIncluded,
  name,
  hasGoldStar,
  onClick,
}) => (
  <div
    onClick={() => onClick()}
    className="w-full flex items-center cursor-pointer hover:bg-[rgb(240,240,240)] py-2"
  >
    <div className="w-1/12 flex items-center">
      <img
        width={20}
        src={
          isIncluded
            ? staticFiles.icons.green_check
            : staticFiles.icons.black_check
        }
      />
    </div>
    <div className="w-2/12 flex justify-center items-center">
      {hasGoldStar && (
        <img
          width={20}
          src={
            isIncluded
              ? staticFiles.icons.gold_medal
              : staticFiles.icons.black_medal
          }
        />
      )}
      {hasDate && (
        <img
          width={20}
          src={
            isIncluded ? staticFiles.icons.calendar : staticFiles.icons.calendar
          }
        />
      )}
    </div>
    <div className="w-9/12 flex">
      <span className="text-darkGray text-xs">{name}</span>
    </div>
  </div>
);

export const PackageBuyDetail = ({
  tickets,
}: {
  tickets: ProductCardProps[];
}) => {
  const [filterCounter, setFilterCounter] = useState(1);
  const [selectInputOne, setSelectInputOne] = useState("");
  const [selectInputTwo, setSelectInputTwo] = useState("");
  const [maxLimit, setMaxLimit] = useState(0);

  const [cart, setCart] = cartState.useState();

  const { data } = useQuery({
    queryKey: ["/price-lists?category_id=1"],
    queryFn: fetcher("/price-lists?category_id=1", (res: any) =>
      res.subcategories
        .map((item: any) => item.prices)
        .flat()
        .map((item: any) => ({
          text: item.product_type,
          value: item.id,
          quantity: Number(item.quantity),
        }))
    ),
  });

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleAddToTheCart = () => {
    const childInfo: CartItem[] = [...cart.childInfo];
    const adultInfo: CartItem[] = [...cart.adultInfo];

    for (const el of selectedItems) {
      const ticketData = tickets.find((item) => item.id === el);

      if (selectInputTwo === "Adult") {
         adultInfo.push({
        name: ticketData?.name || "",
        price: ticketData?.adultPrice || 0,
        quantity: filterCounter,
        subtotal:( ticketData?.adultPrice || 0)*filterCounter,
        addition: 0,
      });
       } else if (selectInputTwo === "Child"){
        childInfo.push({
        name: ticketData?.name || "",
        price: ticketData?.childPrice || 0,
        quantity: filterCounter,
        subtotal:( ticketData?.childPrice || 0)*filterCounter,
        addition: 0,
      });
       }

      
     
    }

    setCart({
      adultInfo,
      childInfo,
    });
  };

  return (
    <div className="flex flex-col bg-white items-center max-h-fit pb-5">
      <div className="bg-white flex flex-col items-center w-full">
        <span className="font-poppins font-bold py-5">티켓구입</span>
      </div>
      <div className="p-5 bg-blue flex justify-center items-center text-white  font-medium text-xl w-full">
        <img width={18} className="mr-5" src={staticFiles.icons.tag_white} />$
        432
      </div>
      <div className="w-[90%] flex flex-col items-center">
        <div className="py-5 text-sm w-full">Booking Form</div>
        <SelectInput
          selected={selectInputOne}
          setSelected={(val) => {
            setSelectInputOne(val);
            setMaxLimit(
              data?.find((item: any) => item.value === val).quantity || 0
            );
          }}
          options={data || []}
        />
        <SpaceY />
        <hr className="border border-gray rounded w-full" />
        <SpaceY />
        <div className="flex w-full">
          <SelectInput
            selected={selectInputTwo}
            setSelected={setSelectInputTwo}
            containerClassName="w-2/3"
            options={[
              { value: "Adult", text: "Adult" },
              { value: "Child", text: "Child" },
            ]}
          />
          <div className="flex justify-between items-center px-2 w-1/3">
            <img
              className="cursor-pointer"
              width={20}
              src={staticFiles.icons.decrement}
              onClick={() => setFilterCounter((prev) => prev - 1)}
            />
            {filterCounter}
            <img
              className="cursor-pointer"
              width={20}
              src={staticFiles.icons.increment}
              onClick={() => setFilterCounter((prev) => prev + 1)}
            />
          </div>
        </div>
        <SpaceY />
        <div className="w-full flex flex-col gap-y-3">
          {tickets?.map((i) => (
            <IncludesInfo
              onClick={() => {
                setSelectedItems((prev) =>
                  prev.includes(i.id)
                    ? prev.filter((i2) => i2 !== i.id)
                    : prev.length >= maxLimit
                    ? prev
                    : [...prev, i.id]
                );
              }}
              key={i.id}
              isIncluded={selectedItems.includes(i.id)}
              name={i.name}
              hasDate={false}
              hasGoldStar={false}
            />
          ))}
        </div>
        <SpaceY />
        <SpaceY />
        <div className="w-full flex gap-x-1">
          <MainButton
            onClick={() => handleAddToTheCart()}
            text="Add to the cart"
          />
          <SecondaryButton onClick={() => {}} text="Reset" />
        </div>
      </div>
    </div>
  );
};

export const TicketSelector = ({ticket}:{ticket:ProductCardProps}) => {
  const [filterCounter, setFilterCounter] = useState(1);
  const [selectInputOne, setSelectInputOne] = useState("");
  const [selectInputTwo, setSelectInputTwo] = useState("");
  const [maxLimit, setMaxLimit] = useState(0);

  const [cart, setCart] = cartState.useState();

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <div className="flex flex-col bg-white items-center max-h-fit pb-5">
      <div className="bg-white flex flex-col items-center w-full">
        <span className="font-poppins font-bold py-5">티켓구입</span>
      </div>
      <div className="p-5 bg-blue flex justify-center items-center text-white  font-medium text-xl w-full">
        <img width={18} className="mr-5" src={staticFiles.icons.tag_white} />$
        432
      </div>
      <div className="w-[90%] flex flex-col items-center">
        <hr className="border border-gray rounded w-full" />
        <SpaceY />
        <div className="flex w-full">
          <SelectInput
            selected={selectInputTwo}
            setSelected={setSelectInputTwo}
            containerClassName="w-2/3"
            options={[
              { value: "Adult", text: "Adult" },
              { value: "Child", text: "Child" },
            ]}
          />
          <div className="flex justify-between items-center px-2 w-1/3">
            <img
              className="cursor-pointer"
              width={20}
              src={staticFiles.icons.decrement}
              onClick={() => setFilterCounter((prev) => prev - 1)}
            />
            {filterCounter}
            <img
              className="cursor-pointer"
              width={20}
              src={staticFiles.icons.increment}
              onClick={() => setFilterCounter((prev) => prev + 1)}
            />
          </div>
        </div>
        <SpaceY />
        <SpaceY />
        <SpaceY />
        <div className="w-full flex gap-x-1">
          <MainButton
            onClick={() =>  {
            const childInfo: CartItem[] = [...cart.childInfo];
    const adultInfo: CartItem[] = [...cart.adultInfo];

             childInfo.push({
        name: ticket?.name || "",
        price: ticket?.childPrice || 0,
        quantity: 0,
        subtotal: 0,
        addition: 0,
      });
      adultInfo.push({
        name: ticket?.name || "",
        price: ticket?.adultPrice || 0,
        quantity: 0,
        subtotal: 0,
        addition: 0,
      });

            setCart({
      adultInfo,
      childInfo,
    });
          }}
            text="Add to the cart"
          />
          <SecondaryButton onClick={() =>{}} text="Reset" />
        </div>
      </div>
    </div>
  );
};
