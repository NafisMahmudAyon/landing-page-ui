'use client'

import React, { useState } from "react";
// import UseThemeSwitcher from "../Hooks/UseThemeSwitcher";
import { Logo, MoonIcon, SunIcon, UI } from "@/components/Icons";
import { Block, UseThemeSwitcher } from "@/app/src";

interface NavbarProps {
  toggleSidebar: () => void;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, className }) => {
  const [mode, setMode] = UseThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${className} bg-slate-300 dark:bg-slate-800 border-b border-slate-900/30 flex justify-between items-center px-[20px] py-3  `}>
      <button
        className="flex flex-col items-center justify-center lg:hidden"
        onClick={() => {
          toggleSidebar();
          handleClick();
        }}>
        <span
          className={`bg-darkBgColor dark:bg-bgColor block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            } `}></span>
        <span
          className={`bg-darkBgColor dark:bg-bgColor block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            } `}></span>
        <span
          className={`bg-darkBgColor dark:bg-bgColor block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            } `}></span>
      </button>
      {/* <Logo
				className="fill-darkBgColor dark:fill-bgColor cursor-pointer "
				width={130}
				onClick={handleLogoClick}
			/> */}
      <Block styles="flex gap-2 items-center" onClick={handleLogoClick}>
        <UI width={60} />
        <Logo
          className="fill-darkBgColor dark:fill-bgColor cursor-pointer "
          width={115}
        />
      </Block>
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light"
            ? "bg-darkBgColor text-darkTextColor"
            : "bg-bgColor text-textColor"
          }`}>
        {mode === "dark" ? (
          <SunIcon className={"fill-darkBgColor"} />
        ) : (
          <MoonIcon className={"fill-darkBgColor"} />
        )}
      </button>
    </div>
  );
};

export default Navbar;
