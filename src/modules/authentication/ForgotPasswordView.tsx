import { Controller, useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import { MainButton } from "../../shared/components/Buttons";
import { MainInput } from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";
import { ForgotPasswordValidator } from "./utils/validations";

const resolver = classValidatorResolver(ForgotPasswordValidator);

export const ForgotPasswordView = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver,
  });

  const onSubmit = (data: { email: string }) => {
    console.log(data);
  };

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
      <MainButton
        disabled={Boolean(Object.entries(errors).length)}
        onClick={handleSubmit(onSubmit)}
        text="Reset password"
      />
    </div>
  );
};
