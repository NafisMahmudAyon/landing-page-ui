import { jsx as _jsx } from "react/jsx-runtime";
export const TabsPanel = ({ styles = "", value, children, ...rest }) => {
    return (_jsx("div", { ...rest, className: ` ${styles} `, children: children }));
};
