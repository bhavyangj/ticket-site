import { MainButton, SecondaryButton } from "../../shared/components/Buttons";
import { SpaceY } from "../../shared/components/Utils";

export const NoAuthCheckoutView = () => {
  return (
    <div className="flex flex-col items-center px-[5vw] py-[20vh] max-w-[1300px] w-full">
      <div className="font-volkhov font-bold text-dark text-2xl lg:text-3xl leading-tight w-full text-center">
        Choose How You Would Like To Check Out
      </div>
      <SpaceY />
      <SpaceY />
      <SpaceY />
      <div className="w-full flex md:flex-row flex-col items-center">
        <div className="w-1/2 flex flex-col items-center font-poppins gap-y-5 py-10 text-center">
          <div className="flex flex-col h-3/4 gap-y-5">
            <div>Check out as a member</div>
            <div>Use your Tamice member sign-in</div>
          </div>
          <MainButton text="Login/Sign Up" onClick={() => {}} />
        </div>
        <div className="font-volkhov md:hidden font-bold text-dark text-xl lg:text-3xl leading-tight w-full text-center">
          Or
        </div>
        <div className="md:border-l md:border-darkGray w-1/2 flex flex-col items-center font-poppins gap-y-5 py-10 text-center">
          <div className="flex flex-col h-3/4 gap-y-5">
            <div>Check out as a Guest</div>
            <div>
              You can create a free Tamice Member profile at any point during
              the checkout process
            </div>
          </div>
          <SecondaryButton text="Guest Checkout" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
