import { staticFiles } from "..";

export const Logo: React.FC<{ textColor?: string }> = ({
  textColor = "[#5D5D5F]",
}) => (
  <div className="flex flex-col justify-center items-center w-[150px]">
    <img src={staticFiles.images.logo} width="100" alt="Tamice logo" />
    <span className={"mt-1 font-poppins font-medium text-xs text-" + textColor}>
      NY Travel Agency
    </span>
  </div>
);
