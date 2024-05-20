import React from 'react';
interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    tagName?: string;
    styles?: string;
    position?: "center" | "left" | "right";
    contentStyles?: string;
    children?: React.ReactNode;
}
export declare const Divider: React.FC<DividerProps>;
export {};
