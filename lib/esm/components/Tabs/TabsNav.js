'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from 'react';
import { Icon } from '../Icon';
export const TabsNav = ({ showButton = false, iconStyles = "", iconLibrary = "font-awesome", nextIcon = "fa-caret-right", prevIcon = "fa-caret-left", nextIconPosition = "right", prevIconPosition = "left", buttonStyles = "", nextButtonStyles = "", prevButtonStyles = "", disabledStyles = "", prevButtonText, nextButtonText, tabAreaStyles = "", activeTabStyles = "", styles = "", children, buttonTextEnabled = false, activeTab, onTabClick, orientation, ...rest }) => {
    const tabsRef = useRef(null);
    const scrollPrev = () => {
        const tabs = tabsRef.current?.children;
        if (!tabs)
            return;
        const activeIndex = Array.from(tabs).findIndex((tab) => tab.dataset.value === activeTab);
        if (activeIndex > 0) {
            const prevTab = tabs[activeIndex - 1];
            onTabClick(prevTab.dataset.value || "");
            prevTab.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    };
    const scrollNext = () => {
        const tabs = tabsRef.current?.children;
        if (!tabs)
            return;
        const activeIndex = Array.from(tabs).findIndex((tab) => tab.dataset.value === activeTab);
        if (activeIndex < tabs.length - 1) {
            const nextTab = tabs[activeIndex + 1];
            onTabClick(nextTab.dataset.value || "");
            nextTab.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    };
    // const isFirstTabActive = activeTab === children[0]?.props?.value;
    // const isLastTabActive = activeTab === children[children.length - 1]?.props?.value;
    const isFirstTabActive = Array.isArray(children) && children.length > 0 && activeTab === children[0]?.props?.value;
    const isLastTabActive = Array.isArray(children) && children.length > 0 && activeTab === children[children.length - 1]?.props?.value;
    return (_jsxs("div", { ...rest, className: `${styles} ${orientation === "vertical" ? "flex-col" : "flex"}`, children: [showButton && (_jsxs("button", { className: `${buttonStyles} ${prevButtonStyles} ${showButton ? "" : "hidden"} ${isFirstTabActive ? "disabled " + disabledStyles : ""}`, onClick: scrollPrev, disabled: isFirstTabActive, children: [prevIconPosition === "left" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: prevIcon, iconStyles: iconStyles })), (buttonTextEnabled || prevButtonText) && _jsx(_Fragment, { children: prevButtonText }), prevIconPosition === "right" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: prevIcon, iconStyles: iconStyles }))] })), _jsx("div", { ref: tabsRef, className: ` ${tabAreaStyles}`, children: React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        isActive: child.props.value === activeTab,
                        activeTabStyles: child.props.activeTabStyles
                            ? child.props.activeTabStyles
                            : activeTabStyles,
                        onClick: () => onTabClick(child.props.value),
                        orientation,
                    });
                }) }), showButton && (_jsxs("button", { className: `${buttonStyles} ${nextButtonStyles} ${showButton ? "" : "hidden"} ${isLastTabActive ? "disabled " + disabledStyles : ""}`, onClick: scrollNext, disabled: isLastTabActive, children: [nextIconPosition === "left" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: nextIcon, iconStyles: iconStyles })), (buttonTextEnabled || nextButtonText) && _jsx(_Fragment, { children: nextButtonText }), nextIconPosition === "right" && (_jsx(Icon, { iconLibrary: iconLibrary, icon: nextIcon, iconStyles: iconStyles }))] }))] }));
};
