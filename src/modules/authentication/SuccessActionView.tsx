import { SpaceY } from "../../shared/components/Utils";

export const SuccessActionView: React.FC<{ msg: string }> = ({ msg }) => (
  <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
    <SpaceY />
    <SpaceY />
    <span className="font-poppins text-sm">{msg}</span>
  </div>
);
