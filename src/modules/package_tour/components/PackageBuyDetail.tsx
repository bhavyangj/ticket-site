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

const filterFakeData = {
  value: 440,
  includes: [
    {
      name: "엠파이어 스테이트 빌딩 전망대",
      isIncluded: true,
    },
    {
      name: "서밋 전망대 야간 ",
      isIncluded: true,
      hasGoldStar: true,
    },
    {
      name: "자유의 여신상 스카이라인 데이크루즈",
      isIncluded: true,
    },
    {
      name: "모마 현대 미술관 ",
      isIncluded: false,
      hasGoldStar: true,
    },
    {
      name: "모마 현대 미술관 도슨트  ",
      isIncluded: true,
      hasDate: true,
    },
    {
      name: "마담투소 + 마블 4D ",
      isIncluded: false,
    },
    {
      name: "메트로포리탄 도슨트트",
      isIncluded: false,
      hasDate: true,
    },
  ],
};

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

  return (
    <div className="flex flex-col bg-white items-center max-h-fit pb-5">
      <div className="bg-white flex flex-col items-center w-full">
        <span className="font-poppins font-bold py-5">티켓구입</span>
      </div>
      <div className="p-5 bg-blue flex justify-center items-center text-white  font-medium text-xl w-full">
        <img width={18} className="mr-5" src={staticFiles.icons.tag_white} />$
        {filterFakeData.value}
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
          <MainButton onClick={() => {}} text="Add to the cart" />
          <SecondaryButton onClick={() => {}} text="Reset" />
        </div>
      </div>
    </div>
  );
};
