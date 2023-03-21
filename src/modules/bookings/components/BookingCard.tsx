import { useState } from "react";
import { staticFiles } from "../../../shared";
import { MedalEnum } from "../../cart/components/CardInfo";

export type PropsBookingCard = {
  name: string;

  quantity: number;
  itemId: number;
  adult_child: "ADULT" | "CHILD";

  includes?: {
    scheduledDate?: string;
    name: string;
    medal: MedalEnum;
    addition?: number;
    downloadStatus: string;
  }[];
};

const col2 = "flex justify-center w-[20%]";
const col3 = "flex justify-center w-[20%]";
const col4 = "flex justify-center w-[20%]";
const col5 = "flex justify-center w-[10%]";
const col6 = "flex justify-center w-[20%]";
const col7 = "flex justify-center w-[10%]";

const medalImages = {
  [MedalEnum.GOLD]: staticFiles.icons.gold_medal,

  [MedalEnum.SILVER]: staticFiles.icons.black_medal,
};

export const BookingCard: React.FC<PropsBookingCard> = ({
  adult_child,
  name,
  itemId,
  quantity,
  includes,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col gap-y-3 pb-4 w-full">
      <div
        className={`flex font-poppins text-darkGray border border-dashed border-gray rounded-t cursor-pointer`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={`text-blue font-medium ${col2}`}>{name}</span>
        <div className={`${col3}`}>{adult_child}</div>
        <div className={`${col4}`}></div>
        <div className={`${col5}`}>{quantity}</div>
        <div className={`${col6}`}></div>
        <div className={`${col7}`}>{itemId}</div>
      </div>

      {open &&
        includes?.map((included) => (
          <div className="flex font-poppins text-darkGray">
            <span className={`underline flex items-center ${col2}`}>
              <div className="w-1/4">
                {included.medal !== MedalEnum.NONE && (
                  <img src={medalImages[included.medal]} />
                )}
              </div>
              <span className="w-3/4">{included.name}</span>
            </span>
            <div className={`${col3}`}></div>
            <div className={`${col4}`}>{included.scheduledDate}</div>
            <div className={`${col5}`}></div>
            <div className={`${col6}`}>{included.downloadStatus}</div>
            <div className={`${col7}`}></div>
          </div>
        ))}
    </div>
  );
};
