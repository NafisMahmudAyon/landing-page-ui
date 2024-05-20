import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
export const Table = ({ children, styles = "", variant, ...rest }) => {
    const [variantValue, setVariantValue] = useState("");
    useEffect(() => {
        if (variant == "1") {
            setVariantValue("w-full text-sm text-left text-gray-500");
        }
        else if (variant == "2") {
            setVariantValue("border-collapse w-full");
        }
    }, [variant]);
    return (_jsx("table", { className: `${variantValue} ${styles}`, ...rest, children: React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                variant: variant,
            });
        }) }));
};
