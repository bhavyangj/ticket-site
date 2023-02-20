import { staticFiles } from "..";

export const GhostButton: React.FC<{
  text: string;
  onClick: () => void;
}> = ({ text, onClick }) => (
  <button
    className="font-poppins font-medium text-blue border border-gray w-[300px] py-2"
    onClick={() => onClick()}
  >
    {text}
  </button>
);

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
