export const MainInput: React.FC<{
  placeholder: string;
  onChange: (val: string) => void;
  isPassword?: boolean;
}> = ({ placeholder, onChange, isPassword }) => (
  <input
    type={isPassword ? "password" : "text"}
    className="font-poppins px-4 border border-gray w-[300px] py-2"
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
  />
);
