import React from 'react';
interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
    position?: "top" | "bottom";
    variant?: string;
    children?: React.ReactNode;
    styles?: string;
}
export declare const TableCaption: React.FC<TableCaptionProps>;
export {};
