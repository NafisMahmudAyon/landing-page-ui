import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export const Label = ({ children, styles = "", htmlFor = "", required, requiredContent, ...rest }) => {
    return (_jsx(_Fragment, { children: _jsxs("label", { className: ` ${styles} block text-sm font-medium text-gray-500 `, htmlFor: htmlFor, ...rest, children: [children, required && _jsx("span", { className: "text-red-500", children: requiredContent ? requiredContent : "*" })] }) }));
};
