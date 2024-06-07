'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
export const Text = ({ styles = "", tagName, isLink, linkTo, id, target = "_self", children, variant, 
// onClick,
...rest }) => {
    let [customTag, setCustomTag] = useState(tagName || "div");
    const CustomTag = customTag.toLowerCase();
    const [variantValue, setVariantValue] = useState("");
    useEffect(() => {
        if (isLink) {
            setCustomTag("a");
        }
        else {
            setCustomTag(tagName || "div");
        }
    }, [isLink, tagName]);
    useEffect(() => {
        if (variant == "1") {
            setVariantValue("relative text-3xl font-bold cursor-pointer transition hover:bg-blue-900 duration-500 ease-in-out hover:text-blue-500 hover:after:w-full after:absolute after:-bottom-2 after:left-0 after:w-2 after:h-2 after:bg-blue-500 after:transition-all after:duration-500 after:ease-in-out ");
        }
    }, [variant]);
    return (_jsx(CustomTag, { ...rest, 
        // onClick={onClick}
        id: id, className: ` ${styles} ${variantValue} `, ...(isLink && {
            href: linkTo,
            target: target,
        }), children: children }));
};
