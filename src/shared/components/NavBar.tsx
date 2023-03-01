import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type NavBarElement = {
  path: string;
  name: string;
  dropdownElements?: { name: string; subPath: string }[];
};

const containerClass = "flex";
const itemClass =
  "px-8 py-2 font-poppins font-bold text-xs hover:bg-lightBlue/[.1] rounded-sm text-dark flex justify-center items-center";
const selectedItemClass = "border-b-2 border-lightBlue rounded-sm";

const dropdownContainer = "group relative inline-block";

export const NavBar: React.FC<{ elements: NavBarElement[] }> = ({
  elements,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className={containerClass}>
      {elements.map((el) => (
        <Fragment key={el.name}>
          {el.dropdownElements ? (
            <div
              className={`${itemClass} ${
                location.pathname !== "/" &&
                (el.path.includes(location.pathname) ||
                  location.pathname.includes(el.path))
                  ? `${selectedItemClass}`
                  : ""
              } ${dropdownContainer}`}
            >
              <button> {el.name}</button>
              <ul className="absolute hidden group-hover:flex group-hover:flex-col bg-[#2A353D] top-[110%] z-[100] font-poppins text-white w-full">
                {el.dropdownElements.map((de) => (
                  <li
                    className="px-5 py-4 hover:bg-lightBlue/[.1] cursor-pointer"
                    onClick={() => navigate(el.path + "/" + de.subPath)}
                  >
                    {de.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <button
              className={`${itemClass} ${
                location.pathname !== "/" && el.path.includes(location.pathname)
                  ? selectedItemClass
                  : ""
              }`}
              onClick={() => navigate(el.path)}
            >
              {el.name}
            </button>
          )}
        </Fragment>
      ))}
    </div>
  );
};
