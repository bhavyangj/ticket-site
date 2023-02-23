import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MainButton } from "../../shared/components/Buttons";
import { MainInput, PhoneInput } from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";
import { AccountCard } from "./components/AccountCard";
import { EditAccountValidator } from "./utils/validations";

const fakeProfile = {
  picture: "/fake/fake_profile_user.png",
  name: "David Lee",
  email: "xxx@gmail.com",
  phone: "1-777-777-777",
  koreanName: "이XX",
  country: "USA",
};

const resolver = classValidatorResolver(EditAccountValidator);

export const EditAccountView = () => {
  const [phone, setPhone] = useState<string | undefined>(fakeProfile.phone);

  const bodyRowClass = "flex w-full justify-between px-5";
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      phone: "",
      password: "",
      confirmPassword: "",
    },
    resolver,
  });

  const onSubmit = (data: { password: string; confirmPassword: string }) => {
    if (data.password !== data.confirmPassword)
      return setError("confirmPassword", {
        message: "Password does not match",
      });
    console.log(data, phone);
  };

  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <span className="font-volkhov font-bold text-dark text-2xl">
        Edit Account
      </span>
      <SpaceY />
      <span className="font-poppins text-sm">
        Please update your phone number and password
      </span>
      <SpaceY /> <SpaceY />
      <div className="w-[70vw] max-w-[900px]">
        <AccountCard
          col1={<img width="50" src={fakeProfile.picture} alt="user avatar" />}
          col2={
            <>
              <div className={bodyRowClass}>
                <span>Name:</span>
                <span>{fakeProfile.name}</span>
              </div>
              <SpaceY />
              <div className={bodyRowClass}>
                <span>Email:</span>
                <span>{fakeProfile.email}</span>
              </div>
              <SpaceY />
              <div className={bodyRowClass}>
                <span>Phone:</span>
                <div className="flex flex-col pl-5">
                  <PhoneInput
                    number={phone}
                    clearError={clearErrors}
                    setError={() =>
                      setError("phone", {
                        message: "Invalid phone number",
                      })
                    }
                    containerClassName="max-w-[150px] w-[13vw] min-w-[110px]"
                    error={errors.phone?.message}
                    onChange={(value) => setPhone(value)}
                  />
                </div>
              </div>
              <SpaceY />
              <div className={bodyRowClass}>
                <span>Password:</span>
                <div className="flex flex-col pl-5">
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <MainInput
                        value={field.value}
                        containerClassName="max-w-[150px] w-[13vw] min-w-[110px]"
                        error={errors.password?.message}
                        isPassword
                        placeholder="Create a new password"
                        onChange={(value) => field.onChange(value)}
                      />
                    )}
                  />
                  <SpaceY />
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field }) => (
                      <MainInput
                        value={field.value}
                        containerClassName="max-w-[150px] w-[13vw] min-w-[110px]"
                        error={errors.confirmPassword?.message}
                        isPassword
                        placeholder="Confirm password"
                        onChange={(value) => field.onChange(value)}
                      />
                    )}
                  />
                </div>
              </div>
            </>
          }
          col3={
            <>
              <div className={bodyRowClass}>
                <span>Korean Name:</span>
                <span>{fakeProfile.koreanName}</span>
              </div>
              <SpaceY />
              <div className={bodyRowClass}>
                <span>Country:</span>
                <span>{fakeProfile.country}</span>
              </div>
            </>
          }
        />
        <SpaceY />
        <SpaceY />
        <SpaceY />
        <div className="flex justify-end w-full">
          <MainButton
            disabled={Boolean(Object.entries(errors).length)}
            text="Save"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
};
