import { useState } from "react";
import { logo_svg, menu, close } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex py-6 justify-between items-center navbar border-b-8 border-b-accentColor`}
    >
      <img src={logo_svg} alt="multiparking logo" className="h-[32px] mr-10" />

      {/* DESKTOP */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-outfit whitespace-nowrap font-normal cursor-pointer text-[20px] ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href="">{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* MOBILE */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[18px] h-[18px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-backgroundSecondary absolute top-20 right-0 mx-4 my-2 min-2-[140px] rounded-x1 sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-outfit font-normal cursor-pointer text-[20px] ${
                  index == navLinks.length - 1 ? "mb-0" : "mb-10"
                }`}
              >
                <a href="">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
