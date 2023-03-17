import { staticFiles } from "..";

export enum CardTypes {
  CITY_LOCATION,
  ONLY_LOCATION,
  PLACE_PRICE,
  SHOW,
  COMMUNITY,
}

export type LocationCardProps = {
  type: CardTypes;
  image: string;
  city?: string;
  location: string;
  large?: boolean;
  oldPrice?: number;
  newPrice?: number;
  showName?: string;
  communityText?: string;
};

export const LocationCard: React.FC<LocationCardProps> = ({
  city,
  image,
  location,
  large,
  type,
  oldPrice,
  newPrice,
  showName,
  communityText,
}) => {
  const width = large
    ? "grow max-w-[700px] min-w-[350px]"
    : "grow max-w-[260px] min-w-[250px]";

  if (type === CardTypes.SHOW)
    return (
      <div
        className={`rounded-xl flex flex-col h-[350px] ${width} drop-shadow-xl bg-white overflow-hidden`}
      >
        <img className="max-h-[250px] object-cover" src={image} />
        <div className="px-5 flex h-full items-center">
          <img width={17} src={staticFiles.icons.location} />
          <span className="font-poppins text-darkGray ml-3">{location}</span>
        </div>
        <span className="font-poppins text-darkGray flex justify-end px-5 pb-3 gap-x-3">
          {showName}
        </span>
      </div>
    );

  if (type === CardTypes.PLACE_PRICE)
    return (
      <div
        className={`rounded-xl flex flex-col h-[350px] ${width} drop-shadow-xl bg-white overflow-hidden`}
      >
        <img className="max-h-[250px] object-cover" src={image} />
        <div className="px-5 flex h-full items-center">
          <img width={17} src={staticFiles.icons.location} />
          <span className="font-poppins text-darkGray ml-3">{location}</span>
        </div>
        <div className="font-poppins flex justify-end px-5 pb-3 gap-x-3">
          <span className="text-[#999999] line-through">${oldPrice || 0}</span>
          <span className="text-blue">${newPrice || 0}</span>
        </div>
      </div>
    );

  if (type === CardTypes.CITY_LOCATION || type == CardTypes.ONLY_LOCATION)
    return (
      <div
        className={`rounded-xl flex flex-col h-[350px] ${width} drop-shadow-xl bg-white overflow-hidden`}
      >
        <img className="max-h-[250px] object-cover" src={image} />
        {city && (
          <span className="font-poppins text-darkGray px-5 pt-3">{city}</span>
        )}
        <div className="px-5 flex h-full items-center">
          <img width={17} src={staticFiles.icons.location} />
          <span className="font-poppins text-darkGray ml-3">{location}</span>
        </div>
      </div>
    );

  if (type === CardTypes.COMMUNITY)
    return (
      <div
        className={`rounded-xl flex flex-col h-[350px] ${width} drop-shadow-xl bg-white overflow-hidden`}
      >
        <img className="max-h-[250px] object-cover" src={image} />
        <div className="px-5 flex h-full items-center">
          <img width={17} src={staticFiles.icons.location} />
          <span className="font-poppins text-darkGray ml-3">{location}</span>
        </div>
        <span className="font-poppins text-darkGray px-5 pb-2">
          {communityText}
        </span>
      </div>
    );

  return null;
};
