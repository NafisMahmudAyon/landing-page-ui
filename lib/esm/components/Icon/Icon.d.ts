import React from 'react';
interface IconProps {
    icon?: string;
    iconStyles?: string;
    iconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
    isLink?: boolean;
    linkTo?: string;
    target?: string;
    title?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
export declare const Icon: React.FC<IconProps>;
export {};
