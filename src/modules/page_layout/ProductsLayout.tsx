import { ReactNode } from "react";
import { staticFiles } from "../../shared";
import { SpaceY } from "../../shared/components/Utils";
import { ServiceCard, ServiceCardProps } from "../about/components/ServiceCard";

export const ProductsLayout: React.FC<{
  children: ReactNode;
  sectionTitle: string;
  sectionDescription: string;
}> = ({ children, sectionDescription, sectionTitle }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="py-[5vh] flex w-full justify-center pt-[5vh]">
        {services.map((s) => (
          <ServiceCard key={JSON.stringify(s)} {...s} />
        ))}
      </div>
      <SpaceY />
      <div className="bg-[#F2F2F2] w-[99vw] min-h-[600px] pb-[20vh] pt-[10vh] flex justify-center">
        <div className="flex flex-col px-[5vw] max-w-[1250px] w-full">
          <span className="font-poppins font-medium text-xl flex gap-x-4 mb-10">
            <img src={staticFiles.icons.heart} width="20" />
            {sectionTitle}
          </span>
          <span className="font-poppins flex gap-x-4 mb-16">
            {sectionDescription}
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

const services: ServiceCardProps[] = [
  {
    title: "Great Customer Service",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter ",
    icon: staticFiles.icons.call,
  },
  {
    title: "Best Price In The Industry",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter ",
    icon: staticFiles.icons.tag,
  },
  {
    title: "Super Faster Booking",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter ",
    icon: staticFiles.icons.calendar,
  },
];
