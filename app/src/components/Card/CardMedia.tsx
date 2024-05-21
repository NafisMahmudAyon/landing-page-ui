'use client'

import React, { ReactNode, useEffect, useState } from 'react';

// import "../../../css/output.css"

interface CardMediaProps {
  src?: string;
  badge?: string;
  badgePosition?: string;
  styles?: string;
  mediaStyles?: string;
  badgeStyles?: string;
  variant?: string | boolean | number;
  children?: ReactNode;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  src = "https://source.unsplash.com/random/800x600?nature",
  badge,
  badgePosition = "bottom left",
  styles = "",
  mediaStyles = "",
  badgeStyles = "",
  variant = "1",
  children,
  ...rest
}) => {
  const isTop = badgePosition.includes("top");
  const isBottom = badgePosition.includes("bottom");
  const isLeft = badgePosition.includes("left");
  const isRight = badgePosition.includes("right");

  const [variantValue, setVariantValue] = useState({
    styles: "",
    mediaStyles: "",
    badgeStyles: "",
  });

  useEffect(() => {
    if (variant == "1") {
      setVariantValue({
        styles: "block w-full relative",
        mediaStyles: "object-cover w-full min-h-40",
        badgeStyles: "bg-red-500 px-3 py-0.5 rounded-full inline-block",
      });
    }
    else if (variant == "2") {
      setVariantValue({
        styles: "w-[60px] h-[60px] border-2 rounded-full border-red-500 text-red-500 bg-white flex items-center justify-center ",
        mediaStyles: "",
        badgeStyles: "",
      });
    } else if (variant == "3") {
      setVariantValue({
        styles: "bg-green-600 w-14 h-14 text-[1.25rem] leading-none border border-white rounded-lg flex items-center justify-center ",
        mediaStyles: "",
        badgeStyles: "",
      });
    } else if (variant == "4") {
      setVariantValue({
        styles: "w-[60px] h-[60px] border-2 rounded-full border-cyan-500 text-cyan-500 bg-white flex items-center justify-center outline-2 outline-offset-4 outline-cyan-500 outline ",
        mediaStyles: "",
        badgeStyles: "",
      });
    } else if (variant == "5") {
      setVariantValue({
        styles: "relative inline-flex align-middle text-red-500 ",
        mediaStyles: "",
        badgeStyles: "",
      });
    } else if (variant == "6") {
      setVariantValue({
        styles: "relative inline-flex align-middle  ",
        mediaStyles: "",
        badgeStyles: "",
      });
    }
  }, [variant]);

  return (
    <span className={`${styles} ${variant ? variantValue.styles : ""
      }`} {...rest}>
      {!children && (
        <img
          src={src}
          className={`${mediaStyles} ${variant ? variantValue.mediaStyles : ""
      }`}
        />
      )}
      {badge && (
        <span
          className={`${badgeStyles} ${isTop ? "top-2" : ""} ${isLeft ? "left-2" : ""
            } ${isRight ? "right-2" : ""} ${isBottom ? "bottom-2  " : ""} ${isTop && isRight ? "top-2 right-2 " : ""
            }  ${isTop && isLeft ? "top-2 left-2" : ""}  ${isBottom && isRight ? "bottom-2 right-2 " : ""
            }  ${isBottom && isLeft ? "bottom-2 left-2 " : ""
            } absolute ${variant ? variantValue.badgeStyles : ""
      }`}
        >
          {badge}
        </span>
      )}
      {children}
    </span>
  );
};

