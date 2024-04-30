import React, { useState, useEffect } from "react";
import { Icon } from "../Icon";

// import "../../../css/output.css"

interface AccordionHeaderProps {
  tagName?: string;
  styles?: string;
  activeStyles?: string;
  children?: React.ReactNode;
  iconLibrary?: string;
  icon?: string;
  toggleIcon?: string;
  toggleIconLibrary?: string;
  toggleIconStyles?: string;
  iconPosition?: "before" | "after";
  iconStyles?: string;
  id: string;
  active?: boolean;
  isActive?: boolean;
  deactivate?: boolean;
  deactivateStyles?: string;
  labelStyles?: string;
  variant?: string | boolean | number;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  tagName,
  styles = "",
  activeStyles = "",
  children,
  iconLibrary = "font-awesome",
  icon = "fa-caret-right",
  toggleIcon = "fa-caret-down",
  toggleIconLibrary,
  toggleIconStyles,
  iconPosition = "before",
  iconStyles = "",
  id,
  active,
  isActive,
  deactivate,
  deactivateStyles = "",
  labelStyles = "",
  variant="1",
  ...rest
}) => {
  const [customTag, setCustomTag] = useState(tagName || "div");
  const CustomTag = customTag.toLowerCase();

  const [iconStyleX, setIconStyleX] = useState(iconStyles);
  const [toggleIconStyleX, setToggleIconStyleX] = useState(toggleIconStyles);

  const [variantValue, setVariantValue] = useState({
    iconStyles: "",
    labelStyles: "",
    toggleIconStyles: "",
  });

  useEffect(() => {
    if (variant == "1") {
      setVariantValue({
        iconStyles: "",
        labelStyles: "text-gray-200",
        toggleIconStyles: "",
      });
    }
    if (variant == "2") {
      setVariantValue({
        iconStyles: "",
        labelStyles: "",
        toggleIconStyles: "",
      });
    }
    if (variant == "3") {
      setVariantValue({
        iconStyles: "",
        labelStyles: "",
        toggleIconStyles: "",
      });
    }
    if (variant == "4") {
      setVariantValue({
        iconStyles: "",
        labelStyles: "",
        toggleIconStyles: "",
      });
    }
    if (variant == "5") {
      setVariantValue({
        iconStyles: "",
        labelStyles: "",
        toggleIconStyles: "",
      });
    }
    if (variant == "6") {
      setVariantValue({
        iconStyles: "",
        labelStyles: "",
        toggleIconStyles: "",
      });
    }
    if (variant == true) {
      setIconStyleX(iconStyles + " " + variantValue.iconStyles);
      setToggleIconStyleX(
        toggleIconStyles + " " + variantValue.toggleIconStyles
      );
    }


  }, [variant]);

  const toggleExpansion = () => {
    if (!deactivate) {
      // Handle expansion logic here
      const contentElement = document.querySelector(`#${id}`);
      if (contentElement) {
        // contentElement.style.display = !isActive ? "block" : "none";
      }
    }
  };

  useEffect(() => {
    if (active) {
      // Handle active state logic here
      // setIsActive(true);
    }
  }, [active]);
  console.log(`${variant ? variantValue.labelStyles : ""
    } ${labelStyles} ${isActive ? activeStyles : deactivateStyles
    } ${styles}`)
  return (
    <>
      {iconPosition === "before" && icon && (
        <>
          {!isActive && (
            <Icon
              iconLibrary={iconLibrary}
              icon={icon}
              iconStyles={iconStyleX}
            />
          )}
          {isActive && (icon || toggleIcon) && (
            <Icon
              iconLibrary={toggleIconLibrary ? toggleIconLibrary : iconLibrary}
              icon={toggleIcon ? toggleIcon : icon}
              iconStyles={toggleIconStyles ? toggleIconStyleX : iconStyleX}
            />
          )}
        </>
      )}
      <span
        className={`${variant ? variantValue.labelStyles : ""
          } ${labelStyles} ${isActive ? activeStyles : deactivateStyles
          } ${styles}`}
        {...rest}
      >
        {children}
      </span>
      {iconPosition === "after" && icon && (
        <>
          {!isActive && (
            <Icon
              iconLibrary={iconLibrary}
              icon={icon}
              iconStyles={iconStyleX}
            />
          )}
          {isActive && toggleIcon && (
            <Icon
              iconLibrary={toggleIconLibrary}
              icon={toggleIcon}
              iconStyles={toggleIconStyles ? toggleIconStyleX : iconStyleX}
            />
          )}
        </>
      )}
    </>
  );
};

