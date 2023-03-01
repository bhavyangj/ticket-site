import { staticFiles } from "../../../shared";
import { Logo } from "../../../shared/components/Logo";

const FooterCol: React.FC<{ children: React.ReactNode; hidden?: boolean }> = ({
  children,
  hidden,
}) => {
  const hiddenColClass =
    "w-2/5 grow hidden lg:flex flex-col justify-center px-[20px]";
  const colClass = "w-2/5 grow flex flex-col justify-center px-[20px]";
  return <div className={hidden ? hiddenColClass : colClass}>{children}</div>;
};

const fakeDestinationsLink = [
  "Return Policy",
  "Bullet list goes here",
  "Linked Text Goes here",
  "Linked Text Goes here",
  "Linked Text Goes here",
  "Linked Text Goes here",
  "Linked Text Goes here",
];

export const Footer = () => (
  <div className="h-[350px]">
    <div className="px-[100px] flex justify-between bg-[#262424] h-[80%] ">
      <FooterCol>
        <div>
          <Logo whiteText />
        </div>
        <div>
          <div className="mt-10 text-white font-poppins text-xs w-[200px]">
            #1 customer service trave agency in New York. Explore New York city
            with TAMICE Your satisfaction is our high priority
          </div>
        </div>
      </FooterCol>
      <FooterCol hidden>
        <span className="font-poppins font-medium text-sm text-white mb-5">
          TOP DESTINATIONS
        </span>
        <div className="flex flex-col">
          {fakeDestinationsLink.map((item, idx) => (
            <div
              key={item + idx}
              className="font poppins text-xs text-white hover:underline hover:cursor-pointer"
            >
              • {item}
            </div>
          ))}
        </div>
      </FooterCol>
      <FooterCol>
        <span className="font-poppins font-medium text-sm text-white">
          CONTACT INFO
        </span>
        <span className="font-poppins font-normal text-xs text-white">
          Address: 151 West 46th Street, Suite 1002, New York, NY 10036
        </span>
        <span className="mt-3 font-poppins font-normal text-xs text-white">
          Phone:
        </span>
        <span className="font-poppins font-normal text-xs text-white">
          646-684-4848
        </span>
        <span className="font-poppins font-normal text-xs text-white">
          1800-6991
        </span>
        <span className="mt-3 font-poppins font-normal text-xs text-white">
          Contact: service@tamice.com
        </span>
        <div className="mt-3 flex">
          <button onClick={() => {}}>
            <img src={staticFiles.icons.facebook} alt="fb" />
          </button>
          <button className="ml-2" onClick={() => {}}>
            <img src={staticFiles.icons.instagram} alt="ig" />
          </button>
          <button className="ml-2" onClick={() => {}}>
            <img src={staticFiles.icons.blog} alt="blog" />
          </button>
        </div>
      </FooterCol>
    </div>
    <div className="flex justify-center items-center h-[20%] bg-black">
      <span className="font-poppins text-[#A4A5A8] font-normal text -sm">
        COPYRIGHT 2022 TAMICE INC, ALL RIGHT RESERVED
      </span>
    </div>
  </div>
);
