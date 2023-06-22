import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { staticFiles } from "../../shared";
import {
  GhostButton,
  MainButton,
  SecondaryButton,
} from "../../shared/components/Buttons";
import { CheckBox, MainInput } from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";
import { CardInfo, MedalEnum, PropsCardInfo } from "./components/CardInfo";
import { cartState } from "../../App";

export const cartViewFirstColClassName = "flex justify-center w-3/12";
export const cartViewRestColClassName = "flex justify-center grow w-2/12";

export const CartView = () => {
  const [cart] = cartState.useState();
  const [edit, setEdit] = useState(true);
  const navigate = useNavigate();

  console.log(cart)

  const subTotal = cart.adultInfo.reduce((acc,cur)=>acc+cur.subtotal,0) + cart.childInfo.reduce((acc,cur)=>acc+cur.subtotal,0)

  return (
    <div className="flex flex-col items-center ">
      <div className="bg-[#F2F2F2] w-[99vw] min-h-[600px] pb-[20vh] pt-[10vh] flex justify-center">
        <div className="flex gap-x-2 px-[5vw] max-w-[1300px] w-full">
          <div
            className={`flex flex-col ${
              edit ? "w-full md:w-2/3" : "w-full"
            } bg-white px-[30px] pb-20`}
          >
            <SpaceY />
            <SpaceY />
            <div className="w-full flex items-center md:justify-between justify-center">
              <span className="font-poppins font-medium text-darkGray">
                Shopping Cart
              </span>
              <div className="hidden md:flex flex-col gap-y-2">
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
            <hr className="hidden md:block border border-gray rounded w-full" />
            <div className="hidden md:flex font-poppins font-bold text-darkGray my-5">
              <div className={cartViewFirstColClassName}>상품</div>
              <div className={cartViewRestColClassName}>Scheduled Date</div>
              <div className={cartViewRestColClassName}>Price</div>
              <div className={cartViewRestColClassName}>Quantity</div>
              <div className={cartViewRestColClassName}>Addition</div>
              <div className={cartViewRestColClassName}>Subtotal</div>
            </div>
            <hr className="hidden md:block border border-gray rounded w-full" />
            <SpaceY />
            <div className="font-poppins text-xl font-medium text-blue">
              Adult
            </div>
            <SpaceY />
            {cart.adultInfo.map((ai) => (
              <CardInfo {...ai} key={JSON.stringify(ai)} />
            ))}
            <SpaceY />
            <hr className="border border-blue rounded w-full" />
            <SpaceY />
            <div className="font-poppins text-xl font-medium text-blue">
              Child 1 (Age: 12)
            </div>
            <SpaceY />
            {cart.childInfo.map((ai) => (
              <CardInfo {...ai} key={JSON.stringify(ai)} />
            ))}
            <SpaceY /> <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <div className="w-full flex justify-between font-poppins text-darkGray">
              <span>Subtotal</span>
              <span>${subTotal}</span>
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
            <SpaceY /> <hr className="border border-gray rounded w-full" />
            <SpaceY />
            <div className="w-full flex justify-between font-poppins text-darkGray font-medium">
              <span>Grand Total</span>
              <span>${subTotal}</span>
            </div>
            <SpaceY />
            <SpaceY />
            <SpaceY />
            <div className="w-full flex justify-center">
              <MainButton
                text="Proceed Checkout"
                onClick={() => navigate("/no-auth-checkout")}
              />
            </div>
          </div>
          {edit && (
            <div className="hidden md:flex flex-col w-1/3 pb-20 gap-y-2">
              <div className="flex flex-col w-full bg-white py-10 px-4">
                <div className="font-poppins font-medium text-sm text-darkGray">
                  Billing Address for Payment
                </div>
                <SpaceY />
                <SpaceY />
                <MainInput
                  placeholder="Last Name *"
                  onChange={() => {}}
                  containerClassName="w-full"
                  value={""}
                />
                <SpaceY />
                <MainInput
                  placeholder="First Name *"
                  onChange={() => {}}
                  containerClassName="w-full"
                  value={""}
                />
                <SpaceY />
                <MainInput
                  placeholder="Email *"
                  isPassword
                  onChange={() => {}}
                  containerClassName="w-full"
                  value={""}
                />
                <SpaceY />
                <MainInput
                  placeholder="Retype Email *"
                  isPassword
                  onChange={() => {}}
                  containerClassName="w-full"
                  value={""}
                />
                <SpaceY />
                <MainInput
                  placeholder="Phone *"
                  onChange={() => {}}
                  containerClassName="w-full"
                  value={""}
                />
                <SpaceY />
                <MainInput
                  placeholder="여행 예정일 (optional)"
                  onChange={() => {}}
                  containerClassName="w-full"
                  value={""}
                />
              </div>
              <div className="flex flex-col w-full bg-white py-10 px-4">
                <div className="font-poppins font-medium text-sm text-darkGray">
                  Credit Card Information
                </div>
                <SpaceY /> <SpaceY />
                <hr className="border border-gray rounded w-full" /> <SpaceY />
                <div className="font-poppins font-medium text-sm text-darkGray flex justify-between">
                  <span>Grand Total</span>
                  <span>${subTotal}</span>
                </div>
                <SpaceY />
                <hr className="border border-gray rounded w-full" />
                <SpaceY /> <SpaceY />
                <MainInput
                  placeholder="영문 이름 * (크레딧 카드)"
                  onChange={() => {}}
                  containerClassName="w-full"
                  value={""}
                />
                <SpaceY />
                <MainInput
                  placeholder="카드번호 *"
                  onChange={() => {}}
                  containerClassName="w-full"
                  value={""}
                />
                <SpaceY />
                <MainInput
                  placeholder="MM/YY *"
                  onChange={() => {}}
                  containerClassName="w-full"
                  value={""}
                />
                <SpaceY />
                <SpaceY />
                <div className="flex justify-center items-center w-full">
                  <CheckBox
                    value={false}
                    onCheck={() => {}}
                    containerClass="w-1/2"
                  />
                  <div className="font-poppins text-xs w-1/2 pl-3">
                    Terms and Conditions
                  </div>
                </div>
                <SpaceY />
                <SpaceY />
                <div className="flex w-full gap-x-1">
                  <MainButton text="Proceed Checkout" onClick={() => {}} />
                  <SecondaryButton text="Reset" onClick={() => {}} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
