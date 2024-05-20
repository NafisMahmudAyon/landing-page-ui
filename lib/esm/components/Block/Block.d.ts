import React from 'react';
interface BlockProps extends React.HTMLAttributes<HTMLElement> {
    tagName?: string;
    styles?: string;
    isLink?: boolean;
    linkTo?: string;
    target?: string;
}
export declare const Block: React.FC<BlockProps>;
export {};
