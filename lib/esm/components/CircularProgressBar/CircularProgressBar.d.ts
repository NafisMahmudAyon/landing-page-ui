import React from 'react';
interface CircularProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    styles?: string;
    onVisible?: boolean;
    duration?: number;
    strokeColor?: string;
    strokeFillColor?: string;
    strokeWidth?: number;
    contentStyles?: string;
    onClick?: () => void;
}
export declare const CircularProgressBar: React.FC<CircularProgressBarProps>;
export {};
