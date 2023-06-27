import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { staticFiles } from "..";

export type NavBarElement = {
  path: string;
  name: string;
  dropdownElements?: { name: string; subPath: string }[];
};

const itemClass =
  "px-8 py-2 font-poppins text-sm hover:bg-lightBlue/[.1] rounded-sm text-dark flex justify-center items-center whitespace-nowrap";
const selectedItemClass = "border-b-2 border-lightBlue rounded-sm";

const dropdownContainer = "group relative inline-block";

export const NavBar: React.FC<{
  elements: NavBarElement[];
  isMobile?: boolean;
}> = ({ elements, isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (isMobile) {
    return (
      <div className={"flex flex-col"}>
        {elements.map((el) => (
          <Fragment key={el.name}>
            {el.dropdownElements ? (
              <button
                className={`flex flex-col px-2 py-2 font-poppins font-medium text-sm hover:text-blue rounded-sm text-dark justify-center items-center whitespace-nowrap ${
                  location.pathname !== "/" &&
                  (el.path.includes(location.pathname) ||
                    location.pathname.includes(el.path))
                    ? `${selectedItemClass}`
                    : ""
                } group/second relative inline-block`}
              >
                <div className="flex justify-between w-full">
                  {el.name}
                  <img src={staticFiles.icons.down_arrow} />
                </div>
                <ul className="hidden group-hover/second:flex group-hover/second:flex-col top-[100%] font-poppins text-gray min-w-full">
                  {el.dropdownElements.map((de) => (
                    <li
                      key={de.subPath}
                      className="px-5 py-4 hover:bg-lightBlue/[.1] cursor-pointer flex"
                      onClick={() => navigate(el.path + "/" + de.subPath)}
                    >
                      {de.name}
                    </li>
                  ))}
                </ul>
              </button>
            ) : (
              <button
                className={`flex px-2 py-2 font-poppins text-sm hover:text-blue rounded-sm text-dark items-center whitespace-nowrap ${
                  location.pathname !== "/" &&
                  el.path.includes(location.pathname)
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
  }

  return (
    <div className={"flex"}>
      {elements.map((el) => (
        <Fragment key={el.name}>
          {el.dropdownElements ? (
            <button
              className={`${itemClass} ${
                location.pathname !== "/" &&
                (el.path.includes(location.pathname) ||
                  location.pathname.includes(el.path))
                  ? `${selectedItemClass}`
                  : ""
              } ${dropdownContainer}`}
            >
              {el.name}
              <ul className="absolute hidden group-hover:flex group-hover:flex-col bg-[#2A353D] top-[100%] z-[100] font-poppins text-white min-w-full">
                {el.dropdownElements.map((de) => (
                  <li
                    key={de.subPath}
                    className="px-5 py-4 hover:bg-lightBlue/[.1] cursor-pointer flex"
                    onClick={() => navigate(el.path + "/" + de.subPath)}
                  >
                    {de.name}
                  </li>
                ))}
              </ul>
            </button>
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

export type HashNavBarElement = {
  hash: string;
  name: string;
};
