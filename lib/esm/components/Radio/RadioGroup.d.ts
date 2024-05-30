import React from 'react';
interface RadioGroupProps {
    styles?: string;
    name?: string;
    children?: React.ReactNode;
    onChange?: (value: string) => void;
    defaultValue?: string;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export {};
