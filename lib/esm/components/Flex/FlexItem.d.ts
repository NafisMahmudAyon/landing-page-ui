import React from 'react';
interface FlexItemProps extends React.HTMLAttributes<HTMLElement> {
    styles?: string;
    isLink?: boolean;
    linkTo?: string;
    target?: string;
    tagName?: string;
    children?: React.ReactNode;
}
export declare const FlexItem: React.FC<FlexItemProps>;
export {};
