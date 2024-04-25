import React, { useState } from 'react';
import {Icon} from '../Icon'; // Import the Icon component

interface BadgeProps {
  styles?: string;
  badgeStyles?: string;
  position?: string;
  tagName?: string;
  content?: number;
  maxCount?: number;
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
  ...rest
}) => {
  let [customTag, setCustomTag]: any = useState(tagName || "div");
  const CustomTag: any = customTag.toLowerCase();

  const isTop = position.includes("top");
  const isBottom = position.includes("bottom");
  const isLeft = position.includes("left");
  const isRight = position.includes("right");

  const verticalClass = isTop ? "top" : isBottom ? "bottom" : "top";
  const horizontalClass = isLeft ? "left" : isRight ? "right" : "right";

  let displayContent: string  = content.toString();

  if (!maxCount && typeof content === 'number' && content % 100 === 0 && content !== 0) {
    let xyz: number = content -1;

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
    <CustomTag className={` ${styles} relative inline-flex align-middle `} {...rest}>
      {children || (
        <Icon
          icon="fa-envelope"
          iconLibrary="font-awesome"
          iconStyles="text-lg"
        />
      )}
      <span
        className={` ${badgeStyles} ${isTop ? "top-0" : ""} ${isLeft ? "left-0" : ""} ${isRight ? "right-0" : ""} ${isBottom ? "bottom-0" : ""} ${isTop && isRight ? "translate-x-1/2 -translate-y-1/2 " : ""} ${isTop && isLeft ? "-translate-x-1/2 -translate-y-1/2 " : ""} ${isBottom && isRight ? "translate-x-1/2 translate-y-1/2 " : ""} ${isBottom && isLeft ? "-translate-x-1/2 translate-y-1/2 " : ""} flex flex-wrap place-content-center items-center absolute font-medium text-[0.75rem] min-w-[20px] h-[20px] bg-gray-500 text-white leading-none px-[6px] rounded-[10px] `}
      >
        {displayContent}
      </span>
    </CustomTag>
  );
};

// export default Badge;
