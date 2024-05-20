import React, { useState, useEffect } from 'react';

// import "../../../css/output.css"

interface BlockProps extends React.HTMLAttributes<HTMLElement> {
  tagName?: string;
  styles?: string;
  isLink?: boolean;
  linkTo?: string;
  target?: string;
}


export const Block: React.FC<BlockProps> = ({
  tagName,
  styles = "",
  children,
  isLink,
  linkTo,
  target = "_self",
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
      className={` ${styles} `}
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

