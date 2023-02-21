import { useState } from "react";
import ReactPhoneInput, { Country } from "react-phone-number-input";
import { ErrorOption, UseFormClearErrors } from "react-hook-form";
import { phoneUtils } from "../utils";

export const MainInput: React.FC<{
  placeholder: string;
  onChange: (val: string) => void;
  isPassword?: boolean;
  error?: string;
}> = ({ placeholder, onChange, isPassword, error }) => (
  <>
    <input
      type={isPassword ? "password" : "text"}
      className="font-poppins px-4 border border-gray w-[300px] py-2"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
    {error && (
      <span className="font-poppins text-xs text-red  w-[300px]">{error}</span>
    )}
  </>
);

export const PhoneInput: React.FC<{
  onChange: (val: string) => void;
  error?: string;
  setError?: (name: "phone", error: ErrorOption) => void;
  clearError?: UseFormClearErrors<{
    phone: string;
  }>;
}> = ({ onChange, error, setError, clearError }) => {
  const [number, setNumber] = useState();
  const [code, setCode] = useState<Country>("US");

  return (
    <>
      <ReactPhoneInput
        defaultCountry={code}
        onCountryChange={(val) => {
          if (val && number) {
            setCode(val);
          }
        }}
        className="font-poppins px-4 border border-gray w-[300px] py-2"
        placeholder="Phone"
        value={number}
        onChange={(val) => {
          // @ts-ignore
          onChange(val);
          // @ts-ignore
          setNumber(val);

          if (!val) return;

          if (clearError) {
            clearError("phone");
          }

          if (!phoneUtils.isValidNumber(val, code) && setError) {
            setError("phone", {
              message: "Invalid phone number",
            });
          }
        }}
      />
      {error && (
        <span className="font-poppins text-xs text-red w-[300px]">{error}</span>
      )}
    </>
  );
};
