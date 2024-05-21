'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { TabsNav } from './TabsNav';
import { TabsPanel } from './TabsPanel';
export const Tabs = ({ styles = '', children, active = 1, orientation = 'horizontal', navWrapStyles = '', panelWrapStyles = '', ...rest }) => {
    const [activeTab, setActiveTab] = useState(active);
    const handleTabClick = (value) => {
        setActiveTab(value);
    };
    const tabsNavProps = {
        activeTab,
        onTabClick: handleTabClick,
        orientation,
    };
    return (_jsxs("div", { ...rest, className: `${styles} ${orientation === 'vertical' ? 'flex' : ''}`, children: [_jsx("div", { className: ` ${navWrapStyles} ${orientation === 'vertical' ? 'flex-col' : ''}`, children: React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type === TabsNav) {
                        return React.cloneElement(child, tabsNavProps);
                    }
                    return null;
                }) }), _jsx("div", { className: ` ${panelWrapStyles} `, children: React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && (child.type === TabsPanel && child.props?.value === activeTab)) {
                        return child;
                    }
                    return null;
                }) })] }));
};
