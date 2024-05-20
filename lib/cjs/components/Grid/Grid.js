import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export const Grid = ({ tagName, styles = "", children, ...rest }) => {
    let [customTag] = useState(tagName || "div");
    const CustomTag = customTag.toLowerCase();
    return (_jsx(CustomTag, { className: ` ${styles} grid grid-cols-3 gap-2 `, ...rest, children: children }));
};
