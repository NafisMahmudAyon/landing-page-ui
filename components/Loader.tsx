'use client'
import React, { useEffect, useState } from 'react'

const Loader = () => {
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsActive(false);
        setTimeout(() => {
          setIsVisible(false);
        }, 1000); // Match the duration of your CSS transition
      }, 1500); // Change 1500 to the number of milliseconds you want

      // Clear timeout if the component is unmounted before the timeout completes
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <>
      {isVisible &&
        <div className={`fixed z-40 top-0 left-0 flex items-center justify-center bg-bgColor/95 dark:bg-darkBgColor/95 backdrop-blur-sm transition-all duration-1000 ease-in-out w-screen h-screen ${!isActive ? "opacity-0" : "opacity-100 "}`}>
          <div className="loader"></div>
        </div>
      }
    </>
  )
}

export default Loader
