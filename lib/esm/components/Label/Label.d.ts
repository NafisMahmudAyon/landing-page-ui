import React from 'react';
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    styles?: string;
    htmlFor?: string;
    required?: boolean;
    children?: React.ReactNode;
    requiredContent?: React.ReactNode;
}
export declare const Label: React.FC<LabelProps>;
export {};
