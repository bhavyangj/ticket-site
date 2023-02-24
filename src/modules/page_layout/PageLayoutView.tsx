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
  <div className="flex flex-col min-h-screen bg-white bg-top-form bg-no-repeat bg-right-top">
    <Top />
    {cover === CoverTypes.NORMAL && <Cover />}
    {cover === CoverTypes.INFO && <InfoCover />}
    {children}
    <Footer />
  </div>
);
