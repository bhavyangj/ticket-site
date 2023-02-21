import { useEffect, useState } from "react";
import ReactPhoneInput, { Country } from "react-phone-number-input";
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
  onChange: (val: string | undefined) => void;
  error?: string;
  setError?: () => void;
  clearError?: () => void;
}> = ({ onChange, error, setError, clearError }) => {
  const [number, setNumber] = useState<string | undefined>();
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
          onChange(val);
          setNumber(val);
          if (!val) {
            return clearError && clearError();
          }

          if (!phoneUtils.isValidNumber(val || "", code)) {
            setError && setError();
          } else {
            clearError && clearError();
          }
        }}
      />
      {error && (
        <span className="font-poppins text-xs text-red w-[300px]">{error}</span>
      )}
    </>
  );
};

export const CheckBox: React.FC<{
  onChange: (val: boolean) => void;
  containerClass?: string;
  defaultValue?: boolean;
}> = ({ containerClass, onChange, defaultValue }) => {
  const [checked, setChecked] = useState(defaultValue || false);

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  if (containerClass)
    <div className={containerClass}>
      <input type="checkbox" className="border border-gray " />
    </div>;
  return (
    <input
      checked={checked}
      type="checkbox"
      onClick={() => setChecked((prev) => !prev)}
      className="border border-gray "
    />
  );
};
