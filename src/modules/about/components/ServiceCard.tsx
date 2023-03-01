export type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  description,
  icon,
  title,
}) => (
  <div className="gap-y-3 flex flex-col items-center text-poppins rounded-b-xl px-5 py-5 w-[350px] min-w-[250px] drop-shadow-xl bg-white mx-5">
    <img width="45" src={icon} alt="service icon" />

    <span className="font-semibold text-center">{title}</span>

    <div className="text-sm">{description}</div>
  </div>
);
