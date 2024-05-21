'use client'

import React, { useState, useEffect } from 'react';

interface FlexItemProps extends React.HTMLAttributes<HTMLElement> {
  styles?: string;
  isLink?: boolean;
  linkTo?: string;
  target?: string;
  tagName?: string;
  children?: React.ReactNode;
}

export const FlexItem: React.FC<FlexItemProps> = ({
  styles = "",
  children,
  isLink,
  linkTo,
  target = "_self",
  tagName,
  ...rest
}) => {
  let [customTag, setCustomTag]: any = useState(tagName || "div");
  const CustomTag: any = customTag.toLowerCase();

  useEffect(() => {
    if (isLink) {
      setCustomTag("a");
    } else {
      setCustomTag(tagName || "div");
    }
  }, [isLink, tagName]);

  return (
    <CustomTag
      className={`${styles}`}
      {...(isLink && {
        href: linkTo,
        target: target,
      })}
      {...rest}
    >
      {children}
    </CustomTag>
  );
};