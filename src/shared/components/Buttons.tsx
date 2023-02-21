import { staticFiles } from "..";

export const GhostButton: React.FC<{
  text: string;
  onClick: () => void;
  disabled?: boolean;
}> = ({ text, onClick, disabled }) => {
  const className =
    "font-poppins font-medium text-blue border border-gray w-[300px] py-2";
  const disabledClass =
    "font-poppins font-medium text-blue border border-gray w-[300px] py-2 cursor-not-allowed";
  return (
    <button
      className={disabled ? disabledClass : className}
      onClick={() => !disabled && onClick()}
    >
      {text}
    </button>
  );
};

export const MainButton: React.FC<{
  text: string;
  onClick: () => void;
  disabled?: boolean;
}> = ({ text, onClick, disabled }) => {
  const className =
    "font-poppins font-medium text-white bg-blue w-[300px] py-2";
  const disabledClass =
    "font-poppins font-medium text-white bg-blue w-[300px] py-2 cursor-not-allowed";
  return (
    <button
      className={disabled ? disabledClass : className}
      onClick={() => !disabled && onClick()}
    >
      {text}
    </button>
  );
};

export const GoogleButton: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => (
  <button
    className="font-poppins font-base border border-gray w-[300px] py-2 flex items-center"
    onClick={() => onClick()}
  >
    <div className="grow w-1/4 flex justify-center items-center">
      <img src={staticFiles.icons.google} alt="google icon" width="35" />
    </div>
    <div className="grow w-1/2">{text}</div>
    <div className="grow w-1/4" />
  </button>
);

export const NaverButton: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => (
  <button
    className="font-poppins font-base border border-gray w-[300px] py-2 flex items-center"
    onClick={() => onClick()}
  >
    <div className="grow w-1/4 flex justify-center items-center">
      <img src={staticFiles.icons.naver} alt="naver icon" width="35" />
    </div>
    <div className="grow w-1/2">{text}</div>
    <div className="grow w-1/4" />
  </button>
);
