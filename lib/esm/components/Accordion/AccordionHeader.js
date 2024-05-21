'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Icon } from "../Icon";
export const AccordionHeader = ({ tagName, styles = "", activeStyles = "", children, iconLibrary = "font-awesome", icon = "fa-caret-right", toggleIcon = "fa-caret-down", toggleIconLibrary, toggleIconStyles, iconPosition = "before", iconStyles = "", id, active, isActive, deactivate, deactivateStyles = "", labelStyles = "", variant = "1", ...rest }) => {
    // const [customTag] = useState(tagName || "div");
    // const CustomTag = customTag.toLowerCase();
    const [iconStyleX, setIconStyleX] = useState(iconStyles);
    const [toggleIconStyleX, setToggleIconStyleX] = useState(toggleIconStyles);
    const [variantValue, setVariantValue] = useState({
        iconStyles: "",
        labelStyles: "",
        toggleIconStyles: "",
    });
    useEffect(() => {
        if (variant == "none") {
            setVariantValue({
                iconStyles: "",
                labelStyles: "",
                toggleIconStyles: "",
            });
        }
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
            setToggleIconStyleX(toggleIconStyles + " " + variantValue.toggleIconStyles);
        }
    }, [variant]);
    // const toggleExpansion = () => {
    //   if (!deactivate) {
    //     // Handle expansion logic here
    //     const contentElement = document.querySelector(`#${id}`);
    //     if (contentElement) {
    //       // contentElement.style.display = !isActive ? "block" : "none";
    //     }
    //   }
    // };
    useEffect(() => {
        if (active) {
            // Handle active state logic here
            // setIsActive(true);
        }
    }, [active]);
    return (_jsxs(_Fragment, { children: [iconPosition === "before" && icon && (_jsxs(_Fragment, { children: [!isActive && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyleX })), isActive && (icon || toggleIcon) && (_jsx(Icon, { iconLibrary: toggleIconLibrary ? toggleIconLibrary : iconLibrary, icon: toggleIcon ? toggleIcon : icon, iconStyles: toggleIconStyles ? toggleIconStyleX : iconStyleX }))] })), _jsx("span", { className: `${variant ? variantValue.labelStyles : ""} ${labelStyles} ${isActive ? activeStyles : deactivateStyles} ${styles}`, ...rest, children: children }), iconPosition === "after" && icon && (_jsxs(_Fragment, { children: [!isActive && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyleX })), isActive && toggleIcon && (_jsx(Icon, { iconLibrary: toggleIconLibrary, icon: toggleIcon, iconStyles: toggleIconStyles ? toggleIconStyleX : iconStyleX }))] }))] }));
};
