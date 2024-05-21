'use client'

import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon'; // Import the Icon component

interface BadgeProps {
  styles?: string;
  badgeStyles?: string;
  position?: string;
  tagName?: string;
  content?: number;
  maxCount?: number;
  variant?: string | boolean | number;
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  styles = "",
  badgeStyles = "",
  position = "top right",
  tagName,
  content = 0,
  maxCount,
  children,
  variant = "1",
  ...rest
}) => {
  let [customTag]: any = useState(tagName || "div");
  const CustomTag: any = customTag.toLowerCase();

  const isTop = position.includes("top");
  const isBottom = position.includes("bottom");
  const isLeft = position.includes("left");
  const isRight = position.includes("right");

  const [variantValue, setVariantValue] = useState({
    styles: "",
    badgeStyles: "",
  });

  useEffect(() => {
    if (variant == "1") {
      setVariantValue({
        styles: "relative inline-flex align-middle ",
        badgeStyles: "font-medium text-[0.75rem] min-w-[20px] h-[20px] bg-gray-500 text-white leading-none px-[6px] rounded-[10px]",
      });
    }
    else if (variant == "2") {
      setVariantValue({
        styles: "w-[60px] h-[60px] border-2 rounded-full border-red-500 text-red-500 bg-white flex items-center justify-center ",
        badgeStyles: "bg-red-500 rounded-full text-white flex items-center justify-center min-w-[20px] h-[20px] px-[6px] rounded-[10px]",
      });
    } else if (variant == "3") {
      setVariantValue({
        styles: "bg-green-600 w-14 h-14 text-[1.25rem] leading-none border border-white rounded-lg flex items-center justify-center ",
        badgeStyles: "bg-amber-400 rounded-full text-white flex items-center justify-center min-w-[20px] h-[20px] px-[6px] rounded-[10px]",
      });
    } else if (variant == "4") {
      setVariantValue({
        styles: "w-[60px] h-[60px] border-2 rounded-full border-cyan-500 text-cyan-500 bg-white flex items-center justify-center outline-2 outline-offset-4 outline-cyan-500 outline ",
        badgeStyles: "bg-cyan-500 rounded-full text-white flex items-center justify-center min-w-[20px] h-[20px] px-[6px] rounded-[10px]",
      });
    } else if (variant == "5") {
      setVariantValue({
        styles: "relative inline-flex align-middle text-red-500 ",
        badgeStyles: "font-medium text-[0.75rem] min-w-[20px] h-[20px] bg-white text-red-500 leading-none px-[6px] rounded-[10px]",
      });
    } else if (variant == "6") {
      setVariantValue({
        styles: "relative inline-flex align-middle  ",
        badgeStyles: "font-medium text-[0.75rem] min-w-[20px] h-[20px] bg-white text-red-500 leading-none px-[6px] rounded-[10px]",
      });
    }
  }, [variant]);

  // const verticalClass = isTop ? "top" : isBottom ? "bottom" : "top";
  // const horizontalClass = isLeft ? "left" : isRight ? "right" : "right";

  let displayContent: string = content.toString();

  if (!maxCount && typeof content === 'number' && content % 100 === 0 && content !== 0) {
    let xyz: number = content - 1;

    displayContent = xyz.toString();
    displayContent += "+";
  } else if (!maxCount && content === 0) {
    displayContent = "0";
  }

  if (maxCount !== undefined) {
    if (typeof content === 'number' && content > maxCount) {
      displayContent = maxCount + "+";
    } else {
      displayContent = content.toString();
    }
  }

  return (
    <CustomTag className={` ${styles} ${variant ? variantValue.styles : ""
      } relative `} {...rest}>
      {children || (
        <Icon
          icon="fa-envelope"
          iconLibrary="font-awesome"
          iconStyles="text-lg"
        />
      )}
      <span
        className={` ${badgeStyles} ${variant ? variantValue.badgeStyles : ""
          } ${isTop ? "top-0" : ""} ${isLeft ? "left-0" : ""} ${isRight ? "right-0" : ""} ${isBottom ? "bottom-0" : ""} ${isTop && isRight ? "translate-x-1/2 -translate-y-1/2 " : ""} ${isTop && isLeft ? "-translate-x-1/2 -translate-y-1/2 " : ""} ${isBottom && isRight ? "translate-x-1/2 translate-y-1/2 " : ""} ${isBottom && isLeft ? "-translate-x-1/2 translate-y-1/2 " : ""} flex flex-wrap place-content-center items-center absolute  `}
      >
        {displayContent}
      </span>
    </CustomTag>
  );
};

// export default Badge;
