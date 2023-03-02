import { ReactNode } from "react";
import { Cover } from "../../shared/components/Cover";
import { InfoCover } from "../../shared/components/InfoCover";
import { Footer } from "./components/Footer";
import { Top } from "./components/Top";

export enum CoverTypes {
  NORMAL,
  INFO,
  NONE,
}

export const PageLayoutView: React.FC<{
  children: ReactNode;
  cover?: CoverTypes;
}> = ({ children, cover }) => (
  <div className="flex flex-col items-center min-h-screen bg-white bg-top-form bg-no-repeat bg-right-top">
    <Top />
    {cover === CoverTypes.NORMAL && <Cover />}
    {cover === CoverTypes.INFO && <InfoCover />}
    <div className="px-[5vw] max-w-[1300px] w-full">{children}</div>
    <Footer />
  </div>
);
