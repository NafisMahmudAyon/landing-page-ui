import { jsx as _jsx } from "react/jsx-runtime";
export const Tab = ({ styles = "", activeTabStyles = "", value, isActive, onClick, children, orientation, ...rest }) => {
    return (_jsx("button", { ...rest, className: `${styles} ${isActive ? activeTabStyles : ""} ${orientation === "vertical" ? "block" : "inline-block"}`, onClick: onClick, "data-value": value, children: children }));
};
