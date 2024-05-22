'use client'

import React, { useState } from "react";
// import UseThemeSwitcher from "../Hooks/UseThemeSwitcher";
import { Logo, MoonIcon, SunIcon, UI } from "@/components/Icons";
import { Block, UseThemeSwitcher } from "@/app/src";
import LeftSideBar from "./LeftSideBar";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [mode, setMode] = UseThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${className} bg-slate-300/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-900/30 flex justify-between items-center px-[20px] py-2  `}>
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
          <UI width={45} />
          <Logo
            className="fill-darkBgColor dark:fill-bgColor cursor-pointer "
            width={100}
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
      {/* <Navbar
        toggleSidebar={toggleSidebar}
        className="fixed z-30 top-0 left-0 w-full"
      /> */}
      <div
        className={` ${isSidebarOpen
          ? "absolute top-[62px] left-0 w-full  h-[calc(100%_-_62px)] -z-0 bg-black/50"
          : ""
          } `}></div>
      <div
        className={`fixed top-[62px] -left-[300px] w-[300px] transition-all duration-300 ease-in-out  pl-3 pr-5  border-r bg-darkBgColor text-darkTextColor z-50 overflow-y-scroll h-[calc(100vh_-_85px)] ${isSidebarOpen ? "left-0" : ""
          } `}>
        <LeftSideBar />
      </div>
      <div className="hidden lg:w-[20%]  lg:block border-r sticky top-0 lg:overflow-y-scroll border-slate-950 dark:border-slate-300/60 pl-3 pr-5  ">
        <LeftSideBar />
      </div>
    </>
  );
};

export default Navbar;
