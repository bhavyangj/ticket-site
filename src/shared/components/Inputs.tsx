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
