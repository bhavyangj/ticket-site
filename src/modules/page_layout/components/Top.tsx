import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { staticFiles } from "../../../shared";
import { Logo } from "../../../shared/components/Logo";
import { NavBar, NavBarElement } from "../../../shared/components/NavBar";
import { SpaceY } from "../../../shared/components/Utils";

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
    name: "City Attractions",
    path: "/city-attractions",
    dropdownElements: [
      { name: "Observation(Scenics)", subPath: "observations" },
      { name: "Museum/Gallery", subPath: "museum-gallery" },
      { name: "Rides/Cruises", subPath: "rides-cruises" },
      { name: "Activities", subPath: "activities" },
    ],
  },
  {
    name: "Guide Tour",
    path: "/guide-tour",
    dropdownElements: [
      { name: "Manhattan Day Tour", subPath: "manhattan-day" },
      { name: "Manhattan Night Tour", subPath: "manhattan-night" },
      { name: "Doson Tour", subPath: "doson" },
      { name: "UN Tour", subPath: "un" },
    ],
  },
  {
    name: "Musicals & Shows",
    path: "/musicals-and-shows",
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

const IconButton: React.FC<{
  icon: string;
  route?: string;
  name?: string;
  isPopup?: boolean;
  children?: ReactNode;
}> = ({ icon, name, route, isPopup, children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (isPopup && children)
    return (
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex ml-10 justify-center items-center group relative inline-block "
      >
        <img className="cursor-pointer" src={icon} width="17" alt={icon} />
        {name && <span className="ml-1">{name}</span>}
        {open && (
          <div className="absolute flex flex-col bg-white border border-gray z-[100] font-poppins min-w-full top-[100%] py-5 px-2 min-h-[300px] w-[170px] rounded-b">
            {children}
          </div>
        )}
      </div>
    );

  return (
    <button
      onClick={() => route && navigate(route)}
      className="flex ml-10 justify-center items-center"
    >
      <img src={icon} width="17" alt={icon} />
      {name && <span className="ml-1">{name}</span>}
    </button>
  );
};

export const Top = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex xl:hidden justify-between items-center px-[5vw] max-w-[1300px] w-full">
        <IconButton isPopup icon={staticFiles.icons.menu}>
          <NavBar elements={pageLayoutNavBar} isMobile />
        </IconButton>
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <IconButton route="/cart" icon={staticFiles.icons.cart} />
      </div>

      <div className="hidden xl:flex justify-between items-center px-[5vw] max-w-[1300px]">
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <div className="pt-8">
          <div className="flex justify-end font-poppins text-sm">
            <IconButton
              route="/cart"
              icon={staticFiles.icons.cart}
              name="Cart"
            />
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
            <IconButton isPopup icon={staticFiles.icons.profile}>
              <>
                <div className="text-darkGray font-medium text-start">
                  MY ACCOUNT
                </div>
                <SpaceY />
                <button
                  className="flex hover:text-blue py-2 gap-x-3 text-darkGray font-medium font-sm"
                  onClick={() => navigate("/my-bookings")}
                >
                  <img src={staticFiles.icons.disposition} />
                  <span>My Bookings</span>
                </button>
                <SpaceY />
                <button
                  className="flex hover:text-blue py-2 gap-x-3 text-darkGray font-medium font-sm"
                  onClick={() => navigate("/user/my-account")}
                >
                  <img src={staticFiles.icons.edit} />
                  <span>My Account</span>
                </button>
                <SpaceY />

                <hr className="border border-gray rounded w-full" />
                <SpaceY />
                <button className="flex hover:text-blue py-2 gap-x-3 text-darkGray font-medium font-sm">
                  <img src={staticFiles.icons.sign_out} />
                  <span>Sign Out</span>
                </button>
              </>
            </IconButton>
          </div>
          <NavBar elements={pageLayoutNavBar} />
        </div>
      </div>
    </>
  );
};
