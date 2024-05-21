'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'

const NavbarMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };
  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        className="fixed z-30 top-0 left-0 w-full"
      />
      <div
        className={` ${isSidebarOpen
            ? "absolute top-[85px] left-0 w-full  min-h-[calc(100%_-_85px)] -z-0 bg-black/50"
            : ""
          } `}></div>
    </>
  )
}

export default NavbarMain