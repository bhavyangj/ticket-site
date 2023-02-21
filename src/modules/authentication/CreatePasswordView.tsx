import { MainButton } from "../../shared/components/Buttons";
import { MainInput } from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";

export const CreatePassowrdView = () => {
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <span className="font-poppins font-medium text-2xl">
        Create a new password
      </span>
      <SpaceY /> <SpaceY />
      <span className="font-poppins text-sm">
        Create a new password to protect your privacy.
      </span>
      <SpaceY /> <SpaceY /> <SpaceY />
      <MainInput
        isPassword
        placeholder="Create a new password"
        onChange={(value) => console.log(value)}
      />
      <SpaceY />
      <MainInput
        isPassword
        placeholder="Re-enter a new password"
        onChange={(value) => console.log(value)}
      />
      <SpaceY />
      <MainButton
        text="Change password"
        onClick={() => console.log("Change password")}
      />
    </div>
  );
};
