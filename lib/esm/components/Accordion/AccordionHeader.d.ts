import React from "react";
interface AccordionHeaderProps {
    tagName?: string;
    styles?: string;
    activeStyles?: string;
    children?: React.ReactNode;
    iconLibrary?: string;
    icon?: string;
    toggleIcon?: string;
    toggleIconLibrary?: string;
    toggleIconStyles?: string;
    iconPosition?: "before" | "after";
    iconStyles?: string;
    id: string;
    active?: boolean;
    isActive?: boolean;
    deactivate?: boolean;
    deactivateStyles?: string;
    labelStyles?: string;
    variant?: string | boolean | number;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export {};
