import React from 'react';
interface GridItemProps extends React.HTMLAttributes<HTMLElement> {
    tagName?: string;
    styles?: string;
    isLink?: boolean;
    linkTo?: string;
    target?: string;
    children?: React.ReactNode;
}
export declare const GridItem: React.FC<GridItemProps>;
export {};
