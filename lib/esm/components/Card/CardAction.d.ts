import React, { ReactNode } from 'react';
interface CardActionProps {
    children?: ReactNode;
    styles?: string;
    link?: string;
    target?: string;
    variant?: string | boolean | number;
}
export declare const CardAction: React.FC<CardActionProps>;
export {};
