import React from 'react';
interface BadgeProps {
    styles?: string;
    badgeStyles?: string;
    position?: string;
    tagName?: string;
    content?: number;
    maxCount?: number;
    variant?: string | boolean | number;
    children?: React.ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;
export {};
