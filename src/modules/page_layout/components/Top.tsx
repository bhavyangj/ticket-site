import { useNavigate } from "react-router-dom";
import { staticFiles } from "../../../shared";
import { Logo } from "../../../shared/components/Logo";
import { NavBar, NavBarElement } from "../../../shared/components/NavBar";

const pageLayoutNavBar: NavBarElement[] = [
  {
    name: "Home",
    path: "/main",
  },
  {
    name: "Package Tour",
    path: "/package-tour",
    dropdownElements: [
      { name: "NY Big Apple Pass", subPath: "ny-ba-pass" },
      { name: "NY City Pass", subPath: "ny-city-pass" },
      { name: "NY City Explore Pass", subPath: "ny-explore-pass" },
    ],
  },
  {
    name: "City Tour",
    path: "/main",
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
    path: "/main",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const IconButton: React.FC<{ icon: string; route: string; name?: string }> = ({
  icon,
  name,
  route,
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(route)}
      className="flex ml-10 justify-center items-center"
    >
      <img src={icon} width="17" alt={icon} />
      {name && <span className="ml-1">{name}</span>}
    </button>
  );
};

export const Top = () => (
  <div className="flex justify-between items-center px-[5vw]">
    <div className="flex justify-center items-center">
      <Logo />
    </div>
    <div className="pt-8">
      <div className="flex justify-end font-poppins text-sm">
        <IconButton route="/" icon={staticFiles.icons.cart} name="Cart" />
        <IconButton
          route="/user/log-in"
          icon={staticFiles.icons.lock}
          name="Login"
        />
        <IconButton
          route="/user/sign-up"
          icon={staticFiles.icons.sign_up}
          name="Sign Up"
        />
        <IconButton route="/user/my-account" icon={staticFiles.icons.profile} />
      </div>
      <NavBar elements={pageLayoutNavBar} />
    </div>
  </div>
);
