import { staticFiles } from "../../../shared";
import { Logo } from "../../../shared/components/Logo";

const FooterCol: React.FC<{ children: React.ReactNode; hidden?: boolean }> = ({
  children,
  hidden,
}) => {
  const hiddenColClass =
    "grow hidden lg:flex flex-col justify-center px-[20px]";
  const colClass = "grow flex flex-col justify-center px-[20px]";
  return <div className={hidden ? hiddenColClass : colClass}>{children}</div>;
};

const DestinationCard: React.FC<{
  backgroundClassImage: "1" | "2" | "3";
  destination: string;
}> = ({ backgroundClassImage, destination }) => {
  const baseClass =
    "mt-2 mr-2 bg-cover bg-no-repeat min-w-[130px] min-h-[70px]";
  const bgClassImage = {
    "1": `${baseClass} bg-[url('../public/images/footer_1.png')]`,
    "2": `${baseClass} bg-[url('../public/images/footer_2.png')]`,
    "3": `${baseClass} bg-[url('../public/images/footer_3.png')]`,
  };
  return (
    <div className={bgClassImage[backgroundClassImage]}>
      <div className="bg-[rgba(0,0,0,.6)] flex justify-center items-center w-[100%] h-[100%]">
        <div className="text-xs font-poppins text-white font-medium">
          {destination}
        </div>
      </div>
    </div>
  );
};

export const Footer = () => (
  <div className="h-[350px]">
    <div className="px-[100px] flex justify-between bg-[#262424] h-[80%]">
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
        <span className="font-poppins font-medium text-sm text-white">
          TOP DESTINATIONS
        </span>
        <div className="flex flex-wrap">
          <DestinationCard
            destination="Big Apple Pass"
            backgroundClassImage="1"
          />
          <DestinationCard destination="Scenes" backgroundClassImage="2" />
          <DestinationCard
            destination="Musicals/Shows"
            backgroundClassImage="3"
          />
          <DestinationCard
            destination="Musseum/Galleries"
            backgroundClassImage="2"
          />
          <DestinationCard
            destination="Rides/Cruises"
            backgroundClassImage="3"
          />
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
            <img src={staticFiles.icons.instagram} alt="ig" />{" "}
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
