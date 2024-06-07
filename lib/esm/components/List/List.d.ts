import React from 'react';
interface ListProps extends React.HTMLAttributes<HTMLElement> {
    list?: string[];
    tagName?: string;
    styles?: string;
    listStyles?: string;
    iconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
    icon?: string;
    iconStyles?: string;
    iconPosition?: "before" | "after";
}
export declare const List: React.FC<ListProps>;
export {};
