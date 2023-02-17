import { ReactNode } from "react";
import { Footer } from "./components/Footer";
import { Top } from "./components/Top";

export const PageLayoutView: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <div className="min-h-screen bg-white bg-top-form bg-no-repeat bg-right-top">
    <Top />
    {children}
    <Footer />
  </div>
);
