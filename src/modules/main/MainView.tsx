import {
  CardTypes,
  LocationCard,
  LocationCardProps,
} from "../../shared/components/LocationCard";
import { SpaceY } from "../../shared/components/Utils";

const newYorkLocations: LocationCardProps[] = [
  {
    image: "/fake/destination1.png",
    location: "Big Apple Pass",
    large: true,
    type: CardTypes.ONLY_LOCATION,
  },
  {
    image: "/fake/destination3.png",
    location: "Scenics",
    type: CardTypes.ONLY_LOCATION,
  },
  {
    image: "/fake/destination1.png",
    location: "Musicals",
    type: CardTypes.ONLY_LOCATION,
  },
  {
    image: "/fake/destination2.png",
    location: "Museum/Gallery",
    type: CardTypes.ONLY_LOCATION,
  },
  {
    image: "/fake/destination3.png",
    location: "Rides/Cruises",
    type: CardTypes.ONLY_LOCATION,
  },
  {
    image: "/fake/destination2.png",
    location: "Activities",
    type: CardTypes.ONLY_LOCATION,
  },
];

const attractionsFakeData: LocationCardProps[] = [
  {
    image: "/fake/destination1.png",
    location: "Statue of Liberty",

    type: CardTypes.PLACE_PRICE,
    oldPrice: 45,
    newPrice: 30,
  },
  {
    image: "/fake/destination2.png",
    location: "Statue of Liberty",

    type: CardTypes.PLACE_PRICE,
    oldPrice: 45,
    newPrice: 30,
  },
  {
    image: "/fake/destination3.png",
    location: "Statue of Liberty",

    type: CardTypes.PLACE_PRICE,
    oldPrice: 45,
    newPrice: 30,
  },
  {
    image: "/fake/destination1.png",
    location: "Statue of Liberty",

    type: CardTypes.PLACE_PRICE,
    oldPrice: 45,
    newPrice: 30,
  },
];

const showsFakeData: LocationCardProps[] = [
  {
    image: "/fake/destination1.png",
    location: "Statue of Liberty",
    type: CardTypes.SHOW,
    showName: "The Gazillion Bubble Show",
  },
  {
    image: "/fake/destination2.png",
    location: "Statue of Liberty",
    type: CardTypes.SHOW,
    showName: "The Lion King",
  },
  {
    image: "/fake/destination3.png",
    location: "Statue of Liberty",
    type: CardTypes.SHOW,
    showName: "The Lion King",
  },
  {
    image: "/fake/destination1.png",
    location: "Statue of Liberty",
    type: CardTypes.SHOW,
    showName: "The Lion King",
  },
];

const toursFakeData: LocationCardProps[] = [
  {
    image: "/fake/destination1.png",
    location: "가질리온 버블쇼",
    type: CardTypes.SHOW,
    showName: "The Gazillion Bubble Show",
  },
  {
    image: "/fake/destination2.png",
    location: "라이온킹",
    type: CardTypes.SHOW,
    showName: "The Lion King",
  },
  {
    image: "/fake/destination3.png",
    location: "블루맨 그룹",
    type: CardTypes.SHOW,
    showName: "The Lion King",
  },
  {
    image: "/fake/destination1.png",
    location: "Statue of Liberty",
    type: CardTypes.SHOW,
    showName: "The Lion King",
  },
];

export const MainView = () => {
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY /> <SpaceY />
      <span className="font-poppins font-medium text-dark">New York</span>
      <SpaceY />
      <span className="font-volkhov font-bold text-dark text-2xl">
        Must See in New York
      </span>
      <SpaceY /> <SpaceY />
      <div className="flex flex-wrap justify-between w-full px-[10vw] gap-y-10 gap-x-5">
        {newYorkLocations.map((item) => (
          <LocationCard {...item} />
        ))}
      </div>
      {/* ATTRACTIONS SECTION */}
      <SpaceY /> <SpaceY />
      <span className="font-poppins font-medium text-dark">
        Popular Attractions
      </span>
      <SpaceY />
      <span className="font-volkhov font-bold text-dark text-2xl">
        Attractions
      </span>
      <SpaceY /> <SpaceY />
      <div className="flex flex-wrap justify-between w-full px-[10vw] gap-y-10 gap-x-5">
        {attractionsFakeData.map((item) => (
          <LocationCard {...item} />
        ))}
      </div>
      {/* MUSICALS  SECTION */}
      <SpaceY /> <SpaceY />
      <span className="font-poppins font-medium text-dark">Popular shows</span>
      <SpaceY />
      <span className="font-volkhov font-bold text-dark text-2xl">
        Musicals/Shows
      </span>
      <SpaceY /> <SpaceY />
      <div className="flex flex-wrap justify-between w-full px-[10vw] gap-y-10 gap-x-5">
        {showsFakeData.map((item) => (
          <LocationCard {...item} />
        ))}
      </div>
      {/* TOUR SECTION */}
      <SpaceY /> <SpaceY />
      <span className="font-poppins font-medium text-dark">Tour with Us</span>
      <SpaceY />
      <span className="font-volkhov font-bold text-dark text-2xl">Tour</span>
      <SpaceY /> <SpaceY />
      <div className="flex flex-wrap justify-between w-full px-[10vw] gap-y-10 gap-x-5">
        {toursFakeData.map((item) => (
          <LocationCard {...item} />
        ))}
      </div>
    </div>
  );
};
