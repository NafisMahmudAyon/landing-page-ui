import React from "react";
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
    iconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
    iconStyle?: string;
    checkedIcon?: string;
    checkedIconStyle?: string;
    checkedIconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
    label?: string;
    labelPosition?: "before" | "after" | "inside";
    labelStyles?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
