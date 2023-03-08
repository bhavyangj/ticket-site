import { ReactNode } from "react";
import {
  NavBarElement,
  ProductDetailNavBar,
} from "../../shared/components/NavBar";
import { SpaceY } from "../../shared/components/Utils";

const navbarElements: Omit<NavBarElement, "dropdownElements">[] = [
  {
    name: "Detail",
    path: "/detail",
  },
  {
    name: "Price",
    path: "/price",
  },
];

export const ProductDetailLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="py-[5vh] flex w-full justify-center pt-[5vh] border h-[700px]">
        carrousel
      </div>
      <SpaceY />
      <div className="bg-[#F2F2F2] w-[99vw] min-h-[100px] flex justify-center">
        <div className="flex flex-col px-[5vw] max-w-[1300px] w-full">
          <ProductDetailNavBar elements={navbarElements} />
        </div>
      </div>
      {children}
    </div>
  );
};
