import React from 'react';
interface AccordionDetailsProps {
    tagName?: string;
    styles?: string;
    children?: React.ReactNode;
    id?: string;
    active?: boolean;
    deactivate?: boolean;
    variant?: string | number;
}
export declare const AccordionDetails: React.FC<AccordionDetailsProps>;
export {};
