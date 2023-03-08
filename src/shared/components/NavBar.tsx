import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type NavBarElement = {
  path: string;
  name: string;
  dropdownElements?: { name: string; subPath: string }[];
};

const containerClass = "flex";
const itemClass =
  "px-8 py-2 font-poppins font-bold text-xs hover:bg-lightBlue/[.1] rounded-sm text-dark flex justify-center items-center whitespace-nowrap";
const selectedItemClass = "border-b-2 border-lightBlue rounded-sm";

const dropdownContainer = "group relative inline-block";

export const NavBar: React.FC<{ elements: NavBarElement[] }> = ({
  elements,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={containerClass}>
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

const productNavbarContainerClass = "flex h-full";
const productNavbarItemClass =
  "px-8 py-2 font-poppins hover:bg-lightBlue/[.1] rounded-sm text-dark flex justify-center items-center whitespace-nowrap";
const productNavbarSelectedItemClass = "border-b-2 border-lightBlue rounded-sm";

export const ProductDetailNavBar: React.FC<{
  elements: Omit<NavBarElement, "dropdownElements">[];
}> = ({ elements }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const cleanPathName = location.pathname
    .split("/")
    .filter((_, idx, arr) => idx !== arr.length - 1)
    .join("/");

  return (
    <div className={productNavbarContainerClass}>
      {elements.map((el) => (
        <Fragment key={el.name}>
          {/* {el.dropdownElements ? (
            <button
              className={`${itemClass} ${
                location.pathname !== "/" &&
                (el.path.includes(location.pathname) ||
                  location.pathname.includes(el.path))
                  ? `${productNavbarSelectedItemClass}`
                  : ""
              } ${dropdownContainer}`}
            >
              {el.name}
              <ul className="absolute hidden group-hover:flex group-hover:flex-col bg-[#2A353D] top-[100%] z-[100] font-poppins text-white min-w-full">
                {el.dropdownElements.map((de) => (
                  <li
                    key={de.subPath}
                    className="px-5 py-4 hover:bg-lightBlue/[.1] cursor-pointer flex"
                    onClick={() =>
                      navigate(el.path + "/" + de.subPath)
                    }
                  >
                    {de.name}
                  </li>
                ))}
              </ul>
            </button>
          ) : ( */}
          <button
            className={`${productNavbarItemClass} ${
              location.pathname !== "/" &&
              (el.path.includes(location.pathname) ||
                location.pathname.includes(el.path))
                ? productNavbarSelectedItemClass
                : ""
            }`}
            onClick={() => navigate(cleanPathName + el.path)}
          >
            {el.name}
          </button>
          {/* )} */}
        </Fragment>
      ))}
    </div>
  );
};
