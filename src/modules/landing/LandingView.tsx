import { PUBLIC_URL } from "../../shared";
import {
  CardTypes,
  LocationCard,
  LocationCardProps,
} from "../../shared/components/LocationCard";
import { SpaceY } from "../../shared/components/Utils";

const fakeLocations: LocationCardProps[] = [
  {
    city: "New york",
    image: `${PUBLIC_URL}/fake/destination1.png`,
    location: "Golden gate bridge",
    type: CardTypes.CITY_LOCATION,
  },
  {
    city: "San Francisco",
    image: `${PUBLIC_URL}/fake/destination2.png`,
    location: "Hollywood",
    type: CardTypes.CITY_LOCATION,
  },
  {
    city: "Los Angeles",
    image: `${PUBLIC_URL}/fake/destination3.png`,
    location: "Oahu",
    type: CardTypes.CITY_LOCATION,
  },
];

export const LandingView = () => {
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY /> <SpaceY />
      <span className="font-poppins font-medium text-dark">Top US Cities</span>
      <SpaceY />
      <span className="font-volkhov font-bold text-dark text-2xl">
        Destinations
      </span>
      <SpaceY /> <SpaceY />
      <div className="flex flex-wrap justify-evenly w-full px-[10vw] gap-y-10 gap-x-5">
        {fakeLocations.map((item) => (
          <LocationCard {...item} />
        ))}
      </div>
    </div>
  );
};
