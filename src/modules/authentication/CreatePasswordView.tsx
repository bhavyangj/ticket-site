import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm, Controller } from "react-hook-form";
import { MainButton } from "../../shared/components/Buttons";
import { MainInput } from "../../shared/components/Inputs";
import { SpaceY } from "../../shared/components/Utils";
import { CreatePasswordValidator } from "./utils/validations";

const resolver = classValidatorResolver(CreatePasswordValidator);

export const CreatePasswordView = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
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
    console.log(data);
  };
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <span className="font-volkhov font-bold text-dark text-2xl">
        Create a new password
      </span>
      <SpaceY /> <SpaceY />
      <span className="font-poppins text-sm">
        Create a new password to protect your privacy.
      </span>
      <SpaceY /> <SpaceY /> <SpaceY />
      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <MainInput
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
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <MainInput
            error={errors.confirmPassword?.message}
            isPassword
            placeholder="Re-enter a new password"
            onChange={(value) => field.onChange(value)}
          />
        )}
      />
      <SpaceY />
      <MainButton
        disabled={Boolean(Object.entries(errors).length)}
        text="Change password"
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};
