import { staticFiles } from "..";

export const Logo: React.FC<{ whiteText?: boolean }> = ({ whiteText }) => (
  <div className="flex flex-col justify-center items-center w-[150px]">
    <img src={staticFiles.images.logo} width="100" alt="Tamice logo" />
    <span
      className={`mt-1 font-poppins font-medium text-xs ${
        whiteText ? "text-white" : "text-[#5D5D5F]"
      }`}
    >
      NY Travel Agency
    </span>
  </div>
);
