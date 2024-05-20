import React from 'react';
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string;
    placeholder?: string;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    required?: boolean;
    autoComplete?: string;
    styles?: string;
    inputStyles?: string;
    onChange?: React.ChangeEventHandler | undefined;
    errorStyles?: string;
    id?: string;
    title?: string;
    disabledStyles?: string;
    requiredStyles?: string;
}
export declare const TextArea: React.FC<TextAreaProps>;
export {};
