import { useState } from "react";
import { staticFiles } from "../../shared";
import { GhostButton } from "../../shared/components/Buttons";
import { MainInput } from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";
import { CardInfo, MedalEnum, PropsCardInfo } from "./components/CardInfo";

export const cartViewFirstColClassName = "flex justify-center w-3/12";
export const cartViewRestColClassName = "flex justify-center grow w-2/12";

export const CartView = () => {
  const [edit, setEdit] = useState(false);
  const [adultInfo] = useState<PropsCardInfo[]>([
    {
      name: "Big Apple 2",
      price: 100,
      quantity: 1,
      addition: 27,
      subtotal: 137,
      includes: [
        {
          medal: MedalEnum.GOLD,
          name: "Summit Observation Deck",
          addition: 18,
        },
        {
          medal: MedalEnum.SILVER,
          name: "Moma Museum Doson Tour",
          scheduledDate: "01/25/2023 (10:30 AM)",
          addition: 9,
        },
      ],
    },
    {
      name: "Big Apple 3",
      price: 100,
      quantity: 1,
      addition: 27,
      subtotal: 137,
    },
    {
      name: "Big Apple 4",
      price: 100,
      quantity: 1,
      addition: 27,
      subtotal: 137,
      includes: [
        {
          medal: MedalEnum.NONE,
          name: "Top of The Rock",
        },
        {
          medal: MedalEnum.GOLD,
          name: "Summit Observation Deck",
          addition: 18,
        },
        {
          medal: MedalEnum.NONE,
          name: "Edge NYC",
        },
        {
          medal: MedalEnum.SILVER,
          name: "마담투소 + 마블 4D",

          addition: 9,
        },
      ],
    },
    {
      name: "Big Apple 4",
      price: 100,
      quantity: 1,
      addition: 27,
      subtotal: 137,
      includes: [
        {
          medal: MedalEnum.GOLD,
          name: "Summit Observation Deck",
          addition: 18,
        },
        {
          medal: MedalEnum.NONE,
          name: "Edge NYC",
        },
        {
          medal: MedalEnum.SILVER,
          name: "마담투소 + 마블 4D",

          addition: 9,
        },
      ],
    },
  ]);
  const [childInfo] = useState<PropsCardInfo[]>([
    {
      name: "Big Apple 2",
      price: 100,
      quantity: 1,
      addition: 27,
      subtotal: 137,
      includes: [
        {
          medal: MedalEnum.GOLD,
          name: "Summit Observation Deck",
          addition: 18,
        },
        {
          medal: MedalEnum.SILVER,
          name: "Moma Museum Doson Tour",
          scheduledDate: "01/25/2023 (10:30 AM)",
          addition: 9,
        },
      ],
    },
  ]);
  return (
    <div className="flex flex-col items-center ">
      <div className="bg-[#F2F2F2] w-[99vw] min-h-[600px] pb-[20vh] pt-[10vh] flex justify-center">
        <div className="flex gap-x-2 px-[5vw] max-w-[1300px] w-full">
          <div
            className={`flex flex-col ${
              edit ? "w-2/3" : "w-full"
            } bg-white px-[30px] pb-20`}
          >
            <SpaceY />
            <SpaceY />
            <div className="w-full flex items-center justify-between">
              <span className="font-poppins font-medium text-darkGray">
                Shopping Cart
              </span>
              <div className="flex flex-col gap-y-2">
                <div className="flex font-poppins text-darkGray">
                  <img
                    width={23}
                    className="mr-3"
                    src={staticFiles.icons.gold_medal}
                  />
                  Premium S: $18 추가
                </div>
                <div className="flex font-poppins text-darkGray">
                  <img
                    width={23}
                    className="mr-3"
                    src={staticFiles.icons.black_medal}
                  />
                  Premium S: $9 추가
                </div>
              </div>
            </div>
            <SpaceY />
            <SpaceY />
            <hr className="border border-gray rounded w-full" />
            <div className="flex font-poppins font-bold text-darkGray my-5">
              <div className={cartViewFirstColClassName}>상품</div>
              <div className={cartViewRestColClassName}>Scheduled Date</div>
              <div className={cartViewRestColClassName}>Price</div>
              <div className={cartViewRestColClassName}>Quantity</div>
              <div className={cartViewRestColClassName}>Addition</div>
              <div className={cartViewRestColClassName}>Subtotal</div>
            </div>
            <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <div className="font-poppins text-xl font-medium text-blue">
              Adult
            </div>
            <SpaceY />
            {adultInfo.map((ai) => (
              <CardInfo {...ai} key={JSON.stringify(ai)} />
            ))}
            <SpaceY />
            <hr className="border border-blue rounded w-full" />
            <SpaceY />
            <div className="font-poppins text-xl font-medium text-blue">
              Child 1 (Age: 12)
            </div>
            <SpaceY />
            {childInfo.map((ai) => (
              <CardInfo {...ai} key={JSON.stringify(ai)} />
            ))}
            <SpaceY /> <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <div className="w-full flex justify-between font-poppins text-darkGray">
              <span>Subtotal</span>
              <span>$1444.25</span>
            </div>
            <SpaceY />
            <div className="w-full flex justify-between font-poppins text-darkGray">
              <span className="font-medium">Coupon Code</span>
              <div className="flex gap-x-2">
                <MainInput
                  onChange={() => {}}
                  value=""
                  placeholder="COUPON"
                  containerClassName="w-[120px]"
                />
                <GhostButton
                  text="Apply"
                  containerClassName="w-[120px]"
                  onClick={() => {}}
                />
              </div>
            </div>
            <SpaceY />
            <div className="w-full flex justify-between font-poppins text-darkGray">
              <span className="font-medium">Discount Amount</span>
              <span></span>
            </div>
            <SpaceY />
            <div className="w-full flex justify-between font-poppins text-darkGray">
              <span>Tax (9%)</span>
              <span></span>
            </div>
            <SpaceY /> <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <div className="w-full flex justify-between font-poppins text-darkGray font-medium">
              <span>Grand Total</span>
              <span>$1444.25</span>
            </div>
          </div>
          {edit && (
            <div className="flex flex-col w-1/3 bg-white  pb-20">asdasd</div>
          )}
        </div>
      </div>
    </div>
  );
};
