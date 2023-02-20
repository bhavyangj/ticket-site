import { useLocation, useNavigate } from "react-router-dom";
import { NavBarElement } from "../types";

const containerClass = "flex";
const itemClass =
  "px-10 py-4 font-poppins font-medium text-xs hover:bg-lightBlue/[.1] rounded-sm";
const selectedItemClass = "border-b-2 border-lightBlue rounded-sm";

export const NavBar: React.FC<{ elements: NavBarElement[] }> = ({
  elements,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={containerClass}>
      {elements.map((el) => (
        <button
          key={el.name}
          className={`${itemClass} ${
            el.path.includes(location.pathname) ? selectedItemClass : ""
          }`}
          onClick={() => navigate(el.path)}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};