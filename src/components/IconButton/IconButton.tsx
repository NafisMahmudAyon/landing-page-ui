import React, { useState, useEffect } from 'react';
import { Icon } from '../Icon';

// import "../../../css/output.css"

interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
  tagName?: string;
  icon?: string;
  iconLibrary?: string;
  iconPosition?: string;
  text?: string;
  isLink?: boolean;
  linkTo?: string;
  target?: string;
  styles?: string;
  textStyles?: string;
  iconStyles?: string;
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  linkStyles?: string;
  prefix?: string;
  prefixStyles?: string;
  postfix?: string;
  postfixStyles?: string;
  children?: React.ReactNode;
  textOnClick?: React.MouseEventHandler<HTMLElement>;
  iconOnClick?: React.MouseEventHandler<HTMLElement>;
}

export const IconButton: React.FC<IconButtonProps> = ({
  tagName,
  icon = "fa-user",
  iconLibrary = "font-awesome",
  iconPosition = "before",
  text,
  isLink = false,
  linkTo,
  target = "_self",
  styles = "",
  textStyles = "",
  iconStyles = "",
  variant,
  onClick,
  children,
  linkStyles = "",
  prefix,
  prefixStyles = "",
  postfix,
  postfixStyles = "",
  textOnClick,
  iconOnClick,
  ...rest
}) => {
  let [customTag, setCustomTag]: any = useState(tagName || "div");
  const CustomTag: any = customTag.toLowerCase();
  const [iconX, setIconX] = useState(false);

  useEffect(() => {
    if (isLink || linkTo) {
      setCustomTag("a");
    }
  });

  return (
    <CustomTag
      className={` ${styles} `}
      {...(isLink && {
        href: linkTo || "#",
        target: target,
      })}
      onClick={onClick}
      {...rest}
    >
      {iconPosition === "before" && (
        <Icon
          iconLibrary={iconLibrary}
          icon={icon}
          iconStyles={iconStyles}
          onClick={iconOnClick}
        />
      )}
      {iconPosition === "beforePrefix" && (
        <Icon
          iconLibrary={iconLibrary}
          icon={icon}
          iconStyles={iconStyles}
          onClick={iconOnClick}
        />
      )}
      {prefix && (
        <span
          className={` ${prefixStyles} `}
          dangerouslySetInnerHTML={{ __html: prefix }}
        />
      )}
      {iconPosition === "afterPrefix" && (
        <Icon
          iconLibrary={iconLibrary}
          icon={icon}
          iconStyles={iconStyles}
          onClick={iconOnClick}
        />
      )}
      {children && (
        <span className={` ${textStyles} `} onClick={textOnClick}>
          {children}
        </span>
      )}
      {!children && text && (
        <span
          className={` ${textStyles} `}
          onClick={textOnClick}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      {iconPosition === "beforePostfix" && (
        <Icon
          iconLibrary={iconLibrary}
          icon={icon}
          iconStyles={iconStyles}
          onClick={iconOnClick}
        />
      )}
      {postfix && (
        <span
          className={` ${postfixStyles} `}
          dangerouslySetInnerHTML={{ __html: postfix }}
        />
      )}
      {iconPosition === "afterPostfix" && (
        <Icon
          iconLibrary={iconLibrary}
          icon={icon}
          iconStyles={iconStyles}
          onClick={iconOnClick}
        />
      )}
      {iconPosition === "after" && (
        <Icon
          iconLibrary={iconLibrary}
          icon={icon}
          iconStyles={iconStyles}
          onClick={iconOnClick}
        />
      )}
    </CustomTag>
  );
};