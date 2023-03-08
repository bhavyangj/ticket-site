import Carousel from "better-react-carousel";
import { ReactNode } from "react";
import { staticFiles } from "../../shared";
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
      <div className="flex w-full">
        <Carousel
          cols={1}
          rows={1}
          loop
          containerClassName="flex items-center justify-center border-2 border-transparent w-full lg:w-1/2"
          arrowLeft={
            <div className="absolute left-[5%] top-[50%] z-[100] cursor-pointer">
              <img src={staticFiles.icons.left_arrow} />
            </div>
          }
          arrowRight={
            <div className="absolute right-[5%] top-[50%] z-[100] cursor-pointer">
              <img src={staticFiles.icons.right_arrow} />
            </div>
          }
        >
          <Carousel.Item>
            <div className="min-h-full flex justify-center">
              <img
                className="object-contain"
                src="https://picsum.photos/800/600?random=1"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="min-h-full flex justify-center">
              <img
                className="object-contain"
                src="https://picsum.photos/800/600?random=2"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="min-h-full flex justify-center">
              <img
                className="object-contain"
                src="https://picsum.photos/800/600?random=3"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="min-h-full flex justify-center">
              <img
                className="object-contain"
                src="https://picsum.photos/800/600?random=4"
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="w-1/4 hidden lg:flex border-[3px] border-transparent flex-col gap-y-1">
          <img
            className="object-contain"
            src="https://picsum.photos/800/600?random=1"
          />

          <img
            className="object-contain"
            src="https://picsum.photos/800/600?random=2"
          />
        </div>
        <div className="w-1/4 hidden lg:flex border-[3px] border-transparent flex-col gap-y-1">
          <img
            className="object-contain"
            src="https://picsum.photos/800/600?random=3"
          />

          <img
            className="object-contain"
            src="https://picsum.photos/800/600?random=4"
          />
        </div>
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
