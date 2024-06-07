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
}
export declare const Text: React.FC<TextProps>;
export {};
