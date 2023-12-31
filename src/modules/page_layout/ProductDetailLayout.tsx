import Carousel from "better-react-carousel";
import { ReactNode } from "react";
import { staticFiles } from "../../shared";
import { useGetTicket } from "../../shared/hooks";

export const ProductDetailLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { ticket } = useGetTicket();

  const images = ticket?.gallery_images?.map((item: any) => item.url) || [];

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
          {images.map((img: string) => (
            <Carousel.Item key={img}>
              <div className="min-h-full flex justify-center">
                <img className="object-contain" src={img} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="w-1/4 hidden lg:flex border-[3px] border-transparent flex-col gap-y-1">
          <img className="object-contain h-1/2" src={images[0]} />

          <img className="object-contain h-1/2" src={images[1]} />
        </div>
        <div className="w-1/4 hidden lg:flex border-[3px] border-transparent flex-col gap-y-1">
          <img className="object-contain h-1/2" src={images[2]} />

          <img className="object-contain h-1/2" src={images[3]} />
        </div>
      </div>
      {children}
    </div>
  );
};
