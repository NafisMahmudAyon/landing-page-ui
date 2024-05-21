'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Icon } from '../Icon';
export const IconButton = ({ tagName, icon = "fa-user", iconLibrary = "font-awesome", iconPosition = "before", text, isLink = false, linkTo, target = "_self", styles = "", textStyles = "", iconStyles = "", variant, onClick, children, linkStyles = "", prefix, prefixStyles = "", postfix, postfixStyles = "", textOnClick, iconOnClick, ...rest }) => {
    let [customTag, setCustomTag] = useState(tagName || "div");
    const CustomTag = customTag.toLowerCase();
    // const [iconX, setIconX] = useState(false);
    useEffect(() => {
        if (isLink || linkTo) {
            setCustomTag("a");
        }
    }, [isLink, linkTo]);
    return (_jsxs(CustomTag, { className: ` ${styles} `, ...(isLink && {
            href: linkTo || "#",
            target: target,
        }), onClick: onClick, ...rest, children: [iconPosition === "before" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyles, onClick: iconOnClick })), iconPosition === "beforePrefix" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyles, onClick: iconOnClick })), prefix && (_jsx("span", { className: ` ${prefixStyles} `, dangerouslySetInnerHTML: { __html: prefix } })), iconPosition === "afterPrefix" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyles, onClick: iconOnClick })), children && (_jsx("span", { className: ` ${textStyles} `, onClick: textOnClick, children: children })), !children && text && (_jsx("span", { className: ` ${textStyles} `, onClick: textOnClick, dangerouslySetInnerHTML: { __html: text } })), iconPosition === "beforePostfix" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyles, onClick: iconOnClick })), postfix && (_jsx("span", { className: ` ${postfixStyles} `, dangerouslySetInnerHTML: { __html: postfix } })), iconPosition === "afterPostfix" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyles, onClick: iconOnClick })), iconPosition === "after" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyles, onClick: iconOnClick }))] }));
};
