import React, { ReactNode } from 'react';
interface CardContentProps {
    children?: ReactNode;
    styles?: string;
    variant?: string | boolean | number;
}
export declare const CardContent: React.FC<CardContentProps>;
export {};
