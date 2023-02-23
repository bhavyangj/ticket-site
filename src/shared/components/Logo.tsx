import { useNavigate } from "react-router-dom";
import { staticFiles } from "..";

export const Logo: React.FC<{ whiteText?: boolean }> = ({ whiteText }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="flex flex-col justify-center items-center w-[150px] cursor-pointer"
    >
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
};
