import { useState } from "react";

import Image from "next/image";
import Logo from "../components/assets/Navbar-Logo.png";
import Hamburger from "../components/assets/hamburger-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" flex justify-between items-center p-[20px] md:px-[80px] ">
      <div>
        <Image
          src={Logo}
          alt="Logo"
          quality={100}
          placeholder="blur"
          className=" w-[80px]"
        />
      </div>

      <div className="  ">
        <div
          className={
            isOpen
              ? " hidden "
              : " w-[25px] bg-[#503431]  p-[4px] rounded-[3px] md:hidden "
          }
          onClick={handleOpenMenu}
        >
          <Image
            src={Hamburger}
            alt="Hamburger"
            quality={100}
            placeholder="blur"
            className=" "
          />
        </div>
        <div
          className={
            isOpen
              ? "flex flex-row w-[100%] absolute right-0 top-0"
              : " hidden md:flex "
          }
        >
          <div
            className=" bg-[#55A393] w-[25%] h-[100vh] opacity-[0.5] md:hidden "
            onClick={handleOpenMenu}
          ></div>
          <div className=" text-sm bg-[#8B0000] w-[75%] h-[100vh] p-6 md:h-[37px] md:w-[400px] md:justify-center md:items-center md:p-0 md:text-xs md:bg-transparent ">
            <ul className=" text-[#959595] text-right flex flex-col gap-5 md:flex-row md:items-center md:justify-between ">
              <li
                className=" text-xl font-bold md:hidden "
                onClick={handleOpenMenu}
              >
                X
              </li>
              <li>About Us</li>
              <li>Volunteer</li>
              <li>Login</li>
              <li>Register</li>
              <button className=" text-white bg-[#55A393] px-[20px] py-[10px] rounded-[5px] inline ml-auto md:ml-0 md:bg-[#8B0000] ">
                Donate Now
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
