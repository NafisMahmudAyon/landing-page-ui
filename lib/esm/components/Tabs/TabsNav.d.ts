import React, { ReactElement } from 'react';
interface TabsNavProps {
    showButton?: boolean;
    iconStyles?: string;
    iconLibrary?: string;
    nextIcon?: string;
    prevIcon?: string;
    nextIconPosition?: 'left' | 'right';
    prevIconPosition?: 'left' | 'right';
    buttonStyles?: string;
    nextButtonStyles?: string;
    prevButtonStyles?: string;
    disabledStyles?: string;
    prevButtonText?: string;
    nextButtonText?: string;
    tabAreaStyles?: string;
    activeTabStyles?: string;
    styles?: string;
    children: ReactElement;
    buttonTextEnabled?: boolean;
    activeTab: string;
    onTabClick: (value: string) => void;
    orientation: 'horizontal' | 'vertical';
}
export declare const TabsNav: React.FC<TabsNavProps>;
export {};
