import React, { ReactNode } from 'react';

import "../../../css/output.css"

interface CardMediaProps {
  src?: string;
  badge?: string;
  badgePosition?: string;
  styles?: string;
  mediaStyles?: string;
  badgeStyles?: string;
  children?: ReactNode;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  src = "https://source.unsplash.com/random/800x600?nature",
  badge,
  badgePosition = "bottom left",
  styles = "",
  mediaStyles = "",
  badgeStyles = "",
  children,
  ...rest
}) => {
  const isTop = badgePosition.includes("top");
  const isBottom = badgePosition.includes("bottom");
  const isLeft = badgePosition.includes("left");
  const isRight = badgePosition.includes("right");

  return (
    <span className={` ${styles} block w-full relative`} {...rest}>
      {!children && (
        <img
          src={src}
          className={` ${mediaStyles} object-cover w-full min-h-40 `}
        />
      )}
      {badge && (
        <span
          className={` ${badgeStyles} ${isTop ? "top-2" : ""} ${isLeft ? "left-2" : ""
            } ${isRight ? "right-2" : ""} ${isBottom ? "bottom-2  " : ""} ${isTop && isRight ? "top-2 right-2 " : ""
            }  ${isTop && isLeft ? "top-2 left-2" : ""}  ${isBottom && isRight ? "bottom-2 right-2 " : ""
            }  ${isBottom && isLeft ? "bottom-2 left-2 " : ""
            } absolute bg-red-500 px-3 py-0.5 rounded-full inline-block  `}
        >
          {badge}
        </span>
      )}
      {children}
    </span>
  );
};

