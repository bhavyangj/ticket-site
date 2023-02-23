import { staticFiles } from "../../../shared";
import { Logo } from "../../../shared/components/Logo";
import { NavBar } from "../../../shared/components/NavBar";
import { NavBarElement } from "../../../shared/types";

const pageLayoutNavBar: NavBarElement[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Package Tour",
    path: "/main",
  },
  {
    name: "City Tour",
    path: "/",
  },
  {
    name: "Guide Tour",
    path: "/main",
  },
  {
    name: "Musicals & Shows",
    path: "/main",
  },
  {
    name: "여행정보",
    path: "/",
  },
  {
    name: "About Us",
    path: "/main",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const IconButton: React.FC<{ icon: string; name?: string }> = ({
  icon,
  name,
}) => (
  <button className="flex ml-10 justify-center items-center">
    <img src={icon} width="17" alt={icon} />
    {name && <span className="ml-1">{name}</span>}
  </button>
);

export const Top = () => (
  <div className="flex justify-between px-[5vw] pt-8">
    <div className="flex justify-center items-center">
      <Logo />
    </div>
    <div className="">
      <div className="flex justify-end font-poppins text-sm">
        <IconButton icon={staticFiles.icons.cart} name="Cart" />
        <IconButton icon={staticFiles.icons.lock} name="Login" />
        <IconButton icon={staticFiles.icons.sign_up} name="Sign Up" />
        <IconButton icon={staticFiles.icons.profile} />
      </div>
      <NavBar elements={pageLayoutNavBar} />
    </div>
  </div>
);
