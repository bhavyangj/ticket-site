import { MainButton } from "../../shared/components/Buttons";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import {
  CheckBox,
  MainInput,
  PhoneInput,
} from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";
import { Controller, useForm } from "react-hook-form";
import { RegisterValidator } from "./utils/validations";
import { useState } from "react";

const resolver = classValidatorResolver(RegisterValidator);

export const RegisterView = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    resolver,
  });
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const onSubmit = (data: {
    firstName: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    phone: string;
  }) => {
    if (data.email !== data.confirmEmail)
      return setError("confirmEmail", {
        message: "Email does not match",
      });
    if (data.password !== data.confirmPassword)
      return setError("confirmPassword", {
        message: "Password does not match",
      });
    console.log(data, phoneNumber);
  };

  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <span className="font-poppins font-medium text-2xl">Register</span>
      <SpaceY /> <SpaceY />
      <span className="font-poppins text-sm">
        After creating an account, you'll be able to track your schedule and
        edit you purchased.
      </span>
      <SpaceY /> <SpaceY /> <SpaceY />
      <Controller
        name="firstName"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <MainInput
            error={errors.firstName?.message}
            placeholder="First Name *"
            onChange={(text) => field.onChange(text)}
          />
        )}
      />
      <SpaceY />
      <Controller
        name="lastName"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <MainInput
            error={errors.lastName?.message}
            placeholder="Last Name *"
            onChange={(text) => field.onChange(text)}
          />
        )}
      />
      <SpaceY />
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <MainInput
            error={errors.email?.message}
            placeholder="Email *"
            onChange={(text) => field.onChange(text)}
          />
        )}
      />
      <SpaceY />
      <Controller
        name="confirmEmail"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <MainInput
            error={errors.confirmEmail?.message}
            placeholder="Retype Email *"
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
            placeholder="Password *"
            onChange={(text) => field.onChange(text)}
          />
        )}
      />
      <SpaceY />
      <Controller
        name="confirmPassword"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <MainInput
            error={errors.confirmPassword?.message}
            isPassword
            placeholder="Retype password *"
            onChange={(text) => field.onChange(text)}
          />
        )}
      />
      <SpaceY />
      <PhoneInput
        error={errors.phone?.message}
        setError={() =>
          setError("phone", {
            message: "Invalid phone number",
          })
        }
        clearError={() => clearErrors("phone")}
        onChange={(text) => {
          setPhoneNumber(text);
        }}
      />
      <SpaceY />
      <SpaceY />
      <div className="flex justify-between items-center w-[300px]">
        <CheckBox
          defaultValue={termsAndConditions}
          onChange={(val) => setTermsAndConditions(val)}
          containerClass="w-2/12"
        />
        <div className="font-poppins text-xs w-10/12">
          * Creating an account means you're okay with our Terms of Service and
          Privacy Statement.
        </div>
      </div>
      <SpaceY />
      <SpaceY />
      <MainButton
        disabled={Boolean(Object.entries(errors).length) || !termsAndConditions}
        text="Sign up"
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};
