import React, { useState, useEffect } from 'react';

interface GridItemProps extends React.HTMLAttributes<HTMLElement> {
  tagName?: string;
  styles?: string;
  isLink?: boolean;
  linkTo?: string;
  target?: string;
  children?: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({
  styles = "",
  children,
  isLink,
  linkTo,
  target,
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