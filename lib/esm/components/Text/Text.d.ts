import React from 'react';
interface TextProps extends React.HTMLAttributes<HTMLElement> {
    styles?: string;
    tagName?: string;
    isLink?: boolean;
    linkTo?: string;
    id?: string;
    target?: string;
    variant?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
export declare const Text: React.FC<TextProps>;
export {};
