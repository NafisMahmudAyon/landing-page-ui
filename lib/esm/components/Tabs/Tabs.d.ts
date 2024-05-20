import React, { ReactElement } from 'react';
interface TabsProps {
    styles?: string;
    children: ReactElement;
    active?: number;
    orientation?: 'horizontal' | 'vertical';
    navWrapStyles?: string;
    panelWrapStyles?: string;
}
export declare const Tabs: React.FC<TabsProps>;
export {};
