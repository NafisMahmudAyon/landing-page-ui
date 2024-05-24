import React, { ReactNode } from 'react';
interface TabProps {
    styles?: string;
    activeTabStyles?: string;
    value: number;
    isActive?: boolean;
    onClick?: () => void;
    children?: ReactNode;
    orientation?: 'horizontal' | 'vertical';
}
export declare const Tab: React.FC<TabProps>;
export {};
