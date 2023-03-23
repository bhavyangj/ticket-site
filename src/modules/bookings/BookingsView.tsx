import { useState } from "react";
import { staticFiles } from "../../shared";
import { SplitOrdersModal } from "../../shared/components/Modals";
import { SpaceY } from "../../shared/components/Utils";
import { MedalEnum } from "../cart/components/CardInfo";
import { BookingCard, PropsBookingCard } from "./components/BookingCard";

const col1 = "hidden md:flex items-center justify-center w-1/12";
const col2 = "flex items-center justify-center w-1/4 md:w-2/12";
const col3 = "flex items-center justify-center w-1/4 md:w-2/12";
const col4 = "hidden md:flex items-center justify-center w-2/12";
const col5 = "flex items-center justify-center w-1/4 md:w-1/12";
const col6 = "hidden md:flex items-center justify-center w-2/12";
const col7 = "hidden md:flex items-center justify-center w-1/12";
const col8 = "flex items-center justify-center w-1/4 md:w-1/12";

const fakeData: {
  category: string;
  subCategories: PropsBookingCard[];
}[] = [
  {
    category: "Package Tour",
    subCategories: [
      {
        name: "Big Apple pass",
        adult_child: "ADULT",
        quantity: 1,
        itemId: 1,
        includes: [
          {
            name: "Top of the Rock",
            scheduledDate: undefined,
            downloadStatus: "전송완료(Sent)",
            medal: MedalEnum.NONE,
          },
          {
            name: "Top of the Rock",
            scheduledDate: undefined,
            downloadStatus: "전송완료(Sent)",
            medal: MedalEnum.GOLD,
          },
          {
            name: "Top of the Rock",
            scheduledDate: "02/02/2023 (4:00 pm) EST",
            downloadStatus: "전송완료(Sent)",
            medal: MedalEnum.SILVER,
          },
        ],
      },
    ],
  },
  {
    category: "Package Tour 2",
    subCategories: [
      {
        name: "Big Apple pass",
        adult_child: "ADULT",
        quantity: 1,
        itemId: 1,
        includes: [
          {
            name: "Top of the Rock",
            scheduledDate: "02/02/2023 (4:00 pm) EST",
            downloadStatus: "전송완료(Sent)",
            medal: MedalEnum.NONE,
          },
          {
            name: "Top of the Rock",
            scheduledDate: "02/02/2023 (4:00 pm) EST",
            downloadStatus: "전송완료(Sent)",
            medal: MedalEnum.GOLD,
          },
          {
            name: "Top of the Rock",
            scheduledDate: "02/02/2023 (4:00 pm) EST",
            downloadStatus: "전송완료(Sent)",
            medal: MedalEnum.SILVER,
          },
        ],
      },
    ],
  },
  {
    category: "Musicals / Shows",
    subCategories: [
      {
        name: "The Lion King",
        adult_child: "ADULT",
        quantity: 1,
        itemId: 1,
      },
    ],
  },
];

export const BookingsView = () => {
  const [openAll, setOpenAll] = useState(true);
  const [showModalSplitOrder, setShowModalSplitOrder] = useState(false);
  return (
    <div className="flex flex-col w-full bg-white p-10">
      <span className="font-poppins text-xl">My Bookings</span>
      <SpaceY />
      <div className="flex w-full">
        <div className={`${col1}`}>Product category</div>
        <div className={`${col2}`}>상품</div>
        <div className={`${col3}`}>Adult/Child</div>
        <div className={`${col4}`}>Scheduled Date</div>
        <div className={`${col5}`}>Quantity</div>
        <div className={`${col6}`}>Download Status</div>
        <div className={`${col7}`}>Item ID</div>
        <div className={`${col8}`}>
          <img
            className="cursor-pointer"
            width={25}
            src={
              openAll
                ? staticFiles.icons.open_eye
                : staticFiles.icons.closed_eye
            }
            onClick={() => setOpenAll((prev) => !prev)}
          />
        </div>
      </div>
      <SpaceY />
      <hr className="border border-darkGray rounded w-full" />
      <SpaceY />
      <div className="flex flex-col">
        {fakeData.map((data) => (
          <>
            <div className="flex items-start" key={JSON.stringify(data)}>
              <div
                className={`text-blue font-medium justify-start font-poppins ${col1}`}
              >
                {data.category}
              </div>
              <div className="flex w-10/12">
                {data.subCategories.map((subCategory) => (
                  <BookingCard
                    {...subCategory}
                    key={JSON.stringify(subCategory)}
                  />
                ))}
              </div>
              <div
                className={`text-blue font-medium cursor-pointer justify-start font-poppins ${col8}`}
                onClick={() => setShowModalSplitOrder(true)}
              >
                Split Orders
              </div>
            </div>
            <SpaceY />
            <SpaceY />
            <hr className="border-2 border-gray rounded w-full" />
            <SpaceY />
            <SpaceY />
          </>
        ))}
      </div>
      {showModalSplitOrder ? (
        <SplitOrdersModal
          onAccept={() => setShowModalSplitOrder(false)}
          onDecline={() => setShowModalSplitOrder(false)}
        />
      ) : null}
    </div>
  );
};
