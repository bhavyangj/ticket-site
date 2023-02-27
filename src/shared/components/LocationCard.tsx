import { staticFiles } from "..";

export type LocationCardProps = {
  image: string;
  city: string;
  location: string;
};

export const LocationCard: React.FC<LocationCardProps> = ({
  city,
  image,
  location,
}) => {
  return (
    <div className="rounded-xl flex flex-col h-[350px] w-[250px] drop-shadow-xl bg-white overflow-hidden">
      <img className="max-h-[250px] object-cover" src={image} />
      <span className="font-poppins text-darkGray px-5 mt-5">{city}</span>
      <div className="px-5 mt-2 flex">
        <img width={17} src={staticFiles.icons.location} />
        <span className="font-poppins text-darkGray ml-3">{location}</span>
      </div>
    </div>
  );
};
