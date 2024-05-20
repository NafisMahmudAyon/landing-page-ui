import React from 'react';
interface RadioProps {
    checked?: boolean;
    name?: string;
    onChange?: (checked: boolean | React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
    styles?: string;
    checkboxStyles?: string;
    disabledStyles?: string;
    requiredStyles?: string;
    value?: string;
    id?: string;
    title?: string;
    icon?: string;
    iconLibrary?: string;
    iconStyle?: string;
    checkedIcon?: string;
    checkedIconStyle?: string;
    checkedIconLibrary?: string;
    label?: string;
    labelPosition?: "before" | "after" | "inside";
    labelStyles?: string;
}
export declare const Radio: React.FC<RadioProps>;
export {};
