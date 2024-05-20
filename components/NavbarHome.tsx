'use client'

import React from "react";
// import UseThemeSwitcher from "../Hooks/UseThemeSwitcher";
import { Logo, MoonIcon, SunIcon, UI } from "@/components/Icons";
import { UseThemeSwitcher } from "landing-page-ui";
import Link from "next/link";

const NavbarHome = () => {
  const [mode, setMode] = UseThemeSwitcher();
  // const [isOpen, setIsOpen] = useState(false);



  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div
      className={` text-textColor dark:text-darkTextColor border-b border-slate-900/30 px-[20px] py-3  `}>
      <div className="mx-auto max-w-[1600px] flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center">
          <UI width={60} />
          <Logo
            className="fill-darkBgColor dark:fill-bgColor cursor-pointer "
            width={115}
          />
        </Link>
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
    </div>
  );
};



export default NavbarHome;
