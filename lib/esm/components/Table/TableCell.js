'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
export const TableCell = ({ children, tagName, header, thStyles = "", tdStyles = "", variant, styles = "", scope, ...rest }) => {
    const [variantValue, setVariantValue] = useState({
        styles: "",
        thStyles: "",
        tdStyles: "",
    });
    // let [customTag]: any = useState(tagName || "div");
    let [customTag] = useState(header ? "th" : "td");
    const CustomTag = customTag.toLowerCase();
    useEffect(() => {
        if (variant == 1) {
            setVariantValue({
                styles: "px-6 py-4",
                thStyles: "font-bold text-gray-500 whitespace-nowrap",
                tdStyles: "",
            });
        }
        else if (variant == 2) {
            setVariantValue({
                styles: "p-2 text-left border-0 border-b border-b-gray-500",
                thStyles: "",
                tdStyles: "",
            });
        }
    }, [variant]);
    return (_jsx(CustomTag, { className: `${header ? thStyles + " " + variantValue.thStyles : tdStyles + " " + variantValue.tdStyles} ${variantValue.styles} ${styles}`, ...(scope && { scope }), ...rest, children: children }));
};
