import {
  LocationCard,
  LocationCardProps,
} from "../../shared/components/LocationCard";
import { SpaceY } from "../../shared/components/Utils";

const fakeLocations: LocationCardProps[] = [
  {
    city: "New york",
    image: "/fake/destination1.png",
    location: "Golden gate bridge",
  },
  {
    city: "San Francisco",
    image: "/fake/destination2.png",
    location: "Hollywood",
  },
  {
    city: "Los Angeles",
    image: "/fake/destination3.png",
    location: "Oahu",
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
      <div className="flex flex-wrap justify-between w-full px-[10vw] gap-y-10 gap-x-5">
        {fakeLocations.map((item) => (
          <LocationCard {...item} />
        ))}
      </div>
    </div>
  );
};
