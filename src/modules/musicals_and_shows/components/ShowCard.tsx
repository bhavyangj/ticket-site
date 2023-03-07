import { staticFiles } from "../../../shared";
import { MainButton } from "../../../shared/components/Buttons";
import { SpaceY } from "../../../shared/components/Utils";

export type ShowCardProps = {
  title: string;
  subTitle: string;
  image: string;

  availability: string;

  priceStart: number;

  description: string;
};

export const ShowCard: React.FC<ShowCardProps> = ({
  description,
  availability,
  title,
  subTitle,
  image,
  priceStart,
}) => (
  <div className="w-full bg-white flex gap-x-4 py-4">
    <div className="w-1/3 flex items-center max-w-[200px]">
      <img className="h-full object-cover" src={image} />
    </div>
    <div className="font-poppins w-5/12 flex flex-col gap-y-3">
      <span className="font-bold text-dark">{title}</span>
      <span className="font-bold text-dark">{subTitle}</span>

      <div className="flex gap-x-3">
        <img width={18} src={staticFiles.icons.card_calendar} />
        <span className="text-sm text-darkGray">
          Availability: {availability}
        </span>
      </div>
      <SpaceY />
      <span className="text-sm text-darkGray w-[70%]">{description}</span>
    </div>
    <div className="border-l border-gray w-1/4 flex flex-col justify-center items-center gap-y-7 p-2">
      <div className="flex flex-col text-center">
        <span className="font-poppins text-sm text-gray mr-2">From</span>
        <span className="font-poppins text-xl font-medium text-dark">
          ${priceStart}
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
