'use client'

import LeftSideBar from "@/components/LeftSideBar";
import Navbar from "@/components/Navbar";
// import type { Metadata } from "next";
import { useState } from "react";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Install - Landing Page UI",
//   description: "Welcome to the Landing Page UI - React Component Library",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };
  return (
    <html lang="en">
      <head>
        <title>Install - Landing Page UI</title>
        <meta name="description" content="Welcome to the Landing Page UI - React Component Library" />
      </head>
      <body className="font-sans">
        <div className="bg-slate-100 font-sans text-slate-700 dark:text-slate-200  dark:bg-darkBgColor  min-h-screen relative ">
          <Navbar
            toggleSidebar={toggleSidebar}
            className="fixed z-30 top-0 left-0 w-full"
          />
          <div
            className={` ${isSidebarOpen
              ? "absolute top-[85px] left-0 w-full  h-[calc(100%_-_85px)] -z-0 bg-black/50"
              : ""
              } `}></div>
          <div className="flex pt-[85px] flex-nowrap flex-col md:flex-row lg:flex-row relative h-screen overflow-y-scroll">
            <div
              className={`fixed top-[85px] -left-[300px] w-[300px] transition-all duration-300 ease-in-out  pl-3 pr-5  border-r bg-darkBgColor text-darkTextColor z-50 overflow-y-scroll h-[calc(100vh_-_85px)] ${isSidebarOpen ? "left-0" : ""
                } `}>
              <LeftSideBar />
            </div>
            <div className="hidden lg:w-[20%]  lg:block border-r sticky top-0 lg:overflow-y-scroll border-slate-950 dark:border-slate-300/60 pl-3 pr-5  ">
              <LeftSideBar />
            </div>
            <div className="w-full lg:w-[80%] flex-1 md:pl-5 md:pr-5 ">

            {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
