import { useEffect, useState } from "react";
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
import { useForm, Controller } from "react-hook-form";

export const cartViewFirstColClassName = "flex justify-center w-3/12";
export const cartViewRestColClassName = "flex justify-center grow w-2/12";

export const CartView = () => {
  const [cart] = cartState.useState();
  const [edit, setEdit] = useState(true);
  const navigate = useNavigate();
  const {
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      confirmEmail: "",
      phone: "",
    },
  });
  const [error, setError] = useState<string | null>(null);

  const subTotal =
    cart.adultInfo.reduce((acc, cur) => acc + cur.subtotal, 0) +
    cart.childInfo.reduce((acc, cur) => acc + cur.subtotal, 0);

  const handleSaveData = (token: string) => {
    const data = {
      token_stripe: token,
      first_name: watch("firstName"),
      last_name: watch("lastName"),
      email: watch("email"),
      email_confirmation: watch("confirmEmail"),
      phone: watch("phone"),
      discount_amount: 0,
      departure_date: null,
      items: [
        {
          category_id: 1,
          subcategory_id: 98,
          price_list_id: 51,
          adult_child_type: "Child",
          child_age: 12,
          price: 109,
          addition: 0,
          quantity: 1,
          total: 109,
          sub_items: [
            {
              addition: 0,
              ticket_id: 85,
            },
          ],
        },
      ],
    };
    const arrErrors = Object.values(errors).map((item) => item.message);
    console.log(arrErrors, errors);
    if (arrErrors.length !== 0) return setError(arrErrors.join(", "));
    setError(null);
    console.log(data);
  };

  useEffect(() => {
    // @ts-ignore
    var stripe = Stripe(
      "pk_test_51MpCKJACe4fzyuYTJ7dhX6C5O2cMlxTseYRQlWL74jeAvYTg1TL9nU9shH0tNydkvLh4YRomOb4eG11M08SI9yCI00qCMUvVDY"
    );

    const elements = stripe.elements();

    const card = elements.create("card", {});
    card.mount("#card-element");

    const form = document.getElementById("payment-form");
    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      stripe
        .createToken(card)
        .then((res: any) => handleSaveData(res?.token?.id))
        .catch((err: any) => setError(err.message));
    });
  }, []);

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
              {/*<div className="hidden md:flex flex-col gap-y-2">
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
              </div>*/}
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
            {/*<div className="w-full flex justify-between font-poppins text-darkGray">
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
            <SpaceY /> <hr className="border border-gray rounded w-full" />*/}
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
                <Controller
                  name="lastName"
                  rules={{ required: true }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <MainInput
                      placeholder="Last Name *"
                      onChange={onChange}
                      containerClassName="w-full"
                      value={value}
                    />
                  )}
                />
                <SpaceY />
                <Controller
                  name="firstName"
                  rules={{ required: true }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <MainInput
                      placeholder="First Name *"
                      onChange={onChange}
                      containerClassName="w-full"
                      value={value}
                    />
                  )}
                />
                <SpaceY />
                <Controller
                  name="email"
                  rules={{ required: true }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <MainInput
                      placeholder="Email *"
                      onChange={onChange}
                      containerClassName="w-full"
                      value={value}
                    />
                  )}
                />
                <SpaceY />
                <Controller
                  name="confirmEmail"
                  rules={{ required: true }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <MainInput
                      placeholder="Retype Email *"
                      onChange={onChange}
                      containerClassName="w-full"
                      value={value}
                    />
                  )}
                />
                <SpaceY />
                <Controller
                  name="phone"
                  rules={{ required: true }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <MainInput
                      placeholder="Phone *"
                      onChange={onChange}
                      containerClassName="w-full"
                      value={value}
                    />
                  )}
                />
                <SpaceY />
              </div>
              <div className="flex flex-col w-full bg-white py-10 px-4">
                <div className="font-poppins font-medium text-sm text-darkGray">
                  Credit Card Information
                </div>
                <SpaceY /> <SpaceY />
                <form action="#" method="post" id="payment-form">
                  <div className="form-row">
                    <div id="card-element"></div>
                    <div id="card-errors" role="alert"></div>
                  </div>

                  <SpaceY />
                  <SpaceY />
                  <div className="text-red">{error && error}</div>
                  <div className="flex w-full gap-x-1 mt-4">
                    <button className="font-poppins font-medium text-white bg-blue py-2 px-4">
                      Proceed Checkout
                    </button>
                    <SecondaryButton text="Reset" onClick={() => {}} />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
