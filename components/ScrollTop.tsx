'use client';

import { Icon } from "@/app/src";
import { useEffect, useState } from "react";

interface ScrollTopProps {
  children?: React.ReactNode;
  styles?: string;
  iconEnable?: boolean;
  icon?: string;
  iconLibrary?: string;
  iconStyles?: string;
}

export const ScrollTop: React.FC<ScrollTopProps> = ({
  children,
  styles = "",
  iconEnable,
  icon = "fa-caret",
  iconLibrary = "font-awesome",
  iconStyles,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible)

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    // }
  }, []);

  return (
    <div
      className={`${styles} z-50 fixed flex items-center justify-center p-4 bg-gray-500 rounded-full bottom-5 right-5 cursor-pointer transition-all duration-1000 ease-in-out ${isVisible ? "!opacity-100 !visible" : ""
        }`}
      onClick={scrollToTop}
    >
      {iconEnable ? (
        <Icon icon={icon} iconLibrary={iconLibrary} iconStyles={iconStyles} />
      ) : (
        children
      )}
    </div>
  );
};
