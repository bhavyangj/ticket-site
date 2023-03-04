import { useEffect, useState } from "react";
import ReactPhoneInput, { Country } from "react-phone-number-input";
import { staticFiles } from "..";
import { phoneUtils } from "../utils";

export const MainInput: React.FC<{
  placeholder: string;
  onChange: (val: string) => void;
  isPassword?: boolean;
  error?: string;
  containerClassName?: string;
  value: string;
}> = ({
  placeholder,
  onChange,
  isPassword,
  error,
  containerClassName = "w-[300px]",
  value,
}) => (
  <div className={containerClassName}>
    <input
      value={value}
      type={isPassword ? "password" : "text"}
      className="font-poppins px-4 border border-gray w-full py-2"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
    {error && (
      <span className="font-poppins text-xs w-full text-red ">{error}</span>
    )}
  </div>
);

export const PhoneInput: React.FC<{
  onChange: (val: string | undefined) => void;
  error?: string;
  setError?: () => void;
  clearError?: () => void;
  containerClassName?: string;
  number: string | undefined;
}> = ({
  onChange,
  error,
  setError,
  clearError,
  containerClassName = "w-[300px]",
  number,
}) => {
  const [code, setCode] = useState<Country>("US");

  return (
    <div className={containerClassName}>
      <ReactPhoneInput
        defaultCountry={code}
        onCountryChange={(val) => {
          if (val && number) {
            setCode(val);
          }
        }}
        className="font-poppins px-4 border border-gray w-full py-2"
        placeholder="Phone"
        value={number}
        onChange={(val) => {
          onChange(val);
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
        <span className="font-poppins text-xs text-red w-full">{error}</span>
      )}
    </div>
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

export const SelectInput: React.FC<{
  containerClassName?: string;
  options: string[];
}> = ({ containerClassName = "w-full", options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(true);

  const dropdownClass =
    "flex flex-col bg-white absolute top-[100%] z-[100] font-poppins w-full border border-gray border-t-0";

  return (
    <div className={containerClassName}>
      <div
        className={`relative bg-white justify-between w-full cursor-pointer`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex justify-between px-5 py-3 border border-gray">
          {selected}
          <img src={staticFiles.icons.down_arrow} />
        </div>

        {open && (
          <ul className={dropdownClass}>
            {options.map((el) => (
              <li
                key={el}
                className="px-5 py-4 hover:bg-lightBlue/[.1] hover:border hover:border-gray border border-white cursor-pointer"
                onClick={() => setSelected(el)}
              >
                {el}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
