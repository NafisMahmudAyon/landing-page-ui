import React from 'react';
interface GridProps extends React.HTMLAttributes<HTMLElement> {
    tagName?: string;
    styles?: string;
    children?: React.ReactNode;
}
export declare const Grid: React.FC<GridProps>;
export {};
