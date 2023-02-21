import { Controller, useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useNavigate } from "react-router-dom";
import {
  GoogleButton,
  MainButton,
  NaverButton,
} from "../../shared/components/Buttons";
import { MainInput } from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";
import { LoginValidator } from "./utils/validations";

const resolver = classValidatorResolver(LoginValidator);

export const LogInView = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver,
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <span className="font-poppins font-medium text-2xl">Login</span>
      <SpaceY /> <SpaceY />
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <MainInput
            error={errors.email?.message}
            placeholder="Email"
            onChange={(text) => field.onChange(text)}
          />
        )}
      />
      <SpaceY />
      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <MainInput
            error={errors.password?.message}
            isPassword
            placeholder="Password"
            onChange={(text) => field.onChange(text)}
          />
        )}
      />
      <SpaceY /> <SpaceY />
      <hr className="border border-gray rounded w-[300px]" />
      <SpaceY /> <SpaceY />
      <a
        onClick={() => navigate("/auth/forgot-password")}
        className="cursor-pointer font-poppins text-blue text-sm w-[300px] text-end"
      >
        Forgot Password?
      </a>
      <SpaceY /> <SpaceY />
      <MainButton
        disabled={Boolean(Object.entries(errors).length)}
        text="Login"
        onClick={handleSubmit(onSubmit)}
      />
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
