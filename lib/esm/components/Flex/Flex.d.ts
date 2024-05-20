import React from 'react';
interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    tagName?: string;
    styles?: string;
    children?: React.ReactNode;
}
export declare const Flex: React.FC<FlexProps>;
export {};
