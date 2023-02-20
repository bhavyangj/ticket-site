import {
  GhostButton,
  GoogleButton,
  MainButton,
  NaverButton,
} from "../../shared/components/Buttons";
import { MainInput } from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";

export const LogInView = () => {
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <span className="font-poppins font-medium text-2xl">Login</span>
      <SpaceY /> <SpaceY />
      <MainInput placeholder="Email" onChange={(value) => console.log(value)} />
      <SpaceY />
      <MainInput
        isPassword
        placeholder="Password"
        onChange={(value) => console.log(value)}
      />
      <SpaceY /> <SpaceY />
      <hr className="border border-gray rounded w-[300px]" />
      <SpaceY /> <SpaceY />
      <a href="" className="font-poppins text-blue text-sm w-[300px] text-end">
        Forgot Password?
      </a>
      <SpaceY /> <SpaceY />
      <MainButton text="Login" onClick={() => console.log("login")} />
      <SpaceY />
      <SpaceY />
      <GoogleButton text="Google Login" onClick={() => {}} />
      <SpaceY />
      <NaverButton text="Naver Login" onClick={() => {}} />
      <SpaceY />
      <SpaceY />
      <a href="" className="font-poppins font-medium">
        Don't have an account?
      </a>
      <SpaceY />
      <SpaceY />
      <hr className="border border-gray rounded w-[300px]" />
      <SpaceY />
      <SpaceY />
      <a href="" className="font-poppins font-medium">
        Non-Member Ticket Look up
      </a>
    </div>
  );
};
