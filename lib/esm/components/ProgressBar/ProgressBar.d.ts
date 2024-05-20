import React from 'react';
interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    contentPosition?: "left" | "right";
    duration?: number;
    animateOnLoad?: boolean;
    animateOnVisible?: boolean;
    min?: number;
    max?: number;
    styles?: string;
    containerStyles?: string;
    fillStyles?: string;
    contentStyles?: string;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export {};
