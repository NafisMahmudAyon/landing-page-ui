'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
export const TableBody = ({ children, styles = "", variant, ...rest }) => {
    const [variantValue, setVariantValue] = useState("");
    useEffect(() => {
        if (variant == 1) {
            setVariantValue("");
        }
        if (variant == 2) {
            setVariantValue("");
        }
    }, [variant]);
    return (_jsx("tbody", { className: `${variantValue} ${styles}`, ...rest, children: React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                variant: variant,
            });
        }) }));
};
