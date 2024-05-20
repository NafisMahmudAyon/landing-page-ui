import React from 'react';
interface AvatarProps {
    styles?: string;
    name?: string;
    src?: string;
    altText?: string;
    imageStyles?: string;
    variant?: string;
    onClick?: () => void;
}
export declare const Avatar: React.FC<AvatarProps>;
export {};
