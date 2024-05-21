import React from "react";
interface AccordionProps {
    tagName?: string;
    styles?: string;
    children?: React.ReactNode;
    active?: boolean;
    deactivate?: boolean;
    headerStyles?: string;
    activeHeaderStyles?: string;
    deactivateHeaderStyles?: string;
    detailsStyles?: string;
    variant?: string;
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
