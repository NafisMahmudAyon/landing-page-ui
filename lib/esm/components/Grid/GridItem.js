'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
export const GridItem = ({ styles = "", children, isLink, linkTo, target, tagName, ...rest }) => {
    let [customTag, setCustomTag] = useState(tagName || "div");
    const CustomTag = customTag.toLowerCase();
    useEffect(() => {
        if (isLink) {
            setCustomTag("a");
        }
        else {
            setCustomTag(tagName || "div");
        }
    }, [isLink, tagName]);
    return (_jsx(CustomTag, { className: `${styles}`, ...(isLink && {
            href: linkTo,
            target: target,
        }), ...rest, children: children }));
};
