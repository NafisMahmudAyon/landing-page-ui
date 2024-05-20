import React, { ReactNode } from 'react';
interface CardMediaProps {
    src?: string;
    badge?: string;
    badgePosition?: string;
    styles?: string;
    mediaStyles?: string;
    badgeStyles?: string;
    variant?: string | boolean | number;
    children?: ReactNode;
}
export declare const CardMedia: React.FC<CardMediaProps>;
export {};
