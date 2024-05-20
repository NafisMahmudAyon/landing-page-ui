import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
export const TableHead = ({ children, styles = "", variant, ...rest }) => {
    const [variantValue, setVariantValue] = useState("");
    useEffect(() => {
        if (variant == "1") {
            setVariantValue("text-gray-500 uppercase bg-gray-400");
        }
        if (variant == "2") {
            setVariantValue("font-semibold");
        }
    }, [variant]);
    return (_jsx("thead", { className: `${variantValue} ${styles}`, ...rest, children: React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                variant: variant,
            });
        }) }));
};
