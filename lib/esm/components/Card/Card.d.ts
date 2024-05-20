import React, { ReactNode } from 'react';
interface CardProps {
    children?: ReactNode;
    styles?: string;
    variant?: string | boolean | number;
}
export declare const Card: React.FC<CardProps>;
export {};
