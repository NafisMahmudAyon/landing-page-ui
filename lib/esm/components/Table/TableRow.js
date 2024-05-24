'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
export const TableRow = ({ children, styles = "", variant, ...rest }) => {
    const [variantValue, setVariantValue] = useState("");
    useEffect(() => {
        if (variant == 1) {
            setVariantValue("border-b border-gray-500 last:border-b-0 odd:bg-gray-200 even:bg-gray-300");
        }
        else if (variant == 2) {
            setVariantValue("");
        }
    }, [variant]);
    return (_jsx("tr", { className: `${variantValue} ${styles}`, ...rest, children: React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                variant: variant,
            });
        }) }));
};
