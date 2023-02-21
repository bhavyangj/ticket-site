import { MainButton } from "../../shared/components/Buttons";
import { MainInput } from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";

export const ForgotPasswordView = () => {
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <span className="font-poppins font-medium text-2xl">Forgot Password</span>
      <SpaceY /> <SpaceY />
      <span className="font-poppins text-sm">
        Lost your password? Please enter your email address. You will receive a
        link to create a new password via email
      </span>
      <SpaceY /> <SpaceY /> <SpaceY />
      <MainInput placeholder="Email" onChange={(value) => console.log(value)} />
      <SpaceY />
      <MainButton
        text="Reset password"
        onClick={() => console.log("Reset password")}
      />
    </div>
  );
};
