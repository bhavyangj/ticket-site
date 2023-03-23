import { staticFiles } from "../../../shared";
import {
  cartViewFirstColClassName,
  cartViewRestColClassName,
} from "../CartView";

export enum MedalEnum {
  GOLD,
  SILVER,
  NONE,
}

export type PropsCardInfo = {
  name: string;
  price: number;
  quantity: number;
  addition: number;
  subtotal: number;
  includes?: {
    scheduledDate?: string;
    name: string;
    medal: MedalEnum;
    addition?: number;
  }[];
};

const medalImages = {
  [MedalEnum.GOLD]: staticFiles.icons.gold_medal,

  [MedalEnum.SILVER]: staticFiles.icons.black_medal,
};

export const CardInfo: React.FC<PropsCardInfo> = ({
  addition,
  name,
  price,
  quantity,
  subtotal,
  includes,
}) => (
  <div className="flex flex-col gap-y-3 pt-4">
    <div className="flex font-poppins text-darkGray border border-dashed border-gray rounded-t">
      <span
        className={`${cartViewFirstColClassName} text-blue font-medium underline cursor-pointer`}
      >
        {name}
      </span>
      <div className={cartViewRestColClassName}></div>
      <div className={`${cartViewRestColClassName} hidden md:flex`}>
        ${price}
      </div>
      <div className={`${cartViewRestColClassName} `}>{quantity}</div>
      <div className={`${cartViewRestColClassName}`}>${addition}</div>
      <div className={`${cartViewRestColClassName}`}>${subtotal}</div>
      <div
        className={`${`${cartViewRestColClassName}`} text-blue underline cursor-pointer hidden md:flex`}
      >
        edit
      </div>
    </div>

    {includes?.map((included) => (
      <div className="flex font-poppins text-darkGray">
        <span
          className={`${cartViewFirstColClassName} underline flex items-center`}
        >
          <div className="w-1/4">
            {included.medal !== MedalEnum.NONE && (
              <img src={medalImages[included.medal]} />
            )}
          </div>
          <span className="w-3/4">{included.name}</span>
        </span>
        <div className={`${cartViewRestColClassName} hidden md:flex`}>
          {included.scheduledDate}
        </div>
        <div className={`${cartViewRestColClassName}`}></div>
        <div className={`${cartViewRestColClassName}`}></div>
        <div className={`${cartViewRestColClassName}`}>
          {included.addition && "$" + included.addition}
        </div>
        <div className={`${cartViewRestColClassName}`}></div>
        <div className={`${cartViewRestColClassName} hidden md:flex`}></div>
      </div>
    ))}
  </div>
);
