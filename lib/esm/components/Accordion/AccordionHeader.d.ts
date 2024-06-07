import React from "react";
interface AccordionHeaderProps {
    tagName?: string;
    styles?: string;
    activeStyles?: string;
    children?: React.ReactNode;
    iconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
    icon?: string;
    toggleIcon?: string;
    toggleIconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
    toggleIconStyles?: string;
    iconPosition?: "before" | "after";
    iconStyles?: string;
    id?: string;
    active?: boolean;
    isActive?: boolean;
    deactivate?: boolean;
    deactivateStyles?: string;
    labelStyles?: string;
    variant?: string | boolean | number;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export {};
