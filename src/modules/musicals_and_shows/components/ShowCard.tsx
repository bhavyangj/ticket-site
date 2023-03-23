import { useNavigate } from "react-router-dom";
import { staticFiles } from "../../../shared";
import { MainButton } from "../../../shared/components/Buttons";
import { SpaceY } from "../../../shared/components/Utils";

export type ShowCardProps = {
  id: string;
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
  id,
  title,
  subTitle,
  image,
  priceStart,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white flex gap-x-4 py-4 h-[200px]">
      <div className="w-1/3 flex items-center">
        <img className="h-full object-cover" src={image} />
      </div>
      <div className="font-poppins w-5/12 flex flex-col">
        <span className="font-bold text-dark">{title}</span>
        <span className="font-bold text-dark">{subTitle}</span>
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
          onClick={() => navigate(`/show-detail/${id}`)}
          containerClassName="w-full text-xs"
        />
      </div>
    </div>
  );
};
