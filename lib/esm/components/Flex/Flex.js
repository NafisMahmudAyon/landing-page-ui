'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export const Flex = ({ tagName, styles = "", children, ...rest }) => {
    let [customTag] = useState(tagName || "div");
    const CustomTag = customTag.toLowerCase();
    return (_jsx(CustomTag, { className: ` ${styles} flex gap-2 flex-wrap `, ...rest, children: children }));
};
