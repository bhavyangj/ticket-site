import { staticFiles } from "..";
import { MainButton } from "./Buttons";
import { SpaceY } from "./Utils";

export type ShowCardProps = {
  name: string;
  image: string;
  isPremium: boolean;

  availabilityStart: string;
  availabilityEnd: string;

  adultPrice: number;
  adultSitePrice: number;

  childPrice: number;
  childSitePrice: number;
  childNote: string;
};

export const ShowCard: React.FC<ShowCardProps> = ({
  adultPrice,
  adultSitePrice,
  availabilityEnd,
  availabilityStart,
  childNote,
  childPrice,
  childSitePrice,
  name,
  image,
  isPremium,
}) => (
  <div className="w-full bg-white flex gap-x-4 py-4">
    <div className="w-1/3 flex items-center max-w-[200px]">
      <img className="h-full object-cover" src={image} />
    </div>
    <div className="font-poppins w-5/12 flex flex-col gap-y-3">
      <span className="font-bold text-dark">{name}</span>
      <SpaceY />
      <div className="flex gap-x-3">
        <img width={18} src={staticFiles.icons.card_calendar} />
        <span className="text-sm text-darkGray">
          Availability: {availabilityStart} - {availabilityEnd}
        </span>
      </div>
      <div className="flex gap-x-3">
        <img width={18} src={staticFiles.icons.card_adult} />
        <div className="flex flex-col">
          <span className="text-sm text-darkGray">
            성인 가격: ${adultSitePrice}
          </span>
          <span className="text-sm text-darkGray">
            현장 판매가: ${adultPrice}
          </span>
        </div>
      </div>
      <div className="flex gap-x-3">
        <img width={18} src={staticFiles.icons.card_baby} />
        <div className="flex flex-col">
          <span className="text-sm text-darkGray">
            어린이 가격: ${childSitePrice}
          </span>
          <span className="text-sm text-darkGray">
            현장 판매가: ${childPrice}
          </span>
          <span className="text-sm text-darkGray">{childNote}</span>
        </div>
      </div>
    </div>
    <div className="border-l border-gray w-1/4 flex flex-col justify-center items-center gap-y-7 p-2">
      <div>
        <span className="font-poppins text-sm text-gray mr-2">adult</span>
        <span className="font-poppins text-xl font-medium text-dark">
          ${adultPrice}
        </span>
      </div>
      <div>
        <span className="font-poppins text-sm text-gray mr-2">child</span>
        <span className="font-poppins text-xl font-medium text-dark">
          ${childPrice}
        </span>
      </div>
      <MainButton
        text="VIEW DETAILS"
        onClick={() => {}}
        containerClassName="w-full text-xs"
      />
    </div>
  </div>
);
