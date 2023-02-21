import { useNavigate } from "react-router-dom";
import {
  GhostButton,
  GoogleButton,
  NaverButton,
} from "../../shared/components/Buttons";
import { SpaceY } from "../../shared/components/Utils";

export const SignUpView = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <span className="font-poppins font-medium text-2xl">Sign Up</span>
      <SpaceY /> <SpaceY />
      <GhostButton
        text="Create an account"
        onClick={() => navigate("/auth/register")}
      />
      <SpaceY /> <SpaceY />
      <div className="w-[250px] flex justify-between items-center">
        <hr className="border border-gray rounded w-[100px]" />
        <span className="font-poppins font-medium text xl">Or</span>
        <hr className="border border-gray rounded w-[100px]" />
      </div>
      <SpaceY />
      <GoogleButton text="Google Sign Up" onClick={() => {}} />
      <SpaceY />
      <NaverButton text="Naver Sign Up" onClick={() => {}} />
    </div>
  );
};
