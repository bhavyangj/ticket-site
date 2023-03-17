import { staticFiles } from "../../../shared";

export const BookBanner = () => {
  return (
    <div className="w-full flex flex-col my-20">
      <div className="w-full font-poppins text-darkGray">Easy and Fast</div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col">
          <span className="font-volkhov font-bold text-2xl text-dark">
            Book your next trip in 3 easy steps
          </span>
          {activities.map((item) => (
            <Activity {...item} />
          ))}
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="bg-white rounded-xl flex h-[300px] w-[400px] drop-shadow-xl overflow-hidden justify-center items-center">
            video here
          </div>
        </div>
      </div>
    </div>
  );
};

const activities: ActivityProps[] = [
  {
    title: "Choose Attraction or Package from Big Apple Pass",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    icon: staticFiles.icons.activity_1,
  },
  {
    title: "Make Payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    icon: staticFiles.icons.activity_2,
  },
  {
    title: "Select Date and Download Voucher from My Dashboard",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    icon: staticFiles.icons.activity_3,
  },
];

type ActivityProps = { title: string; text: string; icon: string };

const Activity: React.FC<ActivityProps> = ({ icon, text, title }) => (
  <div className="flex mt-8">
    <img src={icon} />
    <div className="flex flex-col gap-y-1 ml-4">
      <span className="font-poppins font-medium text-sm">{title}</span>
      <span className="font-poppins text-sm">{text}</span>
    </div>
  </div>
);
