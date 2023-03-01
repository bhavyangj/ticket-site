import { ReactNode } from "react";
import { staticFiles } from "../../shared";
import { SpaceY } from "../../shared/components/Utils";
import { ServiceCard, ServiceCardProps } from "../about/components/ServiceCard";

export const PackageTourLayout: React.FC<{
  children: ReactNode;
  sectionTitle: string;
  sectionDescription: string;
}> = ({ children, sectionDescription, sectionTitle }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="py-[5vh] bg-white flex w-full px-[10vw] justify-center pt-[5vh]">
        {services.map((s) => (
          <ServiceCard key={JSON.stringify(s)} {...s} />
        ))}
      </div>
      <SpaceY />
      <div className="bg-[#F2F2F2] px-[5vw] w-full min-h-[600px] pb-[20vh] flex flex-col pt-[10vh]">
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
