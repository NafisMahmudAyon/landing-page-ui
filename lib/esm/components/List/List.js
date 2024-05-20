import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Icon } from '../Icon';
export const List = ({ list = [], tagName, styles = "", listStyles = "", iconLibrary, icon, iconStyles = "", iconPosition = "before", ...rest }) => {
    let [customTag] = useState(tagName || "ol");
    const CustomTag = customTag.toLowerCase();
    return (_jsx(CustomTag, { ...rest, className: ` ${styles} `, ...rest, children: list.map((item, index) => (_jsxs("li", { className: ` ${listStyles} `, children: [icon && iconPosition === "before" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyles })), _jsx("span", { dangerouslySetInnerHTML: { __html: item } }), icon && iconPosition === "after" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: icon, iconStyles: iconStyles }))] }, index))) }));
};
