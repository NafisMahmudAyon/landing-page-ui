import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
export const TableCaption = ({ children, styles = "", position, variant, ...rest }) => {
    const [variantValue, setVariantValue] = useState("");
    useEffect(() => {
        if (variant == "1") {
            setVariantValue("text-slate-500 py-4 text-xs");
        }
    }, [variant]);
    return (_jsx("caption", { className: `${position === "top" ? "caption-top" : "caption-bottom"} ${variantValue} ${styles}`, ...rest, children: children }));
};
