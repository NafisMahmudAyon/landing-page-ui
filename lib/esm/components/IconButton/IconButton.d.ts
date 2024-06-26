import React from 'react';
interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
    tagName?: string;
    icon?: string;
    iconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
    iconPosition?: "before" | "after" | "beforePrefix" | "afterPrefix" | "beforePostfix" | "afterPostfix";
    text?: string;
    isLink?: boolean;
    linkTo?: string;
    target?: string;
    styles?: string;
    textStyles?: string;
    iconStyles?: string;
    variant?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    linkStyles?: string;
    prefix?: string;
    prefixStyles?: string;
    postfix?: string;
    postfixStyles?: string;
    children?: React.ReactNode;
    textOnClick?: React.MouseEventHandler<HTMLElement>;
    iconOnClick?: React.MouseEventHandler<HTMLElement>;
}
export declare const IconButton: React.FC<IconButtonProps>;
export {};
